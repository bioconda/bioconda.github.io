:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncbi-vdb-py'
.. highlight: bash

ncbi-vdb-py
===========

.. conda:recipe:: ncbi-vdb-py
   :replaces_section_title:
   :noindex:

   SRA tools database engine \(Python bindings\).

   :homepage: https://github.com/ncbi/ncbi-vdb
   :license: Public Domain
   :recipe: /`ncbi-vdb-py <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-vdb-py>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-vdb-py/meta.yaml>`_

   VDB is the database engine that all SRA tools use. It is a columnar database
   system with a number of unique features. All SRA objects are stored in VDB.
   This package exposes the Python bindings and depends on ncbi\-vdb to be available.



.. conda:package:: ncbi-vdb-py

   |downloads_ncbi-vdb-py| |docker_ncbi-vdb-py|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.1-0</code>,  <code>3.2.0-0</code>,  <code>3.1.1-0</code>,  <code>3.1.0-0</code>,  <code>3.0.10-0</code>,  <code>3.0.9-0</code>,  <code>3.0.8-0</code>,  <code>3.0.7-0</code>,  <code>3.0.6-0</code>,  </span></summary>
      

      ``3.2.1-0``,  ``3.2.0-0``,  ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.10-0``,  ``3.0.9-0``,  ``3.0.8-0``,  ``3.0.7-0``,  ``3.0.6-0``,  ``3.0.5-0``,  ``3.0.2-0``,  ``3.0.0-0``,  ``2.11.0-0``,  ``2.10.9-0``,  ``2.10.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends on ncbi-vdb: ``3.2.1.*``
   :depends on python: ``>=3.5``

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

    pixi global install ncbi-vdb-py

to add into an existing workspace instead, run::

    pixi add ncbi-vdb-py

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ncbi-vdb-py

Alternatively, to install into a new environment, run::

    conda create -n envname ncbi-vdb-py

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ncbi-vdb-py:<tag>

(see `ncbi-vdb-py/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ncbi-vdb-py| image:: https://img.shields.io/conda/dn/bioconda/ncbi-vdb-py.svg?style=flat
   :target: https://anaconda.org/bioconda/ncbi-vdb-py
   :alt:   (downloads)
.. |docker_ncbi-vdb-py| image:: https://quay.io/repository/biocontainers/ncbi-vdb-py/status
   :target: https://quay.io/repository/biocontainers/ncbi-vdb-py
.. _`ncbi-vdb-py/tags`: https://quay.io/repository/biocontainers/ncbi-vdb-py?tab=tags


.. raw:: html

    <script>
        var package = "ncbi-vdb-py";
        var versions = ["3.2.1","3.2.0","3.1.1","3.1.0","3.0.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncbi-vdb-py/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncbi-vdb-py/README.html