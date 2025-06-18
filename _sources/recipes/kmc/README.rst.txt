:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kmc'
.. highlight: bash

kmc
===

.. conda:recipe:: kmc
   :replaces_section_title:
   :noindex:

   Tools for efficient k\-mer counting and filtering of reads based on k\-mer content.

   :homepage: https://github.com/refresh-bio/kmc
   :documentation: https://github.com/refresh-bio/KMC/blob/v3.2.4/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`kmc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmc/meta.yaml>`_
   :links: biotools: :biotools:`kmc`, doi: :doi:`10.1093/bioinformatics/btx304`, doi: :doi:`10.1093/bioinformatics/btv022`, doi: :doi:`10.1186/1471-2105-14-160`

   KMC is a utility designed for counting k\-mers \(sequences
   of consecutive k symbols\) in a set of DNA sequences. KMC tools allow performing various operations on k\-mers sets.



.. conda:package:: kmc

   |downloads_kmc| |docker_kmc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.4-4</code>,  <code>3.2.4-3</code>,  <code>3.2.4-2</code>,  <code>3.2.4-1</code>,  <code>3.2.4-0</code>,  <code>3.2.1-3</code>,  <code>3.2.1-2</code>,  <code>3.2.1-1</code>,  <code>3.2.1-0</code>,  </span></summary>
      

      ``3.2.4-4``,  ``3.2.4-3``,  ``3.2.4-2``,  ``3.2.4-1``,  ``3.2.4-0``,  ``3.2.1-3``,  ``3.2.1-2``,  ``3.2.1-1``,  ``3.2.1-0``,  ``3.1.2rc1-0``,  ``3.1.1-1``,  ``3.1.1-0``,  ``3.1.1rc1-2``,  ``3.1.1rc1-1``,  ``3.1.1rc1-0``,  ``3.1.0-0``,  ``3.0.1-2``,  ``3.0.1-1``,  ``3.0.1-0``,  ``3.0.0-3``,  ``3.0.0-2``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.3.0-3``,  ``2.3.0-2``,  ``2.3.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends python: ``<3.11``
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

      mamba install kmc

   and update with::

      mamba update kmc

  To create a new environment, run::

      mamba create --name myenvname kmc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kmc:<tag>

   (see `kmc/tags`_ for valid values for ``<tag>``)


.. |downloads_kmc| image:: https://img.shields.io/conda/dn/bioconda/kmc.svg?style=flat
   :target: https://anaconda.org/bioconda/kmc
   :alt:   (downloads)
.. |docker_kmc| image:: https://quay.io/repository/biocontainers/kmc/status
   :target: https://quay.io/repository/biocontainers/kmc
.. _`kmc/tags`: https://quay.io/repository/biocontainers/kmc?tab=tags


.. raw:: html

    <script>
        var package = "kmc";
        var versions = ["3.2.4","3.2.4","3.2.4","3.2.4","3.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kmc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kmc/README.html