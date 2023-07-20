:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biodbuniprot'
.. highlight: bash

bioconductor-biodbuniprot
=========================

.. conda:recipe:: bioconductor-biodbuniprot
   :replaces_section_title:
   :noindex:

   biodbUniprot\, a library for connecting to the Uniprot Database

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/biodbUniprot.html
   :license: AGPL-3
   :recipe: /`bioconductor-biodbuniprot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biodbuniprot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biodbuniprot/meta.yaml>`_

   The biodbUniprot library is an extension of the biodb framework package. It provides access to the UniProt database. It allows to retrieve entries by their accession number\, and run web service queries for searching for entries.


.. conda:package:: bioconductor-biodbuniprot

   |downloads_bioconductor-biodbuniprot| |docker_bioconductor-biodbuniprot|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biodb: ``>=1.8.0,<1.9.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-r6: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biodbuniprot

   and update with::

      conda update bioconductor-biodbuniprot

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biodbuniprot:<tag>

   (see `bioconductor-biodbuniprot/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biodbuniprot| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biodbuniprot.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biodbuniprot
   :alt:   (downloads)
.. |docker_bioconductor-biodbuniprot| image:: https://quay.io/repository/biocontainers/bioconductor-biodbuniprot/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biodbuniprot
.. _`bioconductor-biodbuniprot/tags`: https://quay.io/repository/biocontainers/bioconductor-biodbuniprot?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biodbuniprot";
        var versions = ["1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biodbuniprot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biodbuniprot/README.html