.. title:: Package Recipe 'bioconductor-genomeinfodb'
.. highlight: bash


bioconductor-genomeinfodb
=========================

.. conda:recipe:: bioconductor-genomeinfodb
   :replaces_section_title:

   Contains data and functions that define and allow translation between different chromosome sequence naming conventions \(e.g.\, \"chr1\" versus \"1\"\)\, including a function that attempts to place sequence names in their natural\, rather than lexicographic\, order.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GenomeInfoDb.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genomeinfodb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomeinfodb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomeinfodb/meta.yaml>`_
   :links: biotools: :biotools:`genomeinfodb`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-genomeinfodb

   |downloads_bioconductor-genomeinfodb| |docker_bioconductor-genomeinfodb|

   :versions: 1.18.1, 1.16.0, 1.14.0, 1.12.3, 1.10.3, 1.8.7, 1.6.3, 1.6.1, 1.6.0, 1.4.3

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-genomeinfodbdata` >=1.2.0,<1.3.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-rcurl`  

   :required~by: |required_by_bioconductor-genomeinfodb|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genomeinfodb

   and update with::

      conda update bioconductor-genomeinfodb

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-genomeinfodb


.. |required_by_bioconductor-genomeinfodb| conda:required_by:: bioconductor-genomeinfodb
.. |downloads_bioconductor-genomeinfodb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomeinfodb.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-genomeinfodb| image:: https://quay.io/repository/biocontainers/bioconductor-genomeinfodb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomeinfodb







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomeinfodb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomeinfodb/README.html

