:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msamtools'
.. highlight: bash

msamtools
=========

.. conda:recipe:: msamtools
   :replaces_section_title:
   :noindex:

   microbiome\-related extension to samtools

   :homepage: https://github.com/arumugamlab/msamtools
   :license: MIT
   :recipe: /`msamtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msamtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msamtools/meta.yaml>`_

   


.. conda:package:: msamtools

   |downloads_msamtools| |docker_msamtools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.3-1</code>,  <code>1.1.3-0</code>,  <code>1.1.2-2</code>,  <code>1.1.2-1</code>,  <code>1.1.2-0</code>,  <code>1.1.1-0</code>,  <code>1.1.0-1</code>,  <code>1.1.0-0</code>,  <code>1.0.3-1</code>,  </span></summary>
      

      ``1.1.3-1``,  ``1.1.3-0``,  ``1.1.2-2``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends argtable2: 
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends zlib: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install msamtools

   and update with::

      mamba update msamtools

  To create a new environment, run::

      mamba create --name myenvname msamtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/msamtools:<tag>

   (see `msamtools/tags`_ for valid values for ``<tag>``)


.. |downloads_msamtools| image:: https://img.shields.io/conda/dn/bioconda/msamtools.svg?style=flat
   :target: https://anaconda.org/bioconda/msamtools
   :alt:   (downloads)
.. |docker_msamtools| image:: https://quay.io/repository/biocontainers/msamtools/status
   :target: https://quay.io/repository/biocontainers/msamtools
.. _`msamtools/tags`: https://quay.io/repository/biocontainers/msamtools?tab=tags


.. raw:: html

    <script>
        var package = "msamtools";
        var versions = ["1.1.3","1.1.3","1.1.2","1.1.2","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msamtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msamtools/README.html