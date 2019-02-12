.. title:: Package Recipe 'kmerinshort'
.. highlight: bash


kmerinshort
===========

.. conda:recipe:: kmerinshort
   :replaces_section_title:

   KmerInShort counts kmers from a fasta\/fastq file or list of files\, and outputs results in a text file. It is limited to short kmers \(k\<15\). It is a part of the FEELnc pipeline \(V.Wucher et al.\)

   :homepage: https://github.com/rizkg/KmerInShort
   :license: aGPL v3
   :recipe: /`kmerinshort <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmerinshort>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmerinshort/meta.yaml>`_

   


.. conda:package:: kmerinshort

   |downloads_kmerinshort| |docker_kmerinshort|

   :versions: 1.0.1

   :depends: :conda:package:`libgcc`  :conda:package:`zlib` 1.2.11* 

   :required~by: |required_by_kmerinshort|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kmerinshort

   and update with::

      conda update kmerinshort

   or use the docker container::

      docker pull quay.io/repository/biocontainers/kmerinshort


.. |required_by_kmerinshort| conda:required_by:: kmerinshort
.. |downloads_kmerinshort| image:: https://img.shields.io/conda/dn/bioconda/kmerinshort.svg?style=flat
   :alt:   (downloads)
.. |docker_kmerinshort| image:: https://quay.io/repository/biocontainers/kmerinshort/status
   :target: https://quay.io/repository/biocontainers/kmerinshort







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kmerinshort/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kmerinshort/README.html

