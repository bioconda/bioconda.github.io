.. title:: Package Recipe 'bioconductor-rgreat'
.. highlight: bash


bioconductor-rgreat
===================

.. conda:recipe:: bioconductor-rgreat
   :replaces_section_title:

   This package makes GREAT \(Genomic Regions Enrichment of Annotations Tool\) analysis automatic by constructing a HTTP POST request according to user\'s input and automatically retrieving results from GREAT web server.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/rGREAT.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-rgreat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgreat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgreat/meta.yaml>`_
   :links: biotools: :biotools:`rgreat`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-rgreat

   |downloads_bioconductor-rgreat| |docker_bioconductor-rgreat|

   :versions: 1.14.0, 1.12.1, 1.11.1, 1.8.0

   :depends: :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-getoptlong` >=0.0.9 :conda:package:`r-rcurl`  :conda:package:`r-rjson`  

   :required~by: |required_by_bioconductor-rgreat|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rgreat

   and update with::

      conda update bioconductor-rgreat

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rgreat


.. |required_by_bioconductor-rgreat| conda:required_by:: bioconductor-rgreat
.. |downloads_bioconductor-rgreat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rgreat.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rgreat| image:: https://quay.io/repository/biocontainers/bioconductor-rgreat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rgreat







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rgreat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rgreat/README.html

