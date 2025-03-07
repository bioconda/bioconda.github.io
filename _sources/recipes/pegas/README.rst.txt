:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pegas'
.. highlight: bash

pegas
=====

.. conda:recipe:: pegas
   :replaces_section_title:
   :noindex:

   PeGAS is a Snakemake pipeline for genome analysis

   :homepage: https://github.com/liviurotiul/PeGAS
   :documentation: https://github.com/liviurotiul/PeGAS#readme
   
   :developer docs: https://github.com/liviurotiul/PeGAS/issues
   :license: GPL / GPL-2.0-or-later
   :recipe: /`pegas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pegas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pegas/meta.yaml>`_

   PeGAS is a Snakemake pipeline for genome analysis. It is designed to be
   lightweight\, easy to install\, and easy to use.



.. conda:package:: pegas

   |downloads_pegas| |docker_pegas|

   :versions:
      
      

      ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``0.2.13-0``

      

   
   :depends beautifulsoup4: ``>=4.12.3``
   :depends conda: ``>=24.7.1``
   :depends matplotlib-base: ``>=3.9.2``
   :depends networkx: ``>=3.2``
   :depends pandas: ``>=1.3.5``
   :depends plotly: ``>=5.0.0,<6``
   :depends python: ``>=3.10``
   :depends snakemake-minimal: ``>=7.32.4``
   :depends tqdm: ``>=4.66.5``
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

      mamba install pegas

   and update with::

      mamba update pegas

  To create a new environment, run::

      mamba create --name myenvname pegas

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pegas:<tag>

   (see `pegas/tags`_ for valid values for ``<tag>``)


.. |downloads_pegas| image:: https://img.shields.io/conda/dn/bioconda/pegas.svg?style=flat
   :target: https://anaconda.org/bioconda/pegas
   :alt:   (downloads)
.. |docker_pegas| image:: https://quay.io/repository/biocontainers/pegas/status
   :target: https://quay.io/repository/biocontainers/pegas
.. _`pegas/tags`: https://quay.io/repository/biocontainers/pegas?tab=tags


.. raw:: html

    <script>
        var package = "pegas";
        var versions = ["1.0.4","1.0.3","1.0.2","1.0.1","0.2.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pegas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pegas/README.html