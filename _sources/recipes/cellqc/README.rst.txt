:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cellqc'
.. highlight: bash

cellqc
======

.. conda:recipe:: cellqc
   :replaces_section_title:
   :noindex:

   Cellqc standardizes the qualiy control of single\-cell RNA\-Seq \(scRNA\) data to render clean feature count matrices.

   :homepage: https://github.com/lijinbio/cellqc
   :license: MIT / MIT
   :recipe: /`cellqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cellqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cellqc/meta.yaml>`_

   


.. conda:package:: cellqc

   |downloads_cellqc| |docker_cellqc|

   :versions:
      
      

      ``0.1.0-0``,  ``0.0.8-0``,  ``0.0.7-0``,  ``0.0.6-1``,  ``0.0.6-0``,  ``0.0.4-1``,  ``0.0.4-0``,  ``0.0.3-0``

      

   
   :depends on anndata: ``0.7.8.*``
   :depends on bioconductor-dropletutils: 
   :depends on click: 
   :depends on graphviz: 
   :depends on numpy: 
   :depends on pygraphviz: 
   :depends on python: ``>=3.9``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-harmony: 
   :depends on r-remotes: 
   :depends on r-scpred: 
   :depends on r-seurat: 
   :depends on r-seuratobject: 
   :depends on r-soupx: ``>=1.6.2``
   :depends on scanpy: ``>=1.9.1``
   :depends on snakemake: 

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

    pixi global install cellqc

to add into an existing workspace instead, run::

    pixi add cellqc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cellqc

Alternatively, to install into a new environment, run::

    conda create -n envname cellqc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cellqc:<tag>

(see `cellqc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cellqc| image:: https://img.shields.io/conda/dn/bioconda/cellqc.svg?style=flat
   :target: https://anaconda.org/bioconda/cellqc
   :alt:   (downloads)
.. |docker_cellqc| image:: https://quay.io/repository/biocontainers/cellqc/status
   :target: https://quay.io/repository/biocontainers/cellqc
.. _`cellqc/tags`: https://quay.io/repository/biocontainers/cellqc?tab=tags


.. raw:: html

    <script>
        var package = "cellqc";
        var versions = ["0.1.0","0.0.8","0.0.7","0.0.6","0.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cellqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cellqc/README.html