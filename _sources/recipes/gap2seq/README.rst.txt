:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gap2seq'
.. highlight: bash

gap2seq
=======

.. conda:recipe:: gap2seq
   :replaces_section_title:

   Gap2Seq is a tool for filling gaps between contigs in genome assemblies.

   :homepage: https://www.cs.helsinki.fi/u/lmsalmel/Gap2Seq/
   :license: GPLv3
   :recipe: /`gap2seq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gap2seq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gap2seq/meta.yaml>`_

   


.. conda:package:: gap2seq

   |downloads_gap2seq| |docker_gap2seq|

   :versions: 2.1-4, 2.1-3, 2.1-2, 2.1-1, 2.1-0, 2.0-8, 2.0-7, 2.0-6, 2.0-5, 2.0-4, 2.0-1
   
   :depends boost: >=1.66.0,<1.66.1.0a0
   
   :depends libcxx: 
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gap2seq

   and update with::

      conda update gap2seq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/gap2seq:<tag>

   (see `gap2seq/tags`_ for valid values for ``<tag>``)


.. |downloads_gap2seq| image:: https://img.shields.io/conda/dn/bioconda/gap2seq.svg?style=flat
   :alt:   (downloads)
.. |docker_gap2seq| image:: https://quay.io/repository/biocontainers/gap2seq/status
   :target: https://quay.io/repository/biocontainers/gap2seq
.. _`gap2seq/tags`: https://quay.io/repository/biocontainers/gap2seq?tab=tags






Notes
-----
Gap2Seq is only tested on Linux x86\_64 by its author.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gap2seq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gap2seq/README.html