:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-snapcount'
.. highlight: bash

bioconductor-snapcount
======================

.. conda:recipe:: bioconductor-snapcount
   :replaces_section_title:
   :noindex:

   R\/Bioconductor Package for interfacing with Snaptron for rapid querying of expression counts

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/snapcount.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-snapcount <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snapcount>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snapcount/meta.yaml>`_

   snapcount is a client interface to the Snaptron webservices which support querying by gene name or genomic region. Results include raw expression counts derived from alignment of RNA\-seq samples and\/or various summarized measures of expression across one or more regions\/genes per\-sample \(e.g. percent spliced in\).


.. conda:package:: bioconductor-snapcount

   |downloads_bioconductor-snapcount| |docker_bioconductor-snapcount|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-magrittr: 
   :depends r-matrix: 
   :depends r-purrr: 
   :depends r-r6: 
   :depends r-rlang: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-snapcount

   and update with::

      conda update bioconductor-snapcount

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-snapcount:<tag>

   (see `bioconductor-snapcount/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-snapcount| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-snapcount.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-snapcount
   :alt:   (downloads)
.. |docker_bioconductor-snapcount| image:: https://quay.io/repository/biocontainers/bioconductor-snapcount/status
   :target: https://quay.io/repository/biocontainers/bioconductor-snapcount
.. _`bioconductor-snapcount/tags`: https://quay.io/repository/biocontainers/bioconductor-snapcount?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-snapcount/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-snapcount/README.html