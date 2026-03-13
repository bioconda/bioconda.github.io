:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epivizr'
.. highlight: bash

bioconductor-epivizr
====================

.. conda:recipe:: bioconductor-epivizr
   :replaces_section_title:
   :noindex:

   R Interface to epiviz web app

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/epivizr.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-epivizr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epivizr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epivizr/meta.yaml>`_
   :links: biotools: :biotools:`epivizr`, doi: :doi:`10.1038/nmeth.3038`

   This package provides connections to the epiviz web app \(http\:\/\/epiviz.cbcb.umd.edu\) for interactive visualization of genomic data. Objects in R\/bioc interactive sessions can be displayed in genome browser tracks or plots to be explored by navigation through genomic regions. Fundamental Bioconductor data structures are supported \(e.g.\, GenomicRanges and RangedSummarizedExperiment objects\)\, while providing an easy mechanism to support other data structures \(through package epivizrData\). Visualizations \(using d3.js\) can be easily added to the web app as well.


.. conda:package:: bioconductor-epivizr

   |downloads_bioconductor-epivizr| |docker_bioconductor-epivizr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.40.0-0</code>,  <code>2.36.0-0</code>,  <code>2.32.0-0</code>,  <code>2.30.0-0</code>,  <code>2.28.0-0</code>,  <code>2.24.0-0</code>,  <code>2.22.0-0</code>,  <code>2.20.0-1</code>,  <code>2.20.0-0</code>,  </span></summary>
      

      ``2.40.0-0``,  ``2.36.0-0``,  ``2.32.0-0``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-1``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-1``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-bumphunter: ``>=1.52.0,<1.53.0``
   :depends on bioconductor-epivizrdata: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-epivizrserver: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
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

    pixi global install bioconductor-epivizr

to add into an existing workspace instead, run::

    pixi add bioconductor-epivizr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-epivizr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-epivizr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-epivizr:<tag>

(see `bioconductor-epivizr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-epivizr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epivizr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epivizr
   :alt:   (downloads)
.. |docker_bioconductor-epivizr| image:: https://quay.io/repository/biocontainers/bioconductor-epivizr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epivizr
.. _`bioconductor-epivizr/tags`: https://quay.io/repository/biocontainers/bioconductor-epivizr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-epivizr";
        var versions = ["2.40.0","2.36.0","2.32.0","2.30.0","2.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epivizr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epivizr/README.html