:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'liftover'
.. highlight: bash

liftover
========

.. conda:recipe:: liftover
   :replaces_section_title:
   :noindex:

   A Python package for converting point coordinates between genome assemblies\, inspired by pyliftover.

   :homepage: https://github.com/jeremymcrae/liftover
   :developer docs: https://pypi.org/project/liftover/
   :license: MIT / MIT
   :recipe: /`liftover <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/liftover>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/liftover/meta.yaml>`_

   


.. conda:package:: liftover

   |downloads_liftover| |docker_liftover|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.1-1</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  <code>1.2.2-1</code>,  <code>1.2.2-0</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  <code>1.1.18-0</code>,  <code>1.1.17-0</code>,  </span></summary>
      

      ``1.3.1-1``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.2-1``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.18-0``,  ``1.1.17-0``,  ``1.1.16-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends urllib3: 
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

      mamba install liftover

   and update with::

      mamba update liftover

  To create a new environment, run::

      mamba create --name myenvname liftover

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/liftover:<tag>

   (see `liftover/tags`_ for valid values for ``<tag>``)


.. |downloads_liftover| image:: https://img.shields.io/conda/dn/bioconda/liftover.svg?style=flat
   :target: https://anaconda.org/bioconda/liftover
   :alt:   (downloads)
.. |docker_liftover| image:: https://quay.io/repository/biocontainers/liftover/status
   :target: https://quay.io/repository/biocontainers/liftover
.. _`liftover/tags`: https://quay.io/repository/biocontainers/liftover?tab=tags


.. raw:: html

    <script>
        var package = "liftover";
        var versions = ["1.3.1","1.3.1","1.3.0","1.2.2","1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/liftover/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/liftover/README.html