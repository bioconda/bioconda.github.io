:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'get_orfs'
.. highlight: bash

get_orfs
========

.. conda:recipe:: get_orfs
   :replaces_section_title:
   :noindex:

   Fast extraction of ORFs in all possible translation tables

   :homepage: https://github.com/linsalrob/get_orfs
   :license: MIT / MIT
   :recipe: /`get_orfs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/get_orfs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/get_orfs/meta.yaml>`_

   


.. conda:package:: get_orfs

   |downloads_get_orfs| |docker_get_orfs|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends pthread-stubs: 
   :depends zlib: 
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

      mamba install get_orfs

   and update with::

      mamba update get_orfs

  To create a new environment, run::

      mamba create --name myenvname get_orfs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/get_orfs:<tag>

   (see `get_orfs/tags`_ for valid values for ``<tag>``)


.. |downloads_get_orfs| image:: https://img.shields.io/conda/dn/bioconda/get_orfs.svg?style=flat
   :target: https://anaconda.org/bioconda/get_orfs
   :alt:   (downloads)
.. |docker_get_orfs| image:: https://quay.io/repository/biocontainers/get_orfs/status
   :target: https://quay.io/repository/biocontainers/get_orfs
.. _`get_orfs/tags`: https://quay.io/repository/biocontainers/get_orfs?tab=tags


.. raw:: html

    <script>
        var package = "get_orfs";
        var versions = ["1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/get_orfs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/get_orfs/README.html