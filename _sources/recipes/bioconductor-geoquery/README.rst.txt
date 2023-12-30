:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geoquery'
.. highlight: bash

bioconductor-geoquery
=====================

.. conda:recipe:: bioconductor-geoquery
   :replaces_section_title:
   :noindex:

   Get data from NCBI Gene Expression Omnibus \(GEO\)

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/GEOquery.html
   :license: MIT
   :recipe: /`bioconductor-geoquery <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geoquery>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geoquery/meta.yaml>`_
   :links: biotools: :biotools:`geoquery`

   The NCBI Gene Expression Omnibus \(GEO\) is a public repository of microarray data.  Given the rich and varied nature of this resource\, it is only natural to want to apply BioConductor tools to these data.  GEOquery is the bridge between GEO and BioConductor.


.. conda:package:: bioconductor-geoquery

   |downloads_bioconductor-geoquery| |docker_bioconductor-geoquery|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.70.0-0</code>,  <code>2.68.0-0</code>,  <code>2.66.0-0</code>,  <code>2.62.0-0</code>,  <code>2.60.0-0</code>,  <code>2.58.0-1</code>,  <code>2.58.0-0</code>,  <code>2.56.0-1</code>,  <code>2.56.0-0</code>,  </span></summary>
      

      ``2.70.0-0``,  ``2.68.0-0``,  ``2.66.0-0``,  ``2.62.0-0``,  ``2.60.0-0``,  ``2.58.0-1``,  ``2.58.0-0``,  ``2.56.0-1``,  ``2.56.0-0``,  ``2.54.0-0``,  ``2.52.0-1``,  ``2.50.5-0``,  ``2.50.0-0``,  ``2.48.0-0``,  ``2.46.3-0``,  ``2.46.0-0``,  ``2.42.0-0``,  ``2.38.4-0``,  ``2.36.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-curl: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-magrittr: 
   :depends r-r.utils: 
   :depends r-readr: ``>=1.3.1``
   :depends r-tidyr: 
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

      mamba install bioconductor-geoquery

   and update with::

      mamba update bioconductor-geoquery

  To create a new environment, run::

      mamba create --name myenvname bioconductor-geoquery

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-geoquery:<tag>

   (see `bioconductor-geoquery/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-geoquery| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geoquery.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-geoquery
   :alt:   (downloads)
.. |docker_bioconductor-geoquery| image:: https://quay.io/repository/biocontainers/bioconductor-geoquery/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geoquery
.. _`bioconductor-geoquery/tags`: https://quay.io/repository/biocontainers/bioconductor-geoquery?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-geoquery";
        var versions = ["2.70.0","2.68.0","2.66.0","2.62.0","2.60.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geoquery/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geoquery/README.html