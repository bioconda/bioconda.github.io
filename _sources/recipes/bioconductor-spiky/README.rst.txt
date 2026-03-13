:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spiky'
.. highlight: bash

bioconductor-spiky
==================

.. conda:recipe:: bioconductor-spiky
   :replaces_section_title:
   :noindex:

   Spike\-in calibration for cell\-free MeDIP

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/spiky.html
   :license: GPL-2
   :recipe: /`bioconductor-spiky <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spiky>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spiky/meta.yaml>`_

   spiky implements methods and model generation for cfMeDIP \(cell\-free methylated DNA immunoprecipitation\) with spike\-in controls. CfMeDIP is an enrichment protocol which avoids destructive conversion of scarce template\, making it ideal as a \"liquid biopsy\,\" but creating certain challenges in comparing results across specimens\, subjects\, and experiments. The use of synthetic spike\-in standard oligos allows diagnostics performed with cfMeDIP to quantitatively compare samples across subjects\, experiments\, and time points in both relative and absolute terms.


.. conda:package:: bioconductor-spiky

   |downloads_bioconductor-spiky| |docker_bioconductor-spiky|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicalignments: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-bamlss: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-blandaltmanleh: 
   :depends on r-ggplot2: 
   :depends on r-scales: 

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

    pixi global install bioconductor-spiky

to add into an existing workspace instead, run::

    pixi add bioconductor-spiky

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-spiky

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-spiky

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-spiky:<tag>

(see `bioconductor-spiky/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-spiky| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spiky.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spiky
   :alt:   (downloads)
.. |docker_bioconductor-spiky| image:: https://quay.io/repository/biocontainers/bioconductor-spiky/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spiky
.. _`bioconductor-spiky/tags`: https://quay.io/repository/biocontainers/bioconductor-spiky?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spiky";
        var versions = ["1.16.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spiky/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spiky/README.html