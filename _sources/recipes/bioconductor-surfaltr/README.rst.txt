:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-surfaltr'
.. highlight: bash

bioconductor-surfaltr
=====================

.. conda:recipe:: bioconductor-surfaltr
   :replaces_section_title:
   :noindex:

   Rapid Comparison of Surface Protein Isoform Membrane Topologies Through surfaltr

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/surfaltr.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-surfaltr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-surfaltr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-surfaltr/meta.yaml>`_

   Cell surface proteins form a major fraction of the druggable proteome and can be used for tissue\-specific delivery of oligonucleotide\/cell\-based therapeutics. Alternatively spliced surface protein isoforms have been shown to differ in their subcellular localization and\/or their transmembrane \(TM\) topology. Surface proteins are hydrophobic and remain difficult to study thereby necessitating the use of TM topology prediction methods such as TMHMM and Phobius. However\, there exists a need for bioinformatic approaches to streamline batch processing of isoforms for comparing and visualizing topologies. To address this gap\, we have developed an R package\, surfaltr. It pairs inputted isoforms\, either known alternatively spliced or novel\, with their APPRIS annotated principal counterparts\, predicts their TM topologies using TMHMM or Phobius\, and generates a customizable graphical output. Further\, surfaltr facilitates the prioritization of biologically diverse isoform pairs through the incorporation of three different ranking metrics and through protein alignment functions. Citations for programs mentioned here can be found in the vignette.


.. conda:package:: bioconductor-surfaltr

   |downloads_bioconductor-surfaltr| |docker_bioconductor-surfaltr|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biomart: ``>=2.66.0,<2.67.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-msa: ``>=1.42.0,<1.43.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: ``>=1.0.6``
   :depends on r-ggplot2: ``>=3.3.2``
   :depends on r-httr: ``>=1.4.2``
   :depends on r-protr: ``>=1.6-2``
   :depends on r-readr: ``>=1.4.0``
   :depends on r-seqinr: ``>=4.2-5``
   :depends on r-stringr: ``>=1.4.0``
   :depends on r-testthat: ``>=3.0.0``
   :depends on r-xml2: ``>=1.3.2``

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

    pixi global install bioconductor-surfaltr

to add into an existing workspace instead, run::

    pixi add bioconductor-surfaltr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-surfaltr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-surfaltr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-surfaltr:<tag>

(see `bioconductor-surfaltr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-surfaltr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-surfaltr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-surfaltr
   :alt:   (downloads)
.. |docker_bioconductor-surfaltr| image:: https://quay.io/repository/biocontainers/bioconductor-surfaltr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-surfaltr
.. _`bioconductor-surfaltr/tags`: https://quay.io/repository/biocontainers/bioconductor-surfaltr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-surfaltr";
        var versions = ["1.16.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-surfaltr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-surfaltr/README.html