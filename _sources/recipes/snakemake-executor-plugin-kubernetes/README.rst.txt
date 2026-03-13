:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-executor-plugin-kubernetes'
.. highlight: bash

snakemake-executor-plugin-kubernetes
====================================

.. conda:recipe:: snakemake-executor-plugin-kubernetes
   :replaces_section_title:
   :noindex:

   A snakemake executor plugin for submission of jobs to Kubernetes.

   :homepage: https://github.com/snakemake/snakemake-executor-plugin-kubernetes
   :license: MIT / MIT
   :recipe: /`snakemake-executor-plugin-kubernetes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-executor-plugin-kubernetes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-executor-plugin-kubernetes/meta.yaml>`_

   


.. conda:package:: snakemake-executor-plugin-kubernetes

   |downloads_snakemake-executor-plugin-kubernetes| |docker_snakemake-executor-plugin-kubernetes|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.4-0</code>,  <code>0.4.3-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.2-0</code>,  <code>0.3.1-0</code>,  </span></summary>
      

      ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.5-0``,  ``0.1.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on python: ``>=3.11.0,<4.0.0``
   :depends on python-kubernetes: ``>=27.2.0,<31``
   :depends on snakemake-interface-common: ``>=1.17.3,<2.0.0``
   :depends on snakemake-interface-executor-plugins: ``>=9.0.0,<10.0.0``

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

    pixi global install snakemake-executor-plugin-kubernetes

to add into an existing workspace instead, run::

    pixi add snakemake-executor-plugin-kubernetes

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install snakemake-executor-plugin-kubernetes

Alternatively, to install into a new environment, run::

    conda create -n envname snakemake-executor-plugin-kubernetes

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/snakemake-executor-plugin-kubernetes:<tag>

(see `snakemake-executor-plugin-kubernetes/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_snakemake-executor-plugin-kubernetes| image:: https://img.shields.io/conda/dn/bioconda/snakemake-executor-plugin-kubernetes.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-executor-plugin-kubernetes
   :alt:   (downloads)
.. |docker_snakemake-executor-plugin-kubernetes| image:: https://quay.io/repository/biocontainers/snakemake-executor-plugin-kubernetes/status
   :target: https://quay.io/repository/biocontainers/snakemake-executor-plugin-kubernetes
.. _`snakemake-executor-plugin-kubernetes/tags`: https://quay.io/repository/biocontainers/snakemake-executor-plugin-kubernetes?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-executor-plugin-kubernetes";
        var versions = ["0.5.1","0.5.0","0.4.4","0.4.3","0.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-executor-plugin-kubernetes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-executor-plugin-kubernetes/README.html