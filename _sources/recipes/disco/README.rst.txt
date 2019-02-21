:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'disco'
.. highlight: bash

disco
=====

.. conda:recipe:: disco/1.0
   :replaces_section_title:

   Multi\-threaded Distributed Memory Overlap\-Layout\-Consensus \(OLC\) Metagenome Assembler

   :homepage: http://disco.omicsbio.org/
   :license: GPL-3.0
   :recipe: /`disco <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/disco>`_/`1.0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/disco/1.0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/disco/1.0/meta.yaml>`_

   


.. conda:package:: disco

   |downloads_disco| |docker_disco|

   :versions: 1.2-2, 1.2-1, 1.2-0, 1.0-2, 1.0-1, 1.0-0
   
   :depends bbmap: 
   
   :depends biopython: 
   
   :depends libgcc-ng: >=4.9
   
   :depends openmpi: >=1.8
   
   :depends openmpi: >=3.1,<3.2.0a0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install disco

   and update with::

      conda update disco

   or use the docker container::

      docker pull quay.io/biocontainers/disco:<tag>

   (see `disco/tags`_ for valid values for ``<tag>``)


.. |downloads_disco| image:: https://img.shields.io/conda/dn/bioconda/disco.svg?style=flat
   :alt:   (downloads)
.. |docker_disco| image:: https://quay.io/repository/biocontainers/disco/status
   :target: https://quay.io/repository/biocontainers/disco
.. _`disco/tags`: https://quay.io/repository/biocontainers/disco?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/disco/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/disco/README.html