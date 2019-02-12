:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cnvgsadata'
.. highlight: bash

bioconductor-cnvgsadata
=======================

.. conda:recipe:: bioconductor-cnvgsadata
   :replaces_section_title:

   This package contains the data used in the vignette of the cnvGSA package.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/cnvGSAdata.html
   :license: LGPL
   :recipe: /`bioconductor-cnvgsadata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnvgsadata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnvgsadata/meta.yaml>`_

   


.. conda:package:: bioconductor-cnvgsadata

   |downloads_bioconductor-cnvgsadata| |docker_bioconductor-cnvgsadata|

   :versions: 1.18.0-0
   
   :depends bioconductor-cnvgsa: >=1.26.0,<1.27.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cnvgsadata

   and update with::

      conda update bioconductor-cnvgsadata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cnvgsadata:<tag>

   (see `bioconductor-cnvgsadata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cnvgsadata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cnvgsadata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cnvgsadata| image:: https://quay.io/repository/biocontainers/bioconductor-cnvgsadata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cnvgsadata
.. _`bioconductor-cnvgsadata/tags`: https://quay.io/repository/biocontainers/bioconductor-cnvgsadata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cnvgsadata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cnvgsadata/README.html