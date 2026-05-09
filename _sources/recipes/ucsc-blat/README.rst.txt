:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-blat'
.. highlight: bash

ucsc-blat
=========

.. conda:recipe:: ucsc-blat
   :replaces_section_title:
   :noindex:

   Standalone BLAT v. 39x1 fast sequence search command line tool.

   :homepage: https://hgdownload.cse.ucsc.edu/admin/exe
   :documentation: https://github.com/ucscGenomeBrowser/kent/blob/v482_base/README
   
   :developer docs: https://github.com/ucscGenomeBrowser/kent
   :license: Varies; see https://genome.ucsc.edu/license
   :recipe: /`ucsc-blat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-blat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-blat/meta.yaml>`_
   :links: biotools: :biotools:`UCSC_Genome_Browser_Utilities`, doi: :doi:`10.1093/bib/bbs038`

   


.. conda:package:: ucsc-blat

   |downloads_ucsc-blat| |docker_ucsc-blat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>482-0</code>,  <code>481-0</code>,  <code>472-1</code>,  <code>472-0</code>,  <code>469-0</code>,  <code>468-0</code>,  <code>466-1</code>,  <code>466-0</code>,  <code>445-1</code>,  </span></summary>
      

      ``482-0``,  ``481-0``,  ``472-1``,  ``472-0``,  ``469-0``,  ``468-0``,  ``466-1``,  ``466-0``,  ``445-1``,  ``445-0``,  ``377-4``,  ``377-3``,  ``377-2``,  ``377-1``,  ``377-0``,  ``366-0``,  ``357-2``,  ``357-1``,  ``357-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblzma: ``>=5.8.1,<6.0a0``
   :depends on libopenssl-static: 
   :depends on libpng: ``>=1.6.49,<1.7.0a0``
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

    pixi global install ucsc-blat

to add into an existing workspace instead, run::

    pixi add ucsc-blat

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ucsc-blat

Alternatively, to install into a new environment, run::

    conda create -n envname ucsc-blat

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ucsc-blat:<tag>

(see `ucsc-blat/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ucsc-blat| image:: https://img.shields.io/conda/dn/bioconda/ucsc-blat.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-blat
   :alt:   (downloads)
.. |docker_ucsc-blat| image:: https://quay.io/repository/biocontainers/ucsc-blat/status
   :target: https://quay.io/repository/biocontainers/ucsc-blat
.. _`ucsc-blat/tags`: https://quay.io/repository/biocontainers/ucsc-blat?tab=tags


.. raw:: html

    <script>
        var package = "ucsc-blat";
        var versions = ["482","481","472","472","469"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-blat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-blat/README.html