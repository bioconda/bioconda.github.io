:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pb-cpg-tools'
.. highlight: bash

pb-cpg-tools
============

.. conda:recipe:: pb-cpg-tools
   :replaces_section_title:
   :noindex:

   Collection of tools for the analysis of CpG data

   :homepage: https://github.com/PacificBiosciences/pb-CpG-tools
   :license: Pacific Biosciences Software License Agreement
   :recipe: /`pb-cpg-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pb-cpg-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pb-cpg-tools/meta.yaml>`_

   


.. conda:package:: pb-cpg-tools

   |downloads_pb-cpg-tools| |docker_pb-cpg-tools|

   :versions:
      
      

      ``3.0.0-0``

      

   
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

      mamba install pb-cpg-tools

   and update with::

      mamba update pb-cpg-tools

  To create a new environment, run::

      mamba create --name myenvname pb-cpg-tools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pb-cpg-tools:<tag>

   (see `pb-cpg-tools/tags`_ for valid values for ``<tag>``)


.. |downloads_pb-cpg-tools| image:: https://img.shields.io/conda/dn/bioconda/pb-cpg-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/pb-cpg-tools
   :alt:   (downloads)
.. |docker_pb-cpg-tools| image:: https://quay.io/repository/biocontainers/pb-cpg-tools/status
   :target: https://quay.io/repository/biocontainers/pb-cpg-tools
.. _`pb-cpg-tools/tags`: https://quay.io/repository/biocontainers/pb-cpg-tools?tab=tags


.. raw:: html

    <script>
        var package = "pb-cpg-tools";
        var versions = ["3.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pb-cpg-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pb-cpg-tools/README.html