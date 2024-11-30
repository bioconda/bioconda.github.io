:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'campyagainst'
.. highlight: bash

campyagainst
============

.. conda:recipe:: campyagainst
   :replaces_section_title:
   :noindex:

   Accurate assignment of ANI genomic species to Campylobacter genomes.

   :homepage: https://github.com/LanLab/campyagainst
   :license: GPL-3.0-or-later
   :recipe: /`campyagainst <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/campyagainst>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/campyagainst/meta.yaml>`_

   


.. conda:package:: campyagainst

   |downloads_campyagainst| |docker_campyagainst|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends fastani: ``>=1.3``
   :depends python: ``>=3.8``
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

      mamba install campyagainst

   and update with::

      mamba update campyagainst

  To create a new environment, run::

      mamba create --name myenvname campyagainst

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/campyagainst:<tag>

   (see `campyagainst/tags`_ for valid values for ``<tag>``)


.. |downloads_campyagainst| image:: https://img.shields.io/conda/dn/bioconda/campyagainst.svg?style=flat
   :target: https://anaconda.org/bioconda/campyagainst
   :alt:   (downloads)
.. |docker_campyagainst| image:: https://quay.io/repository/biocontainers/campyagainst/status
   :target: https://quay.io/repository/biocontainers/campyagainst
.. _`campyagainst/tags`: https://quay.io/repository/biocontainers/campyagainst?tab=tags


.. raw:: html

    <script>
        var package = "campyagainst";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/campyagainst/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/campyagainst/README.html