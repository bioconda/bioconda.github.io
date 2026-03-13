:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-bpcells'
.. highlight: bash

r-bpcells
=========

.. conda:recipe:: r-bpcells
   :replaces_section_title:
   :noindex:

   Efficient operations for single cell ATAC\-seq fragments and RNA counts matrices. Interoperable with standard file formats\, and introduces efficient bit\-packed formats that allow large storage savings and increased read speeds.

   :homepage: https://bnprks.github.io/BPCells
   :developer docs: https://github.com/bnprks/BPCells
   :license: MIT / Apache-2.0 or MIT
   :recipe: /`r-bpcells <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bpcells>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bpcells/meta.yaml>`_

   


.. conda:package:: r-bpcells

   |downloads_r-bpcells| |docker_r-bpcells|

   :versions:
      
      

      ``0.3.1-0``,  ``0.3.0-1``,  ``0.3.0-0``

      

   
   :depends on hdf5: ``>=1.14.3,<1.14.4.0a0``
   :depends on libgcc: ``>=13``
   :depends on libhwy: ``>=1.1.0,<1.2.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-dplyr: ``>=1.0.0``
   :depends on r-ggplot2: ``>=3.4.0``
   :depends on r-ggrepel: 
   :depends on r-hexbin: 
   :depends on r-lifecycle: 
   :depends on r-magrittr: 
   :depends on r-matrix: 
   :depends on r-patchwork: 
   :depends on r-rcolorbrewer: 
   :depends on r-rcpp: 
   :depends on r-readr: 
   :depends on r-rlang: 
   :depends on r-scales: 
   :depends on r-scattermore: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-vctrs: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install r-bpcells

to add into an existing workspace instead, run::

    pixi add r-bpcells

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-bpcells

Alternatively, to install into a new environment, run::

    conda create -n envname r-bpcells

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-bpcells:<tag>

(see `r-bpcells/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-bpcells| image:: https://img.shields.io/conda/dn/bioconda/r-bpcells.svg?style=flat
   :target: https://anaconda.org/bioconda/r-bpcells
   :alt:   (downloads)
.. |docker_r-bpcells| image:: https://quay.io/repository/biocontainers/r-bpcells/status
   :target: https://quay.io/repository/biocontainers/r-bpcells
.. _`r-bpcells/tags`: https://quay.io/repository/biocontainers/r-bpcells?tab=tags


.. raw:: html

    <script>
        var package = "r-bpcells";
        var versions = ["0.3.1","0.3.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-bpcells/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-bpcells/README.html