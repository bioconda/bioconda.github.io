:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'haphpipe'
.. highlight: bash

haphpipe
========

.. conda:recipe:: haphpipe
   :replaces_section_title:

   HAplotype and PHylodynamics pipeline for viral assembly\, population genetics\, and phylodynamics.

   :homepage: https://github.com/gwcbi/haphpipe
   :documentation: https://gwcbi.github.io/haphpipe_docs/
   
   :license: GPL License
   :recipe: /`haphpipe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haphpipe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haphpipe/meta.yaml>`_

   


.. conda:package:: haphpipe

   |downloads_haphpipe| |docker_haphpipe|

   :versions: 1.0.0-0
   
   :depends biopython: 
   :depends blast: 
   :depends bowtie2: 
   :depends bwa: 
   :depends flash: 
   :depends freebayes: 
   :depends future: 
   :depends gatk: 3.8.*
   :depends mafft: 
   :depends modeltest-ng: 
   :depends mummer: 
   :depends picard: 
   :depends python: >=3.7
   :depends pyyaml: 
   :depends raxml: 
   :depends samtools: 1.9.*
   :depends seqtk: 
   :depends sierrapy: 
   :depends spades: 
   :depends sra-tools: 
   :depends trimmomatic: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install haphpipe

   and update with::

      conda update haphpipe

   or use the docker container::

      docker pull quay.io/biocontainers/haphpipe:<tag>

   (see `haphpipe/tags`_ for valid values for ``<tag>``)


.. |downloads_haphpipe| image:: https://img.shields.io/conda/dn/bioconda/haphpipe.svg?style=flat
   :target: https://anaconda.org/bioconda/haphpipe
   :alt:   (downloads)
.. |docker_haphpipe| image:: https://quay.io/repository/biocontainers/haphpipe/status
   :target: https://quay.io/repository/biocontainers/haphpipe
.. _`haphpipe/tags`: https://quay.io/repository/biocontainers/haphpipe?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/haphpipe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/haphpipe/README.html