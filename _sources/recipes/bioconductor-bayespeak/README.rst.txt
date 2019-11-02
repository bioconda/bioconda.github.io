:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bayespeak'
.. highlight: bash

bioconductor-bayespeak
======================

.. conda:recipe:: bioconductor-bayespeak
   :replaces_section_title:

   This package is an implementation of the BayesPeak algorithm for peak\-calling in ChIP\-seq data.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/BayesPeak.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-bayespeak <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bayespeak>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bayespeak/meta.yaml>`_
   :links: biotools: :biotools:`bayespeak`

   


.. conda:package:: bioconductor-bayespeak

   |downloads_bioconductor-bayespeak| |docker_bioconductor-bayespeak|

   :versions: 1.38.0-0, 1.36.0-1, 1.34.0-1, 1.34.0-0, 1.32.0-0, 1.30.0-0, 1.28.0-0, 1.24.0-0
   
   :depends bioconductor-iranges: >=2.20.0,<2.21.0
   :depends libgcc-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bayespeak

   and update with::

      conda update bioconductor-bayespeak

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bayespeak:<tag>

   (see `bioconductor-bayespeak/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bayespeak| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bayespeak.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bayespeak
   :alt:   (downloads)
.. |docker_bioconductor-bayespeak| image:: https://quay.io/repository/biocontainers/bioconductor-bayespeak/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bayespeak
.. _`bioconductor-bayespeak/tags`: https://quay.io/repository/biocontainers/bioconductor-bayespeak?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bayespeak/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bayespeak/README.html