:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomeintervals'
.. highlight: bash

bioconductor-genomeintervals
============================

.. conda:recipe:: bioconductor-genomeintervals
   :replaces_section_title:
   :noindex:

   Operations on genomic intervals

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/genomeIntervals.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genomeintervals <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomeintervals>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomeintervals/meta.yaml>`_
   :links: biotools: :biotools:`genomeintervals`, doi: :doi:`10.1038/nmeth.3252`

   This package defines classes for representing genomic intervals and provides functions and methods for working with these. Note\: The package provides the basic infrastructure for and is enhanced by the package \'girafe\'.


.. conda:package:: bioconductor-genomeintervals

   |downloads_bioconductor-genomeintervals| |docker_bioconductor-genomeintervals|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.56.0-0</code>,  <code>1.54.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-1</code>,  <code>1.46.0-0</code>,  <code>1.43.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-1</code>,  </span></summary>
      

      ``1.56.0-0``,  ``1.54.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-1``,  ``1.46.0-0``,  ``1.43.0-0``,  ``1.42.0-0``,  ``1.40.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-intervals: ``>=0.14.0``
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

      mamba install bioconductor-genomeintervals

   and update with::

      mamba update bioconductor-genomeintervals

  To create a new environment, run::

      mamba create --name myenvname bioconductor-genomeintervals

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genomeintervals:<tag>

   (see `bioconductor-genomeintervals/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genomeintervals| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomeintervals.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomeintervals
   :alt:   (downloads)
.. |docker_bioconductor-genomeintervals| image:: https://quay.io/repository/biocontainers/bioconductor-genomeintervals/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomeintervals
.. _`bioconductor-genomeintervals/tags`: https://quay.io/repository/biocontainers/bioconductor-genomeintervals?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genomeintervals";
        var versions = ["1.56.0","1.54.0","1.50.0","1.48.0","1.46.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomeintervals/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomeintervals/README.html