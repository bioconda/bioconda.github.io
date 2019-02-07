.. title:: Package Recipe 'bioconductor-keggrest'
.. highlight: bash


bioconductor-keggrest
=====================

.. conda:recipe:: bioconductor-keggrest
   :replaces_section_title:

   A package that provides a client interface to the KEGG REST server. Based on KEGGSOAP by J. Zhang\, R. Gentleman\, and Marc Carlson\, and KEGG \(python package\) by Aurelien Mazurie.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/KEGGREST.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-keggrest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-keggrest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-keggrest/meta.yaml>`_
   :links: biotools: :biotools:`keggrest`, doi: :doi:`10.1007/s11845-015-1283-8`

   


.. conda:package:: bioconductor-keggrest

   |downloads_bioconductor-keggrest| |docker_bioconductor-keggrest|

   :versions: 1.22.0, 1.20.2, 1.18.0, 1.16.1, 1.14.1, 1.12.3, 1.10.1

   :depends: :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-httr`  :conda:package:`r-png`  

   :required~by: |required_by_bioconductor-keggrest|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-keggrest

   and update with::

      conda update bioconductor-keggrest

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-keggrest


.. |required_by_bioconductor-keggrest| conda:required_by:: bioconductor-keggrest
.. |downloads_bioconductor-keggrest| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-keggrest.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-keggrest| image:: https://quay.io/repository/biocontainers/bioconductor-keggrest/status
   :target: https://quay.io/repository/biocontainers/bioconductor-keggrest







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-keggrest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-keggrest/README.html

