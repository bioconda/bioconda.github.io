:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-proteus-bartongroup'
.. highlight: bash

r-proteus-bartongroup
=====================

.. conda:recipe:: r-proteus-bartongroup
   :replaces_section_title:
   :noindex:

   R package for analysing proteomics data

   :homepage: https://github.com/bartongroup/Proteus
   :license: MIT / MIT
   :recipe: /`r-proteus-bartongroup <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-proteus-bartongroup>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-proteus-bartongroup/meta.yaml>`_

   Proteus is an R package for downstream analysis of MaxQuant output.
   The input for Proteus is the evidence file. Evidence data are aggregated
   into peptides and then into proteins. Proteus offers many visualisation
   and data analysis tools both at peptide and protein level. In particular
   it allows simple differential expression using limma.



.. conda:package:: r-proteus-bartongroup

   |downloads_r-proteus-bartongroup| |docker_r-proteus-bartongroup|

   :versions:
      
      

      ``0.2.16-2``,  ``0.2.16-1``,  ``0.2.16-0``

      

   
   :depends on bioconductor-limma: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-ggdendro: 
   :depends on r-ggextra: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-gridextra: 
   :depends on r-hexbin: 
   :depends on r-reshape2: 
   :depends on r-shiny: 
   :depends on r-viridis: 

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

    pixi global install r-proteus-bartongroup

to add into an existing workspace instead, run::

    pixi add r-proteus-bartongroup

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-proteus-bartongroup

Alternatively, to install into a new environment, run::

    conda create -n envname r-proteus-bartongroup

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-proteus-bartongroup:<tag>

(see `r-proteus-bartongroup/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-proteus-bartongroup| image:: https://img.shields.io/conda/dn/bioconda/r-proteus-bartongroup.svg?style=flat
   :target: https://anaconda.org/bioconda/r-proteus-bartongroup
   :alt:   (downloads)
.. |docker_r-proteus-bartongroup| image:: https://quay.io/repository/biocontainers/r-proteus-bartongroup/status
   :target: https://quay.io/repository/biocontainers/r-proteus-bartongroup
.. _`r-proteus-bartongroup/tags`: https://quay.io/repository/biocontainers/r-proteus-bartongroup?tab=tags


.. raw:: html

    <script>
        var package = "r-proteus-bartongroup";
        var versions = ["0.2.16","0.2.16","0.2.16"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-proteus-bartongroup/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-proteus-bartongroup/README.html