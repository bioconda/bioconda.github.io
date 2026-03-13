:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-scavenge'
.. highlight: bash

r-scavenge
==========

.. conda:recipe:: r-scavenge
   :replaces_section_title:
   :noindex:

   SCAVENGE \(Single Cell Analysis of Variant Enrichment through Network propagation of GEnomic data\) optimizes the inference of functional and genetic associations to specific cells at single\-cell resolution.

   :homepage: https://github.com/sankaranlab/SCAVENGE
   :license: GPL / GPL-2.0-or-later
   :recipe: /`r-scavenge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scavenge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scavenge/meta.yaml>`_

   


.. conda:package:: r-scavenge

   |downloads_r-scavenge| |docker_r-scavenge|

   :versions:
      
      

      ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends on bioconductor-summarizedexperiment: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-gchromvar: 
   :depends on r-igraph: 
   :depends on r-irlba: 
   :depends on r-matrix: 
   :depends on r-rann: 

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

    pixi global install r-scavenge

to add into an existing workspace instead, run::

    pixi add r-scavenge

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-scavenge

Alternatively, to install into a new environment, run::

    conda create -n envname r-scavenge

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-scavenge:<tag>

(see `r-scavenge/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-scavenge| image:: https://img.shields.io/conda/dn/bioconda/r-scavenge.svg?style=flat
   :target: https://anaconda.org/bioconda/r-scavenge
   :alt:   (downloads)
.. |docker_r-scavenge| image:: https://quay.io/repository/biocontainers/r-scavenge/status
   :target: https://quay.io/repository/biocontainers/r-scavenge
.. _`r-scavenge/tags`: https://quay.io/repository/biocontainers/r-scavenge?tab=tags


.. raw:: html

    <script>
        var package = "r-scavenge";
        var versions = ["1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-scavenge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-scavenge/README.html