:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-coloc'
.. highlight: bash

r-coloc
=======

.. conda:recipe:: r-coloc
   :replaces_section_title:
   :noindex:

   Performs the colocalisation tests described in Plagnol et al \(2009\) \<doi\:10.1093\/biostatistics\/kxn039\>\, Wallace et al \(2013\) \<doi\:10.1002\/gepi.21765\> and Giambartolomei et al \(2013\) \<doi\:10.1371\/journal.pgen.1004383\>.

   :homepage: https://CRAN.R-project.org/package=coloc
   :license: GPL / GPL
   :recipe: /`r-coloc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-coloc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-coloc/meta.yaml>`_

   


.. conda:package:: r-coloc

   |downloads_r-coloc| |docker_r-coloc|

   :versions:
      
      

      ``3.1-5``,  ``3.1-4``,  ``3.1-3``,  ``3.1-2``,  ``3.1-1``,  ``3.1-0``,  ``2.3_1-0``

      

   
   :depends bioconductor-snpstats: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-bma: 
   :depends r-flashclust: 
   :depends r-ggplot2: 
   :depends r-reshape: 
   :depends r-speedglm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-coloc

   and update with::

      conda update r-coloc

   or use the docker container::

      docker pull quay.io/biocontainers/r-coloc:<tag>

   (see `r-coloc/tags`_ for valid values for ``<tag>``)


.. |downloads_r-coloc| image:: https://img.shields.io/conda/dn/bioconda/r-coloc.svg?style=flat
   :target: https://anaconda.org/bioconda/r-coloc
   :alt:   (downloads)
.. |docker_r-coloc| image:: https://quay.io/repository/biocontainers/r-coloc/status
   :target: https://quay.io/repository/biocontainers/r-coloc
.. _`r-coloc/tags`: https://quay.io/repository/biocontainers/r-coloc?tab=tags


.. raw:: html

    <script>
        var package = "r-coloc";
        var versions = ["3.1","3.1","3.1","3.1","3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-coloc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-coloc/README.html