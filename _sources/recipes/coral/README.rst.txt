:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coral'
.. highlight: bash

coral
=====

.. conda:recipe:: coral
   :replaces_section_title:
   :noindex:

   Coral is an efficient tool to bridge paire\-end RNA\-seq reads.

   :homepage: https://github.com/Shao-Group/coral
   :license: BSD 3-Clause License
   :recipe: /`coral <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coral>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coral/meta.yaml>`_

   


.. conda:package:: coral

   |downloads_coral| |docker_coral|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends boost-cpp: ``>=1.70.0,<1.70.1.0a0``
   :depends htslib: ``>=1.10.2,<1.22.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
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

      mamba install coral

   and update with::

      mamba update coral

  To create a new environment, run::

      mamba create --name myenvname coral

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/coral:<tag>

   (see `coral/tags`_ for valid values for ``<tag>``)


.. |downloads_coral| image:: https://img.shields.io/conda/dn/bioconda/coral.svg?style=flat
   :target: https://anaconda.org/bioconda/coral
   :alt:   (downloads)
.. |docker_coral| image:: https://quay.io/repository/biocontainers/coral/status
   :target: https://quay.io/repository/biocontainers/coral
.. _`coral/tags`: https://quay.io/repository/biocontainers/coral?tab=tags


.. raw:: html

    <script>
        var package = "coral";
        var versions = ["1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coral/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coral/README.html