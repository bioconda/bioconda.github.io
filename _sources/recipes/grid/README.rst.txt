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
      

   
   :depends on bamtools: 
   :depends on bedtools: 
   :depends on blast: 
   :depends on bowtie2: 
   :depends on mosdepth: 
   :depends on parallel: 
   :depends on pathoscope: 
   :depends on r-dplyr: 
   :depends on r-getopt: 
   :depends on r-ggplot2: 
   :depends on r-gplots: 
   :depends on r-gsubfn: 
   :depends on readline: ``>=6.2``
   :depends on samtools: 
   :depends on seqtk: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install grid

to add into an existing workspace instead, run::

    pixi add grid

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install grid

Alternatively, to install into a new environment, run::

    conda create -n envname grid

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/grid:<tag>

(see `grid/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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