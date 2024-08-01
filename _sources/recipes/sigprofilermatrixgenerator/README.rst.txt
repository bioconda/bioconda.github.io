:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sigprofilermatrixgenerator'
.. highlight: bash

sigprofilermatrixgenerator
==========================

.. conda:recipe:: sigprofilermatrixgenerator
   :replaces_section_title:
   :noindex:

   SigProfiler matrix generator tool

   :homepage: https://github.com/AlexandrovLab/SigProfilerMatrixGenerator.git
   :license: BSD-2-Clause
   :recipe: /`sigprofilermatrixgenerator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sigprofilermatrixgenerator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sigprofilermatrixgenerator/meta.yaml>`_

   


.. conda:package:: sigprofilermatrixgenerator

   |downloads_sigprofilermatrixgenerator| |docker_sigprofilermatrixgenerator|

   :versions:
      
      

      ``1.2.27-0``,  ``1.2.26-0``,  ``1.2.25-0``

      

   
   :depends matplotlib-base: ``>=2.2.2``
   :depends numpy: ``>=1.18.5``
   :depends pandas: ``>=0.23.4,<2.0.0``
   :depends python: ``>=3.8``
   :depends scipy: ``>=1.1.0``
   :depends sigprofilerplotting: ``>=1.3.16``
   :depends statsmodels: ``>=0.9.0``
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

      mamba install sigprofilermatrixgenerator

   and update with::

      mamba update sigprofilermatrixgenerator

  To create a new environment, run::

      mamba create --name myenvname sigprofilermatrixgenerator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sigprofilermatrixgenerator:<tag>

   (see `sigprofilermatrixgenerator/tags`_ for valid values for ``<tag>``)


.. |downloads_sigprofilermatrixgenerator| image:: https://img.shields.io/conda/dn/bioconda/sigprofilermatrixgenerator.svg?style=flat
   :target: https://anaconda.org/bioconda/sigprofilermatrixgenerator
   :alt:   (downloads)
.. |docker_sigprofilermatrixgenerator| image:: https://quay.io/repository/biocontainers/sigprofilermatrixgenerator/status
   :target: https://quay.io/repository/biocontainers/sigprofilermatrixgenerator
.. _`sigprofilermatrixgenerator/tags`: https://quay.io/repository/biocontainers/sigprofilermatrixgenerator?tab=tags


.. raw:: html

    <script>
        var package = "sigprofilermatrixgenerator";
        var versions = ["1.2.27","1.2.26","1.2.25"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sigprofilermatrixgenerator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sigprofilermatrixgenerator/README.html