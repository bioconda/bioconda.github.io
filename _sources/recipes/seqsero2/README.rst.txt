:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqsero2'
.. highlight: bash

seqsero2
========

.. conda:recipe:: seqsero2
   :replaces_section_title:
   :noindex:

   Salmonella serotype prediction from genome sequencing data

   :homepage: https://github.com/denglab/SeqSero2
   :license: GPL / GPLv2
   :recipe: /`seqsero2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqsero2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqsero2/meta.yaml>`_
   :links: doi: :doi:`10.1128/AEM.01746-19`

   


.. conda:package:: seqsero2

   |downloads_seqsero2| |docker_seqsero2|

   :versions:
      
      

      ``1.2.1-0``,  ``1.1.1-0``,  ``1.01-0``,  ``1.1.0-0``,  ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends bedtools: ``2.17.0.*``
   :depends biopython: ``1.73.*``
   :depends blast: ``>=2.2.28``
   :depends bwa: ``>=0.7.12``
   :depends python: ``>=3``
   :depends salmid: ``0.1.23.*``
   :depends samtools: ``>=1.8``
   :depends spades: ``>=3.9.0``
   :depends sra-tools: ``>=2.8.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seqsero2

   and update with::

      conda update seqsero2

   or use the docker container::

      docker pull quay.io/biocontainers/seqsero2:<tag>

   (see `seqsero2/tags`_ for valid values for ``<tag>``)


.. |downloads_seqsero2| image:: https://img.shields.io/conda/dn/bioconda/seqsero2.svg?style=flat
   :target: https://anaconda.org/bioconda/seqsero2
   :alt:   (downloads)
.. |docker_seqsero2| image:: https://quay.io/repository/biocontainers/seqsero2/status
   :target: https://quay.io/repository/biocontainers/seqsero2
.. _`seqsero2/tags`: https://quay.io/repository/biocontainers/seqsero2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqsero2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqsero2/README.html