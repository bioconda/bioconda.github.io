:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ms2pip'
.. highlight: bash

ms2pip
======

.. conda:recipe:: ms2pip
   :replaces_section_title:
   :noindex:

   MS²PIP\: MS² Peak Intensity Prediction

   :homepage: https://github.com/compomics/ms2pip/
   :documentation: https://ms2pip.readthedocs.io/
   
   :developer docs: https://github.com/compomics/ms2pip_c
   :license: APACHE / Apache-2.0
   :recipe: /`ms2pip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ms2pip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ms2pip/meta.yaml>`_

   


.. conda:package:: ms2pip

   |downloads_ms2pip| |docker_ms2pip|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.1.0-2</code>,  <code>4.1.0-1</code>,  <code>4.1.0-0</code>,  <code>4.0.0-0</code>,  <code>4.0.0.dev8-0</code>,  <code>4.0.0.dev4-0</code>,  <code>3.11.0-2</code>,  <code>3.11.0-0</code>,  <code>3.10.0-0</code>,  </span></summary>
      

      ``4.1.0-2``,  ``4.1.0-1``,  ``4.1.0-0``,  ``4.0.0-0``,  ``4.0.0.dev8-0``,  ``4.0.0.dev4-0``,  ``3.11.0-2``,  ``3.11.0-0``,  ``3.10.0-0``,  ``3.9.0-0``,  ``3.6.3-1``,  ``3.6.3-0``,  ``3.6.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends click: ``>=7,<9``
   :depends libgcc: ``>=13``
   :depends lxml: ``>=4``
   :depends ms2rescore-rs: ``>=0.4,<2``
   :depends numpy: ``>=1.21,<3``
   :depends numpy: ``>=1.25``
   :depends pandas: ``>=1,<3``
   :depends psm-utils: ``>=1.0``
   :depends pyarrow: 
   :depends pydantic: ``>=2``
   :depends pyteomics: ``>=3.5,<5``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends rich: ``>=13``
   :depends sqlalchemy: ``>=1.3,<2``
   :depends tomlkit: ``>=0.5,<1``
   :depends werkzeug: ``>=2``
   :depends xgboost: ``>=1.3,<3``
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

      mamba install ms2pip

   and update with::

      mamba update ms2pip

  To create a new environment, run::

      mamba create --name myenvname ms2pip

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ms2pip:<tag>

   (see `ms2pip/tags`_ for valid values for ``<tag>``)


.. |downloads_ms2pip| image:: https://img.shields.io/conda/dn/bioconda/ms2pip.svg?style=flat
   :target: https://anaconda.org/bioconda/ms2pip
   :alt:   (downloads)
.. |docker_ms2pip| image:: https://quay.io/repository/biocontainers/ms2pip/status
   :target: https://quay.io/repository/biocontainers/ms2pip
.. _`ms2pip/tags`: https://quay.io/repository/biocontainers/ms2pip?tab=tags


.. raw:: html

    <script>
        var package = "ms2pip";
        var versions = ["4.1.0","4.1.0","4.1.0","4.0.0","4.0.0.dev8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ms2pip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ms2pip/README.html