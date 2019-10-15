:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'repdenovo'
.. highlight: bash

repdenovo
=========

.. conda:recipe:: repdenovo
   :replaces_section_title:

   REPdenovo is designed for constructing repeats directly from sequence reads.

   :homepage: https://github.com/Reedwarbler/REPdenovo
   :license: MIT
   :recipe: /`repdenovo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repdenovo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repdenovo/meta.yaml>`_

   


.. conda:package:: repdenovo

   |downloads_repdenovo| |docker_repdenovo|

   :versions: 0.0.1-0
   
   :depends bamtools: >=2.5.1,<2.5.2.0a0
   :depends bwa: 
   :depends kmer-jellyfish: 
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends python: 
   :depends velvet: 
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install repdenovo

   and update with::

      conda update repdenovo

   or use the docker container::

      docker pull quay.io/biocontainers/repdenovo:<tag>

   (see `repdenovo/tags`_ for valid values for ``<tag>``)


.. |downloads_repdenovo| image:: https://img.shields.io/conda/dn/bioconda/repdenovo.svg?style=flat
   :target: https://anaconda.org/bioconda/repdenovo
   :alt:   (downloads)
.. |docker_repdenovo| image:: https://quay.io/repository/biocontainers/repdenovo/status
   :target: https://quay.io/repository/biocontainers/repdenovo
.. _`repdenovo/tags`: https://quay.io/repository/biocontainers/repdenovo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/repdenovo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/repdenovo/README.html