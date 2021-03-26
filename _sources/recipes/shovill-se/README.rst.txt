:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shovill-se'
.. highlight: bash

shovill-se
==========

.. conda:recipe:: shovill-se
   :replaces_section_title:
   :noindex:

   An fork of Shovill \(microbial assembly pipeline for Illumina paired\-end reads\) that supports single\-end reads.

   :homepage: https://github.com/rpetit3/shovill
   :license: GPL2
   :recipe: /`shovill-se <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shovill-se>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shovill-se/meta.yaml>`_

   


.. conda:package:: shovill-se

   |downloads_shovill-se| |docker_shovill-se|

   :versions:
      
      

      ``1.1.0se-1``,  ``1.1.0se-0``

      

   
   :depends bwa: ``>=0.7.17``
   :depends flash: ``>=1.2``
   :depends kmc: ``>=3.1``
   :depends lighter: ``>=1.1``
   :depends megahit: ``>=1.2.7``
   :depends perl: 
   :depends perl-file-spec: 
   :depends perl-findbin: 
   :depends pigz: 
   :depends pilon: ``>=1.22``
   :depends samclip: ``>=0.4``
   :depends samtools: ``>=1.10``
   :depends seqtk: ``>=1.3``
   :depends skesa: ``>=2.2``
   :depends spades: ``>=3.14``
   :depends trimmomatic: ``>=0.36``
   :depends velvet: ``>=1.2.10``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install shovill-se

   and update with::

      conda update shovill-se

   or use the docker container::

      docker pull quay.io/biocontainers/shovill-se:<tag>

   (see `shovill-se/tags`_ for valid values for ``<tag>``)


.. |downloads_shovill-se| image:: https://img.shields.io/conda/dn/bioconda/shovill-se.svg?style=flat
   :target: https://anaconda.org/bioconda/shovill-se
   :alt:   (downloads)
.. |docker_shovill-se| image:: https://quay.io/repository/biocontainers/shovill-se/status
   :target: https://quay.io/repository/biocontainers/shovill-se
.. _`shovill-se/tags`: https://quay.io/repository/biocontainers/shovill-se?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shovill-se/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shovill-se/README.html