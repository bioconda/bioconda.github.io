:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-keggrest'
.. highlight: bash

bioconductor-keggrest
=====================

.. conda:recipe:: bioconductor-keggrest
   :replaces_section_title:
   :noindex:

   Client\-side REST access to the Kyoto Encyclopedia of Genes and Genomes \(KEGG\)

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/KEGGREST.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-keggrest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-keggrest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-keggrest/meta.yaml>`_
   :links: biotools: :biotools:`keggrest`, doi: :doi:`10.1007/s11845-015-1283-8`

   A package that provides a client interface to the Kyoto Encyclopedia of Genes and Genomes \(KEGG\) REST server. Based on KEGGSOAP by J. Zhang\, R. Gentleman\, and Marc Carlson\, and KEGG \(python package\) by Aurelien Mazurie.


.. conda:package:: bioconductor-keggrest

   |downloads_bioconductor-keggrest| |docker_bioconductor-keggrest|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.1-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.1-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``,  ``1.20.2-0``,  ``1.18.0-0``,  ``1.16.1-0``,  ``1.14.1-0``,  ``1.12.3-0``,  ``1.10.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-httr: 
   :depends r-png: 
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

      mamba install bioconductor-keggrest

   and update with::

      mamba update bioconductor-keggrest

  To create a new environment, run::

      mamba create --name myenvname bioconductor-keggrest

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-keggrest:<tag>

   (see `bioconductor-keggrest/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-keggrest| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-keggrest.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-keggrest
   :alt:   (downloads)
.. |docker_bioconductor-keggrest| image:: https://quay.io/repository/biocontainers/bioconductor-keggrest/status
   :target: https://quay.io/repository/biocontainers/bioconductor-keggrest
.. _`bioconductor-keggrest/tags`: https://quay.io/repository/biocontainers/bioconductor-keggrest?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-keggrest";
        var versions = ["1.42.0","1.40.0","1.38.0","1.34.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-keggrest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-keggrest/README.html