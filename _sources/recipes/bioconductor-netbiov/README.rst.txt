.. title:: Package Recipe 'bioconductor-netbiov'
.. highlight: bash


bioconductor-netbiov
====================

.. conda:recipe:: bioconductor-netbiov
   :replaces_section_title:

   A package that provides an effective visualization of large biological networks

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/netbiov.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-netbiov <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netbiov>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netbiov/meta.yaml>`_
   :links: biotools: :biotools:`netbiov`, doi: :doi:`10.1093/bioinformatics/btu384`

   


.. conda:package:: bioconductor-netbiov

   |downloads_bioconductor-netbiov| |docker_bioconductor-netbiov|

   :versions: 1.16.0, 1.14.0, 1.12.0, 1.10.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-igraph` >=0.7.1 

   :required~by: |required_by_bioconductor-netbiov|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-netbiov

   and update with::

      conda update bioconductor-netbiov

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-netbiov


.. |required_by_bioconductor-netbiov| conda:required_by:: bioconductor-netbiov
.. |downloads_bioconductor-netbiov| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-netbiov.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-netbiov| image:: https://quay.io/repository/biocontainers/bioconductor-netbiov/status
   :target: https://quay.io/repository/biocontainers/bioconductor-netbiov







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-netbiov/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-netbiov/README.html

