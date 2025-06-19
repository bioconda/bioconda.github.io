:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'structure-threader'
.. highlight: bash

structure-threader
==================

.. conda:recipe:: structure-threader
   :replaces_section_title:
   :noindex:

   A program to parallelize runs of \'Structure\'\, \'fastStructure\' and \'MavericK\'.

   :homepage: https://gitlab.com/StuntsPT/Structure_threader
   :license: GPL3 / GPL-3.0-only
   :recipe: /`structure-threader <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/structure-threader>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/structure-threader/meta.yaml>`_

   


.. conda:package:: structure-threader

   |downloads_structure-threader| |docker_structure-threader|

   :versions:
      
      

      ``1.3.11-0``

      

   
   :depends colorlover: ``>=0.3.0``
   :depends matplotlib-base: 
   :depends numpy: ``>=1.12.1``
   :depends plotly: ``>=4.1.1``
   :depends python: ``>=3.4``
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

      mamba install structure-threader

   and update with::

      mamba update structure-threader

  To create a new environment, run::

      mamba create --name myenvname structure-threader

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/structure-threader:<tag>

   (see `structure-threader/tags`_ for valid values for ``<tag>``)


.. |downloads_structure-threader| image:: https://img.shields.io/conda/dn/bioconda/structure-threader.svg?style=flat
   :target: https://anaconda.org/bioconda/structure-threader
   :alt:   (downloads)
.. |docker_structure-threader| image:: https://quay.io/repository/biocontainers/structure-threader/status
   :target: https://quay.io/repository/biocontainers/structure-threader
.. _`structure-threader/tags`: https://quay.io/repository/biocontainers/structure-threader?tab=tags


.. raw:: html

    <script>
        var package = "structure-threader";
        var versions = ["1.3.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/structure-threader/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/structure-threader/README.html