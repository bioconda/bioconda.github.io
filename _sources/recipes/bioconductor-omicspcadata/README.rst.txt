:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-omicspcadata'
.. highlight: bash

bioconductor-omicspcadata
=========================

.. conda:recipe:: bioconductor-omicspcadata
   :replaces_section_title:
   :noindex:

   Supporting data for package OMICsPCA

   :homepage: https://bioconductor.org/packages/3.12/data/experiment/html/OMICsPCAdata.html
   :license: GPL-3
   :recipe: /`bioconductor-omicspcadata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicspcadata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicspcadata/meta.yaml>`_

   Supporting data for package OMICsPCA


.. conda:package:: bioconductor-omicspcadata

   |downloads_bioconductor-omicspcadata| |docker_bioconductor-omicspcadata|

   :versions:
      
      

      ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-multiassayexperiment: ``>=1.16.0,<1.17.0``
   :depends curl: ``>=7.75.0,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-omicspcadata

   and update with::

      conda update bioconductor-omicspcadata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-omicspcadata:<tag>

   (see `bioconductor-omicspcadata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-omicspcadata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-omicspcadata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-omicspcadata
   :alt:   (downloads)
.. |docker_bioconductor-omicspcadata| image:: https://quay.io/repository/biocontainers/bioconductor-omicspcadata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-omicspcadata
.. _`bioconductor-omicspcadata/tags`: https://quay.io/repository/biocontainers/bioconductor-omicspcadata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-omicspcadata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-omicspcadata/README.html