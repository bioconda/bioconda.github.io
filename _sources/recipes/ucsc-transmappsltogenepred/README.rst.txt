:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-transmappsltogenepred'
.. highlight: bash

ucsc-transmappsltogenepred
==========================

.. conda:recipe:: ucsc-transmappsltogenepred
   :replaces_section_title:
   :noindex:

   Convert PSL alignments of mRNAs to gene annotations.

   :homepage: https://hgdownload.cse.ucsc.edu/admin/exe
   :documentation: https://github.com/ucscGenomeBrowser/kent/blob/v482_base/README
   
   :developer docs: https://github.com/ucscGenomeBrowser/kent
   :license: Varies; see https://genome.ucsc.edu/license
   :recipe: /`ucsc-transmappsltogenepred <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-transmappsltogenepred>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-transmappsltogenepred/meta.yaml>`_
   :links: biotools: :biotools:`UCSC_Genome_Browser_Utilities`, doi: :doi:`10.1093/bib/bbs038`

   


.. conda:package:: ucsc-transmappsltogenepred

   |downloads_ucsc-transmappsltogenepred| |docker_ucsc-transmappsltogenepred|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>482-1</code>,  <code>482-0</code>,  <code>469-1</code>,  <code>469-0</code>,  <code>377-3</code>,  <code>377-2</code>,  <code>377-1</code>,  <code>377-0</code>,  <code>366-0</code>,  </span></summary>
      

      ``482-1``,  ``482-0``,  ``469-1``,  ``469-0``,  ``377-3``,  ``377-2``,  ``377-1``,  ``377-0``,  ``366-0``,  ``357-2``,  ``357-1``,  ``357-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc: ``>=13``
   :depends on libiconv: ``>=1.18,<2.0a0``
   :depends on liblzma: ``>=5.8.1,<6.0a0``
   :depends on libopenssl-static: 
   :depends on libpng: ``>=1.6.50,<1.7.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libuuid: ``>=2.41.2,<3.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on mysql-connector-c: ``>=6.1.11,<6.1.12.0a0``

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

    pixi global install ucsc-transmappsltogenepred

to add into an existing workspace instead, run::

    pixi add ucsc-transmappsltogenepred

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ucsc-transmappsltogenepred

Alternatively, to install into a new environment, run::

    conda create -n envname ucsc-transmappsltogenepred

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ucsc-transmappsltogenepred:<tag>

(see `ucsc-transmappsltogenepred/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ucsc-transmappsltogenepred| image:: https://img.shields.io/conda/dn/bioconda/ucsc-transmappsltogenepred.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-transmappsltogenepred
   :alt:   (downloads)
.. |docker_ucsc-transmappsltogenepred| image:: https://quay.io/repository/biocontainers/ucsc-transmappsltogenepred/status
   :target: https://quay.io/repository/biocontainers/ucsc-transmappsltogenepred
.. _`ucsc-transmappsltogenepred/tags`: https://quay.io/repository/biocontainers/ucsc-transmappsltogenepred?tab=tags


.. raw:: html

    <script>
        var package = "ucsc-transmappsltogenepred";
        var versions = ["482","482","469","469","377"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-transmappsltogenepred/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-transmappsltogenepred/README.html