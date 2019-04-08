:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-affycoretools'
.. highlight: bash

bioconductor-affycoretools
==========================

.. conda:recipe:: bioconductor-affycoretools
   :replaces_section_title:

   Various wrapper functions that have been written to streamline the more common analyses that a core Biostatistician might see.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/affycoretools.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-affycoretools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affycoretools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affycoretools/meta.yaml>`_
   :links: biotools: :biotools:`affycoretools`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-affycoretools

   |downloads_bioconductor-affycoretools| |docker_bioconductor-affycoretools|

   :versions: 1.54.0-0, 1.52.2-0, 1.50.6-0
   
   :depends bioconductor-affy: >=1.60.0,<1.61.0
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-edger: >=3.24.0,<3.25.0
   :depends bioconductor-gcrma: >=2.54.0,<2.55.0
   :depends bioconductor-gostats: >=2.48.0,<2.49.0
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   :depends bioconductor-oligoclasses: >=1.44.0,<1.45.0
   :depends bioconductor-reportingtools: >=2.22.0,<2.23.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-dbi: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-hwriter: 
   :depends r-lattice: 
   :depends r-rsqlite: 
   :depends r-xtable: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-affycoretools

   and update with::

      conda update bioconductor-affycoretools

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-affycoretools:<tag>

   (see `bioconductor-affycoretools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-affycoretools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-affycoretools.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-affycoretools| image:: https://quay.io/repository/biocontainers/bioconductor-affycoretools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-affycoretools
.. _`bioconductor-affycoretools/tags`: https://quay.io/repository/biocontainers/bioconductor-affycoretools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-affycoretools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-affycoretools/README.html