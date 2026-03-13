:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-interface-common'
.. highlight: bash

snakemake-interface-common
==========================

.. conda:recipe:: snakemake-interface-common
   :replaces_section_title:
   :noindex:

   Common functions and classes for Snakemake and its plugins.

   :homepage: https://github.com/snakemake/snakemake-interface-common
   :license: MIT / MIT
   :recipe: /`snakemake-interface-common <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-interface-common>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-interface-common/meta.yaml>`_

   


.. conda:package:: snakemake-interface-common

   |downloads_snakemake-interface-common| |docker_snakemake-interface-common|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.23.0-0</code>,  <code>1.22.0-0</code>,  <code>1.21.0-0</code>,  <code>1.20.2-0</code>,  <code>1.20.1-0</code>,  <code>1.20.0-0</code>,  <code>1.19.4-0</code>,  <code>1.18.0-0</code>,  <code>1.17.4-0</code>,  </span></summary>
      

      ``1.23.0-0``,  ``1.22.0-0``,  ``1.21.0-0``,  ``1.20.2-0``,  ``1.20.1-0``,  ``1.20.0-0``,  ``1.19.4-0``,  ``1.18.0-0``,  ``1.17.4-0``,  ``1.17.3-0``,  ``1.17.2-0``,  ``1.17.1-0``,  ``1.17.0-0``,  ``1.16.0-0``,  ``1.15.3-0``,  ``1.15.2-0``,  ``1.15.1-0``,  ``1.15.0-1``,  ``1.15.0-0``,  ``1.14.5-0``,  ``1.14.4-0``,  ``1.14.3-0``,  ``1.14.2-0``,  ``1.14.1-0``,  ``1.14.0-0``,  ``1.13.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.7.3-0``,  ``1.7.1-0``,  ``1.4.1-0``,  ``1.3.3-0``,  ``1.3.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on argparse-dataclass: ``>=2.0.0``
   :depends on configargparse: ``>=1.7``
   :depends on packaging: ``>=24.0,<26.0``
   :depends on python: ``>=3.8``

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

    pixi global install snakemake-interface-common

to add into an existing workspace instead, run::

    pixi add snakemake-interface-common

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install snakemake-interface-common

Alternatively, to install into a new environment, run::

    conda create -n envname snakemake-interface-common

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/snakemake-interface-common:<tag>

(see `snakemake-interface-common/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_snakemake-interface-common| image:: https://img.shields.io/conda/dn/bioconda/snakemake-interface-common.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-interface-common
   :alt:   (downloads)
.. |docker_snakemake-interface-common| image:: https://quay.io/repository/biocontainers/snakemake-interface-common/status
   :target: https://quay.io/repository/biocontainers/snakemake-interface-common
.. _`snakemake-interface-common/tags`: https://quay.io/repository/biocontainers/snakemake-interface-common?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-interface-common";
        var versions = ["1.23.0","1.22.0","1.21.0","1.20.2","1.20.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-interface-common/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-interface-common/README.html