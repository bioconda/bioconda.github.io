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

         <details><summary><span class="truncated-version-list"><code>2.67.13-0</code>,  <code>2.67.12-0</code>,  <code>2.67.6-0</code>,  <code>2.67.5-0</code>,  <code>2.67.4-0</code>,  <code>2.67.2-0</code>,  <code>2.67.0-0</code>,  <code>2.66.3-0</code>,  <code>2.66.1-0</code>,  </span></summary>
      

      ``2.67.13-0``,  ``2.67.12-0``,  ``2.67.6-0``,  ``2.67.5-0``,  ``2.67.4-0``,  ``2.67.2-0``,  ``2.67.0-0``,  ``2.66.3-0``,  ``2.66.1-0``,  ``2.65.7-0``,  ``2.65.6-0``,  ``2.65.5-0``,  ``2.65.3-0``,  ``2.65.2-0``,  ``2.65.1-0``,  ``2.64.1-0``,  ``2.64.0-0``,  ``2.63.1-0``,  ``2.62.3-0``,  ``2.62.2-0``,  ``2.62.1-0``,  ``2.62.0-0``,  ``2.61.2-0``,  ``2.61.1-0``,  ``2.61.0-0``,  ``2.59.1-0``,  ``2.59.0-0``,  ``2.58.2-0``,  ``2.58.0-0``,  ``2.57.3-0``,  ``2.57.2-0``,  ``2.19.11-0``

      
      .. raw:: html

         </details>
      

   
   :depends aioconsole: ``0.6.1``
   :depends apscheduler: ``>=3.10.0``
   :depends asyncssh: ``2.13.2``
   :depends boto3: ``>=1.26.0``
   :depends click: ``>=8.0``
   :depends dill: ``>=0.4.0``
   :depends docker-py: ``>=7.1.0``
   :depends gitpython: ``3.1.40``
   :depends gql: ``3.5.0``
   :depends graphql-core: ``3.2.3``
   :depends latch-persistence: ``>=0.1.5``
   :depends lytekit: ``0.15.28``
   :depends lytekitplugins-pods: ``0.7.4``
   :depends orjson: ``>=3.10.12``
   :depends paramiko: ``>=3.4.0``
   :depends pyjwt: ``>=0.2.0``
   :depends python: ``>=3.9``
   :depends python-dateutil: ``>=2.8``
   :depends python-kubernetes: ``>=24.2.0``
   :depends pyxattr: ``>=0.8.1``
   :depends requests: ``>=2.28.1``
   :depends requests-toolbelt: ``>=1.0.0,<2``
   :depends scp: ``>=0.14.0``
   :depends setuptools: ``>=75.3.0``
   :depends tqdm: ``>=4.63.0``
   :depends typing-extensions: ``>=4.12.0``
   :depends watchfiles: ``0.19.0``
   :depends websockets: ``11.0.3``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install latch

   and update with::

      mamba update latch

  To create a new environment, run::

      mamba create --name myenvname latch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/latch:<tag>

   (see `latch/tags`_ for valid values for ``<tag>``)


.. |downloads_latch| image:: https://img.shields.io/conda/dn/bioconda/latch.svg?style=flat
   :target: https://anaconda.org/bioconda/latch
   :alt:   (downloads)
.. |docker_latch| image:: https://quay.io/repository/biocontainers/latch/status
   :target: https://quay.io/repository/biocontainers/latch
.. _`latch/tags`: https://quay.io/repository/biocontainers/latch?tab=tags


.. raw:: html

    <script>
        var package = "latch";
        var versions = ["2.67.13","2.67.12","2.67.6","2.67.5","2.67.4"];
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