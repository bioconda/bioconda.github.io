:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pathnet'
.. highlight: bash

bioconductor-pathnet
====================

.. conda:recipe:: bioconductor-pathnet
   :replaces_section_title:
   :noindex:

   An R package for pathway analysis using topological information

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/PathNet.html
   :license: GPL-3
   :recipe: /`bioconductor-pathnet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathnet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathnet/meta.yaml>`_
   :links: biotools: :biotools:`pathnet`

   PathNet uses topological information present in pathways and differential expression levels of genes \(obtained from microarray experiment\) to identify pathways that are 1\) significantly enriched and 2\) associated with each other in the context of differential expression. The algorithm is described in\: PathNet\: A tool for pathway analysis using topological information. Dutta B\, Wallqvist A\, and Reifman J. Source Code for Biology and Medicine 2012 Sep 24\;7\(1\)\:10.


.. conda:package:: bioconductor-pathnet

   |downloads_bioconductor-pathnet| |docker_bioconductor-pathnet|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.46.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.23.0-1``,  ``1.23.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-pathnet

   and update with::

      mamba update bioconductor-pathnet

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pathnet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pathnet:<tag>

   (see `bioconductor-pathnet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pathnet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pathnet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pathnet
   :alt:   (downloads)
.. |docker_bioconductor-pathnet| image:: https://quay.io/repository/biocontainers/bioconductor-pathnet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pathnet
.. _`bioconductor-pathnet/tags`: https://quay.io/repository/biocontainers/bioconductor-pathnet?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pathnet";
        var versions = ["1.46.0","1.42.0","1.40.0","1.38.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pathnet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pathnet/README.html