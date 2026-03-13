:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-magrene'
.. highlight: bash

bioconductor-magrene
====================

.. conda:recipe:: bioconductor-magrene
   :replaces_section_title:
   :noindex:

   Motif Analysis In Gene Regulatory Networks

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/magrene.html
   :license: GPL-3
   :recipe: /`bioconductor-magrene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-magrene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-magrene/meta.yaml>`_

   magrene allows the identification and analysis of graph motifs in \(duplicated\) gene regulatory networks \(GRNs\)\, including lambda\, V\, PPI V\, delta\, and bifan motifs. GRNs can be tested for motif enrichment by comparing motif frequencies to a null distribution generated from degree\-preserving simulated GRNs. Motif frequencies can be analyzed in the context of gene duplications to explore the impact of small\-scale and whole\-genome duplications on gene regulatory networks. Finally\, users can calculate interaction similarity for gene pairs based on the Sorensen\-Dice similarity index.


.. conda:package:: bioconductor-magrene

   |downloads_bioconductor-magrene| |docker_bioconductor-magrene|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
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

    pixi global install bioconductor-magrene

to add into an existing workspace instead, run::

    pixi add bioconductor-magrene

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-magrene

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-magrene

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-magrene:<tag>

(see `bioconductor-magrene/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-magrene| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-magrene.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-magrene
   :alt:   (downloads)
.. |docker_bioconductor-magrene| image:: https://quay.io/repository/biocontainers/bioconductor-magrene/status
   :target: https://quay.io/repository/biocontainers/bioconductor-magrene
.. _`bioconductor-magrene/tags`: https://quay.io/repository/biocontainers/bioconductor-magrene?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-magrene";
        var versions = ["1.12.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-magrene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-magrene/README.html