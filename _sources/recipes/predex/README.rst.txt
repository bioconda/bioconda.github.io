:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'predex'
.. highlight: bash

predex
======

.. conda:recipe:: predex
   :replaces_section_title:
   :noindex:

   Prepare expression data for dgeAnalysis \- LUMC.

   :homepage: https://github.com/tomkuipers1402/predex
   :license: MIT / MIT
   :recipe: /`predex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/predex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/predex/meta.yaml>`_

   


.. conda:package:: predex

   |downloads_predex| |docker_predex|

   :versions:
      
      

      ``0.9.3-0``,  ``0.9.2-0``,  ``0.9.1-0``

      

   
   :depends pandas: 
   :depends pysam: ``>=0.15.1``
   :depends python: 
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

      mamba install predex

   and update with::

      mamba update predex

  To create a new environment, run::

      mamba create --name myenvname predex

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/predex:<tag>

   (see `predex/tags`_ for valid values for ``<tag>``)


.. |downloads_predex| image:: https://img.shields.io/conda/dn/bioconda/predex.svg?style=flat
   :target: https://anaconda.org/bioconda/predex
   :alt:   (downloads)
.. |docker_predex| image:: https://quay.io/repository/biocontainers/predex/status
   :target: https://quay.io/repository/biocontainers/predex
.. _`predex/tags`: https://quay.io/repository/biocontainers/predex?tab=tags


.. raw:: html

    <script>
        var package = "predex";
        var versions = ["0.9.3","0.9.2","0.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/predex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/predex/README.html