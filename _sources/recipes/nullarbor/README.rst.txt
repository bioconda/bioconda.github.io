:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nullarbor'
.. highlight: bash

nullarbor
=========

.. conda:recipe:: nullarbor
   :replaces_section_title:
   :noindex:

   Reads to report pipeline for bacterial isolate NGS data

   :homepage: https://github.com/tseemann/nullarbor
   :license: GPL2
   :recipe: /`nullarbor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nullarbor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nullarbor/meta.yaml>`_

   


.. conda:package:: nullarbor

   |downloads_nullarbor| |docker_nullarbor|

   :versions:
      
      

      ``2.0.20191013-2``,  ``2.0.20191013-1``,  ``2.0.20191013-0``,  ``2.0.20191007-0``,  ``2.0.20191003-0``,  ``2.0.20181010-5``,  ``2.0.20181010-4``,  ``2.0.20181010-2``

      

   
   :depends abricate: ``>=0.9.8``
   :depends any2fasta: ``>=0.4.2``
   :depends centrifuge: ``>=1.0``
   :depends fasttree: ``>=2.1.10``
   :depends iqtree: ``>=1.6.12``
   :depends kraken: ``>=1.1``
   :depends kraken2: ``>=2.0.7``
   :depends make: ``>=4.2``
   :depends mash: ``>=2.2``
   :depends megahit: ``>=1.1.3``
   :depends mlst: ``>=2.17.6``
   :depends newick_utils: ``>=1.6``
   :depends perl: ``>=5.16``
   :depends perl-file-spec: 
   :depends perl-file-which: 
   :depends perl-findbin: 
   :depends perl-json: 
   :depends perl-list-moreutils: ``>=0.428``
   :depends perl-path-tiny: 
   :depends perl-svg: 
   :depends perl-text-csv: 
   :depends perl-time-piece: 
   :depends perl-yaml-tiny: 
   :depends pigz: 
   :depends prokka: ``>=1.14``
   :depends quicktree: ``>=2.5``
   :depends roary: ``>=3.12``
   :depends samtools: ``>=1.9``
   :depends seqtk: ``>=1.3``
   :depends shovill: ``>=1.0.9``
   :depends skesa: ``>=2.3``
   :depends snippy: ``>=4.4.3``
   :depends snp-dists: ``>=0.6``
   :depends spades: ``>=3.13``
   :depends trimmomatic: ``>=0.39``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nullarbor

   and update with::

      conda update nullarbor

   or use the docker container::

      docker pull quay.io/biocontainers/nullarbor:<tag>

   (see `nullarbor/tags`_ for valid values for ``<tag>``)


.. |downloads_nullarbor| image:: https://img.shields.io/conda/dn/bioconda/nullarbor.svg?style=flat
   :target: https://anaconda.org/bioconda/nullarbor
   :alt:   (downloads)
.. |docker_nullarbor| image:: https://quay.io/repository/biocontainers/nullarbor/status
   :target: https://quay.io/repository/biocontainers/nullarbor
.. _`nullarbor/tags`: https://quay.io/repository/biocontainers/nullarbor?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nullarbor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nullarbor/README.html