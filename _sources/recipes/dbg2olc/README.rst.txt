:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dbg2olc'
.. highlight: bash

dbg2olc
=======

.. conda:recipe:: dbg2olc
   :replaces_section_title:

   Efficient Assembly of Large Genomes Using Long Erroneous Reads of the Third Generation Sequencing Technologies

   :homepage: https://github.com/yechengxi/DBG2OLC
   :license: unknown
   :recipe: /`dbg2olc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dbg2olc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dbg2olc/meta.yaml>`_

   


.. conda:package:: dbg2olc

   |downloads_dbg2olc| |docker_dbg2olc|

   :versions: 20180222-0, 20160205-1, 20160205-0
   
   :depends assemblyutility: 
   
   :depends libgcc-ng: >=4.9
   
   :depends sparc: 
   
   :depends sparseassembler: 
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dbg2olc

   and update with::

      conda update dbg2olc

   or use the docker container::

      docker pull quay.io/biocontainers/dbg2olc:<tag>

   (see `dbg2olc/tags`_ for valid values for ``<tag>``)


.. |downloads_dbg2olc| image:: https://img.shields.io/conda/dn/bioconda/dbg2olc.svg?style=flat
   :alt:   (downloads)
.. |docker_dbg2olc| image:: https://quay.io/repository/biocontainers/dbg2olc/status
   :target: https://quay.io/repository/biocontainers/dbg2olc
.. _`dbg2olc/tags`: https://quay.io/repository/biocontainers/dbg2olc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dbg2olc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dbg2olc/README.html