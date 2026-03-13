:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-storage-plugin-azure'
.. highlight: bash

snakemake-storage-plugin-azure
==============================

.. conda:recipe:: snakemake-storage-plugin-azure
   :replaces_section_title:
   :noindex:

   A Snakemake storage plugin to read and write from Azure Blob Storage

   :homepage: https://github.com/snakemake/snakemake-storage-plugin-azure
   :license: MIT
   :recipe: /`snakemake-storage-plugin-azure <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-storage-plugin-azure>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-storage-plugin-azure/meta.yaml>`_

   


.. conda:package:: snakemake-storage-plugin-azure

   |downloads_snakemake-storage-plugin-azure| |docker_snakemake-storage-plugin-azure|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.4-0</code>,  <code>0.4.3-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.0-0</code>,  <code>0.2.2-0</code>,  <code>0.2.1-0</code>,  <code>0.2.0-0</code>,  </span></summary>
      

      ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on azure-core: ``>=1.29.5,<2.0.0``
   :depends on azure-identity: ``>=1.15.0,<2.0.0``
   :depends on azure-storage-blob: ``>=12.19.0,<13.0.0``
   :depends on python: ``>=3.11.0,<4.0.0``
   :depends on snakemake-interface-common: ``>=1.15.0,<2.0.0``
   :depends on snakemake-interface-storage-plugins: ``>=4.1.0,<5.0.0``

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

    pixi global install snakemake-storage-plugin-azure

to add into an existing workspace instead, run::

    pixi add snakemake-storage-plugin-azure

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install snakemake-storage-plugin-azure

Alternatively, to install into a new environment, run::

    conda create -n envname snakemake-storage-plugin-azure

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/snakemake-storage-plugin-azure:<tag>

(see `snakemake-storage-plugin-azure/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_snakemake-storage-plugin-azure| image:: https://img.shields.io/conda/dn/bioconda/snakemake-storage-plugin-azure.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-storage-plugin-azure
   :alt:   (downloads)
.. |docker_snakemake-storage-plugin-azure| image:: https://quay.io/repository/biocontainers/snakemake-storage-plugin-azure/status
   :target: https://quay.io/repository/biocontainers/snakemake-storage-plugin-azure
.. _`snakemake-storage-plugin-azure/tags`: https://quay.io/repository/biocontainers/snakemake-storage-plugin-azure?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-storage-plugin-azure";
        var versions = ["0.4.4","0.4.3","0.4.2","0.4.1","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-storage-plugin-azure/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-storage-plugin-azure/README.html