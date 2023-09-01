:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biothings_client'
.. highlight: bash

biothings_client
================

.. conda:recipe:: biothings_client
   :replaces_section_title:
   :noindex:

   Python Client for BioThings API services.

   :homepage: https://github.com/biothings/biothings_client.py
   :license: BSD / BSD
   :recipe: /`biothings_client <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biothings_client>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biothings_client/meta.yaml>`_

   


.. conda:package:: biothings_client

   |downloads_biothings_client| |docker_biothings_client|

   :versions:
      
      

      ``0.2.6-1``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.2.0-0``

      

   
   :depends python: 
   :depends requests: ``>=2.3.0``
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

      mamba install biothings_client

   and update with::

      mamba update biothings_client

  To create a new environment, run::

      mamba create --name myenvname biothings_client

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biothings_client:<tag>

   (see `biothings_client/tags`_ for valid values for ``<tag>``)


.. |downloads_biothings_client| image:: https://img.shields.io/conda/dn/bioconda/biothings_client.svg?style=flat
   :target: https://anaconda.org/bioconda/biothings_client
   :alt:   (downloads)
.. |docker_biothings_client| image:: https://quay.io/repository/biocontainers/biothings_client/status
   :target: https://quay.io/repository/biocontainers/biothings_client
.. _`biothings_client/tags`: https://quay.io/repository/biocontainers/biothings_client?tab=tags


.. raw:: html

    <script>
        var package = "biothings_client";
        var versions = ["0.2.6","0.2.6","0.2.5","0.2.4","0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biothings_client/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biothings_client/README.html