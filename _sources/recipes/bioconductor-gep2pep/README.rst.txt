:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gep2pep'
.. highlight: bash

bioconductor-gep2pep
====================

.. conda:recipe:: bioconductor-gep2pep
   :replaces_section_title:
   :noindex:

   Creation and Analysis of Pathway Expression Profiles \(PEPs\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/gep2pep.html
   :license: GPL-3
   :recipe: /`bioconductor-gep2pep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gep2pep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gep2pep/meta.yaml>`_

   Pathway Expression Profiles \(PEPs\) are based on the expression of pathways \(defined as sets of genes\) as opposed to individual genes. This package converts gene expression profiles to PEPs and performs enrichment analysis of both pathways and experimental conditions\, such as \"drug set enrichment analysis\" and \"gene2drug\" drug discovery analysis respectively.


.. conda:package:: bioconductor-gep2pep

   |downloads_bioconductor-gep2pep| |docker_bioconductor-gep2pep|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-gseabase: ``>=1.68.0,<1.69.0``
   :depends bioconductor-rhdf5: ``>=2.50.0,<2.51.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-digest: 
   :depends r-foreach: 
   :depends r-iterators: 
   :depends r-repo: ``>=2.1.1``
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

      mamba install bioconductor-gep2pep

   and update with::

      mamba update bioconductor-gep2pep

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gep2pep

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gep2pep:<tag>

   (see `bioconductor-gep2pep/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gep2pep| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gep2pep.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gep2pep
   :alt:   (downloads)
.. |docker_bioconductor-gep2pep| image:: https://quay.io/repository/biocontainers/bioconductor-gep2pep/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gep2pep
.. _`bioconductor-gep2pep/tags`: https://quay.io/repository/biocontainers/bioconductor-gep2pep?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gep2pep";
        var versions = ["1.26.0","1.22.0","1.20.0","1.18.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gep2pep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gep2pep/README.html