:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pegasuspy'
.. highlight: bash

pegasuspy
=========

.. conda:recipe:: pegasuspy
   :replaces_section_title:
   :noindex:

   An efficient Python analysis tool which scales to transcriptomes of millions of single cells.

   :homepage: https://github.com/lilab-bcb/pegasus
   :documentation: https://pegasus.readthedocs.io
   
   :license: BSD / BSD-3-Clause
   :recipe: /`pegasuspy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pegasuspy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pegasuspy/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41592-020-0905-x`

   Pegasus is a tool for analyzing transcriptomes of millions of single cells.
   It is a command line tool\, a python package and a base for Cloud\-based analysis workflows.



.. conda:package:: pegasuspy

   |downloads_pegasuspy| |docker_pegasuspy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.10.2-1</code>,  <code>1.10.2-0</code>,  <code>1.10.1-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.9.1.post1-0</code>,  <code>1.9.0-0</code>,  <code>1.8.1-0</code>,  <code>1.7.1-2</code>,  </span></summary>
      

      ``1.10.2-1``,  ``1.10.2-0``,  ``1.10.1-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.9.1.post1-0``,  ``1.9.0-0``,  ``1.8.1-0``,  ``1.7.1-2``,  ``1.7.1-1``,  ``1.7.1-0``,  ``1.6.0-0``,  ``1.5.0-0``,  ``1.2.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on adjusttext: 
   :depends on anndata: ``>=0.7.1``
   :depends on demuxem: 
   :depends on docopt: 
   :depends on forceatlas2-python: 
   :depends on harmony-pytorch: 
   :depends on hnswlib: 
   :depends on joblib: ``>=0.14``
   :depends on leidenalg: ``>=0.8.0``
   :depends on libgcc: ``>=14``
   :depends on lightgbm: ``>=2.2.1``
   :depends on loompy: 
   :depends on louvain: ``>=0.7.0``
   :depends on matplotlib-base: ``>=3.7.0``
   :depends on natsort: 
   :depends on numba: 
   :depends on numpy: ``<2``
   :depends on pandas: ``>=1.2.0``
   :depends on pegasusio: ``>=0.9.1``
   :depends on pip: ``<25.3``
   :depends on psutil: 
   :depends on pybind11: 
   :depends on pyfit-sne: ``>=1.1.1``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python-igraph: ``>=0.8.0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on scikit-learn: ``>=0.23.2``
   :depends on scikit-misc: 
   :depends on scipy: 
   :depends on seaborn-base: ``>=0.13.0``
   :depends on setuptools: ``<81``
   :depends on statsmodels: 
   :depends on tbb: 
   :depends on threadpoolctl: 
   :depends on umap-learn: ``>=0.5.2``
   :depends on wordcloud: 
   :depends on xlsxwriter: 
   :depends on zarr: ``<3``

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

    pixi global install pegasuspy

to add into an existing workspace instead, run::

    pixi add pegasuspy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pegasuspy

Alternatively, to install into a new environment, run::

    conda create -n envname pegasuspy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pegasuspy:<tag>

(see `pegasuspy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pegasuspy| image:: https://img.shields.io/conda/dn/bioconda/pegasuspy.svg?style=flat
   :target: https://anaconda.org/bioconda/pegasuspy
   :alt:   (downloads)
.. |docker_pegasuspy| image:: https://quay.io/repository/biocontainers/pegasuspy/status
   :target: https://quay.io/repository/biocontainers/pegasuspy
.. _`pegasuspy/tags`: https://quay.io/repository/biocontainers/pegasuspy?tab=tags


.. raw:: html

    <script>
        var package = "pegasuspy";
        var versions = ["1.10.2","1.10.2","1.10.1","1.10.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pegasuspy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pegasuspy/README.html