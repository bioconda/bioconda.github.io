.. title:: Package Recipe 'bioconductor-psicquic'
.. highlight: bash


bioconductor-psicquic
=====================

.. conda:recipe:: bioconductor-psicquic
   :replaces_section_title:

   PSICQUIC is a project within the HUPO Proteomics Standard Initiative \(HUPO\-PSI\).  It standardises programmatic access to molecular interaction databases.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/PSICQUIC.html
   :license: Apache License 2.0
   :recipe: /`bioconductor-psicquic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-psicquic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-psicquic/meta.yaml>`_
   :links: biotools: :biotools:`psicquic`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-psicquic

   |downloads_bioconductor-psicquic| |docker_bioconductor-psicquic|

   :versions: 1.20.0, 1.18.1, 1.16.1, 1.14.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biomart` >=2.38.0,<2.39.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-httr`  :conda:package:`r-plyr`  :conda:package:`r-rcurl`  

   :required~by: |required_by_bioconductor-psicquic|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-psicquic

   and update with::

      conda update bioconductor-psicquic

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-psicquic


.. |required_by_bioconductor-psicquic| conda:required_by:: bioconductor-psicquic
.. |downloads_bioconductor-psicquic| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-psicquic.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-psicquic| image:: https://quay.io/repository/biocontainers/bioconductor-psicquic/status
   :target: https://quay.io/repository/biocontainers/bioconductor-psicquic







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-psicquic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-psicquic/README.html

