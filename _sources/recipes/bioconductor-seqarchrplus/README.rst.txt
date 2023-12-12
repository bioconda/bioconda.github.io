:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seqarchrplus'
.. highlight: bash

bioconductor-seqarchrplus
=========================

.. conda:recipe:: bioconductor-seqarchrplus
   :replaces_section_title:
   :noindex:

   Downstream analyses of promoter sequence architectures and HTML report generation

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/seqArchRplus.html
   :license: GPL-3
   :recipe: /`bioconductor-seqarchrplus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqarchrplus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqarchrplus/meta.yaml>`_

   seqArchRplus facilitates downstream analyses of promoter sequence architectures\/clusters identified by seqArchR \(or any other tool\/method\). With additional available information such as the TPM values and interquantile widths \(IQWs\) of the CAGE tag clusters\, seqArchRplus can order the input promoter clusters by their shape \(IQWs\)\, and write the cluster information as browser\/IGV track files. Provided visualizations are of two kind\: per sample\/stage and per cluster visualizations. Those of the first kind include\: plot panels for each sample showing per cluster shape\, TPM and other score distributions\, sequence logos\, and peak annotations. The second include per cluster chromosome\-wise and strand distributions\, motif occurrence heatmaps and GO term enrichments. Additionally\, seqArchRplus can also generate HTML reports for easy viewing and comparison of promoter architectures between samples\/stages \(future\).


.. conda:package:: bioconductor-seqarchrplus

   |downloads_bioconductor-seqarchrplus| |docker_bioconductor-seqarchrplus|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-bsgenome: ``>=1.70.0,<1.71.0``
   :depends bioconductor-chipseeker: ``>=1.38.0,<1.39.0``
   :depends bioconductor-clusterprofiler: ``>=4.10.0,<4.11.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-heatmaps: ``>=1.26.0,<1.27.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-seqarchr: ``>=1.6.0,<1.7.0``
   :depends bioconductor-seqpattern: ``>=1.34.0,<1.35.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cli: 
   :depends r-cowplot: 
   :depends r-factoextra: 
   :depends r-ggimage: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-magick: 
   :depends r-rcolorbrewer: 
   :depends r-scales: 
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

      mamba install bioconductor-seqarchrplus

   and update with::

      mamba update bioconductor-seqarchrplus

  To create a new environment, run::

      mamba create --name myenvname bioconductor-seqarchrplus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-seqarchrplus:<tag>

   (see `bioconductor-seqarchrplus/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-seqarchrplus| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqarchrplus.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seqarchrplus
   :alt:   (downloads)
.. |docker_bioconductor-seqarchrplus| image:: https://quay.io/repository/biocontainers/bioconductor-seqarchrplus/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqarchrplus
.. _`bioconductor-seqarchrplus/tags`: https://quay.io/repository/biocontainers/bioconductor-seqarchrplus?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-seqarchrplus";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqarchrplus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqarchrplus/README.html