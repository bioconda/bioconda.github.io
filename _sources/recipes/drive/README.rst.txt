:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'drive'
.. highlight: bash

drive
=====

.. conda:recipe:: drive
   :replaces_section_title:
   :noindex:

   Google Drive client for the commandline

   :homepage: https://github.com/odeke-em/drive
   :license: Apache v2.0
   :recipe: /`drive <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/drive>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/drive/meta.yaml>`_

   


.. conda:package:: drive

   |downloads_drive| |docker_drive|

   :versions:
      
      

      ``0.3.9-2``,  ``0.3.9-1``,  ``0.3.9-0``,  ``0.3.8-0``

      

   
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

      mamba install drive

   and update with::

      mamba update drive

  To create a new environment, run::

      mamba create --name myenvname drive

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/drive:<tag>

   (see `drive/tags`_ for valid values for ``<tag>``)


.. |downloads_drive| image:: https://img.shields.io/conda/dn/bioconda/drive.svg?style=flat
   :target: https://anaconda.org/bioconda/drive
   :alt:   (downloads)
.. |docker_drive| image:: https://quay.io/repository/biocontainers/drive/status
   :target: https://quay.io/repository/biocontainers/drive
.. _`drive/tags`: https://quay.io/repository/biocontainers/drive?tab=tags


.. raw:: html

    <script>
        var package = "drive";
        var versions = ["0.3.9","0.3.9","0.3.9","0.3.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/drive/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/drive/README.html