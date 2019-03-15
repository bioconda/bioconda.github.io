:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wgsim'
.. highlight: bash

wgsim
=====

.. conda:recipe:: wgsim
   :replaces_section_title:

   Wgsim is a small tool for simulating sequence reads from a reference genome.

   :homepage: https://github.com/lh3/wgsim
   :license: MIT
   :recipe: /`wgsim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wgsim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wgsim/meta.yaml>`_

   


.. conda:package:: wgsim

   |downloads_wgsim| |docker_wgsim|

   :versions: 1.0-2, 1.0-1, 1.0-0
   
   :depends libgcc-ng: >=4.9
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install wgsim

   and update with::

      conda update wgsim

   or use the docker container::

      docker pull quay.io/biocontainers/wgsim:<tag>

   (see `wgsim/tags`_ for valid values for ``<tag>``)


.. |downloads_wgsim| image:: https://img.shields.io/conda/dn/bioconda/wgsim.svg?style=flat
   :alt:   (downloads)
.. |docker_wgsim| image:: https://quay.io/repository/biocontainers/wgsim/status
   :target: https://quay.io/repository/biocontainers/wgsim
.. _`wgsim/tags`: https://quay.io/repository/biocontainers/wgsim?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wgsim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wgsim/README.html