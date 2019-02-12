:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-beadarraysnp'
.. highlight: bash

bioconductor-beadarraysnp
=========================

.. conda:recipe:: bioconductor-beadarraysnp
   :replaces_section_title:

   Importing data from Illumina SNP experiments and performing copy number calculations and reports.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/beadarraySNP.html
   :license: GPL-2
   :recipe: /`bioconductor-beadarraysnp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beadarraysnp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beadarraysnp/meta.yaml>`_
   :links: biotools: :biotools:`beadarraysnp`, doi: :doi:`10.1093/bioinformatics/btm311`

   


.. conda:package:: bioconductor-beadarraysnp

   |downloads_bioconductor-beadarraysnp| |docker_bioconductor-beadarraysnp|

   :versions: 1.48.0-0, 1.46.0-0, 1.44.0-0, 1.42.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends bioconductor-quantsmooth: >=1.48.0,<1.49.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-beadarraysnp

   and update with::

      conda update bioconductor-beadarraysnp

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-beadarraysnp:<tag>

   (see `bioconductor-beadarraysnp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-beadarraysnp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-beadarraysnp.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-beadarraysnp| image:: https://quay.io/repository/biocontainers/bioconductor-beadarraysnp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-beadarraysnp
.. _`bioconductor-beadarraysnp/tags`: https://quay.io/repository/biocontainers/bioconductor-beadarraysnp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-beadarraysnp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-beadarraysnp/README.html