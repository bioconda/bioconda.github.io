:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'boms'
.. highlight: bash

boms
====

.. conda:recipe:: boms
   :replaces_section_title:
   :noindex:

   Cell Segmentation for Spatial Transcriptomics Data using BOMS

   :homepage: https://github.com/ocimakamboj/boms
   :license: MIT
   :recipe: /`boms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/boms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/boms/meta.yaml>`_

   


.. conda:package:: boms

   |downloads_boms| |docker_boms|

   :versions:
      
      

      ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.5-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on matplotlib-base: 
   :depends on mkl: 
   :depends on mkl-service: 
   :depends on numpy: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on scikit-learn: 
   :depends on scipy: 

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

    pixi global install boms

to add into an existing workspace instead, run::

    pixi add boms

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install boms

Alternatively, to install into a new environment, run::

    conda create -n envname boms

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/boms:<tag>

(see `boms/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_boms| image:: https://img.shields.io/conda/dn/bioconda/boms.svg?style=flat
   :target: https://anaconda.org/bioconda/boms
   :alt:   (downloads)
.. |docker_boms| image:: https://quay.io/repository/biocontainers/boms/status
   :target: https://quay.io/repository/biocontainers/boms
.. _`boms/tags`: https://quay.io/repository/biocontainers/boms?tab=tags


.. raw:: html

    <script>
        var package = "boms";
        var versions = ["1.1.0","1.1.0","1.1.0","1.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/boms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/boms/README.html