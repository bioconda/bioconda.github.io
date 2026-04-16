:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-mmgenome'
.. highlight: bash

r-mmgenome
==========

.. conda:recipe:: r-mmgenome
   :replaces_section_title:
   :noindex:

   Tools for extracting individual genomes from metagenomes

   :homepage: https://github.com/MadsAlbertsen/mmgenome
   :license: AGPL-3
   :recipe: /`r-mmgenome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mmgenome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mmgenome/meta.yaml>`_

   


.. conda:package:: r-mmgenome

   |downloads_r-mmgenome| |docker_r-mmgenome|

   :versions:
      
      

      ``0.7.1-7``,  ``0.7.1-6``,  ``0.7.1-5``,  ``0.7.1-4``,  ``0.7.1-3``,  ``0.7.1-2``,  ``0.7.1-0``,  ``0.6.3-0``

      

   
   :depends on bioconductor-biostrings: ``>=2.32.0``
   :depends on bioconductor-biostrings: ``>=2.74.0,<2.75.0a0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-dplyr: ``>=0.4.0``
   :depends on r-ggplot2: ``>=1.0.0``
   :depends on r-gridextra: ``>=0.9.1``
   :depends on r-igraph: ``>=1.0.0``
   :depends on r-knitr: ``>=1.6``
   :depends on r-reshape2: ``>=1.4``
   :depends on r-sp: ``>=1.0.15``
   :depends on r-vegan: ``>=2.0.10``

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

    pixi global install r-mmgenome

to add into an existing workspace instead, run::

    pixi add r-mmgenome

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-mmgenome

Alternatively, to install into a new environment, run::

    conda create -n envname r-mmgenome

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-mmgenome:<tag>

(see `r-mmgenome/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-mmgenome| image:: https://img.shields.io/conda/dn/bioconda/r-mmgenome.svg?style=flat
   :target: https://anaconda.org/bioconda/r-mmgenome
   :alt:   (downloads)
.. |docker_r-mmgenome| image:: https://quay.io/repository/biocontainers/r-mmgenome/status
   :target: https://quay.io/repository/biocontainers/r-mmgenome
.. _`r-mmgenome/tags`: https://quay.io/repository/biocontainers/r-mmgenome?tab=tags


.. raw:: html

    <script>
        var package = "r-mmgenome";
        var versions = ["0.7.1","0.7.1","0.7.1","0.7.1","0.7.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-mmgenome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-mmgenome/README.html