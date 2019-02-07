.. title:: Package Recipe 'bioconductor-snagee'
.. highlight: bash


bioconductor-snagee
===================

.. conda:recipe:: bioconductor-snagee
   :replaces_section_title:

   Signal\-to\-Noise applied to Gene Expression Experiments. Signal\-to\-noise ratios can be used as a proxy for quality of gene expression studies and samples. The SNRs can be calculated on any gene expression data set as long as gene IDs are available\, no access to the raw data files is necessary. This allows to flag problematic studies and samples in any public data set.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/SNAGEE.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-snagee <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snagee>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snagee/meta.yaml>`_
   :links: biotools: :biotools:`snagee`, doi: :doi:`10.1371/journal.pone.0051013`

   


.. conda:package:: bioconductor-snagee

   |downloads_bioconductor-snagee| |docker_bioconductor-snagee|

   :versions: 1.22.0, 1.20.0, 1.18.0

   :depends: :conda:package:`bioconductor-snageedata` >=1.18.0,<1.19.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-snagee|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-snagee

   and update with::

      conda update bioconductor-snagee

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-snagee


.. |required_by_bioconductor-snagee| conda:required_by:: bioconductor-snagee
.. |downloads_bioconductor-snagee| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-snagee.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-snagee| image:: https://quay.io/repository/biocontainers/bioconductor-snagee/status
   :target: https://quay.io/repository/biocontainers/bioconductor-snagee







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-snagee/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-snagee/README.html

