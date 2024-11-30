:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gappa'
.. highlight: bash

gappa
=====

.. conda:recipe:: gappa
   :replaces_section_title:
   :noindex:

   Genesis Applications for Phylogenetic Placement Analysis

   :homepage: https://github.com/lczech/gappa
   :documentation: https://github.com/lczech/gappa/wiki
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`gappa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gappa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gappa/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btaa070`, doi: :doi:`10.3389/fbinf.2022.871393`, doi: :doi:`10.1093/bioinformatics/bty767`, doi: :doi:`10.1371/journal.pone.0217050`

   gappa is a collection of commands for working with phylogenetic data.
   Its main focus are evolutionary placements of short environmental sequences
   on a reference phylogenetic tree. Such data are typically produced by tools
   such as EPA\-ng\, RAxML\-EPA or pplacer\, and usually stored in jplace files.



.. conda:package:: gappa

   |downloads_gappa| |docker_gappa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.5-2</code>,  <code>0.8.5-1</code>,  <code>0.8.5-0</code>,  <code>0.8.4-1</code>,  <code>0.8.4-0</code>,  <code>0.8.0-3</code>,  <code>0.8.0-2</code>,  <code>0.8.0-1</code>,  <code>0.8.0-0</code>,  </span></summary>
      

      ``0.8.5-2``,  ``0.8.5-1``,  ``0.8.5-0``,  ``0.8.4-1``,  ``0.8.4-0``,  ``0.8.0-3``,  ``0.8.0-2``,  ``0.8.0-1``,  ``0.8.0-0``,  ``0.7.1-1``,  ``0.7.1-0``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.2.0-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc: ``>=12``
   :depends libgomp: 
   :depends libstdcxx: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
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

      mamba install gappa

   and update with::

      mamba update gappa

  To create a new environment, run::

      mamba create --name myenvname gappa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gappa:<tag>

   (see `gappa/tags`_ for valid values for ``<tag>``)


.. |downloads_gappa| image:: https://img.shields.io/conda/dn/bioconda/gappa.svg?style=flat
   :target: https://anaconda.org/bioconda/gappa
   :alt:   (downloads)
.. |docker_gappa| image:: https://quay.io/repository/biocontainers/gappa/status
   :target: https://quay.io/repository/biocontainers/gappa
.. _`gappa/tags`: https://quay.io/repository/biocontainers/gappa?tab=tags


.. raw:: html

    <script>
        var package = "gappa";
        var versions = ["0.8.5","0.8.5","0.8.5","0.8.4","0.8.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gappa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gappa/README.html