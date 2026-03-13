:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rlseq'
.. highlight: bash

bioconductor-rlseq
==================

.. conda:recipe:: bioconductor-rlseq
   :replaces_section_title:
   :noindex:

   RLSeq\: An analysis package for R\-loop mapping data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/RLSeq.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-rlseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rlseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rlseq/meta.yaml>`_

   RLSeq is a toolkit for analyzing and evaluating R\-loop mapping datasets. RLSeq serves two primary purposes\: \(1\) to facilitate the evaluation of dataset quality\, and \(2\) to enable R\-loop analysis in the context of publicly\-available data sets from RLBase. The package is intended to provide a simple pipeline\, called with the \`RLSeq\(\)\` function\, which performs all main analyses. Individual functions are also accessible and provide custom analysis capabilities. Finally an HTML report is generated with \`report\(\)\`.


.. conda:package:: bioconductor-rlseq

   |downloads_bioconductor-rlseq| |docker_bioconductor-rlseq|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.1-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-annotationhub: ``>=3.8.0,<3.9.0``
   :depends on bioconductor-complexheatmap: ``>=2.16.0,<2.17.0``
   :depends on bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends on bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends on bioconductor-regioner: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-rlhub: ``>=1.6.0,<1.7.0``
   :depends on bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends on r-aws.s3: 
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-callr: 
   :depends on r-caretensemble: 
   :depends on r-circlize: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-ggplotify: 
   :depends on r-ggprism: 
   :depends on r-pheatmap: 
   :depends on r-rcolorbrewer: 
   :depends on r-valr: 
   :depends on r-venndiagram: 

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

    pixi global install bioconductor-rlseq

to add into an existing workspace instead, run::

    pixi add bioconductor-rlseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rlseq

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rlseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rlseq:<tag>

(see `bioconductor-rlseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rlseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rlseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rlseq
   :alt:   (downloads)
.. |docker_bioconductor-rlseq| image:: https://quay.io/repository/biocontainers/bioconductor-rlseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rlseq
.. _`bioconductor-rlseq/tags`: https://quay.io/repository/biocontainers/bioconductor-rlseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rlseq";
        var versions = ["1.6.0","1.4.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rlseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rlseq/README.html