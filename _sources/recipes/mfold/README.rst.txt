:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mfold'
.. highlight: bash

mfold
=====

.. conda:recipe:: mfold
   :replaces_section_title:
   :noindex:

   Mfold web server for nucleic acid folding and hybridization prediction.

   :homepage: http://www.unafold.org/mfold/software/download-mfold.php
   :license: Custom OSS
   :recipe: /`mfold <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mfold>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mfold/meta.yaml>`_
   :links: doi: :doi:`10.1007/978-94-011-4485-8_2`

   


.. conda:package:: mfold

   |downloads_mfold| |docker_mfold|

   :versions:
      
      

      ``3.6-3``,  ``3.6-2``,  ``3.6-1``,  ``3.6-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libgfortran-ng: 
   :depends libgfortran5: ``>=12.2.0``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install mfold

   and update with::

      mamba update mfold

  To create a new environment, run::

      mamba create --name myenvname mfold

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mfold:<tag>

   (see `mfold/tags`_ for valid values for ``<tag>``)


.. |downloads_mfold| image:: https://img.shields.io/conda/dn/bioconda/mfold.svg?style=flat
   :target: https://anaconda.org/bioconda/mfold
   :alt:   (downloads)
.. |docker_mfold| image:: https://quay.io/repository/biocontainers/mfold/status
   :target: https://quay.io/repository/biocontainers/mfold
.. _`mfold/tags`: https://quay.io/repository/biocontainers/mfold?tab=tags


.. raw:: html

    <script>
        var package = "mfold";
        var versions = ["3.6","3.6","3.6","3.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mfold/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mfold/README.html