.. title:: Package Recipe 'bioconductor-fdb.ucsc.trnas'
.. highlight: bash


bioconductor-fdb.ucsc.trnas
===========================

.. conda:recipe:: bioconductor-fdb.ucsc.trnas
   :replaces_section_title:

   Exposes an annotation databases generated from UCSC by exposing these as FeatureDb objects

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/FDb.UCSC.tRNAs.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-fdb.ucsc.trnas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fdb.ucsc.trnas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fdb.ucsc.trnas/meta.yaml>`_

   


.. conda:package:: bioconductor-fdb.ucsc.trnas

   |downloads_bioconductor-fdb.ucsc.trnas| |docker_bioconductor-fdb.ucsc.trnas|

   :versions: 1.0.1

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-fdb.ucsc.trnas|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-fdb.ucsc.trnas

   and update with::

      conda update bioconductor-fdb.ucsc.trnas

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-fdb.ucsc.trnas


.. |required_by_bioconductor-fdb.ucsc.trnas| conda:required_by:: bioconductor-fdb.ucsc.trnas
.. |downloads_bioconductor-fdb.ucsc.trnas| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fdb.ucsc.trnas.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-fdb.ucsc.trnas| image:: https://quay.io/repository/biocontainers/bioconductor-fdb.ucsc.trnas/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fdb.ucsc.trnas







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fdb.ucsc.trnas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fdb.ucsc.trnas/README.html

