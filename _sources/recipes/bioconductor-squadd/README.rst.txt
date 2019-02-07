.. title:: Package Recipe 'bioconductor-squadd'
.. highlight: bash


bioconductor-squadd
===================

.. conda:recipe:: bioconductor-squadd
   :replaces_section_title:

   This package SQUADD is a SQUAD add\-on. It permits to generate SQUAD simulation matrix\, prediction Heat\-Map and Correlation Circle from PCA analysis.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/SQUADD.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-squadd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-squadd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-squadd/meta.yaml>`_
   :links: biotools: :biotools:`squadd`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-squadd

   |downloads_bioconductor-squadd| |docker_bioconductor-squadd|

   :versions: 1.32.0, 1.30.0, 1.28.0, 1.26.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-rcolorbrewer`  

   :required~by: |required_by_bioconductor-squadd|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-squadd

   and update with::

      conda update bioconductor-squadd

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-squadd


.. |required_by_bioconductor-squadd| conda:required_by:: bioconductor-squadd
.. |downloads_bioconductor-squadd| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-squadd.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-squadd| image:: https://quay.io/repository/biocontainers/bioconductor-squadd/status
   :target: https://quay.io/repository/biocontainers/bioconductor-squadd







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-squadd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-squadd/README.html

