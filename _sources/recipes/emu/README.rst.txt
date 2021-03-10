:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'emu'
.. highlight: bash

emu
===

.. conda:recipe:: emu
   :replaces_section_title:
   :noindex:

   Emu is a relative abundance estimator for 16s genomic data.

   :homepage: https://gitlab.com/treangenlab/emu
   :license: MIT
   :recipe: /`emu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emu/meta.yaml>`_

   


.. conda:package:: emu

   |downloads_emu| |docker_emu|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioawk: 
   :depends biopython: 
   :depends flatten-dict: ``>=0.3.0``
   :depends minimap2: 
   :depends numpy: ``>=1.19.2``
   :depends pandas: ``>=1.1.3``
   :depends pysam: ``>=0.15.3``
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install emu

   and update with::

      conda update emu

   or use the docker container::

      docker pull quay.io/biocontainers/emu:<tag>

   (see `emu/tags`_ for valid values for ``<tag>``)


.. |downloads_emu| image:: https://img.shields.io/conda/dn/bioconda/emu.svg?style=flat
   :target: https://anaconda.org/bioconda/emu
   :alt:   (downloads)
.. |docker_emu| image:: https://quay.io/repository/biocontainers/emu/status
   :target: https://quay.io/repository/biocontainers/emu
.. _`emu/tags`: https://quay.io/repository/biocontainers/emu?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/emu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/emu/README.html