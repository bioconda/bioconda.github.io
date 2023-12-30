:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pepxmltab'
.. highlight: bash

bioconductor-pepxmltab
======================

.. conda:recipe:: bioconductor-pepxmltab
   :replaces_section_title:
   :noindex:

   Parsing pepXML files and filter based on peptide FDR.

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/pepXMLTab.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pepxmltab <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pepxmltab>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pepxmltab/meta.yaml>`_
   :links: biotools: :biotools:`pepxmltab`, doi: :doi:`10.1038/nmeth.3252`

   Parsing pepXML files based one XML package. The package tries to handle pepXML files generated from different softwares. The output will be a peptide\-spectrum\-matching tabular file. The package also provide function to filter the PSMs based on FDR.


.. conda:package:: bioconductor-pepxmltab

   |downloads_bioconductor-pepxmltab| |docker_bioconductor-pepxmltab|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.1-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-xml: ``>=3.98-1.1``
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

      mamba install bioconductor-pepxmltab

   and update with::

      mamba update bioconductor-pepxmltab

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pepxmltab

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pepxmltab:<tag>

   (see `bioconductor-pepxmltab/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pepxmltab| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pepxmltab.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pepxmltab
   :alt:   (downloads)
.. |docker_bioconductor-pepxmltab| image:: https://quay.io/repository/biocontainers/bioconductor-pepxmltab/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pepxmltab
.. _`bioconductor-pepxmltab/tags`: https://quay.io/repository/biocontainers/bioconductor-pepxmltab?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pepxmltab";
        var versions = ["1.36.0","1.36.0","1.34.0","1.32.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pepxmltab/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pepxmltab/README.html