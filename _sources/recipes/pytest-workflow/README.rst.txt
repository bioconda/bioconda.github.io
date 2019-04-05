:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pytest-workflow'
.. highlight: bash

pytest-workflow
===============

.. conda:recipe:: pytest-workflow
   :replaces_section_title:

   A pytest plugin for configuring workflow\/pipeline tests using YAML files

   :homepage: https://github.com/LUMC/pytest-workflow
   :documentation: https://pytest-workflow.readthedocs.io
   
   :license: AGPL / GNU Affero General Public v3 or later (AGPLv3+)
   :recipe: /`pytest-workflow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytest-workflow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytest-workflow/meta.yaml>`_

   


.. conda:package:: pytest-workflow

   |downloads_pytest-workflow| |docker_pytest-workflow|

   :versions: 1.2.0-0, 1.1.2-0, 1.1.1-0, 1.1.0-0
   
   :depends jsonschema: 
   
   :depends pytest: >=4
   
   :depends python: >=3.5
   
   :depends pyyaml: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pytest-workflow

   and update with::

      conda update pytest-workflow

   or use the docker container::

      docker pull quay.io/biocontainers/pytest-workflow:<tag>

   (see `pytest-workflow/tags`_ for valid values for ``<tag>``)


.. |downloads_pytest-workflow| image:: https://img.shields.io/conda/dn/bioconda/pytest-workflow.svg?style=flat
   :alt:   (downloads)
.. |docker_pytest-workflow| image:: https://quay.io/repository/biocontainers/pytest-workflow/status
   :target: https://quay.io/repository/biocontainers/pytest-workflow
.. _`pytest-workflow/tags`: https://quay.io/repository/biocontainers/pytest-workflow?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pytest-workflow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pytest-workflow/README.html