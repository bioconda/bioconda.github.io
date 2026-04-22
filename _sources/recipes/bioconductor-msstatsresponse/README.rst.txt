:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msstatsresponse'
.. highlight: bash

bioconductor-msstatsresponse
============================

.. conda:recipe:: bioconductor-msstatsresponse
   :replaces_section_title:
   :noindex:

   Statistical Methods for Chemoproteomics Dose\-Response Analysis

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/MSstatsResponse.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msstatsresponse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatsresponse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatsresponse/meta.yaml>`_

   Tools for detecting drug\-protein interactions and estimating IC50 values from chemoproteomics data. Implements semi\-parametric isotonic regression\, bootstrapping\, and curve fitting to evaluate compound effects on protein abundance.


.. conda:package:: bioconductor-msstatsresponse

   |downloads_bioconductor-msstatsresponse| |docker_bioconductor-msstatsresponse|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 

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

    pixi global install bioconductor-msstatsresponse

to add into an existing workspace instead, run::

    pixi add bioconductor-msstatsresponse

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-msstatsresponse

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-msstatsresponse

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-msstatsresponse:<tag>

(see `bioconductor-msstatsresponse/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-msstatsresponse| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msstatsresponse.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msstatsresponse
   :alt:   (downloads)
.. |docker_bioconductor-msstatsresponse| image:: https://quay.io/repository/biocontainers/bioconductor-msstatsresponse/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msstatsresponse
.. _`bioconductor-msstatsresponse/tags`: https://quay.io/repository/biocontainers/bioconductor-msstatsresponse?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msstatsresponse";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msstatsresponse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msstatsresponse/README.html