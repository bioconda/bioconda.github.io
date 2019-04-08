:orphan:  .. only available via index, not via toctree

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

   :versions: 0.4.2-1
   
   :depends perl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install any2fasta

   and update with::

      conda update any2fasta

   or use the docker container::

      docker pull quay.io/biocontainers/any2fasta:<tag>

   (see `any2fasta/tags`_ for valid values for ``<tag>``)


.. |downloads_any2fasta| image:: https://img.shields.io/conda/dn/bioconda/any2fasta.svg?style=flat
   :alt:   (downloads)
.. |docker_any2fasta| image:: https://quay.io/repository/biocontainers/any2fasta/status
   :target: https://quay.io/repository/biocontainers/any2fasta
.. _`any2fasta/tags`: https://quay.io/repository/biocontainers/any2fasta?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/any2fasta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/any2fasta/README.html