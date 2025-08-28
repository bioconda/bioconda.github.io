:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scssim'
.. highlight: bash

scssim
======

.. conda:recipe:: scssim
   :replaces_section_title:
   :noindex:

   A bioinformatics tool for simulating single\-cell genome sequencing data

   :homepage: https://github.com/qasimyu/scssim
   :license: BSD 3-Clause
   :recipe: /`scssim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scssim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scssim/meta.yaml>`_

   


.. conda:package:: scssim

   |downloads_scssim| |docker_scssim|

   :versions:
      
      

      ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends libgcc: ``>=13``
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

      mamba install scssim

   and update with::

      mamba update scssim

  To create a new environment, run::

      mamba create --name myenvname scssim

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scssim:<tag>

   (see `scssim/tags`_ for valid values for ``<tag>``)


.. |downloads_scssim| image:: https://img.shields.io/conda/dn/bioconda/scssim.svg?style=flat
   :target: https://anaconda.org/bioconda/scssim
   :alt:   (downloads)
.. |docker_scssim| image:: https://quay.io/repository/biocontainers/scssim/status
   :target: https://quay.io/repository/biocontainers/scssim
.. _`scssim/tags`: https://quay.io/repository/biocontainers/scssim?tab=tags


.. raw:: html

    <script>
        var package = "scssim";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scssim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scssim/README.html