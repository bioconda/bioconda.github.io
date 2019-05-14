:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-inpower'
.. highlight: bash

bioconductor-inpower
====================

.. conda:recipe:: bioconductor-inpower
   :replaces_section_title:

   An R package for computing the number of susceptibility SNPs and power of future studies

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/INPower.html
   :license: GPL-2 + file LICENSE
   :recipe: /`bioconductor-inpower <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-inpower>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-inpower/meta.yaml>`_
   :links: biotools: :biotools:`inpower`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-inpower

   |downloads_bioconductor-inpower| |docker_bioconductor-inpower|

   :versions: 1.20.0-0, 1.18.0-0, 1.16.0-0, 1.14.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-mvtnorm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-inpower

   and update with::

      conda update bioconductor-inpower

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-inpower:<tag>

   (see `bioconductor-inpower/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-inpower| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-inpower.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-inpower
   :alt:   (downloads)
.. |docker_bioconductor-inpower| image:: https://quay.io/repository/biocontainers/bioconductor-inpower/status
   :target: https://quay.io/repository/biocontainers/bioconductor-inpower
.. _`bioconductor-inpower/tags`: https://quay.io/repository/biocontainers/bioconductor-inpower?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-inpower/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-inpower/README.html