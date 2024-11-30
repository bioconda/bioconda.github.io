:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sim4db'
.. highlight: bash

sim4db
======

.. conda:recipe:: sim4db
   :replaces_section_title:
   :noindex:

   Sim4db and leaff\: Utilities for fast batch spliced alignment and sequence indexing

   :homepage: http://kmer.sourceforge.net/wiki/index.php/Getting_Started_with_Sim4db
   :license: GPL
   :recipe: /`sim4db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sim4db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sim4db/meta.yaml>`_

   


.. conda:package:: sim4db

   |downloads_sim4db| |docker_sim4db|

   :versions:
      
      

      ``2008-0``

      

   
   :depends libgcc: 
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

      mamba install sim4db

   and update with::

      mamba update sim4db

  To create a new environment, run::

      mamba create --name myenvname sim4db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sim4db:<tag>

   (see `sim4db/tags`_ for valid values for ``<tag>``)


.. |downloads_sim4db| image:: https://img.shields.io/conda/dn/bioconda/sim4db.svg?style=flat
   :target: https://anaconda.org/bioconda/sim4db
   :alt:   (downloads)
.. |docker_sim4db| image:: https://quay.io/repository/biocontainers/sim4db/status
   :target: https://quay.io/repository/biocontainers/sim4db
.. _`sim4db/tags`: https://quay.io/repository/biocontainers/sim4db?tab=tags


.. raw:: html

    <script>
        var package = "sim4db";
        var versions = ["2008"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sim4db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sim4db/README.html