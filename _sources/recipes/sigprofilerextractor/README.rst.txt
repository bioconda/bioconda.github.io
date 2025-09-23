:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sigprofilerextractor'
.. highlight: bash

sigprofilerextractor
====================

.. conda:recipe:: sigprofilerextractor
   :replaces_section_title:
   :noindex:

   Extracts mutational signatures from mutational catalogues.

   :homepage: https://github.com/AlexandrovLab/SigProfilerExtractor
   :license: BSD / BSD-2-Clause
   :recipe: /`sigprofilerextractor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sigprofilerextractor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sigprofilerextractor/meta.yaml>`_

   


.. conda:package:: sigprofilerextractor

   |downloads_sigprofilerextractor| |docker_sigprofilerextractor|

   :versions:
      
      

      ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``

      

   
   :depends nimfa: ``>=1.1.0``
   :depends numpy: ``>=2.0.0``
   :depends pandas: ``>=2.0.0``
   :depends psutil: ``>=5.6.1``
   :depends python: ``>=3.9``
   :depends pytorch: ``>=1.8.1``
   :depends scikit-learn: ``>=0.24.2``
   :depends scipy: ``>=1.6.3``
   :depends sigprofilerassignment: ``>=0.2.0``
   :depends sigprofilermatrixgenerator: ``>=1.3.0``
   :depends sigprofilerplotting: ``>=1.4.0``
   :depends statsmodels: ``>=0.9.0``
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

      mamba install sigprofilerextractor

   and update with::

      mamba update sigprofilerextractor

  To create a new environment, run::

      mamba create --name myenvname sigprofilerextractor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sigprofilerextractor:<tag>

   (see `sigprofilerextractor/tags`_ for valid values for ``<tag>``)


.. |downloads_sigprofilerextractor| image:: https://img.shields.io/conda/dn/bioconda/sigprofilerextractor.svg?style=flat
   :target: https://anaconda.org/bioconda/sigprofilerextractor
   :alt:   (downloads)
.. |docker_sigprofilerextractor| image:: https://quay.io/repository/biocontainers/sigprofilerextractor/status
   :target: https://quay.io/repository/biocontainers/sigprofilerextractor
.. _`sigprofilerextractor/tags`: https://quay.io/repository/biocontainers/sigprofilerextractor?tab=tags


.. raw:: html

    <script>
        var package = "sigprofilerextractor";
        var versions = ["1.2.3","1.2.2","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sigprofilerextractor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sigprofilerextractor/README.html