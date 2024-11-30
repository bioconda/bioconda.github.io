:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cmappy'
.. highlight: bash

cmappy
======

.. conda:recipe:: cmappy
   :replaces_section_title:
   :noindex:

   Assorted tools for interacting with .gct\, .gctx\, .grp\, and .gmt files as well as other Connectivity Map \(Broad Institute\) data\/tools

   :homepage: https://github.com/cmap/cmapPy
   :license: BSD / BSD 3-clause
   :recipe: /`cmappy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmappy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmappy/meta.yaml>`_

   


.. conda:package:: cmappy

   |downloads_cmappy| |docker_cmappy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.0.1-7</code>,  <code>4.0.1-6</code>,  <code>4.0.1-5</code>,  <code>4.0.1-4</code>,  <code>4.0.1-3</code>,  <code>4.0.1-2</code>,  <code>4.0.1-1</code>,  <code>4.0.1-0</code>,  <code>3.3.3-0</code>,  </span></summary>
      

      ``4.0.1-7``,  ``4.0.1-6``,  ``4.0.1-5``,  ``4.0.1-4``,  ``4.0.1-3``,  ``4.0.1-2``,  ``4.0.1-1``,  ``4.0.1-0``,  ``3.3.3-0``,  ``3.3.0-0``,  ``3.2.0-0``,  ``3.1.1-0``,  ``3.0.0-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.0-0``,  ``2.0.1-0``,  ``1.1.1-0``,  ``1.0.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends h5py: ``>=2.6.0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends numpy: ``>=1.11.2``
   :depends pandas: ``>=0.18``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends requests: ``>=2.13.0``
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

      mamba install cmappy

   and update with::

      mamba update cmappy

  To create a new environment, run::

      mamba create --name myenvname cmappy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cmappy:<tag>

   (see `cmappy/tags`_ for valid values for ``<tag>``)


.. |downloads_cmappy| image:: https://img.shields.io/conda/dn/bioconda/cmappy.svg?style=flat
   :target: https://anaconda.org/bioconda/cmappy
   :alt:   (downloads)
.. |docker_cmappy| image:: https://quay.io/repository/biocontainers/cmappy/status
   :target: https://quay.io/repository/biocontainers/cmappy
.. _`cmappy/tags`: https://quay.io/repository/biocontainers/cmappy?tab=tags


.. raw:: html

    <script>
        var package = "cmappy";
        var versions = ["4.0.1","4.0.1","4.0.1","4.0.1","4.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cmappy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cmappy/README.html