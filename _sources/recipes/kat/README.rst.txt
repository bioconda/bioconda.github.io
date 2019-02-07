.. title:: Package Recipe 'kat'
.. highlight: bash


kat
===

.. conda:recipe:: kat/2.3.1
   :replaces_section_title:

   KAT is a suite of tools that analyse jellyfish hashes or sequence files \(fasta or fastq\) using kmer counts

   :homepage: https://github.com/TGAC/KAT
   :license: GPL3
   :recipe: /`kat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kat>`_/`2.3.1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kat/2.3.1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kat/2.3.1/meta.yaml>`_
   :links: biotools: :biotools:`KAT`

   


.. conda:package:: kat

   |downloads_kat| |docker_kat|

   :versions: 2.4.1, 2.4.0, 2.3.4, 2.3.1, 2.0.8

   :depends: :conda:package:`libgcc`  :conda:package:`matplotlib`  :conda:package:`numpy`  :conda:package:`python` 3.5* :conda:package:`scipy`  :conda:package:`tabulate`  :conda:package:`zlib` 1.2.11* 

   :required~by: |required_by_kat|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kat

   and update with::

      conda update kat

   or use the docker container::

      docker pull quay.io/repository/biocontainers/kat


.. |required_by_kat| conda:required_by:: kat
.. |downloads_kat| image:: https://img.shields.io/conda/dn/bioconda/kat.svg?style=flat
   :alt:   (downloads)
.. |docker_kat| image:: https://quay.io/repository/biocontainers/kat/status
   :target: https://quay.io/repository/biocontainers/kat







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kat/README.html

