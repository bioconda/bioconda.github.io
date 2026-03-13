:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cellitac'
.. highlight: bash

cellitac
========

.. conda:recipe:: cellitac
   :replaces_section_title:
   :noindex:

   Cell type identification using Transcription factor Analysis and Chromatin accessibility

   :homepage: https://github.com/omicscodeathon/cellitac
   :license: MIT
   :recipe: /`cellitac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cellitac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cellitac/meta.yaml>`_

   


.. conda:package:: cellitac

   |downloads_cellitac| |docker_cellitac|

   :versions:
      
      

      ``1.0.4-0``

      

   
   :depends on bioconductor-celldex: 
   :depends on bioconductor-ensdb.hsapiens.v75: 
   :depends on bioconductor-singler: 
   :depends on imbalanced-learn: 
   :depends on matplotlib-base: 
   :depends on networkx: 
   :depends on numpy: 
   :depends on openpyxl: 
   :depends on pandas: 
   :depends on plotly: 
   :depends on python: ``>=3.9,<3.13``
   :depends on r-base: ``>=4.3``
   :depends on r-hdf5r: 
   :depends on r-matrix: 
   :depends on r-seurat: 
   :depends on r-signac: 
   :depends on rpy2: 
   :depends on scikit-learn: 
   :depends on seaborn: 
   :depends on xgboost: 

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

    pixi global install cellitac

to add into an existing workspace instead, run::

    pixi add cellitac

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cellitac

Alternatively, to install into a new environment, run::

    conda create -n envname cellitac

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cellitac:<tag>

(see `cellitac/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cellitac| image:: https://img.shields.io/conda/dn/bioconda/cellitac.svg?style=flat
   :target: https://anaconda.org/bioconda/cellitac
   :alt:   (downloads)
.. |docker_cellitac| image:: https://quay.io/repository/biocontainers/cellitac/status
   :target: https://quay.io/repository/biocontainers/cellitac
.. _`cellitac/tags`: https://quay.io/repository/biocontainers/cellitac?tab=tags


.. raw:: html

    <script>
        var package = "cellitac";
        var versions = ["1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cellitac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cellitac/README.html