:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spanki'
.. highlight: bash

spanki
======

.. conda:recipe:: spanki
   :replaces_section_title:

   Spanki is a set of tools to facilitate analysis of alternative splicing from RNA\-Seq data. Spanki compiles quantitative and qualitative information about junction alignments from input BAM files\, and analyzes junction\-level splicing along with pairwise\-defined splicing events. A simulator is also included to evaluate junction detection performance.

   :homepage: http://www.cbcb.umd.edu/software/spanki/
   :license: GPLv3
   :recipe: /`spanki <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spanki>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spanki/meta.yaml>`_

   


.. conda:package:: spanki

   |downloads_spanki| |docker_spanki|

   :versions: 0.5.1-1, 0.5.1-0
   
   :depends biopython: 
   :depends cufflinks: 
   :depends fisher: 
   :depends numpy: 
   :depends pyfasta: 
   :depends pysam: 
   :depends python: >=2.7,<2.8.0a0
   :depends samtools: 
   :depends statsmodels: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install spanki

   and update with::

      conda update spanki

   or use the docker container::

      docker pull quay.io/biocontainers/spanki:<tag>

   (see `spanki/tags`_ for valid values for ``<tag>``)


.. |downloads_spanki| image:: https://img.shields.io/conda/dn/bioconda/spanki.svg?style=flat
   :alt:   (downloads)
.. |docker_spanki| image:: https://quay.io/repository/biocontainers/spanki/status
   :target: https://quay.io/repository/biocontainers/spanki
.. _`spanki/tags`: https://quay.io/repository/biocontainers/spanki?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spanki/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spanki/README.html