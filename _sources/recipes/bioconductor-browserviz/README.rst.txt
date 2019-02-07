.. title:: Package Recipe 'bioconductor-browserviz'
.. highlight: bash


bioconductor-browserviz
=======================

.. conda:recipe:: bioconductor-browserviz
   :replaces_section_title:

   Interactvive graphics in a web browser from R\, using websockets and JSON.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/BrowserViz.html
   :license: GPL-2
   :recipe: /`bioconductor-browserviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-browserviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-browserviz/meta.yaml>`_
   :links: biotools: :biotools:`browserviz`, doi: :doi:`10.1007/978-1-4302-4426-4_17`

   


.. conda:package:: bioconductor-browserviz

   |downloads_bioconductor-browserviz| |docker_bioconductor-browserviz|

   :versions: 2.4.0, 2.2.0, 1.10.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-httpuv` >=1.4.0 :conda:package:`r-jsonlite` >=1.5 

   :required~by: |required_by_bioconductor-browserviz|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-browserviz

   and update with::

      conda update bioconductor-browserviz

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-browserviz


.. |required_by_bioconductor-browserviz| conda:required_by:: bioconductor-browserviz
.. |downloads_bioconductor-browserviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-browserviz.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-browserviz| image:: https://quay.io/repository/biocontainers/bioconductor-browserviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-browserviz







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-browserviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-browserviz/README.html

