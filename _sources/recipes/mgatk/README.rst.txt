:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mgatk'
.. highlight: bash

mgatk
=====

.. conda:recipe:: mgatk
   :replaces_section_title:
   :noindex:

   Mitochondrial genome analysis toolkit.

   :homepage: https://github.com/caleblareau/mgatk
   :documentation: https://github.com/caleblareau/mgatk/wiki
   
   :license: MIT / MIT
   :recipe: /`mgatk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgatk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgatk/meta.yaml>`_

   


.. conda:package:: mgatk

   |downloads_mgatk| |docker_mgatk|

   :versions:
      
      

      ``0.7.0-2``,  ``0.7.0-1``,  ``0.7.0-0``

      

   
   :depends on bioconductor-genomicranges: 
   :depends on bioconductor-summarizedexperiment: 
   :depends on biopython: 
   :depends on click: 
   :depends on numpy: 
   :depends on openjdk: 
   :depends on optparse-pretty: 
   :depends on pandas: 
   :depends on picard-slim: 
   :depends on pulp: ``<2.8``
   :depends on pysam: 
   :depends on pytest: 
   :depends on python: ``>=3``
   :depends on r-base: 
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-matrix: 
   :depends on regex: 
   :depends on ruamel.yaml: ``0.16.12.*``
   :depends on snakemake-minimal: ``<8``

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

    pixi global install mgatk

to add into an existing workspace instead, run::

    pixi add mgatk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mgatk

Alternatively, to install into a new environment, run::

    conda create -n envname mgatk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mgatk:<tag>

(see `mgatk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mgatk| image:: https://img.shields.io/conda/dn/bioconda/mgatk.svg?style=flat
   :target: https://anaconda.org/bioconda/mgatk
   :alt:   (downloads)
.. |docker_mgatk| image:: https://quay.io/repository/biocontainers/mgatk/status
   :target: https://quay.io/repository/biocontainers/mgatk
.. _`mgatk/tags`: https://quay.io/repository/biocontainers/mgatk?tab=tags


.. raw:: html

    <script>
        var package = "mgatk";
        var versions = ["0.7.0","0.7.0","0.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mgatk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mgatk/README.html