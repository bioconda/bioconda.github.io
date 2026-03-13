:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epitxdb'
.. highlight: bash

bioconductor-epitxdb
====================

.. conda:recipe:: bioconductor-epitxdb
   :replaces_section_title:
   :noindex:

   Storing and accessing epitranscriptomic information using the AnnotationDbi interface

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/EpiTxDb.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-epitxdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epitxdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epitxdb/meta.yaml>`_

   EpiTxDb facilitates the storage of epitranscriptomic information. More specifically\, it can keep track of modification identity\, position\, the enzyme for introducing it on the RNA\, a specifier which determines the position on the RNA to be modified and the literature references each modification is associated with.


.. conda:package:: bioconductor-epitxdb

   |downloads_bioconductor-epitxdb| |docker_bioconductor-epitxdb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-modstrings: ``>=1.26.0,<1.27.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-trnadbimport: ``>=1.28.0,<1.29.0``
   :depends on bioconductor-txdbmaker: ``>=1.6.0,<1.7.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-curl: 
   :depends on r-dbi: 
   :depends on r-httr: 
   :depends on r-rex: 
   :depends on r-rsqlite: 
   :depends on r-xml2: 

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

    pixi global install bioconductor-epitxdb

to add into an existing workspace instead, run::

    pixi add bioconductor-epitxdb

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-epitxdb

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-epitxdb

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-epitxdb:<tag>

(see `bioconductor-epitxdb/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-epitxdb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epitxdb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epitxdb
   :alt:   (downloads)
.. |docker_bioconductor-epitxdb| image:: https://quay.io/repository/biocontainers/bioconductor-epitxdb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epitxdb
.. _`bioconductor-epitxdb/tags`: https://quay.io/repository/biocontainers/bioconductor-epitxdb?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-epitxdb";
        var versions = ["1.22.0","1.18.0","1.14.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epitxdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epitxdb/README.html