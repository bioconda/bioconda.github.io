:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-motif2site'
.. highlight: bash

bioconductor-motif2site
=======================

.. conda:recipe:: bioconductor-motif2site
   :replaces_section_title:
   :noindex:

   Detect binding sites from motifs and ChIP\-seq experiments\, and compare binding sites across conditions

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Motif2Site.html
   :license: GPL-2
   :recipe: /`bioconductor-motif2site <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motif2site>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motif2site/meta.yaml>`_

   Detect binding sites using motifs IUPAC sequence or bed coordinates and ChIP\-seq experiments in bed or bam format. Combine\/compare binding sites across experiments\, tissues\, or conditions. All normalization and differential steps are done using TMM\-GLM method. Signal decomposition is done by setting motifs as the centers of the mixture of normal distribution curves.


.. conda:package:: bioconductor-motif2site

   |downloads_bioconductor-motif2site| |docker_bioconductor-motif2site|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-edger: ``>=4.8.0,<4.9.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicalignments: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-mass: 
   :depends on r-mixtools: 

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

    pixi global install bioconductor-motif2site

to add into an existing workspace instead, run::

    pixi add bioconductor-motif2site

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-motif2site

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-motif2site

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-motif2site:<tag>

(see `bioconductor-motif2site/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-motif2site| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-motif2site.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-motif2site
   :alt:   (downloads)
.. |docker_bioconductor-motif2site| image:: https://quay.io/repository/biocontainers/bioconductor-motif2site/status
   :target: https://quay.io/repository/biocontainers/bioconductor-motif2site
.. _`bioconductor-motif2site/tags`: https://quay.io/repository/biocontainers/bioconductor-motif2site?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-motif2site";
        var versions = ["1.14.0","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-motif2site/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-motif2site/README.html