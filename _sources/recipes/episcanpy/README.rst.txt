:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'episcanpy'
.. highlight: bash

episcanpy
=========

.. conda:recipe:: episcanpy
   :replaces_section_title:
   :noindex:

   Epigenomics Single\-Cell Analysis in Python.

   :homepage: https://github.com/colomemaria/epiScanpy
   :license: BSD-3-Clause
   :recipe: /`episcanpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/episcanpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/episcanpy/meta.yaml>`_
   :links: biotools: :biotools:`epiScanpy`, doi: :doi:`10.1038/s41467-021-25131-3`

   


.. conda:package:: episcanpy

   |downloads_episcanpy| |docker_episcanpy|

   :versions:
      
      

      ``0.4.0-0``,  ``0.3.2-0``

      

   
   :depends on anndata: 
   :depends on bamnostic: 
   :depends on h5py: 
   :depends on importlib-metadata: ``>=0.7``
   :depends on intervaltree: 
   :depends on joblib: 
   :depends on kneed: 
   :depends on legacy-api-wrap: 
   :depends on matplotlib-base: 
   :depends on natsort: 
   :depends on networkx: 
   :depends on numba: ``>=0.50.0``
   :depends on numpy: ``>=1.21.2``
   :depends on packaging: 
   :depends on pandas: 
   :depends on pysam: 
   :depends on python: ``>=3.7``
   :depends on scanpy: 
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on seaborn: 
   :depends on setuptools-scm: 
   :depends on statsmodels: 
   :depends on tbb: 
   :depends on tqdm: 
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

    pixi global install episcanpy

to add into an existing workspace instead, run::

    pixi add episcanpy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install episcanpy

Alternatively, to install into a new environment, run::

    conda create -n envname episcanpy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/episcanpy:<tag>

(see `episcanpy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_episcanpy| image:: https://img.shields.io/conda/dn/bioconda/episcanpy.svg?style=flat
   :target: https://anaconda.org/bioconda/episcanpy
   :alt:   (downloads)
.. |docker_episcanpy| image:: https://quay.io/repository/biocontainers/episcanpy/status
   :target: https://quay.io/repository/biocontainers/episcanpy
.. _`episcanpy/tags`: https://quay.io/repository/biocontainers/episcanpy?tab=tags


.. raw:: html

    <script>
        var package = "episcanpy";
        var versions = ["0.4.0","0.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/episcanpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/episcanpy/README.html