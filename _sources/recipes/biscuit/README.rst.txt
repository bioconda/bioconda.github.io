:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biscuit'
.. highlight: bash

biscuit
=======

.. conda:recipe:: biscuit
   :replaces_section_title:
   :noindex:

   A utility for analyzing sodium bisulfite conversion\-based DNA methylation\/modification data.

   :homepage: https://github.com/huishenlab/biscuit
   :documentation: https://huishenlab.github.io/biscuit
   
   :license: MIT / MIT
   :recipe: /`biscuit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biscuit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biscuit/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkae097`, biotools: :biotools:`biscuit`

   


.. conda:package:: biscuit

   |downloads_biscuit| |docker_biscuit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.1.20250415-0</code>,  <code>1.6.0.20241216-1</code>,  <code>1.6.0.20241216-0</code>,  <code>1.5.0.20240506-1</code>,  <code>1.5.0.20240506-0</code>,  <code>1.4.0.20240108-0</code>,  <code>1.3.0.20231027-0</code>,  <code>1.2.1.20230601-2</code>,  <code>1.2.1.20230601-0</code>,  </span></summary>
      

      ``1.6.1.20250415-0``,  ``1.6.0.20241216-1``,  ``1.6.0.20241216-0``,  ``1.5.0.20240506-1``,  ``1.5.0.20240506-0``,  ``1.4.0.20240108-0``,  ``1.3.0.20231027-0``,  ``1.2.1.20230601-2``,  ``1.2.1.20230601-0``,  ``1.2.0.20230130-2``,  ``1.2.0.20230130-1``,  ``1.2.0.20230130-0``,  ``1.1.0.20220707-1``,  ``1.1.0.20220707-0``,  ``1.0.2.20220113-1``,  ``1.0.2.20220113-0``,  ``1.0.1.20211018-1``,  ``1.0.1.20211018-0``,  ``1.0.0.20210917-0``,  ``0.3.16.20200420-4``,  ``0.3.16.20200420-3``,  ``0.3.16.20200420-2``,  ``0.3.16.20200420-1``,  ``0.3.16.20200420-0``,  ``0.3.15.20200318-0``

      
      .. raw:: html

         </details>
      

   
   :depends libcurl: ``>=8.13.0,<9.0a0``
   :depends libgcc: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends ncurses: ``>=6.5,<7.0a0``
   :depends perl: 
   :depends pthread-stubs: 
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

      mamba install biscuit

   and update with::

      mamba update biscuit

  To create a new environment, run::

      mamba create --name myenvname biscuit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biscuit:<tag>

   (see `biscuit/tags`_ for valid values for ``<tag>``)


.. |downloads_biscuit| image:: https://img.shields.io/conda/dn/bioconda/biscuit.svg?style=flat
   :target: https://anaconda.org/bioconda/biscuit
   :alt:   (downloads)
.. |docker_biscuit| image:: https://quay.io/repository/biocontainers/biscuit/status
   :target: https://quay.io/repository/biocontainers/biscuit
.. _`biscuit/tags`: https://quay.io/repository/biocontainers/biscuit?tab=tags


.. raw:: html

    <script>
        var package = "biscuit";
        var versions = ["1.6.1.20250415","1.6.0.20241216","1.6.0.20241216","1.5.0.20240506","1.5.0.20240506"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biscuit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biscuit/README.html