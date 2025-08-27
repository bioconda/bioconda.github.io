:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epialleler'
.. highlight: bash

bioconductor-epialleler
=======================

.. conda:recipe:: bioconductor-epialleler
   :replaces_section_title:
   :noindex:

   Fast\, Epiallele\-Aware Methylation Caller and Reporter

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/epialleleR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-epialleler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epialleler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epialleler/meta.yaml>`_

   Epialleles are specific DNA methylation patterns that are mitotically and\/or meiotically inherited. This package calls and reports cytosine methylation as well as frequencies of hypermethylated epialleles at the level of genomic regions or individual cytosines in next\-generation sequencing data using binary alignment map \(BAM\) files as an input. Among other things\, this package can also extract and visualise methylation patterns and assess allele specificity of methylation.


.. conda:package:: bioconductor-epialleler

   |downloads_bioconductor-epialleler| |docker_bioconductor-epialleler|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-rhtslib: ``>=3.2.0,<3.3.0``
   :depends bioconductor-rhtslib: ``>=3.2.0,<3.3.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=18``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-bh: 
   :depends r-data.table: 
   :depends r-rcpp: 
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

      mamba install bioconductor-epialleler

   and update with::

      mamba update bioconductor-epialleler

  To create a new environment, run::

      mamba create --name myenvname bioconductor-epialleler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-epialleler:<tag>

   (see `bioconductor-epialleler/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-epialleler| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epialleler.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epialleler
   :alt:   (downloads)
.. |docker_bioconductor-epialleler| image:: https://quay.io/repository/biocontainers/bioconductor-epialleler/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epialleler
.. _`bioconductor-epialleler/tags`: https://quay.io/repository/biocontainers/bioconductor-epialleler?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-epialleler";
        var versions = ["1.14.0","1.10.0","1.8.1","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epialleler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epialleler/README.html