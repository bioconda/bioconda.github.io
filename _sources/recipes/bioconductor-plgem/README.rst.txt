.. title:: Package Recipe 'bioconductor-plgem'
.. highlight: bash


bioconductor-plgem
==================

.. conda:recipe:: bioconductor-plgem
   :replaces_section_title:

   The Power Law Global Error Model \(PLGEM\) has been shown to faithfully model the variance\-versus\-mean dependence that exists in a variety of genome\-wide datasets\, including microarray and proteomics data. The use of PLGEM has been shown to improve the detection of differentially expressed genes or proteins in these datasets.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/plgem.html
   :license: GPL-2
   :recipe: /`bioconductor-plgem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plgem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plgem/meta.yaml>`_
   :links: biotools: :biotools:`plgem`

   


.. conda:package:: bioconductor-plgem

   |downloads_bioconductor-plgem| |docker_bioconductor-plgem|

   :versions: 1.54.0, 1.52.0, 1.50.0, 1.48.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-mass`  

   :required~by: |required_by_bioconductor-plgem|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-plgem

   and update with::

      conda update bioconductor-plgem

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-plgem


.. |required_by_bioconductor-plgem| conda:required_by:: bioconductor-plgem
.. |downloads_bioconductor-plgem| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-plgem.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-plgem| image:: https://quay.io/repository/biocontainers/bioconductor-plgem/status
   :target: https://quay.io/repository/biocontainers/bioconductor-plgem







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-plgem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-plgem/README.html

