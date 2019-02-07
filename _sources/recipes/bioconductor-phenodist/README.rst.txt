.. title:: Package Recipe 'bioconductor-phenodist'
.. highlight: bash


bioconductor-phenodist
======================

.. conda:recipe:: bioconductor-phenodist
   :replaces_section_title:

   PhenoDist is designed for measuring phenotypic distance in image\-based high\-throughput screening\, in order to identify strong phenotypes and to group treatments into functional clusters.

   :homepage: http://bioconductor.org/packages/3.7/bioc/html/phenoDist.html
   :license: LGPL-2.1
   :recipe: /`bioconductor-phenodist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phenodist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phenodist/meta.yaml>`_
   :links: biotools: :biotools:`phenodist`

   


.. conda:package:: bioconductor-phenodist

   |downloads_bioconductor-phenodist| |docker_bioconductor-phenodist|

   :versions: 1.27.0, 1.26.0

   :depends: :conda:package:`bioconductor-imagehts` >=1.30.0,<1.32.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-e1071`  

   :required~by: |required_by_bioconductor-phenodist|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-phenodist

   and update with::

      conda update bioconductor-phenodist

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-phenodist


.. |required_by_bioconductor-phenodist| conda:required_by:: bioconductor-phenodist
.. |downloads_bioconductor-phenodist| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-phenodist.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-phenodist| image:: https://quay.io/repository/biocontainers/bioconductor-phenodist/status
   :target: https://quay.io/repository/biocontainers/bioconductor-phenodist







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-phenodist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-phenodist/README.html

