:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-segmenter'
.. highlight: bash

bioconductor-segmenter
======================

.. conda:recipe:: bioconductor-segmenter
   :replaces_section_title:
   :noindex:

   Perform Chromatin Segmentation Analysis in R by Calling ChromHMM

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/segmenter.html
   :license: GPL-3
   :recipe: /`bioconductor-segmenter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-segmenter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-segmenter/meta.yaml>`_

   Chromatin segmentation analysis transforms ChIP\-seq data into signals over the genome. The latter represents the observed states in a multivariate Markov model to predict the chromatin\'s underlying states. ChromHMM\, written in Java\, integrates histone modification datasets to learn the chromatin states de\-novo. The goal of this package is to call chromHMM from within R\, capture the output files in an S4 object and interface to other relevant Bioconductor analysis tools. In addition\, segmenter provides functions to test\, select and visualize the output of the segmentation.


.. conda:package:: bioconductor-segmenter

   |downloads_bioconductor-segmenter| |docker_bioconductor-segmenter|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-bamsignals: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-chipseeker: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-chromhmmdata: ``>=0.99.0,<0.100.0``
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
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

    pixi global install bioconductor-segmenter

to add into an existing workspace instead, run::

    pixi add bioconductor-segmenter

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-segmenter

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-segmenter

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-segmenter:<tag>

(see `bioconductor-segmenter/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-segmenter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-segmenter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-segmenter
   :alt:   (downloads)
.. |docker_bioconductor-segmenter| image:: https://quay.io/repository/biocontainers/bioconductor-segmenter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-segmenter
.. _`bioconductor-segmenter/tags`: https://quay.io/repository/biocontainers/bioconductor-segmenter?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-segmenter";
        var versions = ["1.16.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-segmenter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-segmenter/README.html