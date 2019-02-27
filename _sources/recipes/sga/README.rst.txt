:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sga'
.. highlight: bash

sga
===

.. conda:recipe:: sga
   :replaces_section_title:

   SGA \- String Graph Assembler. SGA is a de novo assembler for DNA sequence reads. It is based on Gene Myers string graph formulation of assembly and uses the FM\-index\/Burrows\-Wheeler transform to efficiently find overlaps between sequence reads.

   :homepage: https://github.com/jts/sga
   :license: GPLv3
   :recipe: /`sga <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sga>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sga/meta.yaml>`_
   :links: biotools: :biotools:`sga`

   


.. conda:package:: sga

   |downloads_sga| |docker_sga|

   :versions: 0.10.15-3, 0.10.15-2, 0.10.15-1, 0.10.15-0, 0.10.13-0
   
   :depends bamtools: >=2.4.1,<2.4.2.0a0
   
   :depends sparsehash: 
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sga

   and update with::

      conda update sga

   or use the docker container::

      docker pull quay.io/biocontainers/sga:<tag>

   (see `sga/tags`_ for valid values for ``<tag>``)


.. |downloads_sga| image:: https://img.shields.io/conda/dn/bioconda/sga.svg?style=flat
   :alt:   (downloads)
.. |docker_sga| image:: https://quay.io/repository/biocontainers/sga/status
   :target: https://quay.io/repository/biocontainers/sga
.. _`sga/tags`: https://quay.io/repository/biocontainers/sga?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sga/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sga/README.html