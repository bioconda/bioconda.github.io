:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-matrixnormalize'
.. highlight: bash

ucsc-matrixnormalize
====================

.. conda:recipe:: ucsc-matrixnormalize
   :replaces_section_title:
   :noindex:

   Normalize a matrix somehow \- make it\'s columns or rows all sum to one or have vector length one.

   :homepage: https://hgdownload.cse.ucsc.edu/admin/exe
   :documentation: https://github.com/ucscGenomeBrowser/kent/blob/v482_base/README
   
   :developer docs: https://github.com/ucscGenomeBrowser/kent
   :license: Varies; see https://genome.ucsc.edu/license
   :recipe: /`ucsc-matrixnormalize <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-matrixnormalize>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-matrixnormalize/meta.yaml>`_
   :links: biotools: :biotools:`UCSC_Genome_Browser_Utilities`, doi: :doi:`10.1093/bib/bbs038`

   


.. conda:package:: ucsc-matrixnormalize

   |downloads_ucsc-matrixnormalize| |docker_ucsc-matrixnormalize|

   :versions:
      
      

      ``482-0``

      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc: ``>=13``
   :depends on libiconv: ``>=1.18,<2.0a0``
   :depends on liblzma: ``>=5.8.1,<6.0a0``
   :depends on libopenssl-static: 
   :depends on libpng: ``>=1.6.49,<1.7.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libuuid: ``>=2.38.1,<3.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on mysql-connector-c: ``>=6.1.11,<6.1.12.0a0``

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

    pixi global install ucsc-matrixnormalize

to add into an existing workspace instead, run::

    pixi add ucsc-matrixnormalize

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ucsc-matrixnormalize

Alternatively, to install into a new environment, run::

    conda create -n envname ucsc-matrixnormalize

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ucsc-matrixnormalize:<tag>

(see `ucsc-matrixnormalize/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ucsc-matrixnormalize| image:: https://img.shields.io/conda/dn/bioconda/ucsc-matrixnormalize.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-matrixnormalize
   :alt:   (downloads)
.. |docker_ucsc-matrixnormalize| image:: https://quay.io/repository/biocontainers/ucsc-matrixnormalize/status
   :target: https://quay.io/repository/biocontainers/ucsc-matrixnormalize
.. _`ucsc-matrixnormalize/tags`: https://quay.io/repository/biocontainers/ucsc-matrixnormalize?tab=tags


.. raw:: html

    <script>
        var package = "ucsc-matrixnormalize";
        var versions = ["482"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-matrixnormalize/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-matrixnormalize/README.html