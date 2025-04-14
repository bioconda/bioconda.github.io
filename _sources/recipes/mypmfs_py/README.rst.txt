:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mypmfs_py'
.. highlight: bash

mypmfs_py
=========

.. conda:recipe:: mypmfs_py
   :replaces_section_title:
   :noindex:

   Python package for mypmfs training \(includes batch download from PDB\).

   :homepage: https://github.com/bibip-impmc/mypmfs
   :license: MIT / MIT
   :recipe: /`mypmfs_py <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mypmfs_py>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mypmfs_py/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.biochi.2018.05.013`

   


.. conda:package:: mypmfs_py

   |downloads_mypmfs_py| |docker_mypmfs_py|

   :versions:
      
      

      ``0.1.8-0``,  ``0.1.7-0``

      

   
   :depends libstdcxx-ng: 
   :depends python: ``>=3.6``
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

      mamba install mypmfs_py

   and update with::

      mamba update mypmfs_py

  To create a new environment, run::

      mamba create --name myenvname mypmfs_py

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mypmfs_py:<tag>

   (see `mypmfs_py/tags`_ for valid values for ``<tag>``)


.. |downloads_mypmfs_py| image:: https://img.shields.io/conda/dn/bioconda/mypmfs_py.svg?style=flat
   :target: https://anaconda.org/bioconda/mypmfs_py
   :alt:   (downloads)
.. |docker_mypmfs_py| image:: https://quay.io/repository/biocontainers/mypmfs_py/status
   :target: https://quay.io/repository/biocontainers/mypmfs_py
.. _`mypmfs_py/tags`: https://quay.io/repository/biocontainers/mypmfs_py?tab=tags


.. raw:: html

    <script>
        var package = "mypmfs_py";
        var versions = ["0.1.8","0.1.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mypmfs_py/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mypmfs_py/README.html