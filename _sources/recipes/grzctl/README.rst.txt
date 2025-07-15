:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'grzctl'
.. highlight: bash

grzctl
======

.. conda:recipe:: grzctl
   :replaces_section_title:
   :noindex:

   Control CLI for GRZ administrators.

   :homepage: https://github.com/BfArM-MVH/grz-tools
   :documentation: https://github.com/BfArM-MVH/grz-tools/blob/grzctl-v0.2.4/packages/grz-cli/README.md
   
   :license: MIT / MIT
   :recipe: /`grzctl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grzctl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grzctl/meta.yaml>`_

   


.. conda:package:: grzctl

   |downloads_grzctl| |docker_grzctl|

   :versions:
      
      

      ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends boto3: ``>=1.36,<2``
   :depends click: ``>=8.2,<9``
   :depends grz-cli: ``1.*``
   :depends grz-common: ``>=1.0.3,<2``
   :depends grz-db: ``>=0.2.1``
   :depends grz-pydantic-models: ``>=2.1.0,<3``
   :depends jsonschema: ``>=4.23.0,<5``
   :depends platformdirs: ``>=4.3.6,<5``
   :depends pydantic: ``>=2.9.2,<2.10``
   :depends pydantic-settings: ``>=2.9.0,<2.10``
   :depends pysam: ``0.23.*``
   :depends python: ``>=3.12``
   :depends python-crypt4gh: ``>=1.7,<2``
   :depends pyyaml: ``>=6.0.2,<7``
   :depends requests: ``>=2.32.3,<3``
   :depends rich: ``13.*``
   :depends tqdm: ``>=4.66.5,<5``
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

      mamba install grzctl

   and update with::

      mamba update grzctl

  To create a new environment, run::

      mamba create --name myenvname grzctl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/grzctl:<tag>

   (see `grzctl/tags`_ for valid values for ``<tag>``)


.. |downloads_grzctl| image:: https://img.shields.io/conda/dn/bioconda/grzctl.svg?style=flat
   :target: https://anaconda.org/bioconda/grzctl
   :alt:   (downloads)
.. |docker_grzctl| image:: https://quay.io/repository/biocontainers/grzctl/status
   :target: https://quay.io/repository/biocontainers/grzctl
.. _`grzctl/tags`: https://quay.io/repository/biocontainers/grzctl?tab=tags


.. raw:: html

    <script>
        var package = "grzctl";
        var versions = ["0.2.4","0.2.3","0.2.2","0.2.1","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/grzctl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/grzctl/README.html