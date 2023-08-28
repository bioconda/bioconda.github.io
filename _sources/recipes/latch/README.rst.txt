:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'latch'
.. highlight: bash

latch
=====

.. conda:recipe:: latch
   :replaces_section_title:
   :noindex:

   A python bioinformatics framework

   :homepage: https://pypi.org/project/latch/
   :license: MIT
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
      
      

      ``2.19.11-0``

      

   
   :depends aioconsole: ``0.5.1``
   :depends apscheduler: ``3.9.1``
   :depends asyncssh: ``2.12.0``
   :depends awscli: ``1.25.22``
   :depends boto3: ``>=1.24.22``
   :depends click: ``>=8.0,<9.0``
   :depends cloudpickle: ``>=2.0.0``
   :depends cookiecutter: ``>=1.7.3``
   :depends croniter: ``>=0.3.20,<4.0.0``
   :depends dataclasses-json: ``>=0.5.2``
   :depends deprecated: ``>=1.0,<2.0``
   :depends diskcache: ``>=5.2.1``
   :depends docker-image-py: ``>=0.1.10``
   :depends docker-py: ``>=5.0.3,<6.0.0``
   :depends docstring_parser: ``>=0.9.0``
   :depends googleapis-common-protos: 
   :depends gql: ``3.4.0``
   :depends graphql-core: ``3.2.3``
   :depends grpcio: ``>=1.43.0,!=1.45.0,<2.0``
   :depends grpcio-status: ``>=1.43,!=1.45.0``
   :depends jsonschema: ``>=4.5.1``
   :depends keyring: ``>=18.0.1``
   :depends marshmallow-jsonschema: ``>=0.12.0``
   :depends natsort: ``>=7.0.1``
   :depends numpy: ``<1.22.0``
   :depends pandas: ``>=1.0.0,<2.0.0``
   :depends paramiko: ``>=2.11.0``
   :depends prompt-toolkit: ``3.0.33``
   :depends protobuf: ``>=3.6.1,<4.0.0``
   :depends protoc-gen-swagger: 
   :depends pyarrow: ``>=4.0.0,<7.0.0``
   :depends pyjwt: ``>=0.2.0``
   :depends python: ``>=3.8``
   :depends python-dateutil: ``>=2.1``
   :depends python-json-logger: ``>=2.0.0``
   :depends python-kubernetes: ``>=24.2.0``
   :depends pytimeparse: ``>=1.1.8,<2.0.0``
   :depends pytz: 
   :depends pyyaml: 
   :depends requests: ``>=2.28.1,<3.0.0``
   :depends requests-toolbelt: ``0.10.1``
   :depends responses: ``>=0.10.7``
   :depends retry: ``0.9.2``
   :depends scp: ``>=0.14.0``
   :depends sortedcontainers: ``>=1.5.9,<3.0.0``
   :depends statsd: ``>=3.0.0,<4.0.0``
   :depends tqdm: ``>=4.63.0``
   :depends typing-extensions: ``4.5.0``
   :depends typing_extensions: 
   :depends urllib3: ``>=1.22,<2.0.0``
   :depends uvloop: ``0.17.0``
   :depends watchfiles: ``0.18.1``
   :depends websockets: ``10.3``
   :depends wheel: ``>=0.30.0,<1.0.0``
   :depends wrapt: ``>=1.0.0,<2.0.0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
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
        var versions = ["2.19.11"];
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