:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rmlst_api'
.. highlight: bash

rmlst_api
=========

.. conda:recipe:: rmlst_api
   :replaces_section_title:
   :noindex:

   Python package to perform rMLST through the PubMLST API.

   :homepage: https://github.com/domenico-simone/rmlst_api
   :documentation: https://pubmlst.org/species-id/species-identification-via-api
   
   :license: MIT / MIT
   :recipe: /`rmlst_api <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmlst_api>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmlst_api/meta.yaml>`_

   


.. conda:package:: rmlst_api

   |downloads_rmlst_api| |docker_rmlst_api|

   :versions:
      
      

      ``0.1.8-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.3-0``

      

   
   :depends click: 
   :depends python: ``>=3.9``
   :depends requests: ``>=2.32.3``
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

      mamba install rmlst_api

   and update with::

      mamba update rmlst_api

  To create a new environment, run::

      mamba create --name myenvname rmlst_api

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rmlst_api:<tag>

   (see `rmlst_api/tags`_ for valid values for ``<tag>``)


.. |downloads_rmlst_api| image:: https://img.shields.io/conda/dn/bioconda/rmlst_api.svg?style=flat
   :target: https://anaconda.org/bioconda/rmlst_api
   :alt:   (downloads)
.. |docker_rmlst_api| image:: https://quay.io/repository/biocontainers/rmlst_api/status
   :target: https://quay.io/repository/biocontainers/rmlst_api
.. _`rmlst_api/tags`: https://quay.io/repository/biocontainers/rmlst_api?tab=tags


.. raw:: html

    <script>
        var package = "rmlst_api";
        var versions = ["0.1.8","0.1.6","0.1.5","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rmlst_api/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rmlst_api/README.html