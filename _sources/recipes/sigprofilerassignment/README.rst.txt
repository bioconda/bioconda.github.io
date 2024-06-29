:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sigprofilerassignment'
.. highlight: bash

sigprofilerassignment
=====================

.. conda:recipe:: sigprofilerassignment
   :replaces_section_title:
   :noindex:

   SigProfilerAssignment \- Assignment of known mutational signatures to individual samples and individual somatic mutations

   :homepage: https://github.com/AlexandrovLab/SigProfilerAssignment.git
   :license: BSD-2-Clause
   :recipe: /`sigprofilerassignment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sigprofilerassignment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sigprofilerassignment/meta.yaml>`_

   


.. conda:package:: sigprofilerassignment

   |downloads_sigprofilerassignment| |docker_sigprofilerassignment|

   :versions:
      
      

      ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``

      

   
   :depends alive-progress: ``>=2.4``
   :depends numpy: ``>=1.21``
   :depends pandas: ``>=1.2,<2.0``
   :depends pdf2image: ``>=1.16``
   :depends psutil: ``>=5.6.1``
   :depends pymupdf: ``>=1.21``
   :depends pypdf: ``>=3.0``
   :depends python: ``>=3.8``
   :depends reportlab: ``>=3.5``
   :depends scikit-learn: ``>=0.24``
   :depends scipy: ``>=1.6``
   :depends sigprofilermatrixgenerator: ``>=1.2``
   :depends sigprofilerplotting: ``>=1.3``
   :depends statsmodels: ``>=0.9``
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

      mamba install sigprofilerassignment

   and update with::

      mamba update sigprofilerassignment

  To create a new environment, run::

      mamba create --name myenvname sigprofilerassignment

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sigprofilerassignment:<tag>

   (see `sigprofilerassignment/tags`_ for valid values for ``<tag>``)


.. |downloads_sigprofilerassignment| image:: https://img.shields.io/conda/dn/bioconda/sigprofilerassignment.svg?style=flat
   :target: https://anaconda.org/bioconda/sigprofilerassignment
   :alt:   (downloads)
.. |docker_sigprofilerassignment| image:: https://quay.io/repository/biocontainers/sigprofilerassignment/status
   :target: https://quay.io/repository/biocontainers/sigprofilerassignment
.. _`sigprofilerassignment/tags`: https://quay.io/repository/biocontainers/sigprofilerassignment?tab=tags


.. raw:: html

    <script>
        var package = "sigprofilerassignment";
        var versions = ["0.1.7","0.1.6","0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sigprofilerassignment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sigprofilerassignment/README.html