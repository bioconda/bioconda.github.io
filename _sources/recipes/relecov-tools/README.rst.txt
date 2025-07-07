:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'relecov-tools'
.. highlight: bash

relecov-tools
=============

.. conda:recipe:: relecov-tools
   :replaces_section_title:
   :noindex:

   Tools for managing and processing of relecov data.

   :homepage: https://github.com/BU-ISCIII/relecov-tools
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`relecov-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/relecov-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/relecov-tools/meta.yaml>`_

   Tools for managing and processing of relecov network data\, including download\, metadata parsing\, validation\, and update to public databases.



.. conda:package:: relecov-tools

   |downloads_relecov-tools| |docker_relecov-tools|

   :versions:
      
      

      ``1.6.0-0``,  ``1.5.5-0``,  ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.0-0``

      

   
   :depends bio: ``>=1.4.0``
   :depends bs4: ``>=0.0.2``
   :depends click: 
   :depends ena-upload-cli: 
   :depends jinja2: ``>=3.0.0``
   :depends jsonschema: 
   :depends openpyxl: ``>=3.1.2``
   :depends packaging: 
   :depends pandas: 
   :depends paramiko: ``>=2.10.1``
   :depends prompt_toolkit: ``>=3.0.3``
   :depends python: ``>=3.7``
   :depends pyyaml: ``6.0.1``
   :depends pyzipper: ``0.3.6``
   :depends questionary: 
   :depends requests: ``2.27.1``
   :depends rich: ``>=10.0.0``
   :depends semantic_version: 
   :depends tabulate: 
   :depends xlsxwriter: ``3.2.0``
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

      mamba install relecov-tools

   and update with::

      mamba update relecov-tools

  To create a new environment, run::

      mamba create --name myenvname relecov-tools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/relecov-tools:<tag>

   (see `relecov-tools/tags`_ for valid values for ``<tag>``)


.. |downloads_relecov-tools| image:: https://img.shields.io/conda/dn/bioconda/relecov-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/relecov-tools
   :alt:   (downloads)
.. |docker_relecov-tools| image:: https://quay.io/repository/biocontainers/relecov-tools/status
   :target: https://quay.io/repository/biocontainers/relecov-tools
.. _`relecov-tools/tags`: https://quay.io/repository/biocontainers/relecov-tools?tab=tags


.. raw:: html

    <script>
        var package = "relecov-tools";
        var versions = ["1.6.0","1.5.5","1.5.4","1.5.3","1.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/relecov-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/relecov-tools/README.html