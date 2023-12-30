:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-reportingtools'
.. highlight: bash

bioconductor-reportingtools
===========================

.. conda:recipe:: bioconductor-reportingtools
   :replaces_section_title:
   :noindex:

   Tools for making reports in various formats

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ReportingTools.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-reportingtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reportingtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reportingtools/meta.yaml>`_
   :links: biotools: :biotools:`reportingtools`

   The ReportingTools software package enables users to easily display reports of analysis results generated from sources such as microarray and sequencing data.  The package allows users to create HTML pages that may be viewed on a web browser such as Safari\, or in other formats readable by programs such as Excel.  Users can generate tables with sortable and filterable columns\, make and display plots\, and link table entries to other data sources such as NCBI or larger plots within the HTML page.  Using the package\, users can also produce a table of contents page to link various reports together for a particular project that can be viewed in a web browser.  For more examples\, please visit our site\: http\:\/\/ research\-pub.gene.com\/ReportingTools.


.. conda:package:: bioconductor-reportingtools

   |downloads_bioconductor-reportingtools| |docker_bioconductor-reportingtools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.42.2-0</code>,  <code>2.39.0-0</code>,  <code>2.38.0-0</code>,  <code>2.34.0-0</code>,  <code>2.32.0-0</code>,  <code>2.30.2-0</code>,  <code>2.30.0-0</code>,  <code>2.28.0-0</code>,  <code>2.26.0-0</code>,  </span></summary>
      

      ``2.42.2-0``,  ``2.39.0-0``,  ``2.38.0-0``,  ``2.34.0-0``,  ``2.32.0-0``,  ``2.30.2-0``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.26.0-0``,  ``2.24.0-1``,  ``2.22.1-0``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.17.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotate: ``>=1.80.0,<1.81.0``
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-category: ``>=2.68.0,<2.69.0``
   :depends bioconductor-deseq2: ``>=1.42.0,<1.43.0``
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-ggbio: ``>=1.50.0,<1.51.0``
   :depends bioconductor-gostats: ``>=2.68.0,<2.69.0``
   :depends bioconductor-gseabase: ``>=1.64.0,<1.65.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-pfam.db: ``>=3.18.0,<3.19.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-hwriter: 
   :depends r-knitr: 
   :depends r-lattice: 
   :depends r-r.utils: 
   :depends r-xml: 
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

      mamba install bioconductor-reportingtools

   and update with::

      mamba update bioconductor-reportingtools

  To create a new environment, run::

      mamba create --name myenvname bioconductor-reportingtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-reportingtools:<tag>

   (see `bioconductor-reportingtools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-reportingtools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-reportingtools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-reportingtools
   :alt:   (downloads)
.. |docker_bioconductor-reportingtools| image:: https://quay.io/repository/biocontainers/bioconductor-reportingtools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-reportingtools
.. _`bioconductor-reportingtools/tags`: https://quay.io/repository/biocontainers/bioconductor-reportingtools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-reportingtools";
        var versions = ["2.42.2","2.39.0","2.38.0","2.34.0","2.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-reportingtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-reportingtools/README.html