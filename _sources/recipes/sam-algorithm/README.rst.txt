:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sam-algorithm'
.. highlight: bash

sam-algorithm
=============

.. conda:recipe:: sam-algorithm
   :replaces_section_title:
   :noindex:

   The Self\-Assembling\-Manifold algorithm

   :homepage: https://github.com/atarashansky/self-assembling-manifold
   :license: MIT / MIT
   :recipe: /`sam-algorithm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sam-algorithm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sam-algorithm/meta.yaml>`_

   


.. conda:package:: sam-algorithm

   |downloads_sam-algorithm| |docker_sam-algorithm|

   :versions:
      
      

      ``1.0.2-0``,  ``0.9.0-0``,  ``0.8.9-0``,  ``0.8.8-0``,  ``0.8.7-0``,  ``0.8.6-0``,  ``0.8.5-0``,  ``0.8.4-0``,  ``0.8.3-0``

      

   
   :depends on anndata: ``>=0.7.4``
   :depends on dill: 
   :depends on h5py: 
   :depends on harmonypy: 
   :depends on hnswlib: 
   :depends on numba: ``>=0.50.1``
   :depends on numpy: ``>=1.19.0``
   :depends on packaging: ``>=0.20.0``
   :depends on pandas: ``>1.0.0``
   :depends on python: ``>=3.6``
   :depends on scikit-learn: ``>=0.23.1``
   :depends on scipy: ``>=1.3.1``
   :depends on umap-learn: ``>=0.4.6``

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

    pixi global install sam-algorithm

to add into an existing workspace instead, run::

    pixi add sam-algorithm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sam-algorithm

Alternatively, to install into a new environment, run::

    conda create -n envname sam-algorithm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sam-algorithm:<tag>

(see `sam-algorithm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sam-algorithm| image:: https://img.shields.io/conda/dn/bioconda/sam-algorithm.svg?style=flat
   :target: https://anaconda.org/bioconda/sam-algorithm
   :alt:   (downloads)
.. |docker_sam-algorithm| image:: https://quay.io/repository/biocontainers/sam-algorithm/status
   :target: https://quay.io/repository/biocontainers/sam-algorithm
.. _`sam-algorithm/tags`: https://quay.io/repository/biocontainers/sam-algorithm?tab=tags


.. raw:: html

    <script>
        var package = "sam-algorithm";
        var versions = ["1.0.2","0.9.0","0.8.9","0.8.8","0.8.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sam-algorithm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sam-algorithm/README.html