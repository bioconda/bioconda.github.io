:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastcov'
.. highlight: bash

fastcov
=======

.. conda:recipe:: fastcov
   :replaces_section_title:
   :noindex:

   This package installs fastcov and all it\'s dependencies. fastcov is used to plot coverage plots based on BAM files.

   :homepage: https://github.com/RaverJay/fastcov
   :license: MIT
   :recipe: /`fastcov <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastcov>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastcov/meta.yaml>`_

   


.. conda:package:: fastcov

   |downloads_fastcov| |docker_fastcov|

   :versions:
      
      

      ``0.1.3-0``

      

   
   :depends matplotlib-base: ``>3.8.3*``
   :depends pandas: ``>2.2.1*``
   :depends pysam: ``>0.22.0*``
   :depends python: 
   :depends seaborn: ``>0.13.2*``
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

      mamba install fastcov

   and update with::

      mamba update fastcov

  To create a new environment, run::

      mamba create --name myenvname fastcov

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastcov:<tag>

   (see `fastcov/tags`_ for valid values for ``<tag>``)


.. |downloads_fastcov| image:: https://img.shields.io/conda/dn/bioconda/fastcov.svg?style=flat
   :target: https://anaconda.org/bioconda/fastcov
   :alt:   (downloads)
.. |docker_fastcov| image:: https://quay.io/repository/biocontainers/fastcov/status
   :target: https://quay.io/repository/biocontainers/fastcov
.. _`fastcov/tags`: https://quay.io/repository/biocontainers/fastcov?tab=tags


.. raw:: html

    <script>
        var package = "fastcov";
        var versions = ["0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastcov/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastcov/README.html