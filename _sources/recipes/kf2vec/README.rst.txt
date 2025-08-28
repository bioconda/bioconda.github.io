:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kf2vec'
.. highlight: bash

kf2vec
======

.. conda:recipe:: kf2vec
   :replaces_section_title:
   :noindex:

   K\-mer frequency to vector tool.

   :homepage: https://github.com/noraracht/kf2vec
   :license: MIT
   :recipe: /`kf2vec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kf2vec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kf2vec/meta.yaml>`_

   


.. conda:package:: kf2vec

   |downloads_kf2vec| |docker_kf2vec|

   :versions:
      
      

      ``1.0.62-0``

      

   
   :depends kmer-jellyfish: 
   :depends numpy: ``>=1.22,<1.27``
   :depends openmpi: ``4.*``
   :depends pandas: 
   :depends pip: 
   :depends python: ``>=3.11,<3.12``
   :depends pytorch: 
   :depends scikit-learn: 
   :depends seqkit: 
   :depends seqtk: 
   :depends treecluster: ``>=1.0.3``
   :depends treeswift: ``>=1.1.45``
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

      mamba install kf2vec

   and update with::

      mamba update kf2vec

  To create a new environment, run::

      mamba create --name myenvname kf2vec

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kf2vec:<tag>

   (see `kf2vec/tags`_ for valid values for ``<tag>``)


.. |downloads_kf2vec| image:: https://img.shields.io/conda/dn/bioconda/kf2vec.svg?style=flat
   :target: https://anaconda.org/bioconda/kf2vec
   :alt:   (downloads)
.. |docker_kf2vec| image:: https://quay.io/repository/biocontainers/kf2vec/status
   :target: https://quay.io/repository/biocontainers/kf2vec
.. _`kf2vec/tags`: https://quay.io/repository/biocontainers/kf2vec?tab=tags


.. raw:: html

    <script>
        var package = "kf2vec";
        var versions = ["1.0.62"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kf2vec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kf2vec/README.html