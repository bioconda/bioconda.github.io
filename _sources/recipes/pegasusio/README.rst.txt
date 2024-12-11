:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pegasusio'
.. highlight: bash

pegasusio
=========

.. conda:recipe:: pegasusio
   :replaces_section_title:
   :noindex:

   PegasusIO is the IO package for Pegasus.

   :homepage: https://github.com/lilab-bcb/pegasusio
   :documentation: https://pegasusio.readthedocs.io
   
   :license: BSD / BSD-3-Clause
   :recipe: /`pegasusio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pegasusio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pegasusio/meta.yaml>`_

   


.. conda:package:: pegasusio

   |downloads_pegasusio| |docker_pegasusio|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.1-2</code>,  <code>0.9.1-1</code>,  <code>0.9.1-0</code>,  <code>0.9.0-2</code>,  <code>0.9.0-1</code>,  <code>0.9.0-0</code>,  <code>0.8.1-0</code>,  <code>0.8.0-2</code>,  <code>0.8.0-1</code>,  </span></summary>
      

      ``0.9.1-2``,  ``0.9.1-1``,  ``0.9.1-0``,  ``0.9.0-2``,  ``0.9.0-1``,  ``0.9.0-0``,  ``0.8.1-0``,  ``0.8.0-2``,  ``0.8.0-1``,  ``0.8.0-0``,  ``0.7.1-1``,  ``0.7.1-0``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.5.1.post1-2``,  ``0.5.1.post1-1``,  ``0.5.1.post1-0``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0.post1-0``,  ``0.4.0-0``,  ``0.3.1.post2-0``,  ``0.3.1.post1-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.14-0``,  ``0.2.13-0``,  ``0.2.12.post1-0``,  ``0.2.12-0``,  ``0.2.11-0``,  ``0.2.10-1``,  ``0.2.10-0``,  ``0.2.9-0``,  ``0.2.8.post2-0``

      
      .. raw:: html

         </details>
      

   
   :depends anndata: ``>=0.7``
   :depends docopt: 
   :depends h5py: ``>=3.0.0``
   :depends libgcc: ``>=13``
   :depends loompy: 
   :depends natsort: 
   :depends numpy: 
   :depends pandas: ``>=1.2.0``
   :depends pillow: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scipy: 
   :depends zarr: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install pegasusio

   and update with::

      mamba update pegasusio

  To create a new environment, run::

      mamba create --name myenvname pegasusio

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pegasusio:<tag>

   (see `pegasusio/tags`_ for valid values for ``<tag>``)


.. |downloads_pegasusio| image:: https://img.shields.io/conda/dn/bioconda/pegasusio.svg?style=flat
   :target: https://anaconda.org/bioconda/pegasusio
   :alt:   (downloads)
.. |docker_pegasusio| image:: https://quay.io/repository/biocontainers/pegasusio/status
   :target: https://quay.io/repository/biocontainers/pegasusio
.. _`pegasusio/tags`: https://quay.io/repository/biocontainers/pegasusio?tab=tags


.. raw:: html

    <script>
        var package = "pegasusio";
        var versions = ["0.9.1","0.9.1","0.9.1","0.9.0","0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pegasusio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pegasusio/README.html