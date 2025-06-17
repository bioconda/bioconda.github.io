:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scoring-matrices'
.. highlight: bash

scoring-matrices
================

.. conda:recipe:: scoring-matrices
   :replaces_section_title:
   :noindex:

   Dependency free\, Cython\-compatible scoring matrices to use with biological sequences.

   :homepage: https://github.com/althonos/scoring-matrices
   :documentation: https://scoring-matrices.readthedocs.org
   
   :license: MIT / MIT
   :recipe: /`scoring-matrices <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scoring-matrices>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scoring-matrices/meta.yaml>`_

   


.. conda:package:: scoring-matrices

   |downloads_scoring-matrices| |docker_scoring-matrices|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.2-0</code>,  <code>0.3.1-0</code>,  <code>0.3.0-1</code>,  <code>0.3.0-0</code>,  <code>0.2.2-1</code>,  <code>0.2.2-0</code>,  <code>0.2.1-1</code>,  <code>0.2.1-0</code>,  <code>0.2.0-1</code>,  </span></summary>
      

      ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.2-1``,  ``0.2.2-0``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.2.0-1``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
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

      mamba install scoring-matrices

   and update with::

      mamba update scoring-matrices

  To create a new environment, run::

      mamba create --name myenvname scoring-matrices

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scoring-matrices:<tag>

   (see `scoring-matrices/tags`_ for valid values for ``<tag>``)


.. |downloads_scoring-matrices| image:: https://img.shields.io/conda/dn/bioconda/scoring-matrices.svg?style=flat
   :target: https://anaconda.org/bioconda/scoring-matrices
   :alt:   (downloads)
.. |docker_scoring-matrices| image:: https://quay.io/repository/biocontainers/scoring-matrices/status
   :target: https://quay.io/repository/biocontainers/scoring-matrices
.. _`scoring-matrices/tags`: https://quay.io/repository/biocontainers/scoring-matrices?tab=tags


.. raw:: html

    <script>
        var package = "scoring-matrices";
        var versions = ["0.3.2","0.3.1","0.3.0","0.3.0","0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scoring-matrices/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scoring-matrices/README.html