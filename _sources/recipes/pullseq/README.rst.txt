.. title:: Package Recipe 'pullseq'
.. highlight: bash


pullseq
=======

.. conda:recipe:: pullseq
   :replaces_section_title:

   Utility program for extracting sequences from a fasta\/fastq file.

   :homepage: https://github.com/bcthomas/pullseq
   :license: MIT
   :recipe: /`pullseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pullseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pullseq/meta.yaml>`_

   


.. conda:package:: pullseq

   |downloads_pullseq| |docker_pullseq|

   :versions: 1.0.2

   :depends: :conda:package:`libgcc`  :conda:package:`pcre`  :conda:package:`zlib`  

   :required~by: |required_by_pullseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pullseq

   and update with::

      conda update pullseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pullseq


.. |required_by_pullseq| conda:required_by:: pullseq
.. |downloads_pullseq| image:: https://img.shields.io/conda/dn/bioconda/pullseq.svg?style=flat
   :alt:   (downloads)
.. |docker_pullseq| image:: https://quay.io/repository/biocontainers/pullseq/status
   :target: https://quay.io/repository/biocontainers/pullseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pullseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pullseq/README.html

