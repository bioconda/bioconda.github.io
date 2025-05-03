:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'oligon-design'
.. highlight: bash

oligon-design
=============

.. conda:recipe:: oligon-design
   :replaces_section_title:
   :noindex:

   Simple and versatile approach to design specific oligonucleotides from large environmental datasets

   :homepage: https://github.com/MiguelMSandin/oligoN-design
   :license: GPL3 / GPL-3.0
   :recipe: /`oligon-design <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oligon-design>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oligon-design/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.7473194.`

   


.. conda:package:: oligon-design

   |downloads_oligon-design| |docker_oligon-design|

   :versions:
      
      

      ``0.4.0-0``

      

   
   :depends biopython: ``>=1.83``
   :depends glimpse: ``>=4.18.7``
   :depends hmmer: ``>=3.4``
   :depends mafft: ``>=7.526``
   :depends matplotlib-base: ``>=3.10.1``
   :depends pandas: ``>=2.1.4``
   :depends python: ``>=3.12``
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

      mamba install oligon-design

   and update with::

      mamba update oligon-design

  To create a new environment, run::

      mamba create --name myenvname oligon-design

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/oligon-design:<tag>

   (see `oligon-design/tags`_ for valid values for ``<tag>``)


.. |downloads_oligon-design| image:: https://img.shields.io/conda/dn/bioconda/oligon-design.svg?style=flat
   :target: https://anaconda.org/bioconda/oligon-design
   :alt:   (downloads)
.. |docker_oligon-design| image:: https://quay.io/repository/biocontainers/oligon-design/status
   :target: https://quay.io/repository/biocontainers/oligon-design
.. _`oligon-design/tags`: https://quay.io/repository/biocontainers/oligon-design?tab=tags


.. raw:: html

    <script>
        var package = "oligon-design";
        var versions = ["0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/oligon-design/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/oligon-design/README.html