:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chromdraw'
.. highlight: bash

bioconductor-chromdraw
======================

.. conda:recipe:: bioconductor-chromdraw
   :replaces_section_title:
   :noindex:

   chromDraw is a R package for drawing the schemes of karyotypes in the linear and circular fashion.

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/chromDraw.html
   :license: GPL-3
   :recipe: /`bioconductor-chromdraw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chromdraw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chromdraw/meta.yaml>`_
   :links: biotools: :biotools:`chromdraw`

   ChromDraw is a R package for drawing the schemes of karyotype\(s\) in the linear and circular fashion. It is possible to visualized cytogenetic marsk on the chromosomes. This tool has own input data format. Input data can be imported from the GenomicRanges data structure. This package can visualized the data in the BED file format. Here is requirement on to the first nine fields of the BED format. Output files format are \*.eps and \*.svg.


.. conda:package:: bioconductor-chromdraw

   |downloads_bioconductor-chromdraw| |docker_bioconductor-chromdraw|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.40.0-0</code>,  <code>2.36.0-0</code>,  <code>2.32.0-1</code>,  <code>2.32.0-0</code>,  <code>2.30.0-0</code>,  <code>2.28.0-1</code>,  <code>2.28.0-0</code>,  <code>2.24.0-2</code>,  <code>2.24.0-1</code>,  </span></summary>
      

      ``2.40.0-0``,  ``2.36.0-0``,  ``2.32.0-1``,  ``2.32.0-0``,  ``2.30.0-0``,  ``2.28.0-1``,  ``2.28.0-0``,  ``2.24.0-2``,  ``2.24.0-1``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-1``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-1``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.1,<1.63.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-rcpp: ``>=0.11.1``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install bioconductor-chromdraw

to add into an existing workspace instead, run::

    pixi add bioconductor-chromdraw

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-chromdraw

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-chromdraw

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-chromdraw:<tag>

(see `bioconductor-chromdraw/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-chromdraw| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chromdraw.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chromdraw
   :alt:   (downloads)
.. |docker_bioconductor-chromdraw| image:: https://quay.io/repository/biocontainers/bioconductor-chromdraw/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chromdraw
.. _`bioconductor-chromdraw/tags`: https://quay.io/repository/biocontainers/bioconductor-chromdraw?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-chromdraw";
        var versions = ["2.40.0","2.36.0","2.32.0","2.32.0","2.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chromdraw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chromdraw/README.html