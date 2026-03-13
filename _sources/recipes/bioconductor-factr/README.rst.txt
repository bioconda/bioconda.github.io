:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-factr'
.. highlight: bash

bioconductor-factr
==================

.. conda:recipe:: bioconductor-factr
   :replaces_section_title:
   :noindex:

   Functional Annotation of Custom Transcriptomes

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/factR.html
   :license: file LICENSE
   :recipe: /`bioconductor-factr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-factr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-factr/meta.yaml>`_

   factR contain tools to process and interact with custom\-assembled transcriptomes \(GTF\). At its core\, factR constructs CDS information on custom transcripts and subsequently predicts its functional output. In addition\, factR has tools capable of plotting transcripts\, correcting chromosome and gene information and shortlisting new transcripts.


.. conda:package:: bioconductor-factr

   |downloads_bioconductor-factr| |docker_bioconductor-factr|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends on bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends on bioconductor-drawproteins: ``>=1.26.0,<1.27.0``
   :depends on bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends on bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends on bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends on bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends on bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends on bioconductor-wiggleplotr: ``>=1.30.0,<1.31.0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-crayon: ``>=1.5``
   :depends on r-data.table: ``>=1.14``
   :depends on r-dplyr: ``>=1.1``
   :depends on r-ggplot2: ``>=3.4``
   :depends on r-pbapply: ``>=1.7``
   :depends on r-purrr: ``>=1.0``
   :depends on r-rcurl: ``>=1.98``
   :depends on r-rlang: ``>=1.1``
   :depends on r-stringr: ``>=1.5``
   :depends on r-tibble: ``>=3.2``
   :depends on r-tidyr: ``>=1.3``
   :depends on r-xml: ``>=3.99``

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

    pixi global install bioconductor-factr

to add into an existing workspace instead, run::

    pixi add bioconductor-factr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-factr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-factr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-factr:<tag>

(see `bioconductor-factr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-factr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-factr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-factr
   :alt:   (downloads)
.. |docker_bioconductor-factr| image:: https://quay.io/repository/biocontainers/bioconductor-factr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-factr
.. _`bioconductor-factr/tags`: https://quay.io/repository/biocontainers/bioconductor-factr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-factr";
        var versions = ["1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-factr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-factr/README.html