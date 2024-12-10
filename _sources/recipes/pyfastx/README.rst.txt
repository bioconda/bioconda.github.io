:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyfastx'
.. highlight: bash

pyfastx
=======

.. conda:recipe:: pyfastx
   :replaces_section_title:
   :noindex:

   pyfastx is a python module for fast random
   access to sequences from plain and gzipped
   FASTA\/Q file


   :homepage: https://github.com/lmdu/pyfastx
   :license: MIT / MIT
   :recipe: /`pyfastx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyfastx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyfastx/meta.yaml>`_

   


.. conda:package:: pyfastx

   |downloads_pyfastx| |docker_pyfastx|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.0-4</code>,  <code>2.1.0-3</code>,  <code>2.1.0-2</code>,  <code>2.1.0-1</code>,  <code>2.1.0-0</code>,  <code>2.0.2-0</code>,  <code>2.0.1-0</code>,  <code>2.0.0-0</code>,  <code>1.1.0-3</code>,  </span></summary>
      

      ``2.1.0-4``,  ``2.1.0-3``,  ``2.1.0-2``,  ``2.1.0-1``,  ``2.1.0-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.1.0-3``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.1-0``,  ``0.9.1-0``,  ``0.8.4-1``,  ``0.8.4-0``,  ``0.8.3-0``,  ``0.8.2-1``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.7.0-0``,  ``0.6.16-0``,  ``0.6.15-0``,  ``0.6.14-0``,  ``0.6.13-0``,  ``0.6.12-0``,  ``0.6.11-0``,  ``0.6.10-0``,  ``0.6.9-0``,  ``0.6.8-0``,  ``0.6.7-0``,  ``0.6.6-0``,  ``0.6.5-0``,  ``0.6.4-0``

      
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

      mamba install pyfastx

   and update with::

      mamba update pyfastx

  To create a new environment, run::

      mamba create --name myenvname pyfastx

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyfastx:<tag>

   (see `pyfastx/tags`_ for valid values for ``<tag>``)


.. |downloads_pyfastx| image:: https://img.shields.io/conda/dn/bioconda/pyfastx.svg?style=flat
   :target: https://anaconda.org/bioconda/pyfastx
   :alt:   (downloads)
.. |docker_pyfastx| image:: https://quay.io/repository/biocontainers/pyfastx/status
   :target: https://quay.io/repository/biocontainers/pyfastx
.. _`pyfastx/tags`: https://quay.io/repository/biocontainers/pyfastx?tab=tags


.. raw:: html

    <script>
        var package = "pyfastx";
        var versions = ["2.1.0","2.1.0","2.1.0","2.1.0","2.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyfastx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyfastx/README.html