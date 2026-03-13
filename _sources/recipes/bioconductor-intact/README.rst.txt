:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-intact'
.. highlight: bash

bioconductor-intact
===================

.. conda:recipe:: bioconductor-intact
   :replaces_section_title:
   :noindex:

   Integrate TWAS and Colocalization Analysis for Gene Set Enrichment Analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/INTACT.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-intact <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-intact>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-intact/meta.yaml>`_

   This package integrates colocalization probabilities from colocalization analysis with transcriptome\-wide association study \(TWAS\) scan summary statistics to implicate genes that may be biologically relevant to a complex trait. The probabilistic framework implemented in this package constrains the TWAS scan z\-score\-based likelihood using a gene\-level colocalization probability. Given gene set annotations\, this package can estimate gene set enrichment using posterior probabilities from the TWAS\-colocalization integration step.


.. conda:package:: bioconductor-intact

   |downloads_bioconductor-intact| |docker_bioconductor-intact|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.1-0``

      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bdsmatrix: 
   :depends on r-ggplot2: 
   :depends on r-numderiv: 
   :depends on r-squarem: 
   :depends on r-tidyr: 

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

    pixi global install bioconductor-intact

to add into an existing workspace instead, run::

    pixi add bioconductor-intact

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-intact

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-intact

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-intact:<tag>

(see `bioconductor-intact/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-intact| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-intact.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-intact
   :alt:   (downloads)
.. |docker_bioconductor-intact| image:: https://quay.io/repository/biocontainers/bioconductor-intact/status
   :target: https://quay.io/repository/biocontainers/bioconductor-intact
.. _`bioconductor-intact/tags`: https://quay.io/repository/biocontainers/bioconductor-intact?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-intact";
        var versions = ["1.10.0","1.6.0","1.2.0","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-intact/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-intact/README.html