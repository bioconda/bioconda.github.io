:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cellpyability'
.. highlight: bash

cellpyability
=============

.. conda:recipe:: cellpyability
   :replaces_section_title:
   :noindex:

   A Python package for analyzing cell viability data

   :homepage: https://github.com/bindralab/cellpyability
   :license: MIT
   :recipe: /`cellpyability <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cellpyability>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cellpyability/meta.yaml>`_

   


.. conda:package:: cellpyability

   |downloads_cellpyability| |docker_cellpyability|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends matplotlib-base: ``>=3.5.0,<4.0.0``
   :depends numpy: ``>=1.24.4,<2.0.0``
   :depends pandas: ``>=2.0.0,<3.0.0``
   :depends plotly: ``>=5.0.0,<6.0.0``
   :depends python: ``>=3.8``
   :depends scipy: ``>=1.10.0,<2.0.0``
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

      mamba install cellpyability

   and update with::

      mamba update cellpyability

  To create a new environment, run::

      mamba create --name myenvname cellpyability

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cellpyability:<tag>

   (see `cellpyability/tags`_ for valid values for ``<tag>``)


.. |downloads_cellpyability| image:: https://img.shields.io/conda/dn/bioconda/cellpyability.svg?style=flat
   :target: https://anaconda.org/bioconda/cellpyability
   :alt:   (downloads)
.. |docker_cellpyability| image:: https://quay.io/repository/biocontainers/cellpyability/status
   :target: https://quay.io/repository/biocontainers/cellpyability
.. _`cellpyability/tags`: https://quay.io/repository/biocontainers/cellpyability?tab=tags


.. raw:: html

    <script>
        var package = "cellpyability";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cellpyability/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cellpyability/README.html