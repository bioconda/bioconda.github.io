:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'colabfold'
.. highlight: bash

colabfold
=========

.. conda:recipe:: colabfold
   :replaces_section_title:
   :noindex:

   ColabFold\: making protein folding accessible to all

   :homepage: https://github.com/sokrypton/ColabFold
   :license: MIT
   :recipe: /`colabfold <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/colabfold>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/colabfold/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41592-022-01488-1`, biotools: :biotools:`colabfold`

   


.. conda:package:: colabfold

   |downloads_colabfold| |docker_colabfold|

   :versions:
      
      

      ``1.5.5-2``,  ``1.5.5-1``,  ``1.5.5-0``,  ``1.5.3-1``,  ``1.5.3-0``

      

   
   :depends on absl-py: 
   :depends on appdirs: 
   :depends on biopython: ``<=1.82``
   :depends on dm-haiku: ``>=0.0.12``
   :depends on dm-tree: 
   :depends on hhsuite: ``>=3.3.0``
   :depends on importlib-metadata: 
   :depends on jax: ``>=0.4.23,<0.4.26``
   :depends on jaxlib: ``>=0.4.23,<0.4.26``
   :depends on kalign2: ``>=2.04``
   :depends on matplotlib-base: 
   :depends on ml-collections: 
   :depends on mmseqs2: ``>=15.6f452``
   :depends on numpy: 
   :depends on openmm: ``>=7.7.0,<8.1.0``
   :depends on pandas: 
   :depends on pdbfixer: 
   :depends on py3dmol: 
   :depends on python: 
   :depends on requests: 
   :depends on scipy: 
   :depends on tensorflow-base: ``>=2.12.1 cpu*``
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

    pixi global install colabfold

to add into an existing workspace instead, run::

    pixi add colabfold

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install colabfold

Alternatively, to install into a new environment, run::

    conda create -n envname colabfold

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/colabfold:<tag>

(see `colabfold/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_colabfold| image:: https://img.shields.io/conda/dn/bioconda/colabfold.svg?style=flat
   :target: https://anaconda.org/bioconda/colabfold
   :alt:   (downloads)
.. |docker_colabfold| image:: https://quay.io/repository/biocontainers/colabfold/status
   :target: https://quay.io/repository/biocontainers/colabfold
.. _`colabfold/tags`: https://quay.io/repository/biocontainers/colabfold?tab=tags


.. raw:: html

    <script>
        var package = "colabfold";
        var versions = ["1.5.5","1.5.5","1.5.5","1.5.3","1.5.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/colabfold/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/colabfold/README.html