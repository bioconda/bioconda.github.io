.. title:: Package Recipe 'bioconductor-rbcbook1'
.. highlight: bash


bioconductor-rbcbook1
=====================

.. conda:recipe:: bioconductor-rbcbook1
   :replaces_section_title:

   tools for building book

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/RbcBook1.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rbcbook1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbcbook1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbcbook1/meta.yaml>`_
   :links: biotools: :biotools:`rbcbook1`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-rbcbook1

   |downloads_bioconductor-rbcbook1| |docker_bioconductor-rbcbook1|

   :versions: 1.50.0, 1.48.0, 1.46.0, 1.44.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-graph` >=1.60.0,<1.61.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-rpart`  

   :required~by: |required_by_bioconductor-rbcbook1|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rbcbook1

   and update with::

      conda update bioconductor-rbcbook1

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rbcbook1


.. |required_by_bioconductor-rbcbook1| conda:required_by:: bioconductor-rbcbook1
.. |downloads_bioconductor-rbcbook1| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rbcbook1.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rbcbook1| image:: https://quay.io/repository/biocontainers/bioconductor-rbcbook1/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rbcbook1







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rbcbook1/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rbcbook1/README.html

