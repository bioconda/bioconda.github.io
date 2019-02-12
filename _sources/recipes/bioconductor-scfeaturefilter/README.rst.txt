:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scfeaturefilter'
.. highlight: bash

bioconductor-scfeaturefilter
============================

.. conda:recipe:: bioconductor-scfeaturefilter
   :replaces_section_title:

   An R implementation of the correlation\-based method developed in the Joshi laboratory to analyse and filter processed single\-cell RNAseq data. It returns a filtered version of the data containing only genes expression values unaffected by systematic noise.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/scFeatureFilter.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-scfeaturefilter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scfeaturefilter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scfeaturefilter/meta.yaml>`_

   


.. conda:package:: bioconductor-scfeaturefilter

   |downloads_bioconductor-scfeaturefilter| |docker_bioconductor-scfeaturefilter|

   :versions: 1.2.1-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-dplyr: >=0.7.3
   
   :depends r-ggplot2: >=2.1.0
   
   :depends r-magrittr: >=1.5
   
   :depends r-rlang: >=0.1.2
   
   :depends r-tibble: >=1.3.4
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scfeaturefilter

   and update with::

      conda update bioconductor-scfeaturefilter

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-scfeaturefilter:<tag>

   (see `bioconductor-scfeaturefilter/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scfeaturefilter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scfeaturefilter.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-scfeaturefilter| image:: https://quay.io/repository/biocontainers/bioconductor-scfeaturefilter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scfeaturefilter
.. _`bioconductor-scfeaturefilter/tags`: https://quay.io/repository/biocontainers/bioconductor-scfeaturefilter?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scfeaturefilter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scfeaturefilter/README.html