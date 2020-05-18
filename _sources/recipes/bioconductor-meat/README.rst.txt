:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-meat'
.. highlight: bash

bioconductor-meat
=================

.. conda:recipe:: bioconductor-meat
   :replaces_section_title:

   Muscle Epigenetic Age Test

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/MEAT.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-meat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meat/meta.yaml>`_

   This package estimates epigenetic age in skeletal muscle\, using DNA methylation data generated with Illumina Infinium technology \(HM27\, HM450 and HMEPIC\).


.. conda:package:: bioconductor-meat

   |downloads_bioconductor-meat| |docker_bioconductor-meat|

   :versions: 1.0.0-0
   
   :depends bioconductor-impute: >=1.62.0,<1.63.0
   :depends bioconductor-minfi: >=1.34.0,<1.35.0
   :depends bioconductor-summarizedexperiment: >=1.18.0,<1.19.0
   :depends bioconductor-watermelon: >=1.32.0,<1.33.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-dplyr: 
   :depends r-dynamictreecut: >=1.63
   :depends r-glmnet: >=2.0
   :depends r-rpmm: >=1.25
   :depends r-stringr: 
   :depends r-tibble: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-meat

   and update with::

      conda update bioconductor-meat

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-meat:<tag>

   (see `bioconductor-meat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-meat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-meat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-meat
   :alt:   (downloads)
.. |docker_bioconductor-meat| image:: https://quay.io/repository/biocontainers/bioconductor-meat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-meat
.. _`bioconductor-meat/tags`: https://quay.io/repository/biocontainers/bioconductor-meat?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-meat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-meat/README.html