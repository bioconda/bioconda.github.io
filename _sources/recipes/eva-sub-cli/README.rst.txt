:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'eva-sub-cli'
.. highlight: bash

eva-sub-cli
===========

.. conda:recipe:: eva-sub-cli
   :replaces_section_title:
   :noindex:

   EVA Submission Command Line Interface

   :homepage: https://github.com/EBIvariation/eva-sub-cli
   :license: Apache-2.0
   :recipe: /`eva-sub-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eva-sub-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eva-sub-cli/meta.yaml>`_

   


.. conda:package:: eva-sub-cli

   |downloads_eva-sub-cli| |docker_eva-sub-cli|

   :versions:
      
      

      ``0.2-0``

      

   
   :depends ebi-eva-common-pyutils: ``>=0.6.1``
   :depends jinja2: 
   :depends jsonschema: 
   :depends nextflow: ``>=21.10.0``
   :depends nodejs: ``>=10.19.1``
   :depends openpyxl: 
   :depends python: ``>=3.8``
   :depends pyyaml: 
   :depends requests: 
   :depends vcf-validator: ``>=0.9.6``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install eva-sub-cli

   and update with::

      mamba update eva-sub-cli

  To create a new environment, run::

      mamba create --name myenvname eva-sub-cli

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/eva-sub-cli:<tag>

   (see `eva-sub-cli/tags`_ for valid values for ``<tag>``)


.. |downloads_eva-sub-cli| image:: https://img.shields.io/conda/dn/bioconda/eva-sub-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/eva-sub-cli
   :alt:   (downloads)
.. |docker_eva-sub-cli| image:: https://quay.io/repository/biocontainers/eva-sub-cli/status
   :target: https://quay.io/repository/biocontainers/eva-sub-cli
.. _`eva-sub-cli/tags`: https://quay.io/repository/biocontainers/eva-sub-cli?tab=tags


.. raw:: html

    <script>
        var package = "eva-sub-cli";
        var versions = ["0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eva-sub-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eva-sub-cli/README.html