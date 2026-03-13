:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'adam'
.. highlight: bash

adam
====

.. conda:recipe:: adam
   :replaces_section_title:
   :noindex:

   Genomics analysis platform built on Apache Avro\, Apache Spark\, and Apache Parquet

   :homepage: https://github.com/bigdatagenomics/adam
   :license: Apache-2.0
   :recipe: /`adam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/adam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/adam/meta.yaml>`_

   


.. conda:package:: adam

   |downloads_adam| |docker_adam|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.1-0</code>,  <code>1.0-0</code>,  <code>0.37.0-0</code>,  <code>0.36.0-0</code>,  <code>0.35.0-0</code>,  <code>0.34.0-1</code>,  <code>0.34.0-0</code>,  <code>0.33.0-0</code>,  <code>0.32.0-0</code>,  </span></summary>
      

      ``1.0.1-0``,  ``1.0-0``,  ``0.37.0-0``,  ``0.36.0-0``,  ``0.35.0-0``,  ``0.34.0-1``,  ``0.34.0-0``,  ``0.33.0-0``,  ``0.32.0-0``,  ``0.31.0-0``,  ``0.30.0-0``,  ``0.29.0-0``,  ``0.28.0-0``,  ``0.27.0-1``,  ``0.26.0-1``,  ``0.25.0-1``,  ``0.24.0-1``,  ``0.24.0-0``,  ``0.23.0-0``,  ``0.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on openjdk: ``>=8``
   :depends on pyspark: ``>=3.2.1``

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

    pixi global install adam

to add into an existing workspace instead, run::

    pixi add adam

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install adam

Alternatively, to install into a new environment, run::

    conda create -n envname adam

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/adam:<tag>

(see `adam/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_adam| image:: https://img.shields.io/conda/dn/bioconda/adam.svg?style=flat
   :target: https://anaconda.org/bioconda/adam
   :alt:   (downloads)
.. |docker_adam| image:: https://quay.io/repository/biocontainers/adam/status
   :target: https://quay.io/repository/biocontainers/adam
.. _`adam/tags`: https://quay.io/repository/biocontainers/adam?tab=tags


.. raw:: html

    <script>
        var package = "adam";
        var versions = ["1.0.1","1.0","0.37.0","0.36.0","0.35.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/adam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/adam/README.html