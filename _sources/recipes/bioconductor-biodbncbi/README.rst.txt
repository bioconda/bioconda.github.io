:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biodbncbi'
.. highlight: bash

bioconductor-biodbncbi
======================

.. conda:recipe:: bioconductor-biodbncbi
   :replaces_section_title:
   :noindex:

   biodbNcbi\, a library for connecting to NCBI Databases.

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/biodbNcbi.html
   :license: AGPL-3
   :recipe: /`bioconductor-biodbncbi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biodbncbi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biodbncbi/meta.yaml>`_

   The biodbNcbi library provides access to the NCBI databases CCDS\, Gene\, Pubchem Comp and Pubchem Subst\, using biodb package framework. It allows to retrieve entries by their accession number. Web services can be accessed for searching the database by name or mass.


.. conda:package:: bioconductor-biodbncbi

   |downloads_bioconductor-biodbncbi| |docker_bioconductor-biodbncbi|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-biodb: ``>=1.6.0,<1.7.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-chk: 
   :depends r-r6: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biodbncbi

   and update with::

      conda update bioconductor-biodbncbi

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biodbncbi:<tag>

   (see `bioconductor-biodbncbi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biodbncbi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biodbncbi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biodbncbi
   :alt:   (downloads)
.. |docker_bioconductor-biodbncbi| image:: https://quay.io/repository/biocontainers/bioconductor-biodbncbi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biodbncbi
.. _`bioconductor-biodbncbi/tags`: https://quay.io/repository/biocontainers/bioconductor-biodbncbi?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biodbncbi";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biodbncbi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biodbncbi/README.html