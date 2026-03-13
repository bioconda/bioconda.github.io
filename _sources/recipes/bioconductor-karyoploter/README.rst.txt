:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-karyoploter'
.. highlight: bash

bioconductor-karyoploter
========================

.. conda:recipe:: bioconductor-karyoploter
   :replaces_section_title:
   :noindex:

   Plot customizable linear genomes displaying arbitrary data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/karyoploteR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-karyoploter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-karyoploter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-karyoploter/meta.yaml>`_

   karyoploteR creates karyotype plots of arbitrary genomes and offers a complete set of functions to plot arbitrary data on them. It mimicks many R base graphics functions coupling them with a coordinate change function automatically mapping the chromosome and data coordinates into the plot coordinates. In addition to the provided data plotting functions\, it is easy to add new ones.


.. conda:package:: bioconductor-karyoploter

   |downloads_bioconductor-karyoploter| |docker_bioconductor-karyoploter|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.4-0``,  ``1.8.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-bamsignals: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-biovizbase: ``>=1.58.0,<1.59.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-regioner: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-variantannotation: ``>=1.56.0,<1.57.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bezier: 
   :depends on r-digest: 
   :depends on r-memoise: 

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

    pixi global install bioconductor-karyoploter

to add into an existing workspace instead, run::

    pixi add bioconductor-karyoploter

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-karyoploter

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-karyoploter

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-karyoploter:<tag>

(see `bioconductor-karyoploter/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-karyoploter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-karyoploter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-karyoploter
   :alt:   (downloads)
.. |docker_bioconductor-karyoploter| image:: https://quay.io/repository/biocontainers/bioconductor-karyoploter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-karyoploter
.. _`bioconductor-karyoploter/tags`: https://quay.io/repository/biocontainers/bioconductor-karyoploter?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-karyoploter";
        var versions = ["1.36.0","1.32.0","1.28.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-karyoploter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-karyoploter/README.html