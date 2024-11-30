:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'treeshrink'
.. highlight: bash

treeshrink
==========

.. conda:recipe:: treeshrink
   :replaces_section_title:
   :noindex:

   an algorithm for detecting \(and removing\) abnormally long branches in one or more phylogenetic trees

   :homepage: https://github.com/uym2/TreeShrink
   :license: GPL / GPL-3
   :recipe: /`treeshrink <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treeshrink>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treeshrink/meta.yaml>`_

   


.. conda:package:: treeshrink

   |downloads_treeshrink| |docker_treeshrink|

   :versions:
      
      

      ``1.3.9-0``

      

   
   :depends python: ``>=3.6,<=3.9.16``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-bms: ``>=0.3.5``
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

      mamba install treeshrink

   and update with::

      mamba update treeshrink

  To create a new environment, run::

      mamba create --name myenvname treeshrink

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/treeshrink:<tag>

   (see `treeshrink/tags`_ for valid values for ``<tag>``)


.. |downloads_treeshrink| image:: https://img.shields.io/conda/dn/bioconda/treeshrink.svg?style=flat
   :target: https://anaconda.org/bioconda/treeshrink
   :alt:   (downloads)
.. |docker_treeshrink| image:: https://quay.io/repository/biocontainers/treeshrink/status
   :target: https://quay.io/repository/biocontainers/treeshrink
.. _`treeshrink/tags`: https://quay.io/repository/biocontainers/treeshrink?tab=tags


.. raw:: html

    <script>
        var package = "treeshrink";
        var versions = ["1.3.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/treeshrink/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/treeshrink/README.html