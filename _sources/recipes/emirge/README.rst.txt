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

   :versions: 0.61.1

   :depends: :conda:package:`biopython`  :conda:package:`bowtie`  :conda:package:`numpy`  :conda:package:`pysam`  :conda:package:`python` 2.7* :conda:package:`samtools`  :conda:package:`scipy`  :conda:package:`vsearch`  :conda:package:`zlib`  

   :required~by: |required_by_emirge|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install emirge

   and update with::

      conda update emirge

   or use the docker container::

      docker pull quay.io/repository/biocontainers/emirge


.. |required_by_emirge| conda:required_by:: emirge
.. |downloads_emirge| image:: https://img.shields.io/conda/dn/bioconda/emirge.svg?style=flat
   :alt:   (downloads)
.. |docker_emirge| image:: https://quay.io/repository/biocontainers/emirge/status
   :target: https://quay.io/repository/biocontainers/emirge







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/emirge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/emirge/README.html

