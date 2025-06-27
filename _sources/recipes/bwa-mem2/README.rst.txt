:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bwa-mem2'
.. highlight: bash

bwa-mem2
========

.. conda:recipe:: bwa-mem2
   :replaces_section_title:
   :noindex:

   The next version of bwa\-mem

   :homepage: https://github.com/bwa-mem2/bwa-mem2
   :license: MIT
   :recipe: /`bwa-mem2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwa-mem2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwa-mem2/meta.yaml>`_
   :links: doi: :doi:`10.1109/IPDPS.2019.00041`

   


.. conda:package:: bwa-mem2

   |downloads_bwa-mem2| |docker_bwa-mem2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.1-8</code>,  <code>2.2.1-7</code>,  <code>2.2.1-6</code>,  <code>2.2.1-5</code>,  <code>2.2.1-4</code>,  <code>2.2.1-3</code>,  <code>2.2.1-2</code>,  <code>2.2.1-1</code>,  <code>2.2.1-0</code>,  </span></summary>
      

      ``2.2.1-8``,  ``2.2.1-7``,  ``2.2.1-6``,  ``2.2.1-5``,  ``2.2.1-4``,  ``2.2.1-3``,  ``2.2.1-2``,  ``2.2.1-1``,  ``2.2.1-0``,  ``2.2-0``,  ``2.1-0``,  ``2.0-1``,  ``2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
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

      mamba install bwa-mem2

   and update with::

      mamba update bwa-mem2

  To create a new environment, run::

      mamba create --name myenvname bwa-mem2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bwa-mem2:<tag>

   (see `bwa-mem2/tags`_ for valid values for ``<tag>``)


.. |downloads_bwa-mem2| image:: https://img.shields.io/conda/dn/bioconda/bwa-mem2.svg?style=flat
   :target: https://anaconda.org/bioconda/bwa-mem2
   :alt:   (downloads)
.. |docker_bwa-mem2| image:: https://quay.io/repository/biocontainers/bwa-mem2/status
   :target: https://quay.io/repository/biocontainers/bwa-mem2
.. _`bwa-mem2/tags`: https://quay.io/repository/biocontainers/bwa-mem2?tab=tags


.. raw:: html

    <script>
        var package = "bwa-mem2";
        var versions = ["2.2.1","2.2.1","2.2.1","2.2.1","2.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bwa-mem2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bwa-mem2/README.html