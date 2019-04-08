:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'json_collect_data_source'
.. highlight: bash

json_collect_data_source
========================

.. conda:recipe:: json-collect-data-source
   :replaces_section_title:

   This tool is able to receive multiple datasets \(optionally with their metadata\) in a single query. As an extension of the galaxy\-json\-data\-source tool \(https\:\/\/github.com\/mdshw5\/galaxy\-json\-data\-source\)\, it allows to handle archives \(gz\, bz2\, tar\, and zip\) organizing their content in a collection.

   :homepage: https://github.com/fabio-cumbo/galaxy-json-collect-data-source
   :license: BSD
   :recipe: /`json-collect-data-source <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/json-collect-data-source>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/json-collect-data-source/meta.yaml>`_

   


.. conda:package:: json_collect_data_source

   |downloads_json_collect_data_source| |docker_json_collect_data_source|

   :versions: 1.0.1-2, 1.0.1-1, 1.0.1-0, 1.0.0-0
   
   :depends python: >=2.7,<3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install json_collect_data_source

   and update with::

      conda update json_collect_data_source

   or use the docker container::

      docker pull quay.io/biocontainers/json_collect_data_source:<tag>

   (see `json_collect_data_source/tags`_ for valid values for ``<tag>``)


.. |downloads_json_collect_data_source| image:: https://img.shields.io/conda/dn/bioconda/json_collect_data_source.svg?style=flat
   :alt:   (downloads)
.. |docker_json_collect_data_source| image:: https://quay.io/repository/biocontainers/json_collect_data_source/status
   :target: https://quay.io/repository/biocontainers/json_collect_data_source
.. _`json_collect_data_source/tags`: https://quay.io/repository/biocontainers/json_collect_data_source?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/json_collect_data_source/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/json_collect_data_source/README.html