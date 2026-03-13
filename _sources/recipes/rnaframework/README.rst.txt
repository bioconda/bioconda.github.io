:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnaframework'
.. highlight: bash

rnaframework
============

.. conda:recipe:: rnaframework
   :replaces_section_title:
   :noindex:

   Toolkit for the analysis of RNA structures and post\-transcriptional modifications from HTS data

   :homepage: https://github.com/dincarnato/RNAFramework
   :documentation: https://rnaframework-docs.readthedocs.io/
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`rnaframework <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnaframework>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnaframework/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gky486`

   RNA Framework is a modular toolkit designed to handle RNA structure probing
   and post\-transcriptional modifications mapping from high\-throughput sequencing
   data. It supports transcriptome\-scale analysis of RNA secondary structure using
   protocols such as CIRS\-seq\, SHAPE\-seq\, Structure\-seq\, DMS\-seq\, PARS\,
   SHAPE\-MaP\, and DMS\-MaPseq\, as well as mapping of post\-transcriptional
   modifications \(Ψ\, m1A\, m6A\, m5C\, hm5C\, 2\'\-OMe\).

   Key features\:
     \- Automatic reference transcriptome creation \(rf\-index\)
     \- Read preprocessing\, adapter trimming\, and mapping \(rf\-map\)
     \- Per\-base RT\-stop\/mutation counting and coverage \(rf\-count\)
     \- Reactivity scoring and whole\-transcriptome normalization \(rf\-norm\)
     \- RNA secondary structure prediction with probing data \(rf\-fold\)
     \- RNA\-RNA interaction mapping \(rf\-duplex\)
     \- Post\-transcriptional modification calling \(rf\-modcall\)
     \- Peak calling for RNA immunoprecipitation data \(rf\-peakcall\)



.. conda:package:: rnaframework

   |downloads_rnaframework| |docker_rnaframework|

   :versions:
      
      

      ``2.9.6-1``,  ``2.9.6-0``

      

   
   :depends on bedtools: ``>=2.31``
   :depends on bowtie: ``>=1.2.3``
   :depends on bowtie2: ``>=2.3.5``
   :depends on cutadapt: ``>=2.1``
   :depends on perl: ``>=5.12``
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-termreadkey: 
   :depends on r-base: ``>=4.4,<4.6``
   :depends on r-ggplot2: ``>=3.5.2``
   :depends on r-patchwork: ``>=1.3.2``
   :depends on r-rcolorbrewer: ``>=1.1_3``
   :depends on rnastructure: ``>=6.4``
   :depends on samtools: ``>=1.15``
   :depends on viennarna: ``>=2.5.0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install rnaframework

to add into an existing workspace instead, run::

    pixi add rnaframework

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rnaframework

Alternatively, to install into a new environment, run::

    conda create -n envname rnaframework

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rnaframework:<tag>

(see `rnaframework/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rnaframework| image:: https://img.shields.io/conda/dn/bioconda/rnaframework.svg?style=flat
   :target: https://anaconda.org/bioconda/rnaframework
   :alt:   (downloads)
.. |docker_rnaframework| image:: https://quay.io/repository/biocontainers/rnaframework/status
   :target: https://quay.io/repository/biocontainers/rnaframework
.. _`rnaframework/tags`: https://quay.io/repository/biocontainers/rnaframework?tab=tags


.. raw:: html

    <script>
        var package = "rnaframework";
        var versions = ["2.9.6","2.9.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnaframework/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnaframework/README.html