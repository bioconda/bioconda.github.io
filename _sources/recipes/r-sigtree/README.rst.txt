:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-sigtree'
.. highlight: bash

r-sigtree
=========

.. conda:recipe:: r-sigtree
   :replaces_section_title:
   :noindex:

   Provides tools to identify and visualize branches in a phylogenetic tree that are significantly responsive to some intervention\, taking as primary inputs a phylogenetic tree \(of class phylo\) and a data frame \(or matrix\) of corresponding tip \(OTU\) labels and p\-values.

   :homepage: https://CRAN.R-project.org/package=SigTree
   :license: GPL3 / GPL-3
   :recipe: /`r-sigtree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sigtree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sigtree/meta.yaml>`_

   


.. conda:package:: r-sigtree

   |downloads_r-sigtree| |docker_r-sigtree|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.10.6-12</code>,  <code>1.10.6-11</code>,  <code>1.10.6-10</code>,  <code>1.10.6-9</code>,  <code>1.10.6-8</code>,  <code>1.10.6-7</code>,  <code>1.10.6-6</code>,  <code>1.10.6-5</code>,  <code>1.10.6-4</code>,  </span></summary>
      

      ``1.10.6-12``,  ``1.10.6-11``,  ``1.10.6-10``,  ``1.10.6-9``,  ``1.10.6-8``,  ``1.10.6-7``,  ``1.10.6-6``,  ``1.10.6-5``,  ``1.10.6-4``,  ``1.10.6-3``,  ``1.10.6-2``,  ``1.10.6-1``,  ``1.10.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-phyloseq: 
   :depends libgcc-ng: ``>=12``
   :depends r-ape: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-mass: 
   :depends r-phyext2: 
   :depends r-phylobase: 
   :depends r-rcolorbrewer: 
   :depends r-vegan: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install r-sigtree

   and update with::

      mamba update r-sigtree

  To create a new environment, run::

      mamba create --name myenvname r-sigtree

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-sigtree:<tag>

   (see `r-sigtree/tags`_ for valid values for ``<tag>``)


.. |downloads_r-sigtree| image:: https://img.shields.io/conda/dn/bioconda/r-sigtree.svg?style=flat
   :target: https://anaconda.org/bioconda/r-sigtree
   :alt:   (downloads)
.. |docker_r-sigtree| image:: https://quay.io/repository/biocontainers/r-sigtree/status
   :target: https://quay.io/repository/biocontainers/r-sigtree
.. _`r-sigtree/tags`: https://quay.io/repository/biocontainers/r-sigtree?tab=tags


.. raw:: html

    <script>
        var package = "r-sigtree";
        var versions = ["1.10.6","1.10.6","1.10.6","1.10.6","1.10.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-sigtree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-sigtree/README.html