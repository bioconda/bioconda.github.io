:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-mixkernel'
.. highlight: bash

r-mixkernel
===========

.. conda:recipe:: r-mixkernel
   :replaces_section_title:
   :noindex:

   Kernel\-based methods are powerful methods for integrating  heterogeneous types of data. mixKernel aims at providing methods to combine kernel for unsupervised exploratory analysis. Different solutions are  provided to compute a meta\-kernel\, in a consensus way or in a way that  best preserves the original topology of the data. mixKernel also integrates kernel PCA to visualize similarities between samples in a non linear space and from the multiple source point of view. Functions to assess and display important variables are also provided in the package. Jerome Mariette and  Nathalie Villa\-Vialaneix \(2017\) \<doi\:10.1093\/bioinformatics\/btx682\>.

   :homepage: https://CRAN.R-project.org/package=mixKernel
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-mixkernel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mixkernel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mixkernel/meta.yaml>`_

   


.. conda:package:: r-mixkernel

   |downloads_r-mixkernel| |docker_r-mixkernel|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9-1</code>,  <code>0.9-0</code>,  <code>0.8-2</code>,  <code>0.8-1</code>,  <code>0.8-0</code>,  <code>0.7-0</code>,  <code>0.6-0</code>,  <code>0.5-2</code>,  <code>0.5-1</code>,  </span></summary>
      

      ``0.9-1``,  ``0.9-0``,  ``0.8-2``,  ``0.8-1``,  ``0.8-0``,  ``0.7-0``,  ``0.6-0``,  ``0.5-2``,  ``0.5-1``,  ``0.5-0``,  ``0.4-2``,  ``0.4-1``,  ``0.4-0``,  ``0.3-1``,  ``0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-mixomics: 
   :depends on bioconductor-phyloseq: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-corrplot: 
   :depends on r-ggplot2: 
   :depends on r-ldrtools: 
   :depends on r-markdown: 
   :depends on r-matrix: 
   :depends on r-psych: 
   :depends on r-quadprog: 
   :depends on r-reticulate: ``>=1.14``
   :depends on r-vegan: 

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

    pixi global install r-mixkernel

to add into an existing workspace instead, run::

    pixi add r-mixkernel

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-mixkernel

Alternatively, to install into a new environment, run::

    conda create -n envname r-mixkernel

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-mixkernel:<tag>

(see `r-mixkernel/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-mixkernel| image:: https://img.shields.io/conda/dn/bioconda/r-mixkernel.svg?style=flat
   :target: https://anaconda.org/bioconda/r-mixkernel
   :alt:   (downloads)
.. |docker_r-mixkernel| image:: https://quay.io/repository/biocontainers/r-mixkernel/status
   :target: https://quay.io/repository/biocontainers/r-mixkernel
.. _`r-mixkernel/tags`: https://quay.io/repository/biocontainers/r-mixkernel?tab=tags


.. raw:: html

    <script>
        var package = "r-mixkernel";
        var versions = ["0.9","0.9","0.8","0.8","0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-mixkernel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-mixkernel/README.html