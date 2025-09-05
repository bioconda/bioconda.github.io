:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flexsweep'
.. highlight: bash

flexsweep
=========

.. conda:recipe:: flexsweep
   :replaces_section_title:
   :noindex:

   A versatile tool for detecting selective sweeps.

   :homepage: https://github.com/jmurga/flexsweep
   :documentation: https://flexsweep.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`flexsweep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flexsweep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flexsweep/meta.yaml>`_

   


.. conda:package:: flexsweep

   |downloads_flexsweep| |docker_flexsweep|

   :versions:
      
      

      ``1.3-0``,  ``1.0-0``

      

   
   :depends click: ``>=8.1.7,<9.0.0``
   :depends demes: ``>=0.2.3,<0.3.0``
   :depends joblib: ``>=1.4.2,<2.0.0``
   :depends matplotlib-base: ``>=3.9.2,<4.0.0``
   :depends numba: ``>=0.60.0,<0.61.0``
   :depends numpy: ``1.26.4``
   :depends polars: ``>=1.14.0,<2.0.0``
   :depends pyarrow: ``>=17.0.0,<18.0.0``
   :depends pybedtools: ``>=0.12.0``
   :depends python: ``>=3.12``
   :depends scikit-allel: ``>=1.3.8,<2.0.0``
   :depends scikit-learn: ``>=1.5.1,<2.0.0``
   :depends scipy: ``>=1.14.0,<2.0.0``
   :depends tbb: ``>=2022.1.0,<2023.0.0``
   :depends tensorflow: ``2.17.*``
   :depends threadpoolctl: ``>=3.5.0,<4.0.0``
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

      mamba install flexsweep

   and update with::

      mamba update flexsweep

  To create a new environment, run::

      mamba create --name myenvname flexsweep

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/flexsweep:<tag>

   (see `flexsweep/tags`_ for valid values for ``<tag>``)


.. |downloads_flexsweep| image:: https://img.shields.io/conda/dn/bioconda/flexsweep.svg?style=flat
   :target: https://anaconda.org/bioconda/flexsweep
   :alt:   (downloads)
.. |docker_flexsweep| image:: https://quay.io/repository/biocontainers/flexsweep/status
   :target: https://quay.io/repository/biocontainers/flexsweep
.. _`flexsweep/tags`: https://quay.io/repository/biocontainers/flexsweep?tab=tags


.. raw:: html

    <script>
        var package = "flexsweep";
        var versions = ["1.3","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flexsweep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flexsweep/README.html