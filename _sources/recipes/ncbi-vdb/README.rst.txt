:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncbi-vdb'
.. highlight: bash

ncbi-vdb
========

.. conda:recipe:: ncbi-vdb
   :replaces_section_title:
   :noindex:

   SRA tools database engine.

   :homepage: https://github.com/ncbi/ncbi-vdb
   :documentation: https://github.com/ncbi/ncbi-vdb/wiki
   
   :license: Public Domain
   :recipe: /`ncbi-vdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-vdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-vdb/meta.yaml>`_

   \"VDB is the database engine that all SRA tools use. It is a columnar database
   system with a number of unique features. All SRA objects are stored in VDB.\"



.. conda:package:: ncbi-vdb

   |downloads_ncbi-vdb| |docker_ncbi-vdb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.3.0-0</code>,  <code>3.2.1-0</code>,  <code>3.2.0-0</code>,  <code>3.1.1-3</code>,  <code>3.1.1-2</code>,  <code>3.1.1-1</code>,  <code>3.1.1-0</code>,  <code>3.1.0-2</code>,  <code>3.1.0-1</code>,  </span></summary>
      

      ``3.3.0-0``,  ``3.2.1-0``,  ``3.2.0-0``,  ``3.1.1-3``,  ``3.1.1-2``,  ``3.1.1-1``,  ``3.1.1-0``,  ``3.1.0-2``,  ``3.1.0-1``,  ``3.1.0-0``,  ``3.0.10-0``,  ``3.0.9-0``,  ``3.0.8-0``,  ``3.0.7-0``,  ``3.0.6-0``,  ``3.0.5-2``,  ``3.0.5-0``,  ``3.0.2-2``,  ``3.0.2-1``,  ``3.0.2-0``,  ``3.0.0-0``,  ``2.11.0-1``,  ``2.11.0-0``,  ``2.10.9-0``,  ``2.10.8-0``,  ``2.10.7-0``,  ``2.10.6-0``,  ``2.10.5-0``,  ``2.10.4-0``,  ``2.10.3-0``,  ``2.10.2-0``,  ``2.10.1-0``,  ``2.10.0-0``,  ``2.9.6-0``,  ``2.9.3-0``,  ``2.9.1-0``,  ``2.9.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install ncbi-vdb

to add into an existing workspace instead, run::

    pixi add ncbi-vdb

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ncbi-vdb

Alternatively, to install into a new environment, run::

    conda create -n envname ncbi-vdb

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ncbi-vdb:<tag>

(see `ncbi-vdb/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ncbi-vdb| image:: https://img.shields.io/conda/dn/bioconda/ncbi-vdb.svg?style=flat
   :target: https://anaconda.org/bioconda/ncbi-vdb
   :alt:   (downloads)
.. |docker_ncbi-vdb| image:: https://quay.io/repository/biocontainers/ncbi-vdb/status
   :target: https://quay.io/repository/biocontainers/ncbi-vdb
.. _`ncbi-vdb/tags`: https://quay.io/repository/biocontainers/ncbi-vdb?tab=tags


.. raw:: html

    <script>
        var package = "ncbi-vdb";
        var versions = ["3.3.0","3.2.1","3.2.0","3.1.1","3.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncbi-vdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncbi-vdb/README.html