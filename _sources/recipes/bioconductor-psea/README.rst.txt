.. title:: Package Recipe 'bioconductor-psea'
.. highlight: bash


bioconductor-psea
=================

.. conda:recipe:: bioconductor-psea
   :replaces_section_title:

   Deconvolution of gene expression data by Population\-Specific Expression Analysis \(PSEA\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/PSEA.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-psea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-psea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-psea/meta.yaml>`_
   :links: biotools: :biotools:`psea`, doi: :doi:`10.1038/scibx.2011.1159`

   


.. conda:package:: bioconductor-psea

   |downloads_bioconductor-psea| |docker_bioconductor-psea|

   :versions: 1.16.0, 1.14.0, 1.12.0, 1.10.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-mass`  

   :required~by: |required_by_bioconductor-psea|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-psea

   and update with::

      conda update bioconductor-psea

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-psea


.. |required_by_bioconductor-psea| conda:required_by:: bioconductor-psea
.. |downloads_bioconductor-psea| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-psea.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-psea| image:: https://quay.io/repository/biocontainers/bioconductor-psea/status
   :target: https://quay.io/repository/biocontainers/bioconductor-psea







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-psea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-psea/README.html

