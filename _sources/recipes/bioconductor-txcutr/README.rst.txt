:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-txcutr'
.. highlight: bash

bioconductor-txcutr
===================

.. conda:recipe:: bioconductor-txcutr
   :replaces_section_title:
   :noindex:

   Transcriptome CUTteR

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/txcutr.html
   :license: GPL-3
   :recipe: /`bioconductor-txcutr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txcutr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txcutr/meta.yaml>`_

   Various mRNA sequencing library preparation methods generate sequencing reads specifically from the transcript ends. Analyses that focus on quantification of isoform usage from such data can be aided by using truncated versions of transcriptome annotations\, both at the alignment or pseudo\-alignment stage\, as well as in downstream analysis. This package implements some convenience methods for readily generating such truncated annotations and their corresponding sequences.


.. conda:package:: bioconductor-txcutr

   |downloads_bioconductor-txcutr| |docker_bioconductor-txcutr|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-txdbmaker: ``>=1.6.0,<1.7.0``
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

    pixi global install bioconductor-txcutr

to add into an existing workspace instead, run::

    pixi add bioconductor-txcutr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-txcutr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-txcutr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-txcutr:<tag>

(see `bioconductor-txcutr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-txcutr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-txcutr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-txcutr
   :alt:   (downloads)
.. |docker_bioconductor-txcutr| image:: https://quay.io/repository/biocontainers/bioconductor-txcutr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-txcutr
.. _`bioconductor-txcutr/tags`: https://quay.io/repository/biocontainers/bioconductor-txcutr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-txcutr";
        var versions = ["1.16.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-txcutr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-txcutr/README.html