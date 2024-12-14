:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gb_taxonomy_tools'
.. highlight: bash

gb_taxonomy_tools
=================

.. conda:recipe:: gb_taxonomy_tools
   :replaces_section_title:
   :noindex:

   These are four simple utilities which perform certain manipulations and  visualization tasks on GenBank taxonomic information.

   :homepage: https://github.com/spond/gb_taxonomy_tools
   :license: GNU General Public License v2.0
   :recipe: /`gb_taxonomy_tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gb_taxonomy_tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gb_taxonomy_tools/meta.yaml>`_

   


.. conda:package:: gb_taxonomy_tools

   |downloads_gb_taxonomy_tools| |docker_gb_taxonomy_tools|

   :versions:
      
      

      ``1.0.1-6``,  ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
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

      mamba install gb_taxonomy_tools

   and update with::

      mamba update gb_taxonomy_tools

  To create a new environment, run::

      mamba create --name myenvname gb_taxonomy_tools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gb_taxonomy_tools:<tag>

   (see `gb_taxonomy_tools/tags`_ for valid values for ``<tag>``)


.. |downloads_gb_taxonomy_tools| image:: https://img.shields.io/conda/dn/bioconda/gb_taxonomy_tools.svg?style=flat
   :target: https://anaconda.org/bioconda/gb_taxonomy_tools
   :alt:   (downloads)
.. |docker_gb_taxonomy_tools| image:: https://quay.io/repository/biocontainers/gb_taxonomy_tools/status
   :target: https://quay.io/repository/biocontainers/gb_taxonomy_tools
.. _`gb_taxonomy_tools/tags`: https://quay.io/repository/biocontainers/gb_taxonomy_tools?tab=tags


.. raw:: html

    <script>
        var package = "gb_taxonomy_tools";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gb_taxonomy_tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gb_taxonomy_tools/README.html