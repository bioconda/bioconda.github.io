:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fastreer'
.. highlight: bash

bioconductor-fastreer
=====================

.. conda:recipe:: bioconductor-fastreer
   :replaces_section_title:
   :noindex:

   Phylogenetic\, Distance and Other Calculations on VCF and Fasta Files

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/fastreeR.html
   :license: GPL-3
   :recipe: /`bioconductor-fastreer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fastreer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fastreer/meta.yaml>`_

   Calculate distances\, build phylogenetic trees or perform hierarchical clustering between the samples of a VCF or FASTA file. Functions are implemented in Java and called via rJava. Parallel implementation that operates directly on the VCF or FASTA file for fast execution.


.. conda:package:: bioconductor-fastreer

   |downloads_bioconductor-fastreer| |docker_bioconductor-fastreer|

   :versions:
      
      

      ``2.0.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends on r-ape: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-dynamictreecut: 
   :depends on r-r.utils: 
   :depends on r-rjava: 
   :depends on r-stringr: 

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

    pixi global install bioconductor-fastreer

to add into an existing workspace instead, run::

    pixi add bioconductor-fastreer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-fastreer

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-fastreer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-fastreer:<tag>

(see `bioconductor-fastreer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-fastreer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fastreer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fastreer
   :alt:   (downloads)
.. |docker_bioconductor-fastreer| image:: https://quay.io/repository/biocontainers/bioconductor-fastreer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fastreer
.. _`bioconductor-fastreer/tags`: https://quay.io/repository/biocontainers/bioconductor-fastreer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fastreer";
        var versions = ["2.0.0","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fastreer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fastreer/README.html