:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genega'
.. highlight: bash

bioconductor-genega
===================

.. conda:recipe:: bioconductor-genega
   :replaces_section_title:
   :noindex:

   Design gene based on both mRNA secondary structure and codon usage bias using Genetic algorithm

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/GeneGA.html
   :license: GPL version 2
   :recipe: /`bioconductor-genega <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genega>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genega/meta.yaml>`_

   R based Genetic algorithm for gene expression optimization by considering both mRNA secondary structure and codon usage bias\, GeneGA includes the information of highly expressed genes of almost 200 genomes. Meanwhile\, Vienna RNA Package is needed to ensure GeneGA to function properly.


.. conda:package:: bioconductor-genega

   |downloads_bioconductor-genega| |docker_bioconductor-genega|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.56.0-0</code>,  <code>1.52.0-0</code>,  <code>1.48.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-1</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  </span></summary>
      

      ``1.56.0-0``,  ``1.52.0-0``,  ``1.48.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-hash: 
   :depends r-seqinr: 
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

      mamba install bioconductor-genega

   and update with::

      mamba update bioconductor-genega

  To create a new environment, run::

      mamba create --name myenvname bioconductor-genega

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genega:<tag>

   (see `bioconductor-genega/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genega| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genega.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genega
   :alt:   (downloads)
.. |docker_bioconductor-genega| image:: https://quay.io/repository/biocontainers/bioconductor-genega/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genega
.. _`bioconductor-genega/tags`: https://quay.io/repository/biocontainers/bioconductor-genega?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genega";
        var versions = ["1.56.0","1.52.0","1.48.0","1.44.0","1.42.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genega/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genega/README.html