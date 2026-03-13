:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-interface-storage-plugins'
.. highlight: bash

snakemake-interface-storage-plugins
===================================

.. conda:recipe:: snakemake-interface-storage-plugins
   :replaces_section_title:
   :noindex:

   This package provides a stable interface for interactions between Snakemake and its storage plugins.

   :homepage: https://github.com/snakemake/snakemake-interface-storage-plugins
   :license: MIT / MIT
   :recipe: /`snakemake-interface-storage-plugins <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-interface-storage-plugins>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-interface-storage-plugins/meta.yaml>`_

   


.. conda:package:: snakemake-interface-storage-plugins

   |downloads_snakemake-interface-storage-plugins| |docker_snakemake-interface-storage-plugins|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.3.3-0</code>,  <code>4.3.2-0</code>,  <code>4.3.1-0</code>,  <code>4.2.3-0</code>,  <code>4.2.2-0</code>,  <code>4.2.1-0</code>,  <code>4.1.0-0</code>,  <code>3.5.0-0</code>,  <code>3.4.0-0</code>,  </span></summary>
      

      ``4.3.3-0``,  ``4.3.2-0``,  ``4.3.1-0``,  ``4.2.3-0``,  ``4.2.2-0``,  ``4.2.1-0``,  ``4.1.0-0``,  ``3.5.0-0``,  ``3.4.0-0``,  ``3.3.0-0``,  ``3.2.4-0``,  ``3.2.3-0``,  ``3.2.2-0``,  ``3.2.0-0``,  ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on python: ``>=3.11.0,<4.0.0``
   :depends on reretry: ``>=0.11.8,<0.12.0``
   :depends on snakemake-interface-common: ``>=1.12.0,<2.0.0``
   :depends on throttler: ``>=1.2.2,<2.0.0``
   :depends on wrapt: ``>=1.15.0,<2.0.0``

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

    pixi global install snakemake-interface-storage-plugins

to add into an existing workspace instead, run::

    pixi add snakemake-interface-storage-plugins

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install snakemake-interface-storage-plugins

Alternatively, to install into a new environment, run::

    conda create -n envname snakemake-interface-storage-plugins

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/snakemake-interface-storage-plugins:<tag>

(see `snakemake-interface-storage-plugins/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_snakemake-interface-storage-plugins| image:: https://img.shields.io/conda/dn/bioconda/snakemake-interface-storage-plugins.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-interface-storage-plugins
   :alt:   (downloads)
.. |docker_snakemake-interface-storage-plugins| image:: https://quay.io/repository/biocontainers/snakemake-interface-storage-plugins/status
   :target: https://quay.io/repository/biocontainers/snakemake-interface-storage-plugins
.. _`snakemake-interface-storage-plugins/tags`: https://quay.io/repository/biocontainers/snakemake-interface-storage-plugins?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-interface-storage-plugins";
        var versions = ["4.3.3","4.3.2","4.3.1","4.2.3","4.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-interface-storage-plugins/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-interface-storage-plugins/README.html