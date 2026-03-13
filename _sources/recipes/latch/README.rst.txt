:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'latch'
.. highlight: bash

latch
=====

.. conda:recipe:: latch
   :replaces_section_title:
   :noindex:

   The Latch python bioinformatics framework.

   :homepage: https://github.com/latchbio/latch
   :license: MIT / MIT
   :recipe: /`latch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/latch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/latch/meta.yaml>`_

   It takes months to build infrastructure with the compute\, storage\, and user\-friendly interface necessary to run bioinformatics pipelines at scale.

   The Latch SDK is an open\-source toolchain to define serverless bioinformatics workflows with plain python and deploy associated no\-code interfaces using single command.

   Bioinformatics workflows developed with the SDK automatically receive\:
     \* Instant no\-code interfaces for accessibility and publication
     \* First class static typing
     \* Containerization and versioning of every registered change
     \* Reliable and scalable managed cloud infrastructure
     \* Single line definition of arbitrary resource requirements \(eg. CPU\, GPU\) for serverless execution



.. conda:package:: latch

   |downloads_latch| |docker_latch|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.67.23-0</code>,  <code>2.67.22-0</code>,  <code>2.67.21-0</code>,  <code>2.67.20-0</code>,  <code>2.67.19-0</code>,  <code>2.67.17-0</code>,  <code>2.67.16-0</code>,  <code>2.67.14-0</code>,  <code>2.67.13-0</code>,  </span></summary>
      

      ``2.67.23-0``,  ``2.67.22-0``,  ``2.67.21-0``,  ``2.67.20-0``,  ``2.67.19-0``,  ``2.67.17-0``,  ``2.67.16-0``,  ``2.67.14-0``,  ``2.67.13-0``,  ``2.67.12-0``,  ``2.67.6-0``,  ``2.67.5-0``,  ``2.67.4-0``,  ``2.67.2-0``,  ``2.67.0-0``,  ``2.66.3-0``,  ``2.66.1-0``,  ``2.65.7-0``,  ``2.65.6-0``,  ``2.65.5-0``,  ``2.65.3-0``,  ``2.65.2-0``,  ``2.65.1-0``,  ``2.64.1-0``,  ``2.64.0-0``,  ``2.63.1-0``,  ``2.62.3-0``,  ``2.62.2-0``,  ``2.62.1-0``,  ``2.62.0-0``,  ``2.61.2-0``,  ``2.61.1-0``,  ``2.61.0-0``,  ``2.59.1-0``,  ``2.59.0-0``,  ``2.58.2-0``,  ``2.58.0-0``,  ``2.57.3-0``,  ``2.57.2-0``,  ``2.19.11-0``

      
      .. raw:: html

         </details>
      

   
   :depends on aioconsole: ``0.6.1``
   :depends on apscheduler: ``>=3.10.0``
   :depends on asyncssh: ``2.13.2``
   :depends on boto3: ``>=1.26.0``
   :depends on click: ``>=8.0``
   :depends on dill: ``>=0.4.0``
   :depends on docker-py: ``>=7.1.0``
   :depends on gitpython: ``3.1.40``
   :depends on gql: ``3.5.0``
   :depends on graphql-core: ``3.2.3``
   :depends on latch-persistence: ``>=0.1.5``
   :depends on lytekit: ``0.15.28``
   :depends on lytekitplugins-pods: ``0.7.4``
   :depends on orjson: ``>=3.10.12``
   :depends on paramiko: ``>=3.4.0``
   :depends on pyjwt: ``>=0.2.0``
   :depends on python: ``>=3.9``
   :depends on python-dateutil: ``>=2.8``
   :depends on python-kubernetes: ``>=24.2.0``
   :depends on pyxattr: ``>=0.8.1``
   :depends on requests: ``>=2.28.1``
   :depends on requests-toolbelt: ``>=1.0.0,<2``
   :depends on scp: ``>=0.14.0``
   :depends on setuptools: ``>=75.3.0``
   :depends on tqdm: ``>=4.63.0``
   :depends on typing-extensions: ``>=4.12.0``
   :depends on watchfiles: ``0.19.0``
   :depends on websockets: ``11.0.3``

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

    pixi global install latch

to add into an existing workspace instead, run::

    pixi add latch

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install latch

Alternatively, to install into a new environment, run::

    conda create -n envname latch

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/latch:<tag>

(see `latch/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_latch| image:: https://img.shields.io/conda/dn/bioconda/latch.svg?style=flat
   :target: https://anaconda.org/bioconda/latch
   :alt:   (downloads)
.. |docker_latch| image:: https://quay.io/repository/biocontainers/latch/status
   :target: https://quay.io/repository/biocontainers/latch
.. _`latch/tags`: https://quay.io/repository/biocontainers/latch?tab=tags


.. raw:: html

    <script>
        var package = "latch";
        var versions = ["2.67.23","2.67.22","2.67.21","2.67.20","2.67.19"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/latch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/latch/README.html