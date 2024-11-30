:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-interminer'
.. highlight: bash

bioconductor-interminer
=======================

.. conda:recipe:: bioconductor-interminer
   :replaces_section_title:
   :noindex:

   R Interface with InterMine\-Powered Databases

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/InterMineR.html
   :license: LGPL
   :recipe: /`bioconductor-interminer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-interminer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-interminer/meta.yaml>`_

   Databases based on the InterMine platform such as FlyMine\, modMine \(modENCODE\)\, RatMine\, YeastMine\, HumanMine and TargetMine are integrated databases of genomic\, expression and protein data for various organisms. Integrating data makes it possible to run sophisticated data mining queries that span domains of biological knowledge. This R package provides interfaces with these databases through webservices. It makes most from the correspondence of the data frame object in R and the table object in databases\, while hiding the details of data exchange through XML or JSON.


.. conda:package:: bioconductor-interminer

   |downloads_bioconductor-interminer| |docker_bioconductor-interminer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.1-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.1-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.1-0``,  ``1.2.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-httr: 
   :depends r-igraph: 
   :depends r-rcurl: 
   :depends r-rjsonio: 
   :depends r-sqldf: 
   :depends r-xml: 
   :depends r-xml2: 
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

      mamba install bioconductor-interminer

   and update with::

      mamba update bioconductor-interminer

  To create a new environment, run::

      mamba create --name myenvname bioconductor-interminer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-interminer:<tag>

   (see `bioconductor-interminer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-interminer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-interminer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-interminer
   :alt:   (downloads)
.. |docker_bioconductor-interminer| image:: https://quay.io/repository/biocontainers/bioconductor-interminer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-interminer
.. _`bioconductor-interminer/tags`: https://quay.io/repository/biocontainers/bioconductor-interminer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-interminer";
        var versions = ["1.24.0","1.22.0","1.20.0","1.16.0","1.14.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-interminer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-interminer/README.html