:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-teqc'
.. highlight: bash

bioconductor-teqc
=================

.. conda:recipe:: bioconductor-teqc
   :replaces_section_title:
   :noindex:

   Quality control for target capture experiments

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/TEQC.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-teqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-teqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-teqc/meta.yaml>`_
   :links: biotools: :biotools:`teqc`, doi: :doi:`10.1093/bioinformatics/btr122`

   Target capture experiments combine hybridization\-based \(in solution or on microarrays\) capture and enrichment of genomic regions of interest \(e.g. the exome\) with high throughput sequencing of the captured DNA fragments. This package provides functionalities for assessing and visualizing the quality of the target enrichment process\, like specificity and sensitivity of the capture\, per\-target read coverage and so on.


.. conda:package:: bioconductor-teqc

   |downloads_bioconductor-teqc| |docker_bioconductor-teqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.32.0-0</code>,  <code>4.28.0-0</code>,  <code>4.24.0-0</code>,  <code>4.22.0-0</code>,  <code>4.20.0-0</code>,  <code>4.16.0-0</code>,  <code>4.14.0-0</code>,  <code>4.12.0-1</code>,  <code>4.12.0-0</code>,  </span></summary>
      

      ``4.32.0-0``,  ``4.28.0-0``,  ``4.24.0-0``,  ``4.22.0-0``,  ``4.20.0-0``,  ``4.16.0-0``,  ``4.14.0-0``,  ``4.12.0-1``,  ``4.12.0-0``,  ``4.10.0-0``,  ``4.8.0-0``,  ``4.6.0-1``,  ``4.4.0-0``,  ``4.2.0-0``,  ``3.18.0-0``,  ``3.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-hwriter: 

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

    pixi global install bioconductor-teqc

to add into an existing workspace instead, run::

    pixi add bioconductor-teqc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-teqc

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-teqc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-teqc:<tag>

(see `bioconductor-teqc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-teqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-teqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-teqc
   :alt:   (downloads)
.. |docker_bioconductor-teqc| image:: https://quay.io/repository/biocontainers/bioconductor-teqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-teqc
.. _`bioconductor-teqc/tags`: https://quay.io/repository/biocontainers/bioconductor-teqc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-teqc";
        var versions = ["4.32.0","4.28.0","4.24.0","4.22.0","4.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-teqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-teqc/README.html