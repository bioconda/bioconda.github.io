:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ecolileucine'
.. highlight: bash

bioconductor-ecolileucine
=========================

.. conda:recipe:: bioconductor-ecolileucine
   :replaces_section_title:

   Experimental data with Affymetrix E. coli chips

   :homepage: https://bioconductor.org/packages/3.11/data/experiment/html/ecoliLeucine.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-ecolileucine <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ecolileucine>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ecolileucine/meta.yaml>`_

   Experimental data with Affymetrix E. coli chips\, as reported in She\-pin Hung\, Pierre Baldi\, and G. Wesley Hatfield\, J. Biol. Chem.\, Vol. 277\, Issue 43\, 40309\-40323\, October 25\, 2002


.. conda:package:: bioconductor-ecolileucine

   |downloads_bioconductor-ecolileucine| |docker_bioconductor-ecolileucine|

   :versions: 1.28.0-0, 1.26.0-0, 1.24.0-1, 1.22.0-0
   
   :depends bioconductor-affy: >=1.66.0,<1.67.0
   :depends bioconductor-ecolicdf: >=2.18.0,<2.19.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ecolileucine

   and update with::

      conda update bioconductor-ecolileucine

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ecolileucine:<tag>

   (see `bioconductor-ecolileucine/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ecolileucine| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ecolileucine.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ecolileucine
   :alt:   (downloads)
.. |docker_bioconductor-ecolileucine| image:: https://quay.io/repository/biocontainers/bioconductor-ecolileucine/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ecolileucine
.. _`bioconductor-ecolileucine/tags`: https://quay.io/repository/biocontainers/bioconductor-ecolileucine?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ecolileucine/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ecolileucine/README.html