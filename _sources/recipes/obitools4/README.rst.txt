:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'obitools4'
.. highlight: bash

obitools4
=========

.. conda:recipe:: obitools4
   :replaces_section_title:
   :noindex:

   A software package for DNA metabarcoding

   :homepage: https://obitools4.metabarcoding.org
   :license: CECILL-2.1
   :recipe: /`obitools4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/obitools4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/obitools4/meta.yaml>`_

   


.. conda:package:: obitools4

   |downloads_obitools4| |docker_obitools4|

   :versions:
      
      

      ``4.4.0-0``

      

   
   :depends __glibc: ``>=2.17``
   :depends libgcc: ``>=13``
   :depends libzlib: 
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

      mamba install obitools4

   and update with::

      mamba update obitools4

  To create a new environment, run::

      mamba create --name myenvname obitools4

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/obitools4:<tag>

   (see `obitools4/tags`_ for valid values for ``<tag>``)


.. |downloads_obitools4| image:: https://img.shields.io/conda/dn/bioconda/obitools4.svg?style=flat
   :target: https://anaconda.org/bioconda/obitools4
   :alt:   (downloads)
.. |docker_obitools4| image:: https://quay.io/repository/biocontainers/obitools4/status
   :target: https://quay.io/repository/biocontainers/obitools4
.. _`obitools4/tags`: https://quay.io/repository/biocontainers/obitools4?tab=tags


.. raw:: html

    <script>
        var package = "obitools4";
        var versions = ["4.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/obitools4/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/obitools4/README.html