:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirnapath'
.. highlight: bash

bioconductor-mirnapath
======================

.. conda:recipe:: bioconductor-mirnapath
   :replaces_section_title:
   :noindex:

   miRNApath\: Pathway Enrichment for miRNA Expression Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/miRNApath.html
   :license: LGPL-2.1
   :recipe: /`bioconductor-mirnapath <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirnapath>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirnapath/meta.yaml>`_
   :links: biotools: :biotools:`mirnapath`

   This package provides pathway enrichment techniques for miRNA expression data. Specifically\, the set of methods handles the many\-to\-many relationship between miRNAs and the multiple genes they are predicted to target \(and thus affect.\)  It also handles the gene\-to\-pathway relationships separately. Both steps are designed to preserve the additive effects of miRNAs on genes\, many miRNAs affecting one gene\, one miRNA affecting multiple genes\, or many miRNAs affecting many genes.


.. conda:package:: bioconductor-mirnapath

   |downloads_bioconductor-mirnapath| |docker_bioconductor-mirnapath|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.66.0-0</code>,  <code>1.62.0-1</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-1</code>,  <code>1.50.0-0</code>,  </span></summary>
      

      ``1.66.0-0``,  ``1.62.0-1``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-mirnapath

   and update with::

      mamba update bioconductor-mirnapath

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mirnapath

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mirnapath:<tag>

   (see `bioconductor-mirnapath/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mirnapath| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirnapath.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mirnapath
   :alt:   (downloads)
.. |docker_bioconductor-mirnapath| image:: https://quay.io/repository/biocontainers/bioconductor-mirnapath/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirnapath
.. _`bioconductor-mirnapath/tags`: https://quay.io/repository/biocontainers/bioconductor-mirnapath?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mirnapath";
        var versions = ["1.66.0","1.62.0","1.62.0","1.60.0","1.58.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirnapath/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirnapath/README.html