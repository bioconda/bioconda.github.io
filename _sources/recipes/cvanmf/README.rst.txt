:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cvanmf'
.. highlight: bash

cvanmf
======

.. conda:recipe:: cvanmf
   :replaces_section_title:
   :noindex:

   Bi\-cross validation of NMF and signature generation and analysis

   :homepage: https://github.com/apduncan/cvanmf
   :license: GPL-2.0-only
   :recipe: /`cvanmf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cvanmf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cvanmf/meta.yaml>`_

   


.. conda:package:: cvanmf

   |downloads_cvanmf| |docker_cvanmf|

   :versions:
      
      

      ``1.0.0-0``,  ``0.5.1-0``

      

   
   :depends click: ``>=8.1.7,<9.0.0``
   :depends kneed: ``>=0.8.5,<0.9.0``
   :depends marsilea: ``>=0.4.3,<0.5.0``
   :depends multimethod: ``>=1.12.0,<2.0.0``
   :depends pandas: ``>=2.1.4,<3.0.0``
   :depends plotnine: ``>=0.13.0,<0.14.0``
   :depends python: ``>=3.12.0,<4.0.0``
   :depends pyyaml: ``>=6.0.1,<7.0.0``
   :depends scikit-bio: ``>=0.6.0,<0.7.0``
   :depends scikit-learn: ``>=1.3.2,<2.0.0``
   :depends scikit-posthocs: ``>=0.9.0,<0.10.0``
   :depends setuptools: ``>=69.1.1,<70.0.0``
   :depends tqdm: ``>=4.66.1,<5.0.0``
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

      mamba install cvanmf

   and update with::

      mamba update cvanmf

  To create a new environment, run::

      mamba create --name myenvname cvanmf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cvanmf:<tag>

   (see `cvanmf/tags`_ for valid values for ``<tag>``)


.. |downloads_cvanmf| image:: https://img.shields.io/conda/dn/bioconda/cvanmf.svg?style=flat
   :target: https://anaconda.org/bioconda/cvanmf
   :alt:   (downloads)
.. |docker_cvanmf| image:: https://quay.io/repository/biocontainers/cvanmf/status
   :target: https://quay.io/repository/biocontainers/cvanmf
.. _`cvanmf/tags`: https://quay.io/repository/biocontainers/cvanmf?tab=tags


.. raw:: html

    <script>
        var package = "cvanmf";
        var versions = ["1.0.0","0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cvanmf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cvanmf/README.html