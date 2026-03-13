:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dino'
.. highlight: bash

bioconductor-dino
=================

.. conda:recipe:: bioconductor-dino
   :replaces_section_title:
   :noindex:

   Normalization of Single\-Cell mRNA Sequencing Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Dino.html
   :license: GPL-3
   :recipe: /`bioconductor-dino <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dino>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dino/meta.yaml>`_

   Dino normalizes single\-cell\, mRNA sequencing data to correct for technical variation\, particularly sequencing depth\, prior to downstream analysis. The approach produces a matrix of corrected expression for which the dependency between sequencing depth and the full distribution of normalized expression\; many existing methods aim to remove only the dependency between sequencing depth and the mean of the normalized expression. This is particuarly useful in the context of highly sparse datasets such as those produced by 10X genomics and other uninque molecular identifier \(UMI\) based microfluidics protocols for which the depth\-dependent proportion of zeros in the raw expression data can otherwise present a challenge.


.. conda:package:: bioconductor-dino

   |downloads_bioconductor-dino| |docker_bioconductor-dino|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biocsingular: ``>=1.26.0,<1.27.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-scran: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-matrix: 
   :depends on r-matrixstats: 
   :depends on r-seurat: 

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

    pixi global install bioconductor-dino

to add into an existing workspace instead, run::

    pixi add bioconductor-dino

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-dino

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-dino

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-dino:<tag>

(see `bioconductor-dino/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-dino| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dino.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dino
   :alt:   (downloads)
.. |docker_bioconductor-dino| image:: https://quay.io/repository/biocontainers/bioconductor-dino/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dino
.. _`bioconductor-dino/tags`: https://quay.io/repository/biocontainers/bioconductor-dino?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dino";
        var versions = ["1.16.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dino/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dino/README.html