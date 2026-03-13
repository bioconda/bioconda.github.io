:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-fastbaps'
.. highlight: bash

r-fastbaps
==========

.. conda:recipe:: r-fastbaps
   :replaces_section_title:
   :noindex:

   A fast approximation to a Dirichlet Process Mixture model \(DPM\) for clustering genetic data

   :homepage: https://github.com/gtonkinhill/fastbaps
   :license: MIT / MIT
   :recipe: /`r-fastbaps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-fastbaps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-fastbaps/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.1472299`, doi: :doi:`10.1093/nar/gkz361`

   


.. conda:package:: r-fastbaps

   |downloads_r-fastbaps| |docker_r-fastbaps|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.8-4</code>,  <code>1.0.8-3</code>,  <code>1.0.8-2</code>,  <code>1.0.8-1</code>,  <code>1.0.8-0</code>,  <code>1.0.7-0</code>,  <code>1.0.6-1</code>,  <code>1.0.6-0</code>,  <code>1.0.4-0</code>,  </span></summary>
      

      ``1.0.8-4``,  ``1.0.8-3``,  ``1.0.8-2``,  ``1.0.8-1``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-1``,  ``1.0.6-0``,  ``1.0.4-0``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-ggtree: ``>=3.14.0,<3.15.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-adegenet: 
   :depends on r-ape: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-clusteval: 
   :depends on r-doparallel: 
   :depends on r-fastcluster: 
   :depends on r-genie: 
   :depends on r-ggplot2: 
   :depends on r-gplots: 
   :depends on r-irlba: 
   :depends on r-matrix: 
   :depends on r-optparse: 
   :depends on r-phytools: 
   :depends on r-rcpp: 
   :depends on r-rcpparmadillo: 

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

    pixi global install r-fastbaps

to add into an existing workspace instead, run::

    pixi add r-fastbaps

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-fastbaps

Alternatively, to install into a new environment, run::

    conda create -n envname r-fastbaps

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-fastbaps:<tag>

(see `r-fastbaps/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-fastbaps| image:: https://img.shields.io/conda/dn/bioconda/r-fastbaps.svg?style=flat
   :target: https://anaconda.org/bioconda/r-fastbaps
   :alt:   (downloads)
.. |docker_r-fastbaps| image:: https://quay.io/repository/biocontainers/r-fastbaps/status
   :target: https://quay.io/repository/biocontainers/r-fastbaps
.. _`r-fastbaps/tags`: https://quay.io/repository/biocontainers/r-fastbaps?tab=tags


.. raw:: html

    <script>
        var package = "r-fastbaps";
        var versions = ["1.0.8","1.0.8","1.0.8","1.0.8","1.0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-fastbaps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-fastbaps/README.html