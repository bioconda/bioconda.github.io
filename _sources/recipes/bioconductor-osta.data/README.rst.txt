:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-osta.data'
.. highlight: bash

bioconductor-osta.data
======================

.. conda:recipe:: bioconductor-osta.data
   :replaces_section_title:
   :noindex:

   OSTA book data

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/OSTA.data.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-osta.data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-osta.data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-osta.data/meta.yaml>`_

   \'OSTA.data\' is a companion package for the \"Orchestrating Spatial Transcriptomics Analysis\" \(OSTA\) with Bioconductor online book. Throughout OSTA\, we rely on a set of publicly available datasets that cover different sequencing\- and imaging\-based platforms\, such as Visium\, Visium HD\, Xenium \(10x Genomics\) and CosMx \(NanoString\). In addition\, we rely on scRNA\-seq \(Chromium\) data for tasks\, e.g.\, spot deconvolution and label transfer \(i.e.\, supervised clustering\). These data been deposited in an Open Storage Framework \(OSF\) repository\, and can be queried and downloaded using functions from the \'osfr\' package. For convenience\, we have implemented \'OSTA.data\' to query and retrieve data from our OSF node\, and cache retrieved Zip archives using \'BiocFileCache\'.


.. conda:package:: bioconductor-osta.data

   |downloads_bioconductor-osta.data| |docker_bioconductor-osta.data|

   :versions:
      
      

      ``1.2.1-0``

      

   
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-osfr: 

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

    pixi global install bioconductor-osta.data

to add into an existing workspace instead, run::

    pixi add bioconductor-osta.data

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-osta.data

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-osta.data

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-osta.data:<tag>

(see `bioconductor-osta.data/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-osta.data| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-osta.data.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-osta.data
   :alt:   (downloads)
.. |docker_bioconductor-osta.data| image:: https://quay.io/repository/biocontainers/bioconductor-osta.data/status
   :target: https://quay.io/repository/biocontainers/bioconductor-osta.data
.. _`bioconductor-osta.data/tags`: https://quay.io/repository/biocontainers/bioconductor-osta.data?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-osta.data";
        var versions = ["1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-osta.data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-osta.data/README.html