:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-roar'
.. highlight: bash

bioconductor-roar
=================

.. conda:recipe:: bioconductor-roar
   :replaces_section_title:
   :noindex:

   Identify differential APA usage from RNA\-seq alignments

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/roar.html
   :license: GPL-3
   :recipe: /`bioconductor-roar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-roar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-roar/meta.yaml>`_
   :links: biotools: :biotools:`roar`, doi: :doi:`10.1038/nmeth.3252`

   Identify preferential usage of APA sites\, comparing two biological conditions\, starting from known alternative sites and alignments obtained from standard RNA\-seq experiments.


.. conda:package:: bioconductor-roar

   |downloads_bioconductor-roar| |docker_bioconductor-roar|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicalignments: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
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

      mamba install bioconductor-roar

   and update with::

      mamba update bioconductor-roar

  To create a new environment, run::

      mamba create --name myenvname bioconductor-roar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-roar:<tag>

   (see `bioconductor-roar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-roar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-roar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-roar
   :alt:   (downloads)
.. |docker_bioconductor-roar| image:: https://quay.io/repository/biocontainers/bioconductor-roar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-roar
.. _`bioconductor-roar/tags`: https://quay.io/repository/biocontainers/bioconductor-roar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-roar";
        var versions = ["1.42.0","1.38.0","1.36.0","1.34.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-roar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-roar/README.html