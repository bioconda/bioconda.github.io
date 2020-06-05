:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-snagee'
.. highlight: bash

bioconductor-snagee
===================

.. conda:recipe:: bioconductor-snagee
   :replaces_section_title:
   :noindex:

   Signal\-to\-Noise applied to Gene Expression Experiments

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/SNAGEE.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-snagee <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snagee>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snagee/meta.yaml>`_
   :links: biotools: :biotools:`snagee`, doi: :doi:`10.1371/journal.pone.0051013`

   Signal\-to\-Noise applied to Gene Expression Experiments. Signal\-to\-noise ratios can be used as a proxy for quality of gene expression studies and samples. The SNRs can be calculated on any gene expression data set as long as gene IDs are available\, no access to the raw data files is necessary. This allows to flag problematic studies and samples in any public data set.


.. conda:package:: bioconductor-snagee

   |downloads_bioconductor-snagee| |docker_bioconductor-snagee|

   :versions:
      
      

      ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``

      

   
   :depends bioconductor-snageedata: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-snagee

   and update with::

      conda update bioconductor-snagee

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-snagee:<tag>

   (see `bioconductor-snagee/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-snagee| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-snagee.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-snagee
   :alt:   (downloads)
.. |docker_bioconductor-snagee| image:: https://quay.io/repository/biocontainers/bioconductor-snagee/status
   :target: https://quay.io/repository/biocontainers/bioconductor-snagee
.. _`bioconductor-snagee/tags`: https://quay.io/repository/biocontainers/bioconductor-snagee?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-snagee/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-snagee/README.html