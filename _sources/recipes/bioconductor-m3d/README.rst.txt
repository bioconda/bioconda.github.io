.. title:: Package Recipe 'bioconductor-m3d'
.. highlight: bash


bioconductor-m3d
================

.. conda:recipe:: bioconductor-m3d
   :replaces_section_title:

   This package identifies statistically significantly differentially methylated regions of CpGs. It uses kernel methods \(the Maximum Mean Discrepancy\) to measure differences in methylation profiles\, and relates these to inter\-replicate changes\, whilst accounting for variation in coverage profiles.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/M3D.html
   :license: Artistic License 2.0
   :recipe: /`bioconductor-m3d <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-m3d>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-m3d/meta.yaml>`_
   :links: biotools: :biotools:`m3d`, doi: :doi:`10.1093/bioinformatics/btu749`

   


.. conda:package:: bioconductor-m3d

   |downloads_bioconductor-m3d| |docker_bioconductor-m3d|

   :versions: 1.16.0, 1.14.0, 1.12.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biseq` >=1.22.0,<1.23.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-rcpp`  

   :required~by: |required_by_bioconductor-m3d|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-m3d

   and update with::

      conda update bioconductor-m3d

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-m3d


.. |required_by_bioconductor-m3d| conda:required_by:: bioconductor-m3d
.. |downloads_bioconductor-m3d| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-m3d.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-m3d| image:: https://quay.io/repository/biocontainers/bioconductor-m3d/status
   :target: https://quay.io/repository/biocontainers/bioconductor-m3d







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-m3d/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-m3d/README.html

