:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fasttree'
.. highlight: bash

fasttree
========

.. conda:recipe:: fasttree
   :replaces_section_title:
   :noindex:

   FastTree infers approximately\-maximum\-likelihood phylogenetic trees from alignments of nucleotide or protein sequences.

   :homepage: https://morgannprice.github.io/fasttree
   :developer docs: https://github.com/morgannprice/fasttree
   :license: GPL / GPL-2.0-or-later
   :recipe: /`fasttree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fasttree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fasttree/meta.yaml>`_
   :links: biotools: :biotools:`fasttree`, usegalaxy-eu: :usegalaxy-eu:`fasttree`, doi: :doi:`10.1093/molbev/msp077`

   


.. conda:package:: fasttree

   |downloads_fasttree| |docker_fasttree|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.0-1</code>,  <code>2.2.0-0</code>,  <code>2.1.11-5</code>,  <code>2.1.11-4</code>,  <code>2.1.11-3</code>,  <code>2.1.11-2</code>,  <code>2.1.11-1</code>,  <code>2.1.11-0</code>,  <code>2.1.10-6</code>,  </span></summary>
      

      ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.11-5``,  ``2.1.11-4``,  ``2.1.11-3``,  ``2.1.11-2``,  ``2.1.11-1``,  ``2.1.11-0``,  ``2.1.10-6``,  ``2.1.10-5``,  ``2.1.10-4``,  ``2.1.10-3``,  ``2.1.10-2``,  ``2.1.10-0``,  ``2.1.9-2``,  ``2.1.9-1``,  ``2.1.9-0``,  ``2.1.8-9``,  ``2.1.8-8``,  ``2.1.8-7``,  ``2.1.8-6``,  ``2.1.8-5``,  ``2.1.8-4``,  ``2.1.8-2``,  ``2.1.8-1``,  ``2.1.3-7``,  ``2.1.3-6``,  ``2.1.3-5``,  ``2.1.3-4``,  ``2.1.3-3``,  ``2.1.3-2``,  ``2.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc: ``>=13``
   :depends libgomp: 
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

      mamba install fasttree

   and update with::

      mamba update fasttree

  To create a new environment, run::

      mamba create --name myenvname fasttree

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fasttree:<tag>

   (see `fasttree/tags`_ for valid values for ``<tag>``)


.. |downloads_fasttree| image:: https://img.shields.io/conda/dn/bioconda/fasttree.svg?style=flat
   :target: https://anaconda.org/bioconda/fasttree
   :alt:   (downloads)
.. |docker_fasttree| image:: https://quay.io/repository/biocontainers/fasttree/status
   :target: https://quay.io/repository/biocontainers/fasttree
.. _`fasttree/tags`: https://quay.io/repository/biocontainers/fasttree?tab=tags


.. raw:: html

    <script>
        var package = "fasttree";
        var versions = ["2.2.0","2.2.0","2.1.11","2.1.11","2.1.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fasttree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fasttree/README.html