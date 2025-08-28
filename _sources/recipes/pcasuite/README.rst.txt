:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pcasuite'
.. highlight: bash

pcasuite
========

.. conda:recipe:: pcasuite
   :replaces_section_title:
   :noindex:

   PCAzip compresses a trajectory\, recentering the snapshots using a standard RMS or a gaussian version.

   :homepage: https://mmb.irbbarcelona.org/gitlab/andrio/pcasuite
   :license: APACHE / Apache Software License
   :recipe: /`pcasuite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pcasuite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pcasuite/meta.yaml>`_

   PCAunzip recreates the original trajectory from the projection data. PCZdump analyzes the compressed trajectory and gives coefficients and values computed from the stored trajectory.


.. conda:package:: pcasuite

   |downloads_pcasuite| |docker_pcasuite|

   :versions:
      
      

      ``1.0.0-5``,  ``1.0.0-4``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bison: 
   :depends lapack: 
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends libgfortran: 
   :depends libgfortran5: ``>=13.3.0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libnetcdf: ``>=4.9.2,<4.9.3.0a0``
   :depends libstdcxx: ``>=13``
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

      mamba install pcasuite

   and update with::

      mamba update pcasuite

  To create a new environment, run::

      mamba create --name myenvname pcasuite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pcasuite:<tag>

   (see `pcasuite/tags`_ for valid values for ``<tag>``)


.. |downloads_pcasuite| image:: https://img.shields.io/conda/dn/bioconda/pcasuite.svg?style=flat
   :target: https://anaconda.org/bioconda/pcasuite
   :alt:   (downloads)
.. |docker_pcasuite| image:: https://quay.io/repository/biocontainers/pcasuite/status
   :target: https://quay.io/repository/biocontainers/pcasuite
.. _`pcasuite/tags`: https://quay.io/repository/biocontainers/pcasuite?tab=tags


.. raw:: html

    <script>
        var package = "pcasuite";
        var versions = ["1.0.0","1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pcasuite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pcasuite/README.html