:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rpsbproc'
.. highlight: bash

rpsbproc
========

.. conda:recipe:: rpsbproc
   :replaces_section_title:
   :noindex:

   RpsbProc\, the post\-RPSBLAST Processing Utility.

   :homepage: https://ftp.ncbi.nih.gov/pub/mmdb/cdd/rpsbproc/README
   :license: Public Domain
   :recipe: /`rpsbproc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rpsbproc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rpsbproc/meta.yaml>`_
   :links: doi: :doi:`10.1002/cpbi.90`

   The rpsbproc command line utility is an addition to the standalone version of
   Reverse Position\-Specific BLAST \(RPS\-BLAST\)\, also known as CD\-Search \(Conserved
   Domain Search\).

   It post\-processes the results of local RPS\-BLAST searches in order to provide a
   non\-redundant view of the search results\, and to provide additional annotation
   on query sequences\, such as domain superfamilies and functional sites\, similar to
   the annotation provided by the corresponding web services \(e.g.\, the NCBI Batch
   CD\-Search web service at
   http\:\/\/www.ncbi.nlm.nih.gov\/Structure\/bwrpsb\/bwrpsb.cgi\).

   Specifically\, the rpsbproc utility reads the output of rpsblast\/rpstblastn\,
   fills in domain superfamily and functional site information for each region of
   the sequence\, re\-sorts the hits by a different standard\, and calculates a
   set of non\-redundent representative hits. In this way\, it turns the
   raw alignments into domain\/site annotations on the query sequence at different
   redundancy level\, basically produce the same data as web\-based Batch CD\-Search
   service does. The annotation data is presented in tab\-delimited tables to be processed
   either programatically or manually with a spreadsheet \(see details below\).

   See the CDD and CD\-Search help document for additional details about
   superfamilies\, conserved sites\, and more\:

   http\:\/\/www.ncbi.nlm.nih.gov\/Structure\/cdd\/cdd\_help.shtml



.. conda:package:: rpsbproc

   |downloads_rpsbproc| |docker_rpsbproc|

   :versions:
      
      

      ``0.5.1-0``,  ``0.5.0-3``,  ``0.5.0-2``,  ``0.5.0-1``,  ``0.5.0-0``

      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc: ``>=13``
   :depends on libsqlite: ``>=3.51.2,<4.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install rpsbproc

to add into an existing workspace instead, run::

    pixi add rpsbproc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rpsbproc

Alternatively, to install into a new environment, run::

    conda create -n envname rpsbproc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rpsbproc:<tag>

(see `rpsbproc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rpsbproc| image:: https://img.shields.io/conda/dn/bioconda/rpsbproc.svg?style=flat
   :target: https://anaconda.org/bioconda/rpsbproc
   :alt:   (downloads)
.. |docker_rpsbproc| image:: https://quay.io/repository/biocontainers/rpsbproc/status
   :target: https://quay.io/repository/biocontainers/rpsbproc
.. _`rpsbproc/tags`: https://quay.io/repository/biocontainers/rpsbproc?tab=tags


.. raw:: html

    <script>
        var package = "rpsbproc";
        var versions = ["0.5.1","0.5.0","0.5.0","0.5.0","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rpsbproc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rpsbproc/README.html