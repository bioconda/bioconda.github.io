:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-chromium'
.. highlight: bash

r-chromium
==========

.. conda:recipe:: r-chromium
   :replaces_section_title:
   :noindex:

   Toolkit for 10X Genomics Chromium single cell data.

   :homepage: https://r.acidgenomics.com/packages/chromium/
   :developer docs: https://github.com/acidgenomics/r-chromium
   :license: GPL / AGPL-3.0
   :recipe: /`r-chromium <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-chromium>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-chromium/meta.yaml>`_

   


.. conda:package:: r-chromium

   |downloads_r-chromium| |docker_r-chromium|

   :versions:
      
      

      ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.1-1``,  ``0.2.1-0``

      

   
   :depends on bioconductor-rhdf5: ``>=2.44.0``
   :depends on bioconductor-s4vectors: ``>=0.38.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.22.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.30.0``
   :depends on r-acidbase: ``>=0.7.0``
   :depends on r-acidcli: ``>=0.2.8``
   :depends on r-acidexperiment: ``>=0.5.0``
   :depends on r-acidgenerics: ``>=0.6.13``
   :depends on r-acidgenomes: ``>=0.6.0``
   :depends on r-acidplyr: ``>=0.4.3``
   :depends on r-acidsinglecell: ``>=0.3.7``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-goalie: ``>=0.7.0``
   :depends on r-matrix: ``>=1.6.1``
   :depends on r-pipette: ``>=0.14.0``
   :depends on r-syntactic: ``>=0.6.7``

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

    pixi global install r-chromium

to add into an existing workspace instead, run::

    pixi add r-chromium

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-chromium

Alternatively, to install into a new environment, run::

    conda create -n envname r-chromium

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-chromium:<tag>

(see `r-chromium/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-chromium| image:: https://img.shields.io/conda/dn/bioconda/r-chromium.svg?style=flat
   :target: https://anaconda.org/bioconda/r-chromium
   :alt:   (downloads)
.. |docker_r-chromium| image:: https://quay.io/repository/biocontainers/r-chromium/status
   :target: https://quay.io/repository/biocontainers/r-chromium
.. _`r-chromium/tags`: https://quay.io/repository/biocontainers/r-chromium?tab=tags


.. raw:: html

    <script>
        var package = "r-chromium";
        var versions = ["0.3.0","0.3.0","0.3.0","0.2.1","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-chromium/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-chromium/README.html