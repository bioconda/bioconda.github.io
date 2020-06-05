:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seq2hla'
.. highlight: bash

seq2hla
=======

.. conda:recipe:: seq2hla
   :replaces_section_title:
   :noindex:

   Precision HLA typing and expression from next\-generation RNA sequencing data

   :homepage: https://bitbucket.org/sebastian_boegel/seq2hla
   :license: MIT
   :recipe: /`seq2hla <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq2hla>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq2hla/meta.yaml>`_
   :links: biotools: :biotools:`seq2hla`

   


.. conda:package:: seq2hla

   |downloads_seq2hla| |docker_seq2hla|

   :versions:
      
      

      ``2.2-2``,  ``2.2-1``,  ``2.2-0``

      

   
   :depends biopython: ``>=1.58``
   :depends bowtie: ``1.1.2``
   :depends python: ``<3``
   :depends r-base: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seq2hla

   and update with::

      conda update seq2hla

   or use the docker container::

      docker pull quay.io/biocontainers/seq2hla:<tag>

   (see `seq2hla/tags`_ for valid values for ``<tag>``)


.. |downloads_seq2hla| image:: https://img.shields.io/conda/dn/bioconda/seq2hla.svg?style=flat
   :target: https://anaconda.org/bioconda/seq2hla
   :alt:   (downloads)
.. |docker_seq2hla| image:: https://quay.io/repository/biocontainers/seq2hla/status
   :target: https://quay.io/repository/biocontainers/seq2hla
.. _`seq2hla/tags`: https://quay.io/repository/biocontainers/seq2hla?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seq2hla/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seq2hla/README.html