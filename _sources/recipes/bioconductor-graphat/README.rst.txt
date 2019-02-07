.. title:: Package Recipe 'bioconductor-graphat'
.. highlight: bash


bioconductor-graphat
====================

.. conda:recipe:: bioconductor-graphat
   :replaces_section_title:

   Functions and data used in Balasubramanian\, et al. \(2004\)

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GraphAT.html
   :license: LGPL
   :recipe: /`bioconductor-graphat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-graphat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-graphat/meta.yaml>`_
   :links: biotools: :biotools:`graphat`, doi: :doi:`10.1093/bioinformatics/bth405`

   


.. conda:package:: bioconductor-graphat

   |downloads_bioconductor-graphat| |docker_bioconductor-graphat|

   :versions: 1.54.0, 1.52.0, 1.50.0

   :depends: :conda:package:`bioconductor-graph` >=1.60.0,<1.61.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-mcmcpack`  

   :required~by: |required_by_bioconductor-graphat|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-graphat

   and update with::

      conda update bioconductor-graphat

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-graphat


.. |required_by_bioconductor-graphat| conda:required_by:: bioconductor-graphat
.. |downloads_bioconductor-graphat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-graphat.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-graphat| image:: https://quay.io/repository/biocontainers/bioconductor-graphat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-graphat







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-graphat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-graphat/README.html

