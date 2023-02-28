:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-river'
.. highlight: bash

bioconductor-river
==================

.. conda:recipe:: bioconductor-river
   :replaces_section_title:
   :noindex:

   R package for RIVER \(RNA\-Informed Variant Effect on Regulation\)

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/RIVER.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-river <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-river>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-river/meta.yaml>`_

   An implementation of a probabilistic modeling framework that jointly analyzes personal genome and transcriptome data to estimate the probability that a variant has regulatory impact in that individual. It is based on a generative model that assumes that genomic annotations\, such as the location of a variant with respect to regulatory elements\, determine the prior probability that variant is a functional regulatory variant\, which is an unobserved variable. The functional regulatory variant status then influences whether nearby genes are likely to display outlier levels of gene expression in that person. See the RIVER website for more information\, documentation and examples.


.. conda:package:: bioconductor-river

   |downloads_bioconductor-river| |docker_bioconductor-river|

   :versions:
      
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-ggplot2: 
   :depends r-glmnet: 
   :depends r-proc: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-river

   and update with::

      conda update bioconductor-river

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-river:<tag>

   (see `bioconductor-river/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-river| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-river.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-river
   :alt:   (downloads)
.. |docker_bioconductor-river| image:: https://quay.io/repository/biocontainers/bioconductor-river/status
   :target: https://quay.io/repository/biocontainers/bioconductor-river
.. _`bioconductor-river/tags`: https://quay.io/repository/biocontainers/bioconductor-river?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-river";
        var versions = ["1.22.0","1.18.0","1.16.0","1.14.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-river/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-river/README.html