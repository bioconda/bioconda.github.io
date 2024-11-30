:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-leebamviews'
.. highlight: bash

bioconductor-leebamviews
========================

.. conda:recipe:: bioconductor-leebamviews
   :replaces_section_title:
   :noindex:

   leeBamViews \-\- multiple yeast RNAseq samples excerpted from Lee 2009

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/leeBamViews.html
   :license: Artistic 2.0
   :recipe: /`bioconductor-leebamviews <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-leebamviews>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-leebamviews/meta.yaml>`_

   data from PMID 19096707\; prototype for managing multiple NGS samples


.. conda:package:: bioconductor-leebamviews

   |downloads_bioconductor-leebamviews| |docker_bioconductor-leebamviews|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.1-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.1-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-bsgenome: ``>=1.70.0,<1.71.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-leebamviews

   and update with::

      mamba update bioconductor-leebamviews

  To create a new environment, run::

      mamba create --name myenvname bioconductor-leebamviews

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-leebamviews:<tag>

   (see `bioconductor-leebamviews/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-leebamviews| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-leebamviews.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-leebamviews
   :alt:   (downloads)
.. |docker_bioconductor-leebamviews| image:: https://quay.io/repository/biocontainers/bioconductor-leebamviews/status
   :target: https://quay.io/repository/biocontainers/bioconductor-leebamviews
.. _`bioconductor-leebamviews/tags`: https://quay.io/repository/biocontainers/bioconductor-leebamviews?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-leebamviews";
        var versions = ["1.38.0","1.36.0","1.34.0","1.30.1","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-leebamviews/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-leebamviews/README.html