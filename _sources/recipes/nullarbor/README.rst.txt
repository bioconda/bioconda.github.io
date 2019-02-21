:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nullarbor'
.. highlight: bash

nullarbor
=========

.. conda:recipe:: nullarbor
   :replaces_section_title:

   Pipeline to generate complete public health microbiology reports from sequenced isolates

   :homepage: https://github.com/tseemann/nullarbor
   :license: GPL2
   :recipe: /`nullarbor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nullarbor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nullarbor/meta.yaml>`_

   


.. conda:package:: nullarbor

   |downloads_nullarbor| |docker_nullarbor|

   :versions: 2.0.20181010-4, 2.0.20181010-2
   
   :depends abricate: >=0.8
   
   :depends bwa: >=0.7.17
   
   :depends centrifuge: >=1.0
   
   :depends fasttree: 
   
   :depends flash: >=1.2
   
   :depends iqtree: >=1.6
   
   :depends kraken: >=1.1
   
   :depends kraken2: 
   
   :depends lighter: >=1.1
   
   :depends mash: >=2.1
   
   :depends megahit: >=1.1
   
   :depends mlst: >=2.1
   
   :depends newick_utils: 
   
   :depends perl: 
   
   :depends perl-file-spec: 
   
   :depends perl-findbin: 
   
   :depends perl-path-tiny: 
   
   :depends perl-yaml-tiny: 
   
   :depends pigz: 
   
   :depends pilon: >=1.22
   
   :depends prokka: >=1.12
   
   :depends quicktree: >=2.4
   
   :depends roary: >=3.0
   
   :depends samclip: >=0.2
   
   :depends samtools: >=1.8
   
   :depends seqtk: >=1.3
   
   :depends shovill: >=1.0
   
   :depends skesa: >=2.3
   
   :depends snippy: >=4.2
   
   :depends snp-dists: >=0.6
   
   :depends spades: >=3.6
   
   :depends trimmomatic: >=0.36
   
   :depends velvet: >=1.2.10
   
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