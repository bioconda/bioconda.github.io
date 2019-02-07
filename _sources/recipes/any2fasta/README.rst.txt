.. title:: Package Recipe 'any2fasta'
.. highlight: bash


any2fasta
=========

.. conda:recipe:: any2fasta
   :replaces_section_title:

   Convert various sequence formats to FASTA

   :homepage: https://github.com/tseemann/any2fasta
   :license: GPL-3.0
   :recipe: /`any2fasta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/any2fasta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/any2fasta/meta.yaml>`_

   


.. conda:package:: any2fasta

   |downloads_any2fasta| |docker_any2fasta|

   :versions: 0.4.2

   :depends: :conda:package:`perl`  

   :required~by: |required_by_any2fasta|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install any2fasta

   and update with::

      conda update any2fasta

   or use the docker container::

      docker pull quay.io/repository/biocontainers/any2fasta


.. |required_by_any2fasta| conda:required_by:: any2fasta
.. |downloads_any2fasta| image:: https://img.shields.io/conda/dn/bioconda/any2fasta.svg?style=flat
   :alt:   (downloads)
.. |docker_any2fasta| image:: https://quay.io/repository/biocontainers/any2fasta/status
   :target: https://quay.io/repository/biocontainers/any2fasta







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/any2fasta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/any2fasta/README.html

