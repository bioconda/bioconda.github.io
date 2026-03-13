:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seurat-scripts'
.. highlight: bash

seurat-scripts
==============

.. conda:recipe:: seurat-scripts
   :replaces_section_title:
   :noindex:

   A set of wrappers for individual components of the Seurat package.

   :homepage: https://github.com/ebi-gene-expression-group/r-seurat-scripts
   :license: Apache / Apache-2.0
   :recipe: /`seurat-scripts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seurat-scripts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seurat-scripts/meta.yaml>`_

   


.. conda:package:: seurat-scripts

   |downloads_seurat-scripts| |docker_seurat-scripts|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.4.0-0</code>,  <code>4.0.0-0</code>,  <code>0.3.0-0</code>,  <code>0.0.9-2</code>,  <code>0.0.9-1</code>,  <code>0.0.9-0</code>,  <code>0.0.8-0</code>,  <code>0.0.7-0</code>,  <code>0.0.6-0</code>,  </span></summary>
      

      ``4.4.0-0``,  ``4.0.0-0``,  ``0.3.0-0``,  ``0.0.9-2``,  ``0.0.9-1``,  ``0.0.9-0``,  ``0.0.8-0``,  ``0.0.7-0``,  ``0.0.6-0``,  ``0.0.5-1``,  ``0.0.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-limma: 
   :depends on bioconductor-multtest: 
   :depends on bioconductor-scater: 
   :depends on libpng: 
   :depends on mscorefonts: 
   :depends on pandoc: 
   :depends on r-cairo: 
   :depends on r-loom: 
   :depends on r-metap: 
   :depends on r-optparse: 
   :depends on r-remotes: 
   :depends on r-seurat: ``<=4.4``
   :depends on r-seuratdisk: 
   :depends on r-svglite: 
   :depends on r-workflowscriptscommon: ``>=0.0.8``

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

    pixi global install seurat-scripts

to add into an existing workspace instead, run::

    pixi add seurat-scripts

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install seurat-scripts

Alternatively, to install into a new environment, run::

    conda create -n envname seurat-scripts

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/seurat-scripts:<tag>

(see `seurat-scripts/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_seurat-scripts| image:: https://img.shields.io/conda/dn/bioconda/seurat-scripts.svg?style=flat
   :target: https://anaconda.org/bioconda/seurat-scripts
   :alt:   (downloads)
.. |docker_seurat-scripts| image:: https://quay.io/repository/biocontainers/seurat-scripts/status
   :target: https://quay.io/repository/biocontainers/seurat-scripts
.. _`seurat-scripts/tags`: https://quay.io/repository/biocontainers/seurat-scripts?tab=tags


.. raw:: html

    <script>
        var package = "seurat-scripts";
        var versions = ["4.4.0","4.0.0","0.3.0","0.0.9","0.0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seurat-scripts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seurat-scripts/README.html