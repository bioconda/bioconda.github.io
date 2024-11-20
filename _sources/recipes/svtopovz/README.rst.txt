:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svtopovz'
.. highlight: bash

svtopovz
========

.. conda:recipe:: svtopovz
   :replaces_section_title:
   :noindex:

   Complex structural variant visualization for HiFi sequencing data\: plotting tool.

   :homepage: https://github.com/PacificBiosciences/HiFi-SVTopo
   :license: Pacific Biosciences Software License Agreement
   :recipe: /`svtopovz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svtopovz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svtopovz/meta.yaml>`_

   


.. conda:package:: svtopovz

   |downloads_svtopovz| |docker_svtopovz|

   :versions:
      
      

      ``0.2.1-0``,  ``0.1.3-0``,  ``0.1.1-0``

      

   
   :depends matplotlib-base: ``>=3.8.4``
   :depends numpy: ``1.26.4``
   :depends python: ``>=3.10``
   :depends scikit-image: ``>=0.24.0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install svtopovz

   and update with::

      mamba update svtopovz

  To create a new environment, run::

      mamba create --name myenvname svtopovz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/svtopovz:<tag>

   (see `svtopovz/tags`_ for valid values for ``<tag>``)


.. |downloads_svtopovz| image:: https://img.shields.io/conda/dn/bioconda/svtopovz.svg?style=flat
   :target: https://anaconda.org/bioconda/svtopovz
   :alt:   (downloads)
.. |docker_svtopovz| image:: https://quay.io/repository/biocontainers/svtopovz/status
   :target: https://quay.io/repository/biocontainers/svtopovz
.. _`svtopovz/tags`: https://quay.io/repository/biocontainers/svtopovz?tab=tags


.. raw:: html

    <script>
        var package = "svtopovz";
        var versions = ["0.2.1","0.1.3","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svtopovz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svtopovz/README.html