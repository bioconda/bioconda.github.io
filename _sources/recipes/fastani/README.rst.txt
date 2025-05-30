:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastani'
.. highlight: bash

fastani
=======

.. conda:recipe:: fastani
   :replaces_section_title:
   :noindex:

   FastANI is developed for fast alignment\-free computation of whole\-genome Average Nucleotide Identity \(ANI\).

   :homepage: https://github.com/ParBLiSS/FastANI
   :documentation: https://github.com/ParBLiSS/FastANI/blob/v1.34/README.md
   
   :license: APACHE / Apache-2.0
   :recipe: /`fastani <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastani>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastani/meta.yaml>`_
   :links: biotools: :biotools:`fastani`, usegalaxy-eu: :usegalaxy-eu:`fastani`, doi: :doi:`10.1038/s41467-018-07641-9`

   


.. conda:package:: fastani

   |downloads_fastani| |docker_fastani|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34-6</code>,  <code>1.34-5</code>,  <code>1.34-4</code>,  <code>1.34-3</code>,  <code>1.34-2</code>,  <code>1.34-1</code>,  <code>1.34-0</code>,  <code>1.33-3</code>,  <code>1.33-2</code>,  </span></summary>
      

      ``1.34-6``,  ``1.34-5``,  ``1.34-4``,  ``1.34-3``,  ``1.34-2``,  ``1.34-1``,  ``1.34-0``,  ``1.33-3``,  ``1.33-2``,  ``1.33-1``,  ``1.33-0``,  ``1.32-0``,  ``1.31-0``,  ``1.3-0``,  ``1.2-0``,  ``1.1-1``,  ``1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libgcc: ``>=13``
   :depends libgomp: 
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install fastani

   and update with::

      mamba update fastani

  To create a new environment, run::

      mamba create --name myenvname fastani

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastani:<tag>

   (see `fastani/tags`_ for valid values for ``<tag>``)


.. |downloads_fastani| image:: https://img.shields.io/conda/dn/bioconda/fastani.svg?style=flat
   :target: https://anaconda.org/bioconda/fastani
   :alt:   (downloads)
.. |docker_fastani| image:: https://quay.io/repository/biocontainers/fastani/status
   :target: https://quay.io/repository/biocontainers/fastani
.. _`fastani/tags`: https://quay.io/repository/biocontainers/fastani?tab=tags


.. raw:: html

    <script>
        var package = "fastani";
        var versions = ["1.34","1.34","1.34","1.34","1.34"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastani/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastani/README.html