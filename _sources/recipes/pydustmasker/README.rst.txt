:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pydustmasker'
.. highlight: bash

pydustmasker
============

.. conda:recipe:: pydustmasker
   :replaces_section_title:
   :noindex:

   Python library for identification and masking of low\-complexity regions in nucleotide sequences.


   :homepage: https://github.com/apcamargo/pydustmasker
   :license: MIT / MIT
   :recipe: /`pydustmasker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydustmasker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydustmasker/meta.yaml>`_

   


.. conda:package:: pydustmasker

   |downloads_pydustmasker| |docker_pydustmasker|

   :versions:
      
      

      ``1.0.2-0``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends __glibc: ``>=2.17,<3.0.a0``
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

      mamba install pydustmasker

   and update with::

      mamba update pydustmasker

  To create a new environment, run::

      mamba create --name myenvname pydustmasker

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pydustmasker:<tag>

   (see `pydustmasker/tags`_ for valid values for ``<tag>``)


.. |downloads_pydustmasker| image:: https://img.shields.io/conda/dn/bioconda/pydustmasker.svg?style=flat
   :target: https://anaconda.org/bioconda/pydustmasker
   :alt:   (downloads)
.. |docker_pydustmasker| image:: https://quay.io/repository/biocontainers/pydustmasker/status
   :target: https://quay.io/repository/biocontainers/pydustmasker
.. _`pydustmasker/tags`: https://quay.io/repository/biocontainers/pydustmasker?tab=tags


.. raw:: html

    <script>
        var package = "pydustmasker";
        var versions = ["1.0.2","1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pydustmasker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pydustmasker/README.html