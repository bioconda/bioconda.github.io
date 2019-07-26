:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libgenome'
.. highlight: bash

libgenome
=========

.. conda:recipe:: libgenome
   :replaces_section_title:

   A C\+\+ development library designed to make common operations on DNA and protein sequences easy. libGenome provides functionality to read\, write\, and manipulate sequence and annotation data in several file formats.

   :homepage: http://darlinglab.org/mauve/
   :license: GPL / GPL-2.0
   :recipe: /`libgenome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libgenome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libgenome/meta.yaml>`_

   


.. conda:package:: libgenome

   |downloads_libgenome| |docker_libgenome|

   :versions: 1.3.1-1, 1.3.1-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install libgenome

   and update with::

      conda update libgenome

   or use the docker container::

      docker pull quay.io/biocontainers/libgenome:<tag>

   (see `libgenome/tags`_ for valid values for ``<tag>``)


.. |downloads_libgenome| image:: https://img.shields.io/conda/dn/bioconda/libgenome.svg?style=flat
   :target: https://anaconda.org/bioconda/libgenome
   :alt:   (downloads)
.. |docker_libgenome| image:: https://quay.io/repository/biocontainers/libgenome/status
   :target: https://quay.io/repository/biocontainers/libgenome
.. _`libgenome/tags`: https://quay.io/repository/biocontainers/libgenome?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libgenome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libgenome/README.html