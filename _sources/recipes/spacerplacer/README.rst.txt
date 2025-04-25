:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spacerplacer'
.. highlight: bash

spacerplacer
============

.. conda:recipe:: spacerplacer
   :replaces_section_title:
   :noindex:

   SpacerPlacer is a powerful software for reconstructing ancestral CRISPR spacer arrays.

   :homepage: https://github.com/fbaumdicker/SpacerPlacer
   :license: GPL3 / GPL-3.0-only
   :recipe: /`spacerplacer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spacerplacer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spacerplacer/meta.yaml>`_

   


.. conda:package:: spacerplacer

   |downloads_spacerplacer| |docker_spacerplacer|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends biopython: ``>=1.79``
   :depends dill: ``>=0.3.5.1``
   :depends ete3: ``>=3.1.2``
   :depends graphviz: ``>=0.20.1``
   :depends mafft: ``>=7.490``
   :depends matplotlib-base: ``>=3.4.3``
   :depends numpy: ``>=1.21.4``
   :depends palettable: ``>=3.3.0``
   :depends pandas: ``>=1.3.4``
   :depends python: ``<3.13``
   :depends python-graphviz: ``>=0.17``
   :depends scipy: ``>=1.7.1``
   :depends seaborn-base: ``>=0.11.2``
   :depends sympy: ``>=1.11.1``
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

      mamba install spacerplacer

   and update with::

      mamba update spacerplacer

  To create a new environment, run::

      mamba create --name myenvname spacerplacer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/spacerplacer:<tag>

   (see `spacerplacer/tags`_ for valid values for ``<tag>``)


.. |downloads_spacerplacer| image:: https://img.shields.io/conda/dn/bioconda/spacerplacer.svg?style=flat
   :target: https://anaconda.org/bioconda/spacerplacer
   :alt:   (downloads)
.. |docker_spacerplacer| image:: https://quay.io/repository/biocontainers/spacerplacer/status
   :target: https://quay.io/repository/biocontainers/spacerplacer
.. _`spacerplacer/tags`: https://quay.io/repository/biocontainers/spacerplacer?tab=tags


.. raw:: html

    <script>
        var package = "spacerplacer";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spacerplacer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spacerplacer/README.html