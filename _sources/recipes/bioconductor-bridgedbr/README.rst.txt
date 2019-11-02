:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bridgedbr'
.. highlight: bash

bioconductor-bridgedbr
======================

.. conda:recipe:: bioconductor-bridgedbr
   :replaces_section_title:

   Use BridgeDb functions and load identifier mapping databases in R.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/BridgeDbR.html
   :license: AGPL-3
   :recipe: /`bioconductor-bridgedbr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bridgedbr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bridgedbr/meta.yaml>`_

   


.. conda:package:: bioconductor-bridgedbr

   |downloads_bioconductor-bridgedbr| |docker_bioconductor-bridgedbr|

   :versions: 1.20.0-0, 1.18.0-1, 1.18.0-0, 1.16.1-0
   
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-rcurl: 
   :depends r-rjava: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bridgedbr

   and update with::

      conda update bioconductor-bridgedbr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bridgedbr:<tag>

   (see `bioconductor-bridgedbr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bridgedbr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bridgedbr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bridgedbr
   :alt:   (downloads)
.. |docker_bioconductor-bridgedbr| image:: https://quay.io/repository/biocontainers/bioconductor-bridgedbr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bridgedbr
.. _`bioconductor-bridgedbr/tags`: https://quay.io/repository/biocontainers/bioconductor-bridgedbr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bridgedbr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bridgedbr/README.html