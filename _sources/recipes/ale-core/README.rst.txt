:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ale-core'
.. highlight: bash

ale-core
========

.. conda:recipe:: ale-core
   :replaces_section_title:
   :noindex:

   ALE\: Assembly Likelihood Estimator. Core C implemented  scoring programs only without supplementary plotting scripts.

   :homepage: https://github.com/sc932/ALE
   :license: NCSA
   :recipe: /`ale-core <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ale-core>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ale-core/meta.yaml>`_

   This package is designed to hold the core scoring functionality of ALE without the 10\+ year old supplementary python plotting scripts 


.. conda:package:: ale-core

   |downloads_ale-core| |docker_ale-core|

   :versions:
      
      

      ``20220503-1``,  ``20220503-0``

      

   
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends samtools: ``>=1.21,<2.0a0``
   :depends zlib: 
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

      mamba install ale-core

   and update with::

      mamba update ale-core

  To create a new environment, run::

      mamba create --name myenvname ale-core

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ale-core:<tag>

   (see `ale-core/tags`_ for valid values for ``<tag>``)


.. |downloads_ale-core| image:: https://img.shields.io/conda/dn/bioconda/ale-core.svg?style=flat
   :target: https://anaconda.org/bioconda/ale-core
   :alt:   (downloads)
.. |docker_ale-core| image:: https://quay.io/repository/biocontainers/ale-core/status
   :target: https://quay.io/repository/biocontainers/ale-core
.. _`ale-core/tags`: https://quay.io/repository/biocontainers/ale-core?tab=tags


.. raw:: html

    <script>
        var package = "ale-core";
        var versions = ["20220503","20220503"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ale-core/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ale-core/README.html