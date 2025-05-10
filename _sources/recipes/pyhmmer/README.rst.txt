:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyhmmer'
.. highlight: bash

pyhmmer
=======

.. conda:recipe:: pyhmmer
   :replaces_section_title:
   :noindex:

   Cython bindings and Python interface to HMMER3.

   :homepage: https://github.com/althonos/pyhmmer
   :documentation: https://pyhmmer.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`pyhmmer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyhmmer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyhmmer/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btad214`, biotools: :biotools:`pyhmmer`

   


.. conda:package:: pyhmmer

   |downloads_pyhmmer| |docker_pyhmmer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.11.1-0</code>,  <code>0.11.0-1</code>,  <code>0.11.0-0</code>,  <code>0.10.15-1</code>,  <code>0.10.15-0</code>,  <code>0.10.14-1</code>,  <code>0.10.14-0</code>,  <code>0.10.13-0</code>,  <code>0.10.12-1</code>,  </span></summary>
      

      ``0.11.1-0``,  ``0.11.0-1``,  ``0.11.0-0``,  ``0.10.15-1``,  ``0.10.15-0``,  ``0.10.14-1``,  ``0.10.14-0``,  ``0.10.13-0``,  ``0.10.12-1``,  ``0.10.12-0``,  ``0.10.11-0``,  ``0.10.10-1``,  ``0.10.10-0``,  ``0.10.9-0``,  ``0.10.8-0``,  ``0.10.7-0``,  ``0.10.6-0``,  ``0.10.5-0``,  ``0.10.4-0``,  ``0.10.3-0``,  ``0.10.2-0``,  ``0.10.1-0``,  ``0.10.0-0``,  ``0.9.0-0``,  ``0.8.2-0``,  ``0.8.1-4``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.8.0-3``,  ``0.8.0-1``,  ``0.8.0-0``,  ``0.7.2-0``,  ``0.7.1-1``,  ``0.7.1-0``,  ``0.6.3-0``,  ``0.6.2-1``,  ``0.6.2-0``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.11-1``,  ``0.4.11-0``,  ``0.4.10-0``,  ``0.4.9-0``,  ``0.4.8-0``,  ``0.4.7-0``,  ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.3.1-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.1.4-0``,  ``0.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends psutil: ``>=6.0,<8.0``
   :depends python: ``>=3.9,<3.10.0a0``
   :depends python_abi: ``3.9.* *_cp39``
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

      mamba install pyhmmer

   and update with::

      mamba update pyhmmer

  To create a new environment, run::

      mamba create --name myenvname pyhmmer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyhmmer:<tag>

   (see `pyhmmer/tags`_ for valid values for ``<tag>``)


.. |downloads_pyhmmer| image:: https://img.shields.io/conda/dn/bioconda/pyhmmer.svg?style=flat
   :target: https://anaconda.org/bioconda/pyhmmer
   :alt:   (downloads)
.. |docker_pyhmmer| image:: https://quay.io/repository/biocontainers/pyhmmer/status
   :target: https://quay.io/repository/biocontainers/pyhmmer
.. _`pyhmmer/tags`: https://quay.io/repository/biocontainers/pyhmmer?tab=tags


.. raw:: html

    <script>
        var package = "pyhmmer";
        var versions = ["0.11.1","0.11.0","0.11.0","0.10.15","0.10.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyhmmer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyhmmer/README.html