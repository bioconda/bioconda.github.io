:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kompot'
.. highlight: bash

kompot
======

.. conda:recipe:: kompot
   :replaces_section_title:
   :noindex:

   Differential abundance and gene expression analysis using Mahalanobis distance with JAX backend

   :homepage: https://github.com/settylab/kompot
   :documentation: https://kompot.readthedocs.io/
   
   :license: GPL / GPL-3.0-or-later
   :recipe: /`kompot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kompot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kompot/meta.yaml>`_

   Kompot performs differential abundance and differential gene expression
   analysis using Gaussian process\-based methods with Mahalanobis distance.
   It features a fast JAX backend and supports both Python API and CLI.



.. conda:package:: kompot

   |downloads_kompot| |docker_kompot|

   :versions:
      
      

      ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``

      

   
   :depends on anndata: ``>=0.8.0``
   :depends on filelock: ``>=3.12.0``
   :depends on jax: ``>=0.3.0``
   :depends on jaxlib: ``>=0.3.0``
   :depends on matplotlib-base: ``>=3.5.0``
   :depends on mellon: ``>=1.6.0``
   :depends on numpy: ``>=1.20.0``
   :depends on pandas: ``>=1.3.0``
   :depends on psutil: ``>=5.9.0``
   :depends on pynndescent: ``>=0.5.0``
   :depends on python: ``>=3.9``
   :depends on python-igraph: ``>=0.10.0``
   :depends on pyyaml: ``>=5.0.0``
   :depends on scikit-learn: ``>=1.0.0``
   :depends on scipy: ``>=1.7.0``
   :depends on statsmodels: ``>=0.13.0``
   :depends on tqdm: ``>=4.60.0``

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

    pixi global install kompot

to add into an existing workspace instead, run::

    pixi add kompot

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kompot

Alternatively, to install into a new environment, run::

    conda create -n envname kompot

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kompot:<tag>

(see `kompot/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kompot| image:: https://img.shields.io/conda/dn/bioconda/kompot.svg?style=flat
   :target: https://anaconda.org/bioconda/kompot
   :alt:   (downloads)
.. |docker_kompot| image:: https://quay.io/repository/biocontainers/kompot/status
   :target: https://quay.io/repository/biocontainers/kompot
.. _`kompot/tags`: https://quay.io/repository/biocontainers/kompot?tab=tags


.. raw:: html

    <script>
        var package = "kompot";
        var versions = ["0.6.3","0.6.2","0.6.1","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kompot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kompot/README.html