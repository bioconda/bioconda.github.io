:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'baktfold'
.. highlight: bash

baktfold
========

.. conda:recipe:: baktfold
   :replaces_section_title:
   :noindex:

   Rapid \& standardized annotation of bacterial genomes\, MAGs \& plasmids using protein structural information

   :homepage: https://github.com/gbouras13/baktfold
   :documentation: https://baktfold.readthedocs.io/en/latest/
   
   :license: MIT / MIT
   :recipe: /`baktfold <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/baktfold>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/baktfold/meta.yaml>`_

   


.. conda:package:: baktfold

   |downloads_baktfold| |docker_baktfold|

   :versions:
      
      

      ``0.0.3-0``,  ``0.0.2-0``

      

   
   :depends alive-progress: ``>=3.0.1``
   :depends biopython: ``>=1.76``
   :depends click: ``>=8.0.0``
   :depends datasets: ``>=2.15``
   :depends foldseek: ``10.941cd33``
   :depends h5py: ``>=3.5``
   :depends loguru: ``>=0.5.3``
   :depends numpy: ``>=1.20``
   :depends pandas: ``>=1.4.2``
   :depends pyarrow: ``>=14.0.0``
   :depends python: ``>=3.8,<4``
   :depends pytorch: ``>=2.1.2``
   :depends pyyaml: ``>=6.0``
   :depends requests: ``>=2.25``
   :depends sentencepiece: ``>=0.1.99``
   :depends tqdm: ``>=4.35.0``
   :depends transformers: ``>=4.34``
   :depends xopen: ``>=1.5.0``
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

      mamba install baktfold

   and update with::

      mamba update baktfold

  To create a new environment, run::

      mamba create --name myenvname baktfold

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/baktfold:<tag>

   (see `baktfold/tags`_ for valid values for ``<tag>``)


.. |downloads_baktfold| image:: https://img.shields.io/conda/dn/bioconda/baktfold.svg?style=flat
   :target: https://anaconda.org/bioconda/baktfold
   :alt:   (downloads)
.. |docker_baktfold| image:: https://quay.io/repository/biocontainers/baktfold/status
   :target: https://quay.io/repository/biocontainers/baktfold
.. _`baktfold/tags`: https://quay.io/repository/biocontainers/baktfold?tab=tags


.. raw:: html

    <script>
        var package = "baktfold";
        var versions = ["0.0.3","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/baktfold/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/baktfold/README.html