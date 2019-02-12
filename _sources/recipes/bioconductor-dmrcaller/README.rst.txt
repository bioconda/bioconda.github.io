.. title:: Package Recipe 'bioconductor-dmrcaller'
.. highlight: bash


bioconductor-dmrcaller
======================

.. conda:recipe:: bioconductor-dmrcaller
   :replaces_section_title:

   Uses Bisulfite sequencing data in two conditions and identifies differentially methylated regions between the conditions in CG and non\-CG context. The input is the CX report files produced by Bismark and the output is a list of DMRs stored as GRanges objects.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/DMRcaller.html
   :license: GPL-3
   :recipe: /`bioconductor-dmrcaller <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmrcaller>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmrcaller/meta.yaml>`_

   


.. conda:package:: bioconductor-dmrcaller

   |downloads_bioconductor-dmrcaller| |docker_bioconductor-dmrcaller|

   :versions: 1.14.0

   :depends: :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-betareg`  :conda:package:`r-rcpp`  :conda:package:`r-rcpproll`  

   :required~by: |required_by_bioconductor-dmrcaller|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dmrcaller

   and update with::

      conda update bioconductor-dmrcaller

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-dmrcaller


.. |required_by_bioconductor-dmrcaller| conda:required_by:: bioconductor-dmrcaller
.. |downloads_bioconductor-dmrcaller| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dmrcaller.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-dmrcaller| image:: https://quay.io/repository/biocontainers/bioconductor-dmrcaller/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dmrcaller







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dmrcaller/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dmrcaller/README.html

