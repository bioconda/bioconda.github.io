:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-isogene'
.. highlight: bash

r-isogene
=========

.. conda:recipe:: r-isogene
   :replaces_section_title:
   :noindex:

   Offers framework for testing for monotonic relationship between gene expression and doses in a microarray experiment. Several testing procedures including the global likelihood\-ratio test \(Bartholomew\, 1961\)\, Williams \(1971\, 1972\)\, Marcus \(1976\)\, M \(Hu et al. 2005\) and the modified M \(Lin et al. 2007\) are used to test for the monotonic trend in gene expression with respect to doses. BH \(Benjamini and Hochberg 1995\) and BY \(Benjamini and Yekutieli 2004\) FDR controlling procedures are applied to adjust the raw p\-values obtained from the permutations.   

   :homepage: https://CRAN.R-project.org/package=IsoGene
   :license: GPL3 / GPL-3
   :recipe: /`r-isogene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-isogene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-isogene/meta.yaml>`_

   


.. conda:package:: r-isogene

   |downloads_r-isogene| |docker_r-isogene|

   :versions:
      
      

      ``1.0_24-6``,  ``1.0_24-5``,  ``1.0_24-4``,  ``1.0_24-3``,  ``1.0_24-2``,  ``1.0_24-1``,  ``1.0_24-0``

      

   
   :depends bioconductor-affy: 
   :depends bioconductor-biobase: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-ff: ``>=2.0.0``
   :depends r-iso: 
   :depends r-xtable: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-isogene

   and update with::

      conda update r-isogene

   or use the docker container::

      docker pull quay.io/biocontainers/r-isogene:<tag>

   (see `r-isogene/tags`_ for valid values for ``<tag>``)


.. |downloads_r-isogene| image:: https://img.shields.io/conda/dn/bioconda/r-isogene.svg?style=flat
   :target: https://anaconda.org/bioconda/r-isogene
   :alt:   (downloads)
.. |docker_r-isogene| image:: https://quay.io/repository/biocontainers/r-isogene/status
   :target: https://quay.io/repository/biocontainers/r-isogene
.. _`r-isogene/tags`: https://quay.io/repository/biocontainers/r-isogene?tab=tags


.. raw:: html

    <script>
        var package = "r-isogene";
        var versions = ["1.0_24","1.0_24","1.0_24","1.0_24","1.0_24"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-isogene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-isogene/README.html