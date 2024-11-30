:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'parse_mito_blast'
.. highlight: bash

parse_mito_blast
================

.. conda:recipe:: parse_mito_blast
   :replaces_section_title:
   :noindex:

   Filtering blast out from querying assembly against mitochondrial database.

   :homepage: https://github.com/VGP/vgp-assembly/tree/master/galaxy_tools/parse_mito_blast
   :license: BSD
   :recipe: /`parse_mito_blast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parse_mito_blast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parse_mito_blast/meta.yaml>`_

   


.. conda:package:: parse_mito_blast

   |downloads_parse_mito_blast| |docker_parse_mito_blast|

   :versions:
      
      

      ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0-0``

      

   
   :depends pandas: 
   :depends python: 
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

      mamba install parse_mito_blast

   and update with::

      mamba update parse_mito_blast

  To create a new environment, run::

      mamba create --name myenvname parse_mito_blast

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/parse_mito_blast:<tag>

   (see `parse_mito_blast/tags`_ for valid values for ``<tag>``)


.. |downloads_parse_mito_blast| image:: https://img.shields.io/conda/dn/bioconda/parse_mito_blast.svg?style=flat
   :target: https://anaconda.org/bioconda/parse_mito_blast
   :alt:   (downloads)
.. |docker_parse_mito_blast| image:: https://quay.io/repository/biocontainers/parse_mito_blast/status
   :target: https://quay.io/repository/biocontainers/parse_mito_blast
.. _`parse_mito_blast/tags`: https://quay.io/repository/biocontainers/parse_mito_blast?tab=tags


.. raw:: html

    <script>
        var package = "parse_mito_blast";
        var versions = ["1.0.2","1.0.1","1.0.1","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/parse_mito_blast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/parse_mito_blast/README.html