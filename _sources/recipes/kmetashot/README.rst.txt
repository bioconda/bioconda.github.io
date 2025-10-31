:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kmetashot'
.. highlight: bash

kmetashot
=========

.. conda:recipe:: kmetashot
   :replaces_section_title:
   :noindex:

   Fast taxonomic classifier for metagenome bins\/MAGs based on k\-mer\/minimizer

   :homepage: https://github.com/gdefazio/kMetaShot
   :documentation: https://github.com/gdefazio/kMetaShot#readme
   
   :license: GPL-3.0-only
   :recipe: /`kmetashot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmetashot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmetashot/meta.yaml>`_

   


.. conda:package:: kmetashot

   |downloads_kmetashot| |docker_kmetashot|

   :versions:
      
      

      ``2.0-1``,  ``2.0-0``,  ``0.1.0-0``

      

   
   :depends argcomplete: ``>=1.11.1``
   :depends bitarray: ``>=1.2.1``
   :depends h5py: ``>=2.9.0``
   :depends hdf5: ``>=1.10.4``
   :depends mmh3: 
   :depends numba: ``>=0.51.2``
   :depends numpy: ``>=1.18.1``
   :depends pandas: ``>=1.0.4``
   :depends pytables: ``>=3.6.1``
   :depends python: ``>=3.8``
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

      mamba install kmetashot

   and update with::

      mamba update kmetashot

  To create a new environment, run::

      mamba create --name myenvname kmetashot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kmetashot:<tag>

   (see `kmetashot/tags`_ for valid values for ``<tag>``)


.. |downloads_kmetashot| image:: https://img.shields.io/conda/dn/bioconda/kmetashot.svg?style=flat
   :target: https://anaconda.org/bioconda/kmetashot
   :alt:   (downloads)
.. |docker_kmetashot| image:: https://quay.io/repository/biocontainers/kmetashot/status
   :target: https://quay.io/repository/biocontainers/kmetashot
.. _`kmetashot/tags`: https://quay.io/repository/biocontainers/kmetashot?tab=tags


.. raw:: html

    <script>
        var package = "kmetashot";
        var versions = ["2.0","2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kmetashot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kmetashot/README.html