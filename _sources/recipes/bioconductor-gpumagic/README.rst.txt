:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gpumagic'
.. highlight: bash

bioconductor-gpumagic
=====================

.. conda:recipe:: bioconductor-gpumagic
   :replaces_section_title:
   :noindex:

   An openCL compiler with the capacity to compile R functions and run the code on GPU

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/gpuMagic.html
   :license: GPL-3
   :recipe: /`bioconductor-gpumagic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gpumagic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gpumagic/meta.yaml>`_

   The package aims to help users write openCL code with little or no effort. It is able to compile an user\-defined R function and run it on a device such as a CPU or a GPU. The user can also write and run their openCL code directly by calling .kernel function.


.. conda:package:: bioconductor-gpumagic

   |downloads_bioconductor-gpumagic| |docker_bioconductor-gpumagic|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.10.0-2</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.10.0-2``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends on bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libcxx: ``>=18``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-deriv: 
   :depends on r-desctools: 
   :depends on r-digest: 
   :depends on r-pryr: 
   :depends on r-rcpp: 
   :depends on r-stringr: 

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

    pixi global install bioconductor-gpumagic

to add into an existing workspace instead, run::

    pixi add bioconductor-gpumagic

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-gpumagic

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-gpumagic

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-gpumagic:<tag>

(see `bioconductor-gpumagic/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-gpumagic| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gpumagic.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gpumagic
   :alt:   (downloads)
.. |docker_bioconductor-gpumagic| image:: https://quay.io/repository/biocontainers/bioconductor-gpumagic/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gpumagic
.. _`bioconductor-gpumagic/tags`: https://quay.io/repository/biocontainers/bioconductor-gpumagic?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gpumagic";
        var versions = ["1.22.0","1.18.0","1.18.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gpumagic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gpumagic/README.html