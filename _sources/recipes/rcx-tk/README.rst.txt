:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rcx-tk'
.. highlight: bash

rcx-tk
======

.. conda:recipe:: rcx-tk
   :replaces_section_title:
   :noindex:

   This package adjusts and cleans the metadata file provided by a user.

   :homepage: https://github.com/RECETOX/rcx-tk
   :license: MIT
   :recipe: /`rcx-tk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rcx-tk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rcx-tk/meta.yaml>`_

   


.. conda:package:: rcx-tk

   |downloads_rcx-tk| |docker_rcx-tk|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends click: ``>=8.1.7,<9.0.0``
   :depends mypy: ``>=1.10.1,<2.0.0``
   :depends pandas: ``>=2.2.2,<3.0.0``
   :depends pandas-stubs: ``>=2.2.2,<3.0.0``
   :depends python: ``>=3.11.0,<4.0.0``
   :depends pyxlsx: ``>=1.1.3,<2.0.0``
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

      mamba install rcx-tk

   and update with::

      mamba update rcx-tk

  To create a new environment, run::

      mamba create --name myenvname rcx-tk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rcx-tk:<tag>

   (see `rcx-tk/tags`_ for valid values for ``<tag>``)


.. |downloads_rcx-tk| image:: https://img.shields.io/conda/dn/bioconda/rcx-tk.svg?style=flat
   :target: https://anaconda.org/bioconda/rcx-tk
   :alt:   (downloads)
.. |docker_rcx-tk| image:: https://quay.io/repository/biocontainers/rcx-tk/status
   :target: https://quay.io/repository/biocontainers/rcx-tk
.. _`rcx-tk/tags`: https://quay.io/repository/biocontainers/rcx-tk?tab=tags


.. raw:: html

    <script>
        var package = "rcx-tk";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rcx-tk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rcx-tk/README.html