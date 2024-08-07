:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tracegroomer'
.. highlight: bash

tracegroomer
============

.. conda:recipe:: tracegroomer
   :replaces_section_title:
   :noindex:

   Format and normalise tracer metabolomics given file\(s\)\, to produce the .csv files which are ready for DIMet analysis.

   :homepage: https://github.com/cbib/TraceGroomer
   :license: MIT
   :recipe: /`tracegroomer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tracegroomer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tracegroomer/meta.yaml>`_

   


.. conda:package:: tracegroomer

   |downloads_tracegroomer| |docker_tracegroomer|

   :versions:
      
      

      ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``

      

   
   :depends click: ``>=8.1.7,<9.0.0``
   :depends matplotlib-base: ``>=3.8.2,<4.0.0``
   :depends mypy: ``>=1.8.0,<2.0.0``
   :depends numpy: ``>=1.26.4,<2.0.0``
   :depends openpyxl: ``>=3.1.2,<4.0.0``
   :depends pandas: ``>=2.2.0,<3.0.0``
   :depends pydantic: ``>=1.10.8,<2.0.0``
   :depends python: ``>=3.10.0,<4.0.0``
   :depends python-dotenv: ``>=1.0.1,<2.0.0``
   :depends pyyaml: ``>=6.0.1,<7.0.0``
   :depends scikit-learn: ``>=1.4.0,<2.0.0``
   :depends scipy: ``>=1.12.0,<2.0.0``
   :depends seaborn: ``>=0.13.2,<0.14.0``
   :depends sphinx: ``>=7.2.6,<8.0.0``
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

      mamba install tracegroomer

   and update with::

      mamba update tracegroomer

  To create a new environment, run::

      mamba create --name myenvname tracegroomer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tracegroomer:<tag>

   (see `tracegroomer/tags`_ for valid values for ``<tag>``)


.. |downloads_tracegroomer| image:: https://img.shields.io/conda/dn/bioconda/tracegroomer.svg?style=flat
   :target: https://anaconda.org/bioconda/tracegroomer
   :alt:   (downloads)
.. |docker_tracegroomer| image:: https://quay.io/repository/biocontainers/tracegroomer/status
   :target: https://quay.io/repository/biocontainers/tracegroomer
.. _`tracegroomer/tags`: https://quay.io/repository/biocontainers/tracegroomer?tab=tags


.. raw:: html

    <script>
        var package = "tracegroomer";
        var versions = ["0.1.4","0.1.3","0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tracegroomer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tracegroomer/README.html