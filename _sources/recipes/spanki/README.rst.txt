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

   :versions: 0.5.1

   :depends: :conda:package:`biopython`  :conda:package:`cufflinks`  :conda:package:`fisher`  :conda:package:`numpy`  :conda:package:`pyfasta`  :conda:package:`pysam`  :conda:package:`python` 2.7* :conda:package:`samtools`  :conda:package:`statsmodels`  

   :required~by: |required_by_spanki|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install spanki

   and update with::

      conda update spanki

   or use the docker container::

      docker pull quay.io/repository/biocontainers/spanki


.. |required_by_spanki| conda:required_by:: spanki
.. |downloads_spanki| image:: https://img.shields.io/conda/dn/bioconda/spanki.svg?style=flat
   :alt:   (downloads)
.. |docker_spanki| image:: https://quay.io/repository/biocontainers/spanki/status
   :target: https://quay.io/repository/biocontainers/spanki







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spanki/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spanki/README.html

