:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pasilla'
.. highlight: bash

bioconductor-pasilla
====================

.. conda:recipe:: bioconductor-pasilla
   :replaces_section_title:
   :noindex:

   Data package with per\-exon and per\-gene read counts of RNA\-seq samples of Pasilla knock\-down by Brooks et al.\, Genome Research 2011.

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/pasilla.html
   :license: LGPL
   :recipe: /`bioconductor-pasilla <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pasilla>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pasilla/meta.yaml>`_

   This package provides per\-exon and per\-gene read counts computed for selected genes from RNA\-seq data that were presented in the article \"Conservation of an RNA regulatory map between Drosophila and mammals\" by Brooks AN\, Yang L\, Duff MO\, Hansen KD\, Park JW\, Dudoit S\, Brenner SE\, Graveley BR\, Genome Res. 2011 Feb\;21\(2\)\:193\-202\, Epub 2010 Oct 4\, PMID\: 20921232. The experiment studied the effect of RNAi knockdown of Pasilla\, the Drosophila melanogaster ortholog of mammalian NOVA1 and NOVA2\, on the transcriptome.  The package vignette describes how the data provided here were derived from the RNA\-Seq read sequence data that are provided by NCBI Gene Expression Omnibus under accession numbers GSM461176 to GSM461181.


.. conda:package:: bioconductor-pasilla

   |downloads_bioconductor-pasilla| |docker_bioconductor-pasilla|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.1-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.18.0-0``,  ``1.17.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-dexseq: ``>=1.56.0,<1.57.0``
   :depends on curl: 
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

    pixi global install bioconductor-pasilla

to add into an existing workspace instead, run::

    pixi add bioconductor-pasilla

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-pasilla

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-pasilla

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-pasilla:<tag>

(see `bioconductor-pasilla/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-pasilla| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pasilla.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pasilla
   :alt:   (downloads)
.. |docker_bioconductor-pasilla| image:: https://quay.io/repository/biocontainers/bioconductor-pasilla/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pasilla
.. _`bioconductor-pasilla/tags`: https://quay.io/repository/biocontainers/bioconductor-pasilla?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pasilla";
        var versions = ["1.38.0","1.34.0","1.30.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pasilla/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pasilla/README.html