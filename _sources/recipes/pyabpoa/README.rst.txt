:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyabpoa'
.. highlight: bash

pyabpoa
=======

.. conda:recipe:: pyabpoa
   :replaces_section_title:
   :noindex:

   pyabpoa\: SIMD\-based partial order alignment using adaptive band

   :homepage: https://github.com/yangao07/abPOA
   :license: MIT / MIT
   :recipe: /`pyabpoa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyabpoa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyabpoa/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btaa963`, biotools: :biotools:`abpoa`

   


.. conda:package:: pyabpoa

   |downloads_pyabpoa| |docker_pyabpoa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.5-0</code>,  <code>1.5.4-0</code>,  <code>1.5.3-1</code>,  <code>1.5.3-0</code>,  <code>1.5.2-1</code>,  <code>1.5.2-0</code>,  <code>1.5.1-2</code>,  <code>1.5.1-1</code>,  <code>1.5.1-0</code>,  </span></summary>
      

      ``1.5.5-0``,  ``1.5.4-0``,  ``1.5.3-1``,  ``1.5.3-0``,  ``1.5.2-1``,  ``1.5.2-0``,  ``1.5.1-2``,  ``1.5.1-1``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-2``,  ``1.4.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install pyabpoa

   and update with::

      mamba update pyabpoa

  To create a new environment, run::

      mamba create --name myenvname pyabpoa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyabpoa:<tag>

   (see `pyabpoa/tags`_ for valid values for ``<tag>``)


.. |downloads_pyabpoa| image:: https://img.shields.io/conda/dn/bioconda/pyabpoa.svg?style=flat
   :target: https://anaconda.org/bioconda/pyabpoa
   :alt:   (downloads)
.. |docker_pyabpoa| image:: https://quay.io/repository/biocontainers/pyabpoa/status
   :target: https://quay.io/repository/biocontainers/pyabpoa
.. _`pyabpoa/tags`: https://quay.io/repository/biocontainers/pyabpoa?tab=tags


.. raw:: html

    <script>
        var package = "pyabpoa";
        var versions = ["1.5.5","1.5.4","1.5.3","1.5.3","1.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyabpoa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyabpoa/README.html