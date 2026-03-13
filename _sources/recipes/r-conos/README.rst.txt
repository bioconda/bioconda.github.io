:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-conos'
.. highlight: bash

r-conos
=======

.. conda:recipe:: r-conos
   :replaces_section_title:
   :noindex:

   Wires together large collections of single\-cell RNA\-seq datasets\, which allows for both the identification of recurrent cell clusters and the propagation of information between datasets in multi\-sample or atlas\-scale collections. \'Conos\' focuses on the uniform mapping of homologous cell types across heterogeneous sample collections. For instance\, users could investigate a collection of dozens of peripheral blood samples from cancer patients combined with dozens of controls\, which perhaps includes samples of a related tissue such as lymph nodes. This package interacts with data available through the \'conosPanel\' package\, which is available in a \'drat\' repository. To access this data package\, see the instructions at \<https\:\/\/github.com\/kharchenkolab\/conos\>. The size of the \'conosPanel\' package is approximately 12 MB.

   :homepage: https://github.com/kharchenkolab/conos
   :license: GPL3 / GPL-3.0-only
   :recipe: /`r-conos <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-conos>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-conos/meta.yaml>`_

   


.. conda:package:: r-conos

   |downloads_r-conos| |docker_r-conos|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.2-1</code>,  <code>1.5.2-0</code>,  <code>1.5.1-0</code>,  <code>1.5.0-3</code>,  <code>1.5.0-2</code>,  <code>1.5.0-1</code>,  <code>1.5.0-0</code>,  <code>1.4.9-0</code>,  <code>1.4.8-0</code>,  </span></summary>
      

      ``1.5.2-1``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-3``,  ``1.5.0-2``,  ``1.5.0-1``,  ``1.5.0-0``,  ``1.4.9-0``,  ``1.4.8-0``,  ``1.4.7-0``,  ``1.4.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-complexheatmap: ``>=2.22.0,<2.23.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on r-abind: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-cowplot: 
   :depends on r-dendextend: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-gridextra: 
   :depends on r-igraph: 
   :depends on r-irlba: 
   :depends on r-leidenalg: 
   :depends on r-magrittr: 
   :depends on r-matrix: 
   :depends on r-n2r: 
   :depends on r-r6: 
   :depends on r-rcpp: 
   :depends on r-rcpparmadillo: 
   :depends on r-rcppeigen: 
   :depends on r-rcppprogress: 
   :depends on r-reshape2: 
   :depends on r-rlang: 
   :depends on r-rtsne: 
   :depends on r-sccore: ``>=1.0.0``

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

    pixi global install r-conos

to add into an existing workspace instead, run::

    pixi add r-conos

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-conos

Alternatively, to install into a new environment, run::

    conda create -n envname r-conos

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-conos:<tag>

(see `r-conos/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-conos| image:: https://img.shields.io/conda/dn/bioconda/r-conos.svg?style=flat
   :target: https://anaconda.org/bioconda/r-conos
   :alt:   (downloads)
.. |docker_r-conos| image:: https://quay.io/repository/biocontainers/r-conos/status
   :target: https://quay.io/repository/biocontainers/r-conos
.. _`r-conos/tags`: https://quay.io/repository/biocontainers/r-conos?tab=tags


.. raw:: html

    <script>
        var package = "r-conos";
        var versions = ["1.5.2","1.5.2","1.5.1","1.5.0","1.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-conos/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-conos/README.html