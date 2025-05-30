:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bumphunter'
.. highlight: bash

bioconductor-bumphunter
=======================

.. conda:recipe:: bioconductor-bumphunter
   :replaces_section_title:
   :noindex:

   Bump Hunter

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/bumphunter.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bumphunter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bumphunter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bumphunter/meta.yaml>`_
   :links: biotools: :biotools:`bumphunter`

   Tools for finding bumps in genomic data


.. conda:package:: bioconductor-bumphunter

   |downloads_bioconductor-bumphunter| |docker_bioconductor-bumphunter|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  </span></summary>
      

      ``1.48.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.5-1``,  ``1.24.5-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dorng: 
   :depends r-foreach: 
   :depends r-iterators: 
   :depends r-locfit: 
   :depends r-matrixstats: 
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

      mamba install bioconductor-bumphunter

   and update with::

      mamba update bioconductor-bumphunter

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bumphunter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bumphunter:<tag>

   (see `bioconductor-bumphunter/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bumphunter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bumphunter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bumphunter
   :alt:   (downloads)
.. |docker_bioconductor-bumphunter| image:: https://quay.io/repository/biocontainers/bioconductor-bumphunter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bumphunter
.. _`bioconductor-bumphunter/tags`: https://quay.io/repository/biocontainers/bioconductor-bumphunter?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bumphunter";
        var versions = ["1.48.0","1.44.0","1.42.0","1.40.0","1.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bumphunter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bumphunter/README.html