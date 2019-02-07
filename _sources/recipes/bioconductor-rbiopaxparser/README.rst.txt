.. title:: Package Recipe 'bioconductor-rbiopaxparser'
.. highlight: bash


bioconductor-rbiopaxparser
==========================

.. conda:recipe:: bioconductor-rbiopaxparser
   :replaces_section_title:

   Parses BioPAX files and represents them in R\, at the moment BioPAX level 2 and level 3 are supported.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/rBiopaxParser.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-rbiopaxparser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbiopaxparser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbiopaxparser/meta.yaml>`_
   :links: biotools: :biotools:`rbiopaxparser`

   


.. conda:package:: bioconductor-rbiopaxparser

   |downloads_bioconductor-rbiopaxparser| |docker_bioconductor-rbiopaxparser|

   :versions: 2.22.0, 2.20.0, 2.18.0, 2.16.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-xml`  

   :required~by: |required_by_bioconductor-rbiopaxparser|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rbiopaxparser

   and update with::

      conda update bioconductor-rbiopaxparser

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rbiopaxparser


.. |required_by_bioconductor-rbiopaxparser| conda:required_by:: bioconductor-rbiopaxparser
.. |downloads_bioconductor-rbiopaxparser| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rbiopaxparser.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rbiopaxparser| image:: https://quay.io/repository/biocontainers/bioconductor-rbiopaxparser/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rbiopaxparser







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rbiopaxparser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rbiopaxparser/README.html

