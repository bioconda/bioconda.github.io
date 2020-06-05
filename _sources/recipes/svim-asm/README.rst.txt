:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svim-asm'
.. highlight: bash

svim-asm
========

.. conda:recipe:: svim-asm
   :replaces_section_title:
   :noindex:

   SVIM\-asm is a fork of the SV caller SVIM for genome\-genome alignments.

   :homepage: https://github.com/eldariont/svim-asm
   :license: GPL / GPL-3.0
   :recipe: /`svim-asm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svim-asm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svim-asm/meta.yaml>`_

   


.. conda:package:: svim-asm

   |downloads_svim-asm| |docker_svim-asm|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends matplotlib: 
   :depends numpy: 
   :depends pysam: ``>=0.15``
   :depends python: ``>=3.6``
   :depends python-edlib: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install svim-asm

   and update with::

      conda update svim-asm

   or use the docker container::

      docker pull quay.io/biocontainers/svim-asm:<tag>

   (see `svim-asm/tags`_ for valid values for ``<tag>``)


.. |downloads_svim-asm| image:: https://img.shields.io/conda/dn/bioconda/svim-asm.svg?style=flat
   :target: https://anaconda.org/bioconda/svim-asm
   :alt:   (downloads)
.. |docker_svim-asm| image:: https://quay.io/repository/biocontainers/svim-asm/status
   :target: https://quay.io/repository/biocontainers/svim-asm
.. _`svim-asm/tags`: https://quay.io/repository/biocontainers/svim-asm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svim-asm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svim-asm/README.html