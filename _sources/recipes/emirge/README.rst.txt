:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'emirge'
.. highlight: bash

emirge
======

.. conda:recipe:: emirge
   :replaces_section_title:

   EMIRGE reconstructs full length sequences from short sequencing reads

   :homepage: https://github.com/csmiller/EMIRGE
   :license: GPL3 / GNU General Public License v3 or later (GPLv3+)
   :recipe: /`emirge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emirge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emirge/meta.yaml>`_

   


.. conda:package:: emirge

   |downloads_emirge| |docker_emirge|

   :versions: 0.61.1-2, 0.61.1-1, 0.61.1-0
   
   :depends biopython: 
   
   :depends bowtie: 
   
   :depends numpy: 
   
   :depends pysam: 
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends samtools: 
   
   :depends scipy: 
   
   :depends vsearch: 
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install emirge

   and update with::

      conda update emirge

   or use the docker container::

      docker pull quay.io/biocontainers/emirge:<tag>

   (see `emirge/tags`_ for valid values for ``<tag>``)


.. |downloads_emirge| image:: https://img.shields.io/conda/dn/bioconda/emirge.svg?style=flat
   :alt:   (downloads)
.. |docker_emirge| image:: https://quay.io/repository/biocontainers/emirge/status
   :target: https://quay.io/repository/biocontainers/emirge
.. _`emirge/tags`: https://quay.io/repository/biocontainers/emirge?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/emirge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/emirge/README.html