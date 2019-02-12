:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'refseq_masher'
.. highlight: bash

refseq_masher
=============

.. conda:recipe:: refseq_masher
   :replaces_section_title:

   refseq\_masher finds what NCBI RefSeq genomes match or are contained within your sequence data using Mash

   :homepage: https://github.com/phac-nml/refseq_masher
   :license: Apache / Apache 2.0
   :recipe: /`refseq_masher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/refseq_masher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/refseq_masher/meta.yaml>`_

   


.. conda:package:: refseq_masher

   |downloads_refseq_masher| |docker_refseq_masher|

   :versions: 0.1.1-1, 0.1.1-0, 0.1.0-0
   
   :depends click: 
   
   :depends mash: >=2.0
   
   :depends numpy: >=1.12.1
   
   :depends pandas: >=0.20.1
   
   :depends python: >=3.5,<3.6.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install refseq_masher

   and update with::

      conda update refseq_masher

   or use the docker container::

      docker pull quay.io/repository/biocontainers/refseq_masher:<tag>

   (see `refseq_masher/tags`_ for valid values for ``<tag>``)


.. |downloads_refseq_masher| image:: https://img.shields.io/conda/dn/bioconda/refseq_masher.svg?style=flat
   :alt:   (downloads)
.. |docker_refseq_masher| image:: https://quay.io/repository/biocontainers/refseq_masher/status
   :target: https://quay.io/repository/biocontainers/refseq_masher
.. _`refseq_masher/tags`: https://quay.io/repository/biocontainers/refseq_masher?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/refseq_masher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/refseq_masher/README.html