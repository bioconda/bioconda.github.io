:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'goldrush'
.. highlight: bash

goldrush
========

.. conda:recipe:: goldrush
   :replaces_section_title:
   :noindex:

   Linear\-time de novo long read assembler\, from the Bioinformatics Technology Lab

   :homepage: https://github.com/bcgsc/goldrush
   :license: GPL-3.0
   :recipe: /`goldrush <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/goldrush>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/goldrush/meta.yaml>`_

   


.. conda:package:: goldrush

   |downloads_goldrush| |docker_goldrush|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.2-0</code>,  <code>1.1.1-2</code>,  <code>1.1.1-1</code>,  <code>1.1.1-0</code>,  <code>1.1.0-1</code>,  <code>1.1.0-0</code>,  <code>1.0.3-1</code>,  <code>1.0.3-0</code>,  <code>1.0.2-1</code>,  </span></summary>
      

      ``1.1.2-0``,  ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.9.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends bc: 
   :depends btllib: ``>=1.6.2``
   :depends btllib: ``>=1.7.2,<2.0a0``
   :depends gperftools: 
   :depends libdivsufsort: ``>=2.0.2,<2.1.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends make: 
   :depends minimap2: 
   :depends ntlink: ``>=1.3.0``
   :depends python: ``>=3.8,<3.9.0a0``
   :depends python_abi: ``3.8.* *_cp38``
   :depends tigmint: ``>=1.2.6``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install goldrush

   and update with::

      mamba update goldrush

  To create a new environment, run::

      mamba create --name myenvname goldrush

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/goldrush:<tag>

   (see `goldrush/tags`_ for valid values for ``<tag>``)


.. |downloads_goldrush| image:: https://img.shields.io/conda/dn/bioconda/goldrush.svg?style=flat
   :target: https://anaconda.org/bioconda/goldrush
   :alt:   (downloads)
.. |docker_goldrush| image:: https://quay.io/repository/biocontainers/goldrush/status
   :target: https://quay.io/repository/biocontainers/goldrush
.. _`goldrush/tags`: https://quay.io/repository/biocontainers/goldrush?tab=tags


.. raw:: html

    <script>
        var package = "goldrush";
        var versions = ["1.1.2","1.1.1","1.1.1","1.1.1","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/goldrush/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/goldrush/README.html