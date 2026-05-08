:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cigarillo'
.. highlight: bash

bioconductor-cigarillo
======================

.. conda:recipe:: bioconductor-cigarillo
   :replaces_section_title:
   :noindex:

   Efficient manipulation of CIGAR strings

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/cigarillo.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cigarillo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cigarillo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cigarillo/meta.yaml>`_

   CIGAR stands for Concise Idiosyncratic Gapped Alignment Report. CIGAR strings are found in the BAM files produced by most aligners and in the AIRR\-formatted output produced by IgBLAST. The cigarillo package provides functions to parse and inspect CIGAR strings\, trim them\, turn them into ranges of positions relative to the \"query space\" or \"reference space\"\, and project positions or sequences from one space to the other. Note that these operations are low\-level operations that the user rarely needs to perform directly. More typically\, they are performed behind the scene by higher\-level functionality implemented in other packages like Bioconductor packages GenomicAlignments and igblastr.


.. conda:package:: bioconductor-cigarillo

   |downloads_bioconductor-cigarillo| |docker_bioconductor-cigarillo|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0a0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0a0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install bioconductor-cigarillo

to add into an existing workspace instead, run::

    pixi add bioconductor-cigarillo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cigarillo

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cigarillo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cigarillo:<tag>

(see `bioconductor-cigarillo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cigarillo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cigarillo.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cigarillo
   :alt:   (downloads)
.. |docker_bioconductor-cigarillo| image:: https://quay.io/repository/biocontainers/bioconductor-cigarillo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cigarillo
.. _`bioconductor-cigarillo/tags`: https://quay.io/repository/biocontainers/bioconductor-cigarillo?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cigarillo";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cigarillo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cigarillo/README.html