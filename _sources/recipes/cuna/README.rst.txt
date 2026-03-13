:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cuna'
.. highlight: bash

cuna
====

.. conda:recipe:: cuna
   :replaces_section_title:
   :noindex:

   CUNA\: Cytosine Uracil Neural Algorithm for ancient DNA damage detection using nanopore signals.

   :homepage: https://github.com/iris1901/CUNA
   :license: MIT / MIT
   :recipe: /`cuna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cuna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cuna/meta.yaml>`_

   CUNA is a deep learning pipeline for detecting cytosine deamination \(C→U\) events in ancient DNA\, using raw nanopore signals.
   It includes feature extraction\, model training\, and modification detection.



.. conda:package:: cuna

   |downloads_cuna| |docker_cuna|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends on h5py: 
   :depends on matplotlib-base: 
   :depends on numba: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pod5: 
   :depends on pyarrow: ``20.0.0.*``
   :depends on pysam: 
   :depends on python: ``>=3.8``
   :depends on pytorch: 
   :depends on samtools: 
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on tqdm: 

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

    pixi global install cuna

to add into an existing workspace instead, run::

    pixi add cuna

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cuna

Alternatively, to install into a new environment, run::

    conda create -n envname cuna

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cuna:<tag>

(see `cuna/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cuna| image:: https://img.shields.io/conda/dn/bioconda/cuna.svg?style=flat
   :target: https://anaconda.org/bioconda/cuna
   :alt:   (downloads)
.. |docker_cuna| image:: https://quay.io/repository/biocontainers/cuna/status
   :target: https://quay.io/repository/biocontainers/cuna
.. _`cuna/tags`: https://quay.io/repository/biocontainers/cuna?tab=tags


.. raw:: html

    <script>
        var package = "cuna";
        var versions = ["0.3.0","0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cuna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cuna/README.html