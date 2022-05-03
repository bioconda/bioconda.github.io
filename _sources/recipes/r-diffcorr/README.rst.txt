:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-diffcorr'
.. highlight: bash

r-diffcorr
==========

.. conda:recipe:: r-diffcorr
   :replaces_section_title:
   :noindex:

   A method for identifying pattern changes between 2 experimental conditions in correlation networks \(e.g.\, gene co\-expression networks\)\, which builds on a commonly used association measure\, such as Pearson\'s correlation coefficient. This package includes functions to calculate correlation matrices for high\-dimensional dataset and to test differential correlation\, which means the changes in the correlation relationship among variables \(e.g.\, genes and metabolites\) between 2 experimental conditions. 

   :homepage: https://CRAN.R-project.org/package=DiffCorr
   :license: GPL3 / GPL3
   :recipe: /`r-diffcorr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-diffcorr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-diffcorr/meta.yaml>`_

   


.. conda:package:: r-diffcorr

   |downloads_r-diffcorr| |docker_r-diffcorr|

   :versions:
      
      

      ``0.4.2-0``,  ``0.4.1-6``,  ``0.4.1-5``,  ``0.4.1-4``,  ``0.4.1-3``,  ``0.4.1-2``,  ``0.4.1-1``,  ``0.4.1-0``

      

   
   :depends bioconductor-multtest: 
   :depends bioconductor-pcamethods: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-fdrtool: 
   :depends r-igraph: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-diffcorr

   and update with::

      conda update r-diffcorr

   or use the docker container::

      docker pull quay.io/biocontainers/r-diffcorr:<tag>

   (see `r-diffcorr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-diffcorr| image:: https://img.shields.io/conda/dn/bioconda/r-diffcorr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-diffcorr
   :alt:   (downloads)
.. |docker_r-diffcorr| image:: https://quay.io/repository/biocontainers/r-diffcorr/status
   :target: https://quay.io/repository/biocontainers/r-diffcorr
.. _`r-diffcorr/tags`: https://quay.io/repository/biocontainers/r-diffcorr?tab=tags


.. raw:: html

    <script>
        var package = "r-diffcorr";
        var versions = ["0.4.2","0.4.1","0.4.1","0.4.1","0.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-diffcorr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-diffcorr/README.html