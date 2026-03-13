:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-degcre'
.. highlight: bash

bioconductor-degcre
===================

.. conda:recipe:: bioconductor-degcre
   :replaces_section_title:
   :noindex:

   Probabilistic association of DEGs to CREs from differential data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/DegCre.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-degcre <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-degcre>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-degcre/meta.yaml>`_

   DegCre generates associations between differentially expressed genes \(DEGs\) and cis\-regulatory elements \(CREs\) based on non\-parametric concordance between differential data. The user provides GRanges of DEG TSS and CRE regions with differential p\-value and optionally log\-fold changes and DegCre returns an annotated Hits object with associations and their calculated probabilities. Additionally\, the package provides functionality for visualization and conversion to other formats.


.. conda:package:: bioconductor-degcre

   |downloads_bioconductor-degcre| |docker_bioconductor-degcre|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-interactionset: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-org.hs.eg.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-plotgardener: ``>=1.16.0,<1.17.0``
   :depends on bioconductor-qvalue: ``>=2.42.0,<2.43.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-txdb.hsapiens.ucsc.hg38.knowngene: ``>=3.22.0,<3.23.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-degcre

to add into an existing workspace instead, run::

    pixi add bioconductor-degcre

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-degcre

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-degcre

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-degcre:<tag>

(see `bioconductor-degcre/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-degcre| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-degcre.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-degcre
   :alt:   (downloads)
.. |docker_bioconductor-degcre| image:: https://quay.io/repository/biocontainers/bioconductor-degcre/status
   :target: https://quay.io/repository/biocontainers/bioconductor-degcre
.. _`bioconductor-degcre/tags`: https://quay.io/repository/biocontainers/bioconductor-degcre?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-degcre";
        var versions = ["1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-degcre/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-degcre/README.html