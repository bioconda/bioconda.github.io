:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomeinfodb'
.. highlight: bash

bioconductor-genomeinfodb
=========================

.. conda:recipe:: bioconductor-genomeinfodb
   :replaces_section_title:
   :noindex:

   Utilities for manipulating chromosome names\, including modifying them to follow a particular naming style

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/GenomeInfoDb.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genomeinfodb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomeinfodb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomeinfodb/meta.yaml>`_
   :links: biotools: :biotools:`genomeinfodb`, doi: :doi:`10.1038/nmeth.3252`

   Contains data and functions that define and allow translation between different chromosome sequence naming conventions \(e.g.\, \"chr1\" versus \"1\"\)\, including a function that attempts to place sequence names in their natural\, rather than lexicographic\, order.


.. conda:package:: bioconductor-genomeinfodb

   |downloads_bioconductor-genomeinfodb| |docker_bioconductor-genomeinfodb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.1-1</code>,  <code>1.38.1-0</code>,  <code>1.36.1-0</code>,  <code>1.34.9-0</code>,  <code>1.34.8-0</code>,  <code>1.34.1-0</code>,  <code>1.30.1-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.38.1-1``,  ``1.38.1-0``,  ``1.36.1-0``,  ``1.34.9-0``,  ``1.34.8-0``,  ``1.34.1-0``,  ``1.30.1-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.4-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.1-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.3-0``,  ``1.10.3-0``,  ``1.8.7-0``,  ``1.6.3-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.4.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-genomeinfodbdata: ``>=1.2.0,<1.3.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rcurl: 
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

      mamba install bioconductor-genomeinfodb

   and update with::

      mamba update bioconductor-genomeinfodb

  To create a new environment, run::

      mamba create --name myenvname bioconductor-genomeinfodb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genomeinfodb:<tag>

   (see `bioconductor-genomeinfodb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genomeinfodb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomeinfodb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomeinfodb
   :alt:   (downloads)
.. |docker_bioconductor-genomeinfodb| image:: https://quay.io/repository/biocontainers/bioconductor-genomeinfodb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomeinfodb
.. _`bioconductor-genomeinfodb/tags`: https://quay.io/repository/biocontainers/bioconductor-genomeinfodb?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genomeinfodb";
        var versions = ["1.38.1","1.38.1","1.36.1","1.34.9","1.34.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomeinfodb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomeinfodb/README.html