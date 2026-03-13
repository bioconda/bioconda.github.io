:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gene-trajectory-python'
.. highlight: bash

gene-trajectory-python
======================

.. conda:recipe:: gene-trajectory-python
   :replaces_section_title:
   :noindex:

   Compute gene trajectories

   :homepage: https://github.com/KlugerLab/GeneTrajectory-python
   :license: MIT
   :recipe: /`gene-trajectory-python <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gene-trajectory-python>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gene-trajectory-python/meta.yaml>`_

   Gene Trajectory is a Python package that computes and analyzes gene trajectories in single\-cell data.
   It provides tools for trajectory inference\, gene expression analysis along trajectories\, and visualization of results.



.. conda:package:: gene-trajectory-python

   |downloads_gene-trajectory-python| |docker_gene-trajectory-python|

   :versions:
      
      

      ``1.0.4-0``

      

   
   :depends on matplotlib-base: ``>=3.6``
   :depends on numpy: ``>=1.25``
   :depends on pandas: ``>=1.5``
   :depends on pot: ``>=0.8.2``
   :depends on python: ``>=3.9``
   :depends on python-igraph: ``>=0.10``
   :depends on scanpy: ``>=1.9.3``
   :depends on scikit-learn: ``>=0.24``
   :depends on scikit-misc: ``>=0.1.3``
   :depends on scipy: ``>=1.8``
   :depends on seaborn: ``>=0.13``
   :depends on tqdm: ``>=4.64.1``

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

    pixi global install gene-trajectory-python

to add into an existing workspace instead, run::

    pixi add gene-trajectory-python

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gene-trajectory-python

Alternatively, to install into a new environment, run::

    conda create -n envname gene-trajectory-python

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gene-trajectory-python:<tag>

(see `gene-trajectory-python/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gene-trajectory-python| image:: https://img.shields.io/conda/dn/bioconda/gene-trajectory-python.svg?style=flat
   :target: https://anaconda.org/bioconda/gene-trajectory-python
   :alt:   (downloads)
.. |docker_gene-trajectory-python| image:: https://quay.io/repository/biocontainers/gene-trajectory-python/status
   :target: https://quay.io/repository/biocontainers/gene-trajectory-python
.. _`gene-trajectory-python/tags`: https://quay.io/repository/biocontainers/gene-trajectory-python?tab=tags


.. raw:: html

    <script>
        var package = "gene-trajectory-python";
        var versions = ["1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gene-trajectory-python/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gene-trajectory-python/README.html