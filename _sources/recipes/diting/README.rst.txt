:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'diting'
.. highlight: bash

diting
======

.. conda:recipe:: diting
   :replaces_section_title:
   :noindex:

   A Snakemake\-based pipeline to infer and compare biogeochemical pathways in metagenomic data

   :homepage: https://github.com/SilentGene/DiTing
   :license: GPL3 / GPL-3.0-only
   :recipe: /`diting <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/diting>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/diting/meta.yaml>`_
   :links: doi: :doi:`10.3389/fmicb.2021.698286`

   


.. conda:package:: diting

   |downloads_diting| |docker_diting|

   :versions:
      
      

      ``2.0.1-0``

      

   
   :depends on bbmap: 
   :depends on bwa: 
   :depends on hmmer: ``>=3.3``
   :depends on kofamscan: 
   :depends on matplotlib-base: 
   :depends on megahit: 
   :depends on pandas: 
   :depends on prodigal: 
   :depends on python: 
   :depends on seaborn: 
   :depends on snakemake: ``>=9.0``
   :depends on spades: ``>=4.0``

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

    pixi global install diting

to add into an existing workspace instead, run::

    pixi add diting

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install diting

Alternatively, to install into a new environment, run::

    conda create -n envname diting

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/diting:<tag>

(see `diting/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_diting| image:: https://img.shields.io/conda/dn/bioconda/diting.svg?style=flat
   :target: https://anaconda.org/bioconda/diting
   :alt:   (downloads)
.. |docker_diting| image:: https://quay.io/repository/biocontainers/diting/status
   :target: https://quay.io/repository/biocontainers/diting
.. _`diting/tags`: https://quay.io/repository/biocontainers/diting?tab=tags


.. raw:: html

    <script>
        var package = "diting";
        var versions = ["2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/diting/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/diting/README.html