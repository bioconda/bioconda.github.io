.. title:: Package Recipe 'bioconductor-eximir'
.. highlight: bash


bioconductor-eximir
===================

.. conda:recipe:: bioconductor-eximir
   :replaces_section_title:

   This package contains functions for reading raw data in ImaGene TXT format obtained from Exiqon miRCURY LNA arrays\, annotating them with appropriate GAL files\, and normalizing them using a spike\-in probe\-based method. Other platforms and data formats are also supported.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ExiMiR.html
   :license: GPL-2
   :recipe: /`bioconductor-eximir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eximir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eximir/meta.yaml>`_
   :links: biotools: :biotools:`eximir`, doi: :doi:`10.1186/1756-0500-7-302`

   


.. conda:package:: bioconductor-eximir

   |downloads_bioconductor-eximir| |docker_bioconductor-eximir|

   :versions: 2.24.0, 2.22.0, 2.20.0

   :depends: :conda:package:`bioconductor-affy` >=1.60.0,<1.61.0 :conda:package:`bioconductor-affyio` >=1.52.0,<1.53.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-preprocesscore` >=1.44.0,<1.45.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-eximir|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-eximir

   and update with::

      conda update bioconductor-eximir

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-eximir


.. |required_by_bioconductor-eximir| conda:required_by:: bioconductor-eximir
.. |downloads_bioconductor-eximir| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-eximir.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-eximir| image:: https://quay.io/repository/biocontainers/bioconductor-eximir/status
   :target: https://quay.io/repository/biocontainers/bioconductor-eximir







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-eximir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-eximir/README.html

