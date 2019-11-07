:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gmrp'
.. highlight: bash

bioconductor-gmrp
=================

.. conda:recipe:: bioconductor-gmrp
   :replaces_section_title:

   GWAS\-based Mendelian Randomization and Path Analyses

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/GMRP.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-gmrp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gmrp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gmrp/meta.yaml>`_
   :links: biotools: :biotools:`gmrp`, doi: :doi:`10.1038/nmeth.3252`

   Perform Mendelian randomization analysis of multiple SNPs to determine risk factors causing disease of study and to exclude confounding variabels and perform path analysis to construct path of risk factors to the disease.


.. conda:package:: bioconductor-gmrp

   |downloads_bioconductor-gmrp| |docker_bioconductor-gmrp|

   :versions: 1.14.0-0, 1.12.0-1, 1.10.1-0, 1.8.1-0, 1.5.0-0
   
   :depends bioconductor-genomicranges: >=1.38.0,<1.39.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-diagram: 
   :depends r-plotrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gmrp

   and update with::

      conda update bioconductor-gmrp

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gmrp:<tag>

   (see `bioconductor-gmrp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gmrp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gmrp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gmrp
   :alt:   (downloads)
.. |docker_bioconductor-gmrp| image:: https://quay.io/repository/biocontainers/bioconductor-gmrp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gmrp
.. _`bioconductor-gmrp/tags`: https://quay.io/repository/biocontainers/bioconductor-gmrp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gmrp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gmrp/README.html