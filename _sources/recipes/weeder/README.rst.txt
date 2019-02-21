:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'weeder'
.. highlight: bash

weeder
======

.. conda:recipe:: weeder
   :replaces_section_title:

   Motif \(transcription factor binding sites\) discovery in sequences from coregulated genes of a single species. This is a new Weeder release rewritten to be faster and optimized for large ChIP\-Seq data.

   :homepage: http://159.149.160.51/modtools/
   :license: GPL3
   :recipe: /`weeder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/weeder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/weeder/meta.yaml>`_
   :links: biotools: :biotools:`weeder`, doi: :doi:`10.1002/0471250953.bi0211s47`

   


.. conda:package:: weeder

   |downloads_weeder| |docker_weeder|

   :versions: 2.0-2, 2.0-1, 2.0-0
   
   :depends libstdcxx-ng: >=4.9
   
   :depends python: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install weeder

   and update with::

      conda update weeder

   or use the docker container::

      docker pull quay.io/biocontainers/weeder:<tag>

   (see `weeder/tags`_ for valid values for ``<tag>``)


.. |downloads_weeder| image:: https://img.shields.io/conda/dn/bioconda/weeder.svg?style=flat
   :alt:   (downloads)
.. |docker_weeder| image:: https://quay.io/repository/biocontainers/weeder/status
   :target: https://quay.io/repository/biocontainers/weeder
.. _`weeder/tags`: https://quay.io/repository/biocontainers/weeder?tab=tags






Notes
-----
Includes a simple wrapper script to be able to run weeder from any directory. It passes arguments transparently to the weeder2 executable.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/weeder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/weeder/README.html