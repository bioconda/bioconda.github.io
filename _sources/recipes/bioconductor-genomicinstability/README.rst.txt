:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomicinstability'
.. highlight: bash

bioconductor-genomicinstability
===============================

.. conda:recipe:: bioconductor-genomicinstability
   :replaces_section_title:
   :noindex:

   Genomic Instability estimation for scRNA\-Seq

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/genomicInstability.html
   :license: file LICENSE
   :recipe: /`bioconductor-genomicinstability <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicinstability>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicinstability/meta.yaml>`_

   This package contain functions to run genomic instability analysis \(GIA\) from scRNA\-Seq data. GIA estimates the association between gene expression and genomic location of the coding genes. It uses the aREA algorithm to quantify the enrichment of sets of contiguous genes \(loci\-blocks\) on the gene expression profiles and estimates the Genomic Instability Score \(GIS\) for each analyzed cell.


.. conda:package:: bioconductor-genomicinstability

   |downloads_bioconductor-genomicinstability| |docker_bioconductor-genomicinstability|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-checkmate: 
   :depends r-mixtools: 
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

      mamba install bioconductor-genomicinstability

   and update with::

      mamba update bioconductor-genomicinstability

  To create a new environment, run::

      mamba create --name myenvname bioconductor-genomicinstability

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genomicinstability:<tag>

   (see `bioconductor-genomicinstability/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genomicinstability| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomicinstability.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomicinstability
   :alt:   (downloads)
.. |docker_bioconductor-genomicinstability| image:: https://quay.io/repository/biocontainers/bioconductor-genomicinstability/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomicinstability
.. _`bioconductor-genomicinstability/tags`: https://quay.io/repository/biocontainers/bioconductor-genomicinstability?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genomicinstability";
        var versions = ["1.12.0","1.8.0","1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomicinstability/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomicinstability/README.html