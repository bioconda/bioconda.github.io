:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biomart'
.. highlight: bash

bioconductor-biomart
====================

.. conda:recipe:: bioconductor-biomart
   :replaces_section_title:
   :noindex:

   Interface to BioMart databases \(i.e. Ensembl\)

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/biomaRt.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biomart <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biomart>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biomart/meta.yaml>`_
   :links: biotools: :biotools:`biomaRt`, doi: :doi:`10.1038/nprot.2009.97`

   In recent years a wealth of biological data has become available in public data repositories. Easy access to these valuable data resources and firm integration with data analysis is needed for comprehensive bioinformatics data analysis. biomaRt provides an interface to a growing collection of databases implementing the BioMart software suite \(\<http\:\/\/www.biomart.org\>\). The package enables retrieval of large amounts of data in a uniform way without the need to know the underlying database schemas or write complex SQL queries. The most prominent examples of BioMart databases are maintain by Ensembl\, which provides biomaRt users direct access to a diverse set of data and enables a wide range of powerful online queries from gene annotation to database mining.


.. conda:package:: bioconductor-biomart

   |downloads_bioconductor-biomart| |docker_bioconductor-biomart|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.56.1-0</code>,  <code>2.54.0-0</code>,  <code>2.50.0-0</code>,  <code>2.48.0-0</code>,  <code>2.46.3-0</code>,  <code>2.46.0-0</code>,  <code>2.44.0-0</code>,  <code>2.42.0-0</code>,  <code>2.40.3-0</code>,  </span></summary>
      

      ``2.56.1-0``,  ``2.54.0-0``,  ``2.50.0-0``,  ``2.48.0-0``,  ``2.46.3-0``,  ``2.46.0-0``,  ``2.44.0-0``,  ``2.42.0-0``,  ``2.40.3-0``,  ``2.38.0-0``,  ``2.36.1-0``,  ``2.34.2-0``,  ``2.34.0-0``,  ``2.32.1-0``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.27.0-0``,  ``2.26.1-0``,  ``2.26.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-biocfilecache: ``>=2.8.0,<2.9.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-digest: 
   :depends r-httr: 
   :depends r-progress: 
   :depends r-rappdirs: 
   :depends r-stringr: 
   :depends r-xml: ``>=3.99-0.7``
   :depends r-xml2: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-biomart

   and update with::

      mamba update bioconductor-biomart

  To create a new environment, run::

      mamba create --name myenvname bioconductor-biomart

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biomart:<tag>

   (see `bioconductor-biomart/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biomart| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biomart.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biomart
   :alt:   (downloads)
.. |docker_bioconductor-biomart| image:: https://quay.io/repository/biocontainers/bioconductor-biomart/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biomart
.. _`bioconductor-biomart/tags`: https://quay.io/repository/biocontainers/bioconductor-biomart?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biomart";
        var versions = ["2.56.1","2.54.0","2.50.0","2.48.0","2.46.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biomart/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biomart/README.html