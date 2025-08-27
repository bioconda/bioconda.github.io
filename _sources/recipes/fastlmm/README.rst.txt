:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastlmm'
.. highlight: bash

fastlmm
=======

.. conda:recipe:: fastlmm
   :replaces_section_title:
   :noindex:

   Fast GWAS

   :homepage: http://research.microsoft.com/en-us/um/redmond/projects/mscompbio/fastlmm/
   :license: Apache 2.0
   :recipe: /`fastlmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastlmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastlmm/meta.yaml>`_

   


.. conda:package:: fastlmm

   |downloads_fastlmm| |docker_fastlmm|

   :versions:
      
      

      ``0.2.32-5``,  ``0.2.32-4``,  ``0.2.32-3``,  ``0.2.32-2``,  ``0.2.32-1``,  ``0.2.32-0``,  ``0.2.24-0``

      

   
   :depends dill: 
   :depends libcxx: ``>=12.0.1``
   :depends matplotlib: ``>=1.4.3``
   :depends numpy: ``>=1.9.3``
   :depends pandas: ``>=0.16.2``
   :depends pysnptools: ``>=0.3.13``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27m``
   :depends scikit-learn: ``>=0.16.1,<0.20``
   :depends scipy: ``>=0.16.0``
   :depends statsmodels: ``>=0.6.1``
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

      mamba install fastlmm

   and update with::

      mamba update fastlmm

  To create a new environment, run::

      mamba create --name myenvname fastlmm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastlmm:<tag>

   (see `fastlmm/tags`_ for valid values for ``<tag>``)


.. |downloads_fastlmm| image:: https://img.shields.io/conda/dn/bioconda/fastlmm.svg?style=flat
   :target: https://anaconda.org/bioconda/fastlmm
   :alt:   (downloads)
.. |docker_fastlmm| image:: https://quay.io/repository/biocontainers/fastlmm/status
   :target: https://quay.io/repository/biocontainers/fastlmm
.. _`fastlmm/tags`: https://quay.io/repository/biocontainers/fastlmm?tab=tags


.. raw:: html

    <script>
        var package = "fastlmm";
        var versions = ["0.2.32","0.2.32","0.2.32","0.2.32","0.2.32"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastlmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastlmm/README.html