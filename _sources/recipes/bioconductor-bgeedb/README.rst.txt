:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bgeedb'
.. highlight: bash

bioconductor-bgeedb
===================

.. conda:recipe:: bioconductor-bgeedb
   :replaces_section_title:
   :noindex:

   Annotation and gene expression data retrieval from Bgee database. TopAnat\, an anatomical entities Enrichment Analysis tool for UBERON ontology

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BgeeDB.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-bgeedb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bgeedb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bgeedb/meta.yaml>`_
   :links: biotools: :biotools:`bgeedb`, doi: :doi:`10.12688/f1000research.9973.1`

   A package for the annotation and gene expression data download from Bgee database\, and TopAnat analysis\: GO\-like enrichment of anatomical terms\, mapped to genes by expression patterns.


.. conda:package:: bioconductor-bgeedb

   |downloads_bioconductor-bgeedb| |docker_bioconductor-bgeedb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.28.0-0</code>,  <code>2.26.0-0</code>,  <code>2.24.0-0</code>,  <code>2.20.0-0</code>,  <code>2.18.0-0</code>,  <code>2.16.0-1</code>,  <code>2.16.0-0</code>,  <code>2.14.0-0</code>,  <code>2.12.0-0</code>,  </span></summary>
      

      ``2.28.0-0``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-1``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-1``,  ``2.8.0-0``,  ``2.6.2-0``,  ``2.4.0-0``,  ``2.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends on bioconductor-graph: ``>=1.80.0,<1.81.0``
   :depends on bioconductor-topgo: ``>=2.54.0,<2.55.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-curl: 
   :depends on r-data.table: 
   :depends on r-digest: 
   :depends on r-dplyr: 
   :depends on r-r.utils: 
   :depends on r-rcurl: 
   :depends on r-rsqlite: 
   :depends on r-tidyr: 

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

    pixi global install bioconductor-bgeedb

to add into an existing workspace instead, run::

    pixi add bioconductor-bgeedb

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-bgeedb

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-bgeedb

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-bgeedb:<tag>

(see `bioconductor-bgeedb/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-bgeedb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bgeedb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bgeedb
   :alt:   (downloads)
.. |docker_bioconductor-bgeedb| image:: https://quay.io/repository/biocontainers/bioconductor-bgeedb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bgeedb
.. _`bioconductor-bgeedb/tags`: https://quay.io/repository/biocontainers/bioconductor-bgeedb?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bgeedb";
        var versions = ["2.28.0","2.26.0","2.24.0","2.20.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bgeedb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bgeedb/README.html