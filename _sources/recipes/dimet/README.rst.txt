:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dimet'
.. highlight: bash

dimet
=====

.. conda:recipe:: dimet
   :replaces_section_title:
   :noindex:

   A tool for Differential Isotope\-labeled targeted Metabolomics

   :homepage: https://github.com/cbib/DIMet.git
   :license: MIT
   :recipe: /`dimet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dimet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dimet/meta.yaml>`_

   


.. conda:package:: dimet

   |downloads_dimet| |docker_dimet|

   :versions:
      
      

      ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends click: 
   :depends coverage: 
   :depends hydra-colorlog: ``>=1.2.0,<1.3.0``
   :depends hydra-core: ``>=1.3.2,<1.4.0``
   :depends matplotlib-base: ``>=3.7.1,<3.8.0``
   :depends numpy: ``>=1.23.1,<1.24.0``
   :depends pandas: ``>=1.5.3,<1.6.0``
   :depends pydantic: ``>=1.10.8,<2.0.0``
   :depends python: ``>=3.9,<4.0``
   :depends python-dotenv: ``>=1.0,<2.0``
   :depends pyyaml: ``>=6.0,<7.0``
   :depends scikit-learn: ``>=1.1.1,<1.2.0``
   :depends scipy: ``>=1.9.1,<1.10.0``
   :depends seaborn: ``>=0.11.2,<0.12.0``
   :depends statsmodels: ``>=0.13.5,<0.14.0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install dimet

   and update with::

      mamba update dimet

  To create a new environment, run::

      mamba create --name myenvname dimet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dimet:<tag>

   (see `dimet/tags`_ for valid values for ``<tag>``)


.. |downloads_dimet| image:: https://img.shields.io/conda/dn/bioconda/dimet.svg?style=flat
   :target: https://anaconda.org/bioconda/dimet
   :alt:   (downloads)
.. |docker_dimet| image:: https://quay.io/repository/biocontainers/dimet/status
   :target: https://quay.io/repository/biocontainers/dimet
.. _`dimet/tags`: https://quay.io/repository/biocontainers/dimet?tab=tags


.. raw:: html

    <script>
        var package = "dimet";
        var versions = ["0.2.1","0.2.0","0.1.4","0.1.3","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dimet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dimet/README.html