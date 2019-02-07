.. title:: Package Recipe 'bioconductor-plpe'
.. highlight: bash


bioconductor-plpe
=================

.. conda:recipe:: bioconductor-plpe
   :replaces_section_title:

   This package performs tests for paired high\-throughput data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/PLPE.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-plpe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plpe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plpe/meta.yaml>`_
   :links: biotools: :biotools:`plpe`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-plpe

   |downloads_bioconductor-plpe| |docker_bioconductor-plpe|

   :versions: 1.42.0, 1.40.0, 1.38.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-lpe` >=1.56.0,<1.57.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-mass`  

   :required~by: |required_by_bioconductor-plpe|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-plpe

   and update with::

      conda update bioconductor-plpe

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-plpe


.. |required_by_bioconductor-plpe| conda:required_by:: bioconductor-plpe
.. |downloads_bioconductor-plpe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-plpe.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-plpe| image:: https://quay.io/repository/biocontainers/bioconductor-plpe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-plpe







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-plpe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-plpe/README.html

