.. title:: Package Recipe 'bioconductor-ahensdbs'
.. highlight: bash


bioconductor-ahensdbs
=====================

.. conda:recipe:: bioconductor-ahensdbs
   :replaces_section_title:

   Supplies AnnotationHub with EnsDb Ensembl\-based annotation databases for all species. EnsDb SQLite databases are generated separately from Ensembl MySQL databases using functions from the ensembldb package employing the Ensembl Perl API.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/AHEnsDbs.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ahensdbs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ahensdbs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ahensdbs/meta.yaml>`_

   


.. conda:package:: bioconductor-ahensdbs

   |downloads_bioconductor-ahensdbs| |docker_bioconductor-ahensdbs|

   :versions: 1.0.8

   :depends: :conda:package:`bioconductor-annotationhubdata` >=1.12.0,<1.13.0 :conda:package:`bioconductor-ensembldb` >=2.6.0,<2.7.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-ahensdbs|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ahensdbs

   and update with::

      conda update bioconductor-ahensdbs

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-ahensdbs


.. |required_by_bioconductor-ahensdbs| conda:required_by:: bioconductor-ahensdbs
.. |downloads_bioconductor-ahensdbs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ahensdbs.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ahensdbs| image:: https://quay.io/repository/biocontainers/bioconductor-ahensdbs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ahensdbs







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ahensdbs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ahensdbs/README.html

