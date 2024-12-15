:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minimap2'
.. highlight: bash

minimap2
========

.. conda:recipe:: minimap2
   :replaces_section_title:
   :noindex:

   A versatile pairwise aligner for genomic and spliced nucleotide sequences.

   :homepage: https://github.com/lh3/minimap2
   :documentation: https://lh3.github.io/minimap2/minimap2.html
   
   :license: MIT / MIT
   :recipe: /`minimap2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minimap2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minimap2/meta.yaml>`_
   :links: biotools: :biotools:`minimap2`, usegalaxy-eu: :usegalaxy-eu:`minimap2`, doi: :doi:`10.1093/bioinformatics/bty191`

   


.. conda:package:: minimap2

   |downloads_minimap2| |docker_minimap2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.28-4</code>,  <code>2.28-3</code>,  <code>2.28-2</code>,  <code>2.28-1</code>,  <code>2.28-0</code>,  <code>2.27-1</code>,  <code>2.27-0</code>,  <code>2.26-2</code>,  <code>2.26-1</code>,  </span></summary>
      

      ``2.28-4``,  ``2.28-3``,  ``2.28-2``,  ``2.28-1``,  ``2.28-0``,  ``2.27-1``,  ``2.27-0``,  ``2.26-2``,  ``2.26-1``,  ``2.26-0``,  ``2.25-0``,  ``2.24-1``,  ``2.24-0``,  ``2.23-0``,  ``2.22-0``,  ``2.21-0``,  ``2.20-0``,  ``2.19-0``,  ``2.18-0``,  ``2.17-4``,  ``2.17-3``,  ``2.17-2``,  ``2.17-1``,  ``2.17-0``,  ``2.16-1``,  ``2.16-0``,  ``2.15-1``,  ``2.15-0``,  ``2.14-0``,  ``2.13-0``,  ``2.12-0``,  ``2.11-0``,  ``2.10-1``,  ``2.9-1``,  ``2.8-1``,  ``2.8-0``,  ``2.7-1``,  ``2.7-0``,  ``2.6.1-0``,  ``2.6-0``,  ``2.5-0``,  ``2.4-0``,  ``2.3-0``,  ``2.1.1-0``,  ``2.1.r311-0``,  ``2.0.r191-0``

      
      .. raw:: html

         </details>
      

   
   :depends k8: 
   :depends libgcc: ``>=13``
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

      mamba install minimap2

   and update with::

      mamba update minimap2

  To create a new environment, run::

      mamba create --name myenvname minimap2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/minimap2:<tag>

   (see `minimap2/tags`_ for valid values for ``<tag>``)


.. |downloads_minimap2| image:: https://img.shields.io/conda/dn/bioconda/minimap2.svg?style=flat
   :target: https://anaconda.org/bioconda/minimap2
   :alt:   (downloads)
.. |docker_minimap2| image:: https://quay.io/repository/biocontainers/minimap2/status
   :target: https://quay.io/repository/biocontainers/minimap2
.. _`minimap2/tags`: https://quay.io/repository/biocontainers/minimap2?tab=tags


.. raw:: html

    <script>
        var package = "minimap2";
        var versions = ["2.28","2.28","2.28","2.28","2.28"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minimap2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minimap2/README.html