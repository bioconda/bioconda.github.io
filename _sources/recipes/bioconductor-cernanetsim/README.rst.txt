:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cernanetsim'
.. highlight: bash

bioconductor-cernanetsim
========================

.. conda:recipe:: bioconductor-cernanetsim
   :replaces_section_title:
   :noindex:

   Regulation Simulator of Interaction between miRNA and Competing RNAs \(ceRNA\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ceRNAnetsim.html
   :license: GPL (>= 3.0)
   :recipe: /`bioconductor-cernanetsim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cernanetsim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cernanetsim/meta.yaml>`_

   This package simulates regulations of ceRNA \(Competing Endogenous\) expression levels after a expression level change in one or more miRNA\/mRNAs. The methodolgy adopted by the package has potential to incorparate any ceRNA \(circRNA\, lincRNA\, etc.\) into miRNA\:target interaction network.  The package basically distributes miRNA expression over available ceRNAs where each ceRNA attracks miRNAs proportional to its amount. But\, the package can utilize multiple parameters that modify miRNA effect on its target \(seed type\, binding energy\, binding location\, etc.\).  The functions handle the given dataset as graph object and the processes progress via edge and node variables.


.. conda:package:: bioconductor-cernanetsim

   |downloads_bioconductor-cernanetsim| |docker_bioconductor-cernanetsim|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-furrr: 
   :depends on r-future: 
   :depends on r-ggplot2: 
   :depends on r-ggraph: 
   :depends on r-igraph: 
   :depends on r-purrr: 
   :depends on r-rlang: 
   :depends on r-tibble: 
   :depends on r-tidygraph: 
   :depends on r-tidyr: 

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

    pixi global install bioconductor-cernanetsim

to add into an existing workspace instead, run::

    pixi add bioconductor-cernanetsim

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cernanetsim

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cernanetsim

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cernanetsim:<tag>

(see `bioconductor-cernanetsim/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cernanetsim| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cernanetsim.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cernanetsim
   :alt:   (downloads)
.. |docker_bioconductor-cernanetsim| image:: https://quay.io/repository/biocontainers/bioconductor-cernanetsim/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cernanetsim
.. _`bioconductor-cernanetsim/tags`: https://quay.io/repository/biocontainers/bioconductor-cernanetsim?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cernanetsim";
        var versions = ["1.22.0","1.18.0","1.14.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cernanetsim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cernanetsim/README.html