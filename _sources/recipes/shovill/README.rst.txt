:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shovill'
.. highlight: bash

shovill
=======

.. conda:recipe:: shovill
   :replaces_section_title:

   Microbial assembly pipeline for Illumina paired\-end reads

   :homepage: https://github.com/tseemann/shovill
   :license: GPL2
   :recipe: /`shovill <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shovill>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shovill/meta.yaml>`_

   


.. conda:package:: shovill

   |downloads_shovill| |docker_shovill|

   :versions: 1.0.4-1, 1.0.4-0, 1.0.1-0, 1.0.0-0, 0.9.0-1, 0.9.0-0, 0.8.0-0, 0.7.1-2, 0.7.1-1, 0.7.1-0
   
   :depends bwa: >=0.7.17
   :depends flash: >=1.2
   :depends lighter: >=1.1
   :depends mash: >=2.1
   :depends megahit: >=1.2.7
   :depends perl: 
   :depends perl-file-spec: 
   :depends perl-findbin: 
   :depends pigz: 
   :depends pilon: >=1.22
   :depends samclip: >=0.2
   :depends samtools: >=1.8
   :depends seqtk: >=1.3
   :depends skesa: >=2.2
   :depends spades: >=3.6
   :depends trimmomatic: >=0.36
   :depends velvet: >=1.2.10
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install shovill

   and update with::

      conda update shovill

   or use the docker container::

      docker pull quay.io/biocontainers/shovill:<tag>

   (see `shovill/tags`_ for valid values for ``<tag>``)


.. |downloads_shovill| image:: https://img.shields.io/conda/dn/bioconda/shovill.svg?style=flat
   :target: https://anaconda.org/bioconda/shovill
   :alt:   (downloads)
.. |docker_shovill| image:: https://quay.io/repository/biocontainers/shovill/status
   :target: https://quay.io/repository/biocontainers/shovill
.. _`shovill/tags`: https://quay.io/repository/biocontainers/shovill?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shovill/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shovill/README.html