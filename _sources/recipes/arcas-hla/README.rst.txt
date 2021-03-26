:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'arcas-hla'
.. highlight: bash

arcas-hla
=========

.. conda:recipe:: arcas-hla
   :replaces_section_title:
   :noindex:

   high resolution HLA typing from RNA seq

   :homepage: https://github.com/RabadanLab/arcasHLA
   :license: GPL-3.0
   :recipe: /`arcas-hla <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arcas-hla>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arcas-hla/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btz474`

   arcasHLA performs high resolution genotyping for HLA class I and class II
   genes from RNA sequencing\, supporting both paired and single\-end samples.



.. conda:package:: arcas-hla

   |downloads_arcas-hla| |docker_arcas-hla|

   :versions:
      
      

      ``0.2.0-1``,  ``0.2.0-0``

      

   
   :depends bedtools: ``>=2.27.1``
   :depends biopython: 
   :depends coreutils: 
   :depends git-lfs: 
   :depends kallisto: ``>=0.44.0``
   :depends numpy: 
   :depends pandas: 
   :depends pigz: 
   :depends python: ``>=3.6.1``
   :depends samtools: ``>=1.9``
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install arcas-hla

   and update with::

      conda update arcas-hla

   or use the docker container::

      docker pull quay.io/biocontainers/arcas-hla:<tag>

   (see `arcas-hla/tags`_ for valid values for ``<tag>``)


.. |downloads_arcas-hla| image:: https://img.shields.io/conda/dn/bioconda/arcas-hla.svg?style=flat
   :target: https://anaconda.org/bioconda/arcas-hla
   :alt:   (downloads)
.. |docker_arcas-hla| image:: https://quay.io/repository/biocontainers/arcas-hla/status
   :target: https://quay.io/repository/biocontainers/arcas-hla
.. _`arcas-hla/tags`: https://quay.io/repository/biocontainers/arcas-hla?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/arcas-hla/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/arcas-hla/README.html