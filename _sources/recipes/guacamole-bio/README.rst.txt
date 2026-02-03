:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'guacamole-bio'
.. highlight: bash

guacamole-bio
=============

.. conda:recipe:: guacamole-bio
   :replaces_section_title:
   :noindex:

   GC\-aware species abundance estimation from metagenomic data.

   :homepage: https://github.com/CIBIV/GuaCAMOLE
   :license: GPL-3.0-only
   :recipe: /`guacamole-bio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/guacamole-bio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/guacamole-bio/meta.yaml>`_

   


.. conda:package:: guacamole-bio

   |downloads_guacamole-bio| |docker_guacamole-bio|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends biopython: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.10``
   :depends qpsolvers: 
   :depends scipy: 
   :depends seaborn: 
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

      mamba install guacamole-bio

   and update with::

      mamba update guacamole-bio

  To create a new environment, run::

      mamba create --name myenvname guacamole-bio

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/guacamole-bio:<tag>

   (see `guacamole-bio/tags`_ for valid values for ``<tag>``)


.. |downloads_guacamole-bio| image:: https://img.shields.io/conda/dn/bioconda/guacamole-bio.svg?style=flat
   :target: https://anaconda.org/bioconda/guacamole-bio
   :alt:   (downloads)
.. |docker_guacamole-bio| image:: https://quay.io/repository/biocontainers/guacamole-bio/status
   :target: https://quay.io/repository/biocontainers/guacamole-bio
.. _`guacamole-bio/tags`: https://quay.io/repository/biocontainers/guacamole-bio?tab=tags


.. raw:: html

    <script>
        var package = "guacamole-bio";
        var versions = ["1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/guacamole-bio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/guacamole-bio/README.html