:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-snpediar'
.. highlight: bash

bioconductor-snpediar
=====================

.. conda:recipe:: bioconductor-snpediar
   :replaces_section_title:

   SNPediaR provides some tools for downloading and parsing data from the SNPedia web site \<http\:\/\/www.snpedia.com\>. The implemented functions allow users to import the wiki text available in SNPedia pages and to extract the most relevant information out of them. If some information in the downloaded pages is not automatically processed by the library functions\, users can easily implement their own parsers to access it in an efficient way.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/SNPediaR.html
   :license: GPL-2
   :recipe: /`bioconductor-snpediar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snpediar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snpediar/meta.yaml>`_
   :links: biotools: :biotools:`snpediar`, doi: :doi:`10.1007/978-1-4419-9863-7_1039`

   


.. conda:package:: bioconductor-snpediar

   |downloads_bioconductor-snpediar| |docker_bioconductor-snpediar|

   :versions: 1.10.0-0, 1.8.0-0, 1.6.0-0, 1.4.0-0, 1.2.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-jsonlite: 
   :depends r-rcurl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-snpediar

   and update with::

      conda update bioconductor-snpediar

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-snpediar:<tag>

   (see `bioconductor-snpediar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-snpediar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-snpediar.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-snpediar| image:: https://quay.io/repository/biocontainers/bioconductor-snpediar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-snpediar
.. _`bioconductor-snpediar/tags`: https://quay.io/repository/biocontainers/bioconductor-snpediar?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-snpediar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-snpediar/README.html