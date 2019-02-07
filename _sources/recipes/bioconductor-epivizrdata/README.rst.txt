.. title:: Package Recipe 'bioconductor-epivizrdata'
.. highlight: bash


bioconductor-epivizrdata
========================

.. conda:recipe:: bioconductor-epivizrdata
   :replaces_section_title:

   Serve data from Bioconductor Objects through a WebSocket connection.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/epivizrData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-epivizrdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epivizrdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epivizrdata/meta.yaml>`_
   :links: biotools: :biotools:`epivizrdata`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-epivizrdata

   |downloads_bioconductor-epivizrdata| |docker_bioconductor-epivizrdata|

   :versions: 1.10.0, 1.8.0, 1.6.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-ensembldb` >=2.6.0,<2.7.0 :conda:package:`bioconductor-epivizrserver` >=1.10.0,<1.11.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-organismdbi` >=1.24.0,<1.25.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-epivizrdata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-epivizrdata

   and update with::

      conda update bioconductor-epivizrdata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-epivizrdata


.. |required_by_bioconductor-epivizrdata| conda:required_by:: bioconductor-epivizrdata
.. |downloads_bioconductor-epivizrdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epivizrdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-epivizrdata| image:: https://quay.io/repository/biocontainers/bioconductor-epivizrdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epivizrdata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epivizrdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epivizrdata/README.html

