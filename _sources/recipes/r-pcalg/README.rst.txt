:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-pcalg'
.. highlight: bash

r-pcalg
=======

.. conda:recipe:: r-pcalg
   :replaces_section_title:
   :noindex:

   Functions for causal structure learning and causal inference using graphical models. The main algorithms for causal structure learning are PC \(for observational data without hidden variables\)\, FCI and RFCI \(for observational data with hidden variables\)\, and GIES \(for a mix of data from observational studies \(i.e. observational data\) and data from experiments involving interventions \(i.e. interventional data\) without hidden variables\). For causal inference the IDA algorithm\, the Generalized Backdoor Criterion \(GBC\)\, the Generalized Adjustment Criterion \(GAC\) and some related functions are implemented. Functions for incorporating background knowledge are provided.

   :homepage: http://pcalg.r-forge.r-project.org/
   :license: GPL2 / GPL-2
   :recipe: /`r-pcalg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pcalg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pcalg/meta.yaml>`_

   


.. conda:package:: r-pcalg

   |downloads_r-pcalg| |docker_r-pcalg|

   :versions:
      
      

      ``2.7_12-0``,  ``2.6_12-7``,  ``2.6_12-6``,  ``2.6_12-5``,  ``2.6_12-4``,  ``2.6_12-3``,  ``2.6_12-2``,  ``2.6_12-1``,  ``2.6_12-0``

      

   
   :depends on bioconductor-graph: ``>=1.88.1,<1.89.0a0``
   :depends on bioconductor-rbgl: ``>=1.86.0,<1.87.0a0``
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on r-abind: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bdsmatrix: 
   :depends on r-bh: 
   :depends on r-clue: 
   :depends on r-corpcor: 
   :depends on r-dagitty: 
   :depends on r-fastica: 
   :depends on r-ggm: 
   :depends on r-igraph: 
   :depends on r-rcpp: 
   :depends on r-rcpparmadillo: 
   :depends on r-robustbase: 
   :depends on r-sfsmisc: ``>=1.0_26``
   :depends on r-vcd: 

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

    pixi global install r-pcalg

to add into an existing workspace instead, run::

    pixi add r-pcalg

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-pcalg

Alternatively, to install into a new environment, run::

    conda create -n envname r-pcalg

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-pcalg:<tag>

(see `r-pcalg/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-pcalg| image:: https://img.shields.io/conda/dn/bioconda/r-pcalg.svg?style=flat
   :target: https://anaconda.org/bioconda/r-pcalg
   :alt:   (downloads)
.. |docker_r-pcalg| image:: https://quay.io/repository/biocontainers/r-pcalg/status
   :target: https://quay.io/repository/biocontainers/r-pcalg
.. _`r-pcalg/tags`: https://quay.io/repository/biocontainers/r-pcalg?tab=tags


.. raw:: html

    <script>
        var package = "r-pcalg";
        var versions = ["2.7_12","2.6_12","2.6_12","2.6_12","2.6_12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-pcalg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-pcalg/README.html