:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-sceasy'
.. highlight: bash

r-sceasy
========

.. conda:recipe:: r-sceasy
   :replaces_section_title:
   :noindex:

   A package providing functions to convert between different single\-cell data formats.

   :homepage: https://github.com/cellgeni/sceasy
   :license: GPL / GPL3
   :recipe: /`r-sceasy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sceasy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sceasy/meta.yaml>`_

   


.. conda:package:: r-sceasy

   |downloads_r-sceasy| |docker_r-sceasy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.7-3</code>,  <code>0.0.7-2</code>,  <code>0.0.7-1</code>,  <code>0.0.7-0</code>,  <code>0.0.6-2</code>,  <code>0.0.6-1</code>,  <code>0.0.6-0</code>,  <code>0.0.5-1</code>,  <code>0.0.5-0</code>,  </span></summary>
      

      ``0.0.7-3``,  ``0.0.7-2``,  ``0.0.7-1``,  ``0.0.7-0``,  ``0.0.6-2``,  ``0.0.6-1``,  ``0.0.6-0``,  ``0.0.5-1``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on anndata: 
   :depends on bioconductor-loomexperiment: ``>=1.1.5``
   :depends on bioconductor-singlecellexperiment: ``>=1.4.0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-monocle3: ``>=1.0.0``
   :depends on r-reticulate: 
   :depends on r-seurat: ``>=3.0.1``
   :depends on scipy: 

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

    pixi global install r-sceasy

to add into an existing workspace instead, run::

    pixi add r-sceasy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-sceasy

Alternatively, to install into a new environment, run::

    conda create -n envname r-sceasy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-sceasy:<tag>

(see `r-sceasy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-sceasy| image:: https://img.shields.io/conda/dn/bioconda/r-sceasy.svg?style=flat
   :target: https://anaconda.org/bioconda/r-sceasy
   :alt:   (downloads)
.. |docker_r-sceasy| image:: https://quay.io/repository/biocontainers/r-sceasy/status
   :target: https://quay.io/repository/biocontainers/r-sceasy
.. _`r-sceasy/tags`: https://quay.io/repository/biocontainers/r-sceasy?tab=tags


.. raw:: html

    <script>
        var package = "r-sceasy";
        var versions = ["0.0.7","0.0.7","0.0.7","0.0.7","0.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-sceasy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-sceasy/README.html