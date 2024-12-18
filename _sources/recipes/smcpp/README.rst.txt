:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smcpp'
.. highlight: bash

smcpp
=====

.. conda:recipe:: smcpp
   :replaces_section_title:
   :noindex:

   SMC\+\+ infers population history from whole\-genome sequence data.

   :homepage: https://github.com/popgenmethods/smcpp
   :license: BSD
   :recipe: /`smcpp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smcpp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smcpp/meta.yaml>`_

   


.. conda:package:: smcpp

   |downloads_smcpp| |docker_smcpp|

   :versions:
      
      

      ``1.15.4-0``

      

   
   :depends appdirs: 
   :depends gmp: ``>=6.3.0,<7.0a0``
   :depends gnuplot: 
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends matplotlib-base: ``>=3,<3.6``
   :depends mpfr: ``<4.2``
   :depends mpfr: ``>=4.1.0,<5.0a0``
   :depends numpy: ``>=1.22.4,<2.0a0``
   :depends pandas: ``>=1.4``
   :depends pysam: ``>=0.18``
   :depends python: ``>=3.9,<3.10.0a0 *_cpython``
   :depends python_abi: ``3.9.* *_cp39``
   :depends scikit-learn: ``>=1``
   :depends scipy: ``>=1.8``
   :depends seaborn: 
   :depends setuptools_scm: 
   :depends tqdm: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install smcpp

   and update with::

      mamba update smcpp

  To create a new environment, run::

      mamba create --name myenvname smcpp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/smcpp:<tag>

   (see `smcpp/tags`_ for valid values for ``<tag>``)


.. |downloads_smcpp| image:: https://img.shields.io/conda/dn/bioconda/smcpp.svg?style=flat
   :target: https://anaconda.org/bioconda/smcpp
   :alt:   (downloads)
.. |docker_smcpp| image:: https://quay.io/repository/biocontainers/smcpp/status
   :target: https://quay.io/repository/biocontainers/smcpp
.. _`smcpp/tags`: https://quay.io/repository/biocontainers/smcpp?tab=tags


.. raw:: html

    <script>
        var package = "smcpp";
        var versions = ["1.15.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smcpp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smcpp/README.html