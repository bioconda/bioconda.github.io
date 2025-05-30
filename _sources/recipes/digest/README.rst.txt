:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'digest'
.. highlight: bash

digest
======

.. conda:recipe:: digest
   :replaces_section_title:
   :noindex:

   Fast\, multi\-use k\-mer sub\-sampling library

   :homepage: https://github.com/VeryAmazed/digest
   :license: MIT
   :recipe: /`digest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/digest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/digest/meta.yaml>`_

   A C\+\+ library that supports various sub\-sampling schemes for k\-mers in DNA sequences.
   Includes Python bindings that allow users to run functions from the C\+\+ library in Python.



.. conda:package:: digest

   |downloads_digest| |docker_digest|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.0-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends pybind11: 
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

      mamba install digest

   and update with::

      mamba update digest

  To create a new environment, run::

      mamba create --name myenvname digest

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/digest:<tag>

   (see `digest/tags`_ for valid values for ``<tag>``)


.. |downloads_digest| image:: https://img.shields.io/conda/dn/bioconda/digest.svg?style=flat
   :target: https://anaconda.org/bioconda/digest
   :alt:   (downloads)
.. |docker_digest| image:: https://quay.io/repository/biocontainers/digest/status
   :target: https://quay.io/repository/biocontainers/digest
.. _`digest/tags`: https://quay.io/repository/biocontainers/digest?tab=tags


.. raw:: html

    <script>
        var package = "digest";
        var versions = ["0.3.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/digest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/digest/README.html