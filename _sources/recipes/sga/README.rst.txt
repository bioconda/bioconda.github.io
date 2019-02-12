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

   :versions: 0.10.15, 0.10.13

   :depends: :conda:package:`bamtools`  :conda:package:`libgcc`  :conda:package:`sparsehash`  :conda:package:`zlib` 1.2.8* 

   :required~by: |required_by_sga|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sga

   and update with::

      conda update sga

   or use the docker container::

      docker pull quay.io/repository/biocontainers/sga


.. |required_by_sga| conda:required_by:: sga
.. |downloads_sga| image:: https://img.shields.io/conda/dn/bioconda/sga.svg?style=flat
   :alt:   (downloads)
.. |docker_sga| image:: https://quay.io/repository/biocontainers/sga/status
   :target: https://quay.io/repository/biocontainers/sga







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sga/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sga/README.html

