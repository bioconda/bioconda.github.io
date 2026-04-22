:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'resmico'
.. highlight: bash

resmico
=======

.. conda:recipe:: resmico
   :replaces_section_title:
   :noindex:

   Increasing the quality of metagenome\-assembled genomes with deep learning

   :homepage: https://github.com/leylabmpi/ResMiCo
   :license: MIT / MIT
   :recipe: /`resmico <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/resmico>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/resmico/meta.yaml>`_

   


.. conda:package:: resmico

   |downloads_resmico| |docker_resmico|

   :versions:
      
      

      ``1.2.2-1``,  ``1.2.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.12-0``

      

   
   :depends on cmake: ``>=3.13``
   :depends on ipython: 
   :depends on keras: ``>=2.8.0``
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on libzlib: ``>=1.2.13,<1.3.0a0``
   :depends on numpy: ``>=1.17.0``
   :depends on numpy: ``>=1.24.3,<2.0a0``
   :depends on pandas: ``>=1.4.2``
   :depends on pathos: ``>=0.2.9``
   :depends on protobuf: ``>=3.20``
   :depends on pysam: ``>=0.19.1``
   :depends on pytables: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on scikit-learn: ``>=1.1.1``
   :depends on tensorboard: ``<2.9.0``
   :depends on tensorflow: ``>=2.8.1``
   :depends on toolz: ``>=0.11.2``

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

    pixi global install resmico

to add into an existing workspace instead, run::

    pixi add resmico

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install resmico

Alternatively, to install into a new environment, run::

    conda create -n envname resmico

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/resmico:<tag>

(see `resmico/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_resmico| image:: https://img.shields.io/conda/dn/bioconda/resmico.svg?style=flat
   :target: https://anaconda.org/bioconda/resmico
   :alt:   (downloads)
.. |docker_resmico| image:: https://quay.io/repository/biocontainers/resmico/status
   :target: https://quay.io/repository/biocontainers/resmico
.. _`resmico/tags`: https://quay.io/repository/biocontainers/resmico?tab=tags


.. raw:: html

    <script>
        var package = "resmico";
        var versions = ["1.2.2","1.2.2","1.1.1","1.1.0","1.0.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/resmico/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/resmico/README.html