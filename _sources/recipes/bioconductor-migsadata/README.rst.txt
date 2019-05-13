:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-migsadata'
.. highlight: bash

bioconductor-migsadata
======================

.. conda:recipe:: bioconductor-migsadata
   :replaces_section_title:

   MIGSA vignette data. The MIGSAdata package provides several data objects needed by MIGSA package to correctly generate its vignette\, and follow it step by step.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/MIGSAdata.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-migsadata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-migsadata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-migsadata/meta.yaml>`_

   


.. conda:package:: bioconductor-migsadata

   |downloads_bioconductor-migsadata| |docker_bioconductor-migsadata|

   :versions: 1.6.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-migsadata

   and update with::

      conda update bioconductor-migsadata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-migsadata:<tag>

   (see `bioconductor-migsadata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-migsadata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-migsadata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-migsadata
   :alt:   (downloads)
.. |docker_bioconductor-migsadata| image:: https://quay.io/repository/biocontainers/bioconductor-migsadata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-migsadata
.. _`bioconductor-migsadata/tags`: https://quay.io/repository/biocontainers/bioconductor-migsadata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-migsadata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-migsadata/README.html