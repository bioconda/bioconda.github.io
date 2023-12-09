:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cftools'
.. highlight: bash

bioconductor-cftools
====================

.. conda:recipe:: bioconductor-cftools
   :replaces_section_title:
   :noindex:

   Informatics Tools for Cell\-Free DNA Study

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/cfTools.html
   :license: file LICENSE
   :recipe: /`bioconductor-cftools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cftools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cftools/meta.yaml>`_

   The cfTools R package provides methods for cell\-free DNA \(cfDNA\) methylation data analysis to facilitate cfDNA\-based studies. Given the methylation sequencing data of a cfDNA sample\, for each cancer marker or tissue marker\, we deconvolve the tumor\-derived or tissue\-specific reads from all reads falling in the marker region. Our read\-based deconvolution algorithm exploits the pervasiveness of DNA methylation for signal enhancement\, therefore can sensitively identify a trace amount of tumor\-specific or tissue\-specific cfDNA in plasma. cfTools provides functions for \(1\) cancer detection\: sensitively detect tumor\-derived cfDNA and estimate the tumor\-derived cfDNA fraction \(tumor burden\)\; \(2\) tissue deconvolution\: infer the tissue type composition and the cfDNA fraction of multiple tissue types for a plasma cfDNA sample. These functions can serve as foundations for more advanced cfDNA\-based studies\, including cancer diagnosis and disease monitoring.


.. conda:package:: bioconductor-cftools

   |downloads_bioconductor-cftools| |docker_bioconductor-cftools|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends __osx: ``>=10.9``
   :depends bioconductor-basilisk: ``>=1.14.0,<1.15.0``
   :depends bioconductor-basilisk: ``>=1.14.1,<1.15.0a0``
   :depends bioconductor-cftoolsdata: ``>=1.0.0,<1.1.0``
   :depends bioconductor-cftoolsdata: ``>=1.0.0,<1.1.0a0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=15.0.7``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bh: 
   :depends r-r.utils: 
   :depends r-rcpp: 
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

      mamba install bioconductor-cftools

   and update with::

      mamba update bioconductor-cftools

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cftools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cftools:<tag>

   (see `bioconductor-cftools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cftools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cftools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cftools
   :alt:   (downloads)
.. |docker_bioconductor-cftools| image:: https://quay.io/repository/biocontainers/bioconductor-cftools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cftools
.. _`bioconductor-cftools/tags`: https://quay.io/repository/biocontainers/bioconductor-cftools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cftools";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cftools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cftools/README.html