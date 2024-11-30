:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomicscores'
.. highlight: bash

bioconductor-genomicscores
==========================

.. conda:recipe:: bioconductor-genomicscores
   :replaces_section_title:
   :noindex:

   Infrastructure to work with genomewide position\-specific scores

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/GenomicScores.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genomicscores <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicscores>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicscores/meta.yaml>`_

   Provide infrastructure to store and access genomewide position\-specific scores within R and Bioconductor.


.. conda:package:: bioconductor-genomicscores

   |downloads_bioconductor-genomicscores| |docker_bioconductor-genomicscores|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.14.1-0</code>,  <code>2.12.0-0</code>,  <code>2.10.0-0</code>,  <code>2.6.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.0-1</code>,  <code>2.2.0-0</code>,  <code>2.0.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``2.14.1-0``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.10.0-0``,  ``1.8.1-0``,  ``1.6.0-0``,  ``1.4.1-0``,  ``1.2.0-0``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biocfilecache: ``>=2.10.0,<2.11.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-hdf5array: ``>=1.30.0,<1.31.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rhdf5: ``>=2.46.0,<2.47.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biocmanager: 
   :depends r-httr: 
   :depends r-xml: 
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

      mamba install bioconductor-genomicscores

   and update with::

      mamba update bioconductor-genomicscores

  To create a new environment, run::

      mamba create --name myenvname bioconductor-genomicscores

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genomicscores:<tag>

   (see `bioconductor-genomicscores/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genomicscores| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomicscores.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomicscores
   :alt:   (downloads)
.. |docker_bioconductor-genomicscores| image:: https://quay.io/repository/biocontainers/bioconductor-genomicscores/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomicscores
.. _`bioconductor-genomicscores/tags`: https://quay.io/repository/biocontainers/bioconductor-genomicscores?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genomicscores";
        var versions = ["2.14.1","2.12.0","2.10.0","2.6.0","2.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomicscores/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomicscores/README.html