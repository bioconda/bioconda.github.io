:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bolt-lmm'
.. highlight: bash

bolt-lmm
========

.. conda:recipe:: bolt-lmm
   :replaces_section_title:
   :noindex:

   Efficient large cohorts genome\-wide Bayesian mixed\-model association testing

   :homepage: https://alkesgroup.broadinstitute.org/BOLT-LMM/
   :license: GPL-3+
   :recipe: /`bolt-lmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bolt-lmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bolt-lmm/meta.yaml>`_
   :links: doi: :doi:`10.1038/ng.3190`

   


.. conda:package:: bolt-lmm

   |downloads_bolt-lmm| |docker_bolt-lmm|

   :versions:
      
      

      ``2.3.4-0``

      

   
   :depends boost-cpp: ``>=1.70.0,<1.70.1.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends nlopt: ``>=2.6.2,<2.6.3.0a0``
   :depends openblas: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install bolt-lmm

   and update with::

      mamba update bolt-lmm

  To create a new environment, run::

      mamba create --name myenvname bolt-lmm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bolt-lmm:<tag>

   (see `bolt-lmm/tags`_ for valid values for ``<tag>``)


.. |downloads_bolt-lmm| image:: https://img.shields.io/conda/dn/bioconda/bolt-lmm.svg?style=flat
   :target: https://anaconda.org/bioconda/bolt-lmm
   :alt:   (downloads)
.. |docker_bolt-lmm| image:: https://quay.io/repository/biocontainers/bolt-lmm/status
   :target: https://quay.io/repository/biocontainers/bolt-lmm
.. _`bolt-lmm/tags`: https://quay.io/repository/biocontainers/bolt-lmm?tab=tags


.. raw:: html

    <script>
        var package = "bolt-lmm";
        var versions = ["2.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bolt-lmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bolt-lmm/README.html