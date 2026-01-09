:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pandamap'
.. highlight: bash

pandamap
========

.. conda:recipe:: pandamap
   :replaces_section_title:
   :noindex:

   Ligand\-Protein Interaction Mapping

   :homepage: https://pypi.org/project/pandamap
   :documentation: https://github.com/pritampanda15/PandaMap/blob/main/README.md
   
   :developer docs: https://github.com/pritampanda15/PandaMap
   :license: MIT
   :recipe: /`pandamap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pandamap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pandamap/meta.yaml>`_

   PandaMap is a Python package for visualizing protein\-ligand interactions with enhanced detection methods.


.. conda:package:: pandamap

   |downloads_pandamap| |docker_pandamap|

   :versions:
      
      

      ``4.1.0-0``

      

   
   :depends biopython: ``>=1.79``
   :depends dssp: 
   :depends matplotlib-base: ``>=3.4.0``
   :depends numpy: ``>=1.20.0``
   :depends python: ``>=3.9``
   :depends requests: ``>=2.25.0``
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

      mamba install pandamap

   and update with::

      mamba update pandamap

  To create a new environment, run::

      mamba create --name myenvname pandamap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pandamap:<tag>

   (see `pandamap/tags`_ for valid values for ``<tag>``)


.. |downloads_pandamap| image:: https://img.shields.io/conda/dn/bioconda/pandamap.svg?style=flat
   :target: https://anaconda.org/bioconda/pandamap
   :alt:   (downloads)
.. |docker_pandamap| image:: https://quay.io/repository/biocontainers/pandamap/status
   :target: https://quay.io/repository/biocontainers/pandamap
.. _`pandamap/tags`: https://quay.io/repository/biocontainers/pandamap?tab=tags


.. raw:: html

    <script>
        var package = "pandamap";
        var versions = ["4.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pandamap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pandamap/README.html