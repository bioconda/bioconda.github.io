.. title:: Package Recipe 'bioconductor-mircomp'
.. highlight: bash


bioconductor-mircomp
====================

.. conda:recipe:: bioconductor-mircomp
   :replaces_section_title:

   Based on a large miRNA dilution study\, this package provides tools to read in the raw amplification data and use these data to assess the performance of methods that estimate expression from the amplification curves.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/miRcomp.html
   :license: GPL-3 | file LICENSE
   :recipe: /`bioconductor-mircomp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mircomp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mircomp/meta.yaml>`_

   


.. conda:package:: bioconductor-mircomp

   |downloads_bioconductor-mircomp| |docker_bioconductor-mircomp|

   :versions: 1.12.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-mircompdata` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-kernsmooth`  

   :required~by: |required_by_bioconductor-mircomp|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mircomp

   and update with::

      conda update bioconductor-mircomp

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mircomp


.. |required_by_bioconductor-mircomp| conda:required_by:: bioconductor-mircomp
.. |downloads_bioconductor-mircomp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mircomp.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mircomp| image:: https://quay.io/repository/biocontainers/bioconductor-mircomp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mircomp







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mircomp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mircomp/README.html

