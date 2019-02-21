:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'grid'
.. highlight: bash

grid
====

.. conda:recipe:: grid
   :replaces_section_title:

   Growth Rate Index \(GRiD\) measures bacterial growth rate from reference genomes \(including draft quality genomes\) and metagenomic bins at ultra\-low sequencing coverage \(\> 0.2x\).

   :homepage: https://github.com/ohlab/GRiD
   :license: MIT
   :recipe: /`grid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grid/meta.yaml>`_

   


.. conda:package:: grid

   |downloads_grid| |docker_grid|

   :versions: 1.2-0, 1.1-4, 1.1-3, 1.1-2, 1.1-1, 1.1-0, 1.0.6-0
   
   :depends bamtools: 
   
   :depends bedtools: 
   
   :depends blast: 
   
   :depends bowtie2: 
   
   :depends mosdepth: 
   
   :depends parallel: 
   
   :depends pathoscope: 
   
   :depends r-dplyr: 
   
   :depends r-getopt: 
   
   :depends r-ggplot2: 
   
   :depends r-gplots: 
   
   :depends r-gsubfn: 
   
   :depends readline: >=6.2
   
   :depends samtools: 
   
   :depends seqtk: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install grid

   and update with::

      conda update grid

   or use the docker container::

      docker pull quay.io/biocontainers/grid:<tag>

   (see `grid/tags`_ for valid values for ``<tag>``)


.. |downloads_grid| image:: https://img.shields.io/conda/dn/bioconda/grid.svg?style=flat
   :alt:   (downloads)
.. |docker_grid| image:: https://quay.io/repository/biocontainers/grid/status
   :target: https://quay.io/repository/biocontainers/grid
.. _`grid/tags`: https://quay.io/repository/biocontainers/grid?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/grid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/grid/README.html