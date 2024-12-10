:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyfastani'
.. highlight: bash

pyfastani
=========

.. conda:recipe:: pyfastani
   :replaces_section_title:
   :noindex:

   Cython bindings and Python interface to FastANI\, a method for fast whole\-genome similarity estimation.

   :homepage: https://github.com/althonos/pyfastani
   :documentation: https://pyfastani.readthedocs.org
   
   :license: MIT / MIT
   :recipe: /`pyfastani <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyfastani>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyfastani/meta.yaml>`_

   


.. conda:package:: pyfastani

   |downloads_pyfastani| |docker_pyfastani|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.0-1</code>,  <code>0.6.0-0</code>,  <code>0.5.1-1</code>,  <code>0.5.1-0</code>,  <code>0.4.1-3</code>,  <code>0.4.1-1</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.1-0</code>,  </span></summary>
      

      ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.4.1-3``,  ``0.4.1-1``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.1-0``,  ``0.3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install pyfastani

   and update with::

      mamba update pyfastani

  To create a new environment, run::

      mamba create --name myenvname pyfastani

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyfastani:<tag>

   (see `pyfastani/tags`_ for valid values for ``<tag>``)


.. |downloads_pyfastani| image:: https://img.shields.io/conda/dn/bioconda/pyfastani.svg?style=flat
   :target: https://anaconda.org/bioconda/pyfastani
   :alt:   (downloads)
.. |docker_pyfastani| image:: https://quay.io/repository/biocontainers/pyfastani/status
   :target: https://quay.io/repository/biocontainers/pyfastani
.. _`pyfastani/tags`: https://quay.io/repository/biocontainers/pyfastani?tab=tags


.. raw:: html

    <script>
        var package = "pyfastani";
        var versions = ["0.6.0","0.6.0","0.5.1","0.5.1","0.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyfastani/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyfastani/README.html