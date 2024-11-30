:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'complexcgr'
.. highlight: bash

complexcgr
==========

.. conda:recipe:: complexcgr
   :replaces_section_title:
   :noindex:

   Encoders and Image representation of DNA\/RNA sequences based on the Chaos Game Representation of DNA

   :homepage: https://github.com/AlgoLab/complexCGR
   :license: MIT
   :recipe: /`complexcgr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/complexcgr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/complexcgr/meta.yaml>`_

   


.. conda:package:: complexcgr

   |downloads_complexcgr| |docker_complexcgr|

   :versions:
      
      

      ``0.8.0-0``

      

   
   :depends biopython: ``>=1.79.0,<2.0.0``
   :depends matplotlib-base: ``>=3.4.2,<4.0.0``
   :depends numpy: ``>=1.22.3,<2.0.0``
   :depends pillow: ``>=10.0.0,<11.0.0``
   :depends python: ``>=3.9.0,<4.0.0``
   :depends tqdm: ``>=4.61.2,<5.0.0``
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

      mamba install complexcgr

   and update with::

      mamba update complexcgr

  To create a new environment, run::

      mamba create --name myenvname complexcgr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/complexcgr:<tag>

   (see `complexcgr/tags`_ for valid values for ``<tag>``)


.. |downloads_complexcgr| image:: https://img.shields.io/conda/dn/bioconda/complexcgr.svg?style=flat
   :target: https://anaconda.org/bioconda/complexcgr
   :alt:   (downloads)
.. |docker_complexcgr| image:: https://quay.io/repository/biocontainers/complexcgr/status
   :target: https://quay.io/repository/biocontainers/complexcgr
.. _`complexcgr/tags`: https://quay.io/repository/biocontainers/complexcgr?tab=tags


.. raw:: html

    <script>
        var package = "complexcgr";
        var versions = ["0.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/complexcgr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/complexcgr/README.html