:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-affycoretools'
.. highlight: bash

bioconductor-affycoretools
==========================

.. conda:recipe:: bioconductor-affycoretools
   :replaces_section_title:
   :noindex:

   Functions useful for those doing repetitive analyses with Affymetrix GeneChips

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/affycoretools.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-affycoretools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affycoretools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affycoretools/meta.yaml>`_
   :links: biotools: :biotools:`affycoretools`, doi: :doi:`10.1038/nmeth.3252`

   Various wrapper functions that have been written to streamline the more common analyses that a core Biostatistician might see.


.. conda:package:: bioconductor-affycoretools

   |downloads_bioconductor-affycoretools| |docker_bioconductor-affycoretools|

   :versions:
      
      

      ``1.64.0-0``,  ``1.62.0-1``,  ``1.62.0-0``,  ``1.60.1-0``,  ``1.58.0-0``,  ``1.56.0-1``,  ``1.54.0-0``,  ``1.52.2-0``,  ``1.50.6-0``

      

   
   :depends bioconductor-affy: ``>=1.70.0,<1.71.0``
   :depends bioconductor-annotationdbi: ``>=1.54.0,<1.55.0``
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-edger: ``>=3.34.0,<3.35.0``
   :depends bioconductor-gcrma: ``>=2.64.0,<2.65.0``
   :depends bioconductor-glimma: ``>=2.2.0,<2.3.0``
   :depends bioconductor-gostats: ``>=2.58.0,<2.59.0``
   :depends bioconductor-limma: ``>=3.48.0,<3.49.0``
   :depends bioconductor-oligoclasses: ``>=1.54.0,<1.55.0``
   :depends bioconductor-reportingtools: ``>=2.32.0,<2.33.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
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
   :target: https://anaconda.org/bioconda/bioconductor-affycoretools
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