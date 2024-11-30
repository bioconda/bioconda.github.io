:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wes-service-client'
.. highlight: bash

wes-service-client
==================

.. conda:recipe:: wes-service-client
   :replaces_section_title:
   :noindex:

   Implementation of the GA4GH Workflow Execution Service\, a REST service for running workflows\; client support only

   :homepage: https://github.com/common-workflow-language/workflow-service
   :license: Apache License 2.0
   :recipe: /`wes-service-client <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wes-service-client>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wes-service-client/meta.yaml>`_

   


.. conda:package:: wes-service-client

   |downloads_wes-service-client| |docker_wes-service-client|

   :versions:
      
      

      ``2.7-1``,  ``2.5-1``,  ``2.5-0``

      

   
   :depends future: 
   :depends python: 
   :depends schema-salad: ``>=2.6.20170927145003,<3.0``
   :depends setuptools: 
   :depends subprocess32: 
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

      mamba install wes-service-client

   and update with::

      mamba update wes-service-client

  To create a new environment, run::

      mamba create --name myenvname wes-service-client

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/wes-service-client:<tag>

   (see `wes-service-client/tags`_ for valid values for ``<tag>``)


.. |downloads_wes-service-client| image:: https://img.shields.io/conda/dn/bioconda/wes-service-client.svg?style=flat
   :target: https://anaconda.org/bioconda/wes-service-client
   :alt:   (downloads)
.. |docker_wes-service-client| image:: https://quay.io/repository/biocontainers/wes-service-client/status
   :target: https://quay.io/repository/biocontainers/wes-service-client
.. _`wes-service-client/tags`: https://quay.io/repository/biocontainers/wes-service-client?tab=tags


.. raw:: html

    <script>
        var package = "wes-service-client";
        var versions = ["2.7","2.5","2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wes-service-client/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wes-service-client/README.html