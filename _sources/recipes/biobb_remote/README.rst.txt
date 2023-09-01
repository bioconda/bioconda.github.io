:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobb_remote'
.. highlight: bash

biobb_remote
============

.. conda:recipe:: biobb_remote
   :replaces_section_title:
   :noindex:

   Biobb\_remote is the Biobb module for remote execution via ssl.

   :homepage: https://github.com/bioexcel/biobb_remote
   :license: APACHE / Apache Software License
   :recipe: /`biobb_remote <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_remote>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_remote/meta.yaml>`_

   


.. conda:package:: biobb_remote

   |downloads_biobb_remote| |docker_biobb_remote|

   :versions:
      
      

      ``1.2.2-0``

      

   
   :depends paramiko: ``2.7.2``
   :depends python: ``3.7.*``
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

      mamba install biobb_remote

   and update with::

      mamba update biobb_remote

  To create a new environment, run::

      mamba create --name myenvname biobb_remote

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biobb_remote:<tag>

   (see `biobb_remote/tags`_ for valid values for ``<tag>``)


.. |downloads_biobb_remote| image:: https://img.shields.io/conda/dn/bioconda/biobb_remote.svg?style=flat
   :target: https://anaconda.org/bioconda/biobb_remote
   :alt:   (downloads)
.. |docker_biobb_remote| image:: https://quay.io/repository/biocontainers/biobb_remote/status
   :target: https://quay.io/repository/biocontainers/biobb_remote
.. _`biobb_remote/tags`: https://quay.io/repository/biocontainers/biobb_remote?tab=tags


.. raw:: html

    <script>
        var package = "biobb_remote";
        var versions = ["1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobb_remote/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobb_remote/README.html