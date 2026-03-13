:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-sigtree'
.. highlight: bash

r-sigtree
=========

.. conda:recipe:: r-sigtree
   :replaces_section_title:
   :noindex:

   Provides tools to identify and visualize branches in a phylogenetic tree that are significantly responsive to some intervention\, taking as primary inputs a phylogenetic tree \(of class phylo\) and a data frame \(or matrix\) of corresponding tip \(OTU\) labels and p\-values.

   :homepage: https://CRAN.R-project.org/package=SigTree
   :license: GPL3 / GPL-3
   :recipe: /`r-sigtree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sigtree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sigtree/meta.yaml>`_

   


.. conda:package:: r-sigtree

   |downloads_r-sigtree| |docker_r-sigtree|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.10.6-13</code>,  <code>1.10.6-12</code>,  <code>1.10.6-11</code>,  <code>1.10.6-10</code>,  <code>1.10.6-9</code>,  <code>1.10.6-8</code>,  <code>1.10.6-7</code>,  <code>1.10.6-6</code>,  <code>1.10.6-5</code>,  </span></summary>
      

      ``1.10.6-13``,  ``1.10.6-12``,  ``1.10.6-11``,  ``1.10.6-10``,  ``1.10.6-9``,  ``1.10.6-8``,  ``1.10.6-7``,  ``1.10.6-6``,  ``1.10.6-5``,  ``1.10.6-4``,  ``1.10.6-3``,  ``1.10.6-2``,  ``1.10.6-1``,  ``1.10.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-phyloseq: ``>=1.54.0,<1.55.0a0``
   :depends on libgcc: ``>=14``
   :depends on r-ape: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-mass: 
   :depends on r-phyext2: ``>=0.0.4,<1.0a0``
   :depends on r-phylobase: 
   :depends on r-rcolorbrewer: 
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

    pixi global install r-sigtree

to add into an existing workspace instead, run::

    pixi add r-sigtree

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-sigtree

Alternatively, to install into a new environment, run::

    conda create -n envname r-sigtree

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-sigtree:<tag>

(see `r-sigtree/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-sigtree| image:: https://img.shields.io/conda/dn/bioconda/r-sigtree.svg?style=flat
   :target: https://anaconda.org/bioconda/r-sigtree
   :alt:   (downloads)
.. |docker_r-sigtree| image:: https://quay.io/repository/biocontainers/r-sigtree/status
   :target: https://quay.io/repository/biocontainers/r-sigtree
.. _`r-sigtree/tags`: https://quay.io/repository/biocontainers/r-sigtree?tab=tags


.. raw:: html

    <script>
        var package = "r-sigtree";
        var versions = ["1.10.6","1.10.6","1.10.6","1.10.6","1.10.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-sigtree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-sigtree/README.html