:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'influx-si-data-manager'
.. highlight: bash

influx-si-data-manager
======================

.. conda:recipe:: influx-si-data-manager
   :replaces_section_title:
   :noindex:

   Data manager for handling influx\_si inputs on Workflow4Metabolomics \(usegalaxy.org\)

   :homepage: https://github.com/llegregam/influx_data_manager
   :license: GPL-3.0-or-later
   :recipe: /`influx-si-data-manager <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/influx-si-data-manager>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/influx-si-data-manager/meta.yaml>`_

   


.. conda:package:: influx-si-data-manager

   |downloads_influx-si-data-manager| |docker_influx-si-data-manager|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.1.4-0``,  ``0.1.2-0``

      

   
   :depends pandas: ``>=2.0.1,<3.0.0``
   :depends python: ``>=3.9.0,<4.0.0``
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

      mamba install influx-si-data-manager

   and update with::

      mamba update influx-si-data-manager

  To create a new environment, run::

      mamba create --name myenvname influx-si-data-manager

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/influx-si-data-manager:<tag>

   (see `influx-si-data-manager/tags`_ for valid values for ``<tag>``)


.. |downloads_influx-si-data-manager| image:: https://img.shields.io/conda/dn/bioconda/influx-si-data-manager.svg?style=flat
   :target: https://anaconda.org/bioconda/influx-si-data-manager
   :alt:   (downloads)
.. |docker_influx-si-data-manager| image:: https://quay.io/repository/biocontainers/influx-si-data-manager/status
   :target: https://quay.io/repository/biocontainers/influx-si-data-manager
.. _`influx-si-data-manager/tags`: https://quay.io/repository/biocontainers/influx-si-data-manager?tab=tags


.. raw:: html

    <script>
        var package = "influx-si-data-manager";
        var versions = ["1.0.3","1.0.2","1.0.1","1.0.0","0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/influx-si-data-manager/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/influx-si-data-manager/README.html