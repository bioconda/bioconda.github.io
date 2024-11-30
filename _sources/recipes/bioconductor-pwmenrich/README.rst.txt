:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pwmenrich'
.. highlight: bash

bioconductor-pwmenrich
======================

.. conda:recipe:: bioconductor-pwmenrich
   :replaces_section_title:
   :noindex:

   PWM enrichment analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/PWMEnrich.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-pwmenrich <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pwmenrich>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pwmenrich/meta.yaml>`_
   :links: biotools: :biotools:`pwmenrich`, doi: :doi:`10.1038/nmeth.3252`

   A toolkit of high\-level functions for DNA motif scanning and enrichment analysis built upon Biostrings. The main functionality is PWM enrichment analysis of already known PWMs \(e.g. from databases such as MotifDb\)\, but the package also implements high\-level functions for PWM scanning and visualisation. The package does not perform \"de novo\" motif discovery\, but is instead focused on using motifs that are either experimentally derived or computationally constructed by other tools.


.. conda:package:: bioconductor-pwmenrich

   |downloads_bioconductor-pwmenrich| |docker_bioconductor-pwmenrich|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.38.0-0</code>,  <code>4.36.0-0</code>,  <code>4.34.0-0</code>,  <code>4.30.0-0</code>,  <code>4.28.1-0</code>,  <code>4.26.0-1</code>,  <code>4.26.0-0</code>,  <code>4.23.0-0</code>,  <code>4.22.0-0</code>,  </span></summary>
      

      ``4.38.0-0``,  ``4.36.0-0``,  ``4.34.0-0``,  ``4.30.0-0``,  ``4.28.1-0``,  ``4.26.0-1``,  ``4.26.0-0``,  ``4.23.0-0``,  ``4.22.0-0``,  ``4.20.0-1``,  ``4.18.0-0``,  ``4.16.0-0``,  ``4.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-seqlogo: ``>=1.68.0,<1.69.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-evd: 
   :depends r-gdata: 
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

      mamba install bioconductor-pwmenrich

   and update with::

      mamba update bioconductor-pwmenrich

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pwmenrich

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pwmenrich:<tag>

   (see `bioconductor-pwmenrich/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pwmenrich| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pwmenrich.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pwmenrich
   :alt:   (downloads)
.. |docker_bioconductor-pwmenrich| image:: https://quay.io/repository/biocontainers/bioconductor-pwmenrich/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pwmenrich
.. _`bioconductor-pwmenrich/tags`: https://quay.io/repository/biocontainers/bioconductor-pwmenrich?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pwmenrich";
        var versions = ["4.38.0","4.36.0","4.34.0","4.30.0","4.28.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pwmenrich/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pwmenrich/README.html