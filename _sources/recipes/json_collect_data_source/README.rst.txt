:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'json_collect_data_source'
.. highlight: bash

json_collect_data_source
========================

.. conda:recipe:: json_collect_data_source
   :replaces_section_title:
   :noindex:

   This tool is able to receive multiple datasets \(optionally with their metadata\) in a single query. As an extension of the galaxy\-json\-data\-source tool \(https\:\/\/github.com\/mdshw5\/galaxy\-json\-data\-source\)\, it allows to handle archives \(gz\, bz2\, tar\, and zip\) organizing their content in a collection.

   :homepage: https://github.com/fabio-cumbo/galaxy-json-collect-data-source
   :license: BSD
   :recipe: /`json_collect_data_source <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/json_collect_data_source>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/json_collect_data_source/meta.yaml>`_

   


.. conda:package:: json_collect_data_source

   |downloads_json_collect_data_source| |docker_json_collect_data_source|

   :versions:
      
      

      ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends python: ``>=2.7,<3``
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

      mamba install json_collect_data_source

   and update with::

      mamba update json_collect_data_source

  To create a new environment, run::

      mamba create --name myenvname json_collect_data_source

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/json_collect_data_source:<tag>

   (see `json_collect_data_source/tags`_ for valid values for ``<tag>``)


.. |downloads_json_collect_data_source| image:: https://img.shields.io/conda/dn/bioconda/json_collect_data_source.svg?style=flat
   :target: https://anaconda.org/bioconda/json_collect_data_source
   :alt:   (downloads)
.. |docker_json_collect_data_source| image:: https://quay.io/repository/biocontainers/json_collect_data_source/status
   :target: https://quay.io/repository/biocontainers/json_collect_data_source
.. _`json_collect_data_source/tags`: https://quay.io/repository/biocontainers/json_collect_data_source?tab=tags


.. raw:: html

    <script>
        var package = "json_collect_data_source";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/json_collect_data_source/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/json_collect_data_source/README.html