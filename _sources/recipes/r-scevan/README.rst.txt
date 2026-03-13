:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-scevan'
.. highlight: bash

r-scevan
========

.. conda:recipe:: r-scevan
   :replaces_section_title:
   :noindex:

   Single CEll Variational Aneuploidy aNalysis

   :homepage: https://github.com/AntonioDeFalco/SCEVAN/
   :license: GPL3 / GPL-3.0-only
   :recipe: /`r-scevan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scevan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scevan/meta.yaml>`_

   


.. conda:package:: r-scevan

   |downloads_r-scevan| |docker_r-scevan|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.1-0``

      

   
   :depends on bioconductor-fgsea: 
   :depends on bioconductor-ggtree: 
   :depends on bioconductor-scran: 
   :depends on r-ape: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-cluster: 
   :depends on r-devtools: 
   :depends on r-dplyr: 
   :depends on r-forcats: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-optparse: 
   :depends on r-paralleldist: 
   :depends on r-pheatmap: 
   :depends on r-rtsne: 
   :depends on r-tidytree: 

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

    pixi global install r-scevan

to add into an existing workspace instead, run::

    pixi add r-scevan

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-scevan

Alternatively, to install into a new environment, run::

    conda create -n envname r-scevan

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-scevan:<tag>

(see `r-scevan/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-scevan| image:: https://img.shields.io/conda/dn/bioconda/r-scevan.svg?style=flat
   :target: https://anaconda.org/bioconda/r-scevan
   :alt:   (downloads)
.. |docker_r-scevan| image:: https://quay.io/repository/biocontainers/r-scevan/status
   :target: https://quay.io/repository/biocontainers/r-scevan
.. _`r-scevan/tags`: https://quay.io/repository/biocontainers/r-scevan?tab=tags


.. raw:: html

    <script>
        var package = "r-scevan";
        var versions = ["1.0.3","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-scevan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-scevan/README.html