:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pybdei'
.. highlight: bash

pybdei
======

.. conda:recipe:: pybdei
   :replaces_section_title:
   :noindex:

   Maximum likelihood estimation of Birth\-Death Exposed\-Infectious \(BDEI\) epidemiological model parameters from phylogenetic trees.

   :homepage: https://github.com/evolbioinfo/bdei
   :license: LGPL / LGPL-2.1-or-later
   :recipe: /`pybdei <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybdei>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybdei/meta.yaml>`_
   :links: doi: :doi:`10.1093/sysbio/syad059`

   PyBDEI provides tools for fast and accurate maximum likelihood estimation
   of Birth\-Death Exposed\-Infectious \(BDEI\) epidemiological model parameters
   from phylogenetic trees.



.. conda:package:: pybdei

   |downloads_pybdei| |docker_pybdei|

   :versions:
      
      

      ``0.13-1``,  ``0.13-0``

      

   
   :depends ete3: ``>=3.1.3``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends nlopt: ``>=2.8.0,<2.9.0a0``
   :depends numpy: ``>=1.21,<3``
   :depends numpy: ``>=1.24.0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scipy: ``>=1.11.1``
   :depends six: ``>=1.16.0``
   :depends treesimulator: ``>=0.1.22``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install pybdei

   and update with::

      mamba update pybdei

  To create a new environment, run::

      mamba create --name myenvname pybdei

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pybdei:<tag>

   (see `pybdei/tags`_ for valid values for ``<tag>``)


.. |downloads_pybdei| image:: https://img.shields.io/conda/dn/bioconda/pybdei.svg?style=flat
   :target: https://anaconda.org/bioconda/pybdei
   :alt:   (downloads)
.. |docker_pybdei| image:: https://quay.io/repository/biocontainers/pybdei/status
   :target: https://quay.io/repository/biocontainers/pybdei
.. _`pybdei/tags`: https://quay.io/repository/biocontainers/pybdei?tab=tags


.. raw:: html

    <script>
        var package = "pybdei";
        var versions = ["0.13","0.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pybdei/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pybdei/README.html