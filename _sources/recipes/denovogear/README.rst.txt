:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'denovogear'
.. highlight: bash

denovogear
==========

.. conda:recipe:: denovogear
   :replaces_section_title:

   A program to detect denovo\-variants using next\-generation sequencing data.

   :homepage: https://github.com/denovogear/denovogear
   :license: GPL3
   :recipe: /`denovogear <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/denovogear>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/denovogear/meta.yaml>`_

   


.. conda:package:: denovogear

   |downloads_denovogear| |docker_denovogear|

   :versions: 1.1.1-0
   
   :depends boost: 
   :depends eigen: 
   :depends htslib: 
   :depends libgcc: 
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install denovogear

   and update with::

      conda update denovogear

   or use the docker container::

      docker pull quay.io/biocontainers/denovogear:<tag>

   (see `denovogear/tags`_ for valid values for ``<tag>``)


.. |downloads_denovogear| image:: https://img.shields.io/conda/dn/bioconda/denovogear.svg?style=flat
   :target: https://anaconda.org/bioconda/denovogear
   :alt:   (downloads)
.. |docker_denovogear| image:: https://quay.io/repository/biocontainers/denovogear/status
   :target: https://quay.io/repository/biocontainers/denovogear
.. _`denovogear/tags`: https://quay.io/repository/biocontainers/denovogear?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/denovogear/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/denovogear/README.html