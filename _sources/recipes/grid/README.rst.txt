:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'grid'
.. highlight: bash

grid
====

.. conda:recipe:: grid
   :replaces_section_title:
   :noindex:

   Growth Rate Index \(GRiD\) measures bacterial growth rate from reference genomes \(including draft quality genomes\) and metagenomic bins at ultra\-low sequencing coverage \(\> 0.2x\).

   :homepage: https://github.com/ohlab/GRiD
   :license: MIT
   :recipe: /`grid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grid/meta.yaml>`_

   


.. conda:package:: grid

   |downloads_grid| |docker_grid|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3-3</code>,  <code>1.3-2</code>,  <code>1.3-1</code>,  <code>1.3-0</code>,  <code>1.2-0</code>,  <code>1.1-4</code>,  <code>1.1-3</code>,  <code>1.1-2</code>,  <code>1.1-1</code>,  </span></summary>
      

      ``1.3-3``,  ``1.3-2``,  ``1.3-1``,  ``1.3-0``,  ``1.2-0``,  ``1.1-4``,  ``1.1-3``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``,  ``1.0.6-0``

      
      .. raw:: html

         </details>
      

   
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
   :depends readline: ``>=6.2``
   :depends samtools: 
   :depends seqtk: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install grid

   and update with::

      mamba update grid

  To create a new environment, run::

      mamba create --name myenvname grid

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/grid:<tag>

   (see `grid/tags`_ for valid values for ``<tag>``)


.. |downloads_grid| image:: https://img.shields.io/conda/dn/bioconda/grid.svg?style=flat
   :target: https://anaconda.org/bioconda/grid
   :alt:   (downloads)
.. |docker_grid| image:: https://quay.io/repository/biocontainers/grid/status
   :target: https://quay.io/repository/biocontainers/grid
.. _`grid/tags`: https://quay.io/repository/biocontainers/grid?tab=tags


.. raw:: html

    <script>
        var package = "grid";
        var versions = ["1.3","1.3","1.3","1.3","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/grid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/grid/README.html