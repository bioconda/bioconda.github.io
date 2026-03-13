:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scib'
.. highlight: bash

scib
====

.. conda:recipe:: scib
   :replaces_section_title:
   :noindex:

   Evaluating single\-cell data integration methods

   :homepage: https://github.com/theislab/scib
   :documentation: https://scib.readthedocs.io/en/latest/
   
   :license: MIT / MIT
   :recipe: /`scib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scib/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41592-021-01336-8`

   


.. conda:package:: scib

   |downloads_scib| |docker_scib|

   :versions:
      
      

      ``1.1.7-1``,  ``1.1.7-0``,  ``1.1.6-0``,  ``1.1.5-1``,  ``1.1.5-0``,  ``1.1.4-1``,  ``1.1.4-0``

      

   
   :depends on anndata: ``>=0.7.2``
   :depends on deprecated: 
   :depends on h5py: 
   :depends on igraph: ``>=0.10``
   :depends on leidenalg: 
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on llvmlite: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: ``<2``
   :depends on pydot: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on scanpy: ``>=1.5,<1.10``
   :depends on scikit-learn: 
   :depends on scikit-misc: 
   :depends on scipy: 
   :depends on seaborn: 
   :depends on umap-learn: 

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

    pixi global install scib

to add into an existing workspace instead, run::

    pixi add scib

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install scib

Alternatively, to install into a new environment, run::

    conda create -n envname scib

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/scib:<tag>

(see `scib/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_scib| image:: https://img.shields.io/conda/dn/bioconda/scib.svg?style=flat
   :target: https://anaconda.org/bioconda/scib
   :alt:   (downloads)
.. |docker_scib| image:: https://quay.io/repository/biocontainers/scib/status
   :target: https://quay.io/repository/biocontainers/scib
.. _`scib/tags`: https://quay.io/repository/biocontainers/scib?tab=tags


.. raw:: html

    <script>
        var package = "scib";
        var versions = ["1.1.7","1.1.7","1.1.6","1.1.5","1.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scib/README.html