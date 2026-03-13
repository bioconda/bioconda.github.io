:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genbankr'
.. highlight: bash

bioconductor-genbankr
=====================

.. conda:recipe:: bioconductor-genbankr
   :replaces_section_title:
   :noindex:

   Parsing GenBank files into semantically useful objects

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/genbankr.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genbankr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genbankr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genbankr/meta.yaml>`_
   :links: biotools: :biotools:`genbankr`, doi: :doi:`10.1038/nmeth.3252`

   Reads Genbank files.


.. conda:package:: bioconductor-genbankr

   |downloads_bioconductor-genbankr| |docker_bioconductor-genbankr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.27.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  </span></summary>
      

      ``1.27.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends on bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends on bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends on bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends on bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends on bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends on bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends on bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends on bioconductor-variantannotation: ``>=1.46.0,<1.47.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``

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

    pixi global install bioconductor-genbankr

to add into an existing workspace instead, run::

    pixi add bioconductor-genbankr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-genbankr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-genbankr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-genbankr:<tag>

(see `bioconductor-genbankr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-genbankr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genbankr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genbankr
   :alt:   (downloads)
.. |docker_bioconductor-genbankr| image:: https://quay.io/repository/biocontainers/bioconductor-genbankr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genbankr
.. _`bioconductor-genbankr/tags`: https://quay.io/repository/biocontainers/bioconductor-genbankr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genbankr";
        var versions = ["1.27.0","1.26.0","1.22.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genbankr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genbankr/README.html