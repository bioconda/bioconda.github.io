:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ataqv'
.. highlight: bash

ataqv
=====

.. conda:recipe:: ataqv
   :replaces_section_title:

   ataqv is a toolkit for measuring and comparing ATAC\-seq results. It was written to help understand how well ATAC\-seq assays have worked\, and to make it easier to spot differences that might be caused by library prep or sequencing.

   :homepage: https://parkerlab.github.io/ataqv/
   :documentation: https://github.com/ParkerLab/ataqv/blob/master/README.rst
   
   :developer docs: https://github.com/ParkerLab/ataqv
   :license: GPL3
   :recipe: /`ataqv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ataqv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ataqv/meta.yaml>`_

   


.. conda:package:: ataqv

   |downloads_ataqv| |docker_ataqv|

   :versions: 1.0.0-0
   
   :depends boost: >=1.67.0,<1.67.1.0a0
   
   :depends coreutils: 
   
   :depends htslib: >=1.9,<1.10.0a0
   
   :depends ncurses: >=6.1,<6.2.0a0
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ataqv

   and update with::

      conda update ataqv

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ataqv:<tag>

   (see `ataqv/tags`_ for valid values for ``<tag>``)


.. |downloads_ataqv| image:: https://img.shields.io/conda/dn/bioconda/ataqv.svg?style=flat
   :alt:   (downloads)
.. |docker_ataqv| image:: https://quay.io/repository/biocontainers/ataqv/status
   :target: https://quay.io/repository/biocontainers/ataqv
.. _`ataqv/tags`: https://quay.io/repository/biocontainers/ataqv?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ataqv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ataqv/README.html