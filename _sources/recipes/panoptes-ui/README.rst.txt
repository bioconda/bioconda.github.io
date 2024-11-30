:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'panoptes-ui'
.. highlight: bash

panoptes-ui
===========

.. conda:recipe:: panoptes-ui
   :replaces_section_title:
   :noindex:

   panoptes\: monitor computational workflows in real time

   :homepage: https://github.com/panoptes-organization/panoptes
   :license: MIT / MIT
   :recipe: /`panoptes-ui <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panoptes-ui>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panoptes-ui/meta.yaml>`_

   


.. conda:package:: panoptes-ui

   |downloads_panoptes-ui| |docker_panoptes-ui|

   :versions:
      
      

      ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.0-0``

      

   
   :depends flask: ``>=1.1.1``
   :depends humanfriendly: ``>=4.18``
   :depends marshmallow: ``>=3.0.1``
   :depends pytest: ``>=5.3.0``
   :depends python: 
   :depends requests: ``>=2.22.0``
   :depends sqlalchemy: ``>=1.3.7``
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

      mamba install panoptes-ui

   and update with::

      mamba update panoptes-ui

  To create a new environment, run::

      mamba create --name myenvname panoptes-ui

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/panoptes-ui:<tag>

   (see `panoptes-ui/tags`_ for valid values for ``<tag>``)


.. |downloads_panoptes-ui| image:: https://img.shields.io/conda/dn/bioconda/panoptes-ui.svg?style=flat
   :target: https://anaconda.org/bioconda/panoptes-ui
   :alt:   (downloads)
.. |docker_panoptes-ui| image:: https://quay.io/repository/biocontainers/panoptes-ui/status
   :target: https://quay.io/repository/biocontainers/panoptes-ui
.. _`panoptes-ui/tags`: https://quay.io/repository/biocontainers/panoptes-ui?tab=tags


.. raw:: html

    <script>
        var package = "panoptes-ui";
        var versions = ["0.2.3","0.2.2","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panoptes-ui/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panoptes-ui/README.html