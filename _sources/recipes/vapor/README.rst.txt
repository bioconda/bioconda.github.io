:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vapor'
.. highlight: bash

vapor
=====

.. conda:recipe:: vapor
   :replaces_section_title:
   :noindex:

   VAPOR is a tool for classification of Influenza samples from raw short read sequence data for downstream bioinformatics analysis.

   :homepage: https://github.com/connor-lab/vapor
   :license: GPL / GPL-3.0-only
   :recipe: /`vapor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vapor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vapor/meta.yaml>`_

   


.. conda:package:: vapor

   |downloads_vapor| |docker_vapor|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends numpy: ``>=1.5.1``
   :depends python: ``>=3``
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

      mamba install vapor

   and update with::

      mamba update vapor

  To create a new environment, run::

      mamba create --name myenvname vapor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vapor:<tag>

   (see `vapor/tags`_ for valid values for ``<tag>``)


.. |downloads_vapor| image:: https://img.shields.io/conda/dn/bioconda/vapor.svg?style=flat
   :target: https://anaconda.org/bioconda/vapor
   :alt:   (downloads)
.. |docker_vapor| image:: https://quay.io/repository/biocontainers/vapor/status
   :target: https://quay.io/repository/biocontainers/vapor
.. _`vapor/tags`: https://quay.io/repository/biocontainers/vapor?tab=tags


.. raw:: html

    <script>
        var package = "vapor";
        var versions = ["1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vapor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vapor/README.html