:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-txdb.scerevisiae.ucsc.saccer3.sgdgene'
.. highlight: bash

bioconductor-txdb.scerevisiae.ucsc.saccer3.sgdgene
==================================================

.. conda:recipe:: bioconductor-txdb.scerevisiae.ucsc.saccer3.sgdgene
   :replaces_section_title:
   :noindex:

   Annotation package for TxDb object\(s\)

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/TxDb.Scerevisiae.UCSC.sacCer3.sgdGene.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-txdb.scerevisiae.ucsc.saccer3.sgdgene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.scerevisiae.ucsc.saccer3.sgdgene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.scerevisiae.ucsc.saccer3.sgdgene/meta.yaml>`_

   Exposes an annotation databases generated from UCSC by exposing these as TxDb objects


.. conda:package:: bioconductor-txdb.scerevisiae.ucsc.saccer3.sgdgene

   |downloads_bioconductor-txdb.scerevisiae.ucsc.saccer3.sgdgene| |docker_bioconductor-txdb.scerevisiae.ucsc.saccer3.sgdgene|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.2-24</code>,  <code>3.2.2-23</code>,  <code>3.2.2-22</code>,  <code>3.2.2-21</code>,  <code>3.2.2-20</code>,  <code>3.2.2-19</code>,  <code>3.2.2-18</code>,  <code>3.2.2-17</code>,  <code>3.2.2-16</code>,  </span></summary>
      

      ``3.2.2-24``,  ``3.2.2-23``,  ``3.2.2-22``,  ``3.2.2-21``,  ``3.2.2-20``,  ``3.2.2-19``,  ``3.2.2-18``,  ``3.2.2-17``,  ``3.2.2-16``,  ``3.2.2-15``,  ``3.2.2-14``,  ``3.2.2-13``,  ``3.2.2-12``,  ``3.2.2-10``,  ``3.2.2-9``,  ``3.2.2-7``,  ``3.2.2-6``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
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

    pixi global install bioconductor-txdb.scerevisiae.ucsc.saccer3.sgdgene

to add into an existing workspace instead, run::

    pixi add bioconductor-txdb.scerevisiae.ucsc.saccer3.sgdgene

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-txdb.scerevisiae.ucsc.saccer3.sgdgene

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-txdb.scerevisiae.ucsc.saccer3.sgdgene

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-txdb.scerevisiae.ucsc.saccer3.sgdgene:<tag>

(see `bioconductor-txdb.scerevisiae.ucsc.saccer3.sgdgene/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-txdb.scerevisiae.ucsc.saccer3.sgdgene| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-txdb.scerevisiae.ucsc.saccer3.sgdgene.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-txdb.scerevisiae.ucsc.saccer3.sgdgene
   :alt:   (downloads)
.. |docker_bioconductor-txdb.scerevisiae.ucsc.saccer3.sgdgene| image:: https://quay.io/repository/biocontainers/bioconductor-txdb.scerevisiae.ucsc.saccer3.sgdgene/status
   :target: https://quay.io/repository/biocontainers/bioconductor-txdb.scerevisiae.ucsc.saccer3.sgdgene
.. _`bioconductor-txdb.scerevisiae.ucsc.saccer3.sgdgene/tags`: https://quay.io/repository/biocontainers/bioconductor-txdb.scerevisiae.ucsc.saccer3.sgdgene?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-txdb.scerevisiae.ucsc.saccer3.sgdgene";
        var versions = ["3.2.2","3.2.2","3.2.2","3.2.2","3.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-txdb.scerevisiae.ucsc.saccer3.sgdgene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-txdb.scerevisiae.ucsc.saccer3.sgdgene/README.html