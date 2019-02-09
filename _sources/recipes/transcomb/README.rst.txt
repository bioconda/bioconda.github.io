.. title:: Package Recipe 'transcomb'
.. highlight: bash


transcomb
=========

.. conda:recipe:: transcomb
   :replaces_section_title:

   A sparse k\-mer graph based\, memory\-efficient genome assembler

   :homepage: https://github.com/yechengxi/SparseAssembler
   :license: Unknown
   :recipe: /`transcomb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transcomb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transcomb/meta.yaml>`_

   


.. conda:package:: transcomb

   |downloads_transcomb| |docker_transcomb|

   :versions: 1.0

   :depends: :conda:package:`bamtools`  :conda:package:`boost` 1.60* :conda:package:`icu` ==56.1 :conda:package:`samtools`  :conda:package:`zlib`  

   :required~by: |required_by_transcomb|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install transcomb

   and update with::

      conda update transcomb

   or use the docker container::

      docker pull quay.io/repository/biocontainers/transcomb


.. |required_by_transcomb| conda:required_by:: transcomb
.. |downloads_transcomb| image:: https://img.shields.io/conda/dn/bioconda/transcomb.svg?style=flat
   :alt:   (downloads)
.. |docker_transcomb| image:: https://quay.io/repository/biocontainers/transcomb/status
   :target: https://quay.io/repository/biocontainers/transcomb







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/transcomb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/transcomb/README.html

