.. title:: Package Recipe 'bioconductor-causalr'
.. highlight: bash


bioconductor-causalr
====================

.. conda:recipe:: bioconductor-causalr
   :replaces_section_title:

   Causal network analysis methods for regulator prediction and network reconstruction from genome scale data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/CausalR.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-causalr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-causalr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-causalr/meta.yaml>`_
   :links: biotools: :biotools:`causalr`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-causalr

   |downloads_bioconductor-causalr| |docker_bioconductor-causalr|

   :versions: 1.14.1, 1.12.0, 1.10.0, 1.8.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-igraph`  

   :required~by: |required_by_bioconductor-causalr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-causalr

   and update with::

      conda update bioconductor-causalr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-causalr


.. |required_by_bioconductor-causalr| conda:required_by:: bioconductor-causalr
.. |downloads_bioconductor-causalr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-causalr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-causalr| image:: https://quay.io/repository/biocontainers/bioconductor-causalr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-causalr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-causalr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-causalr/README.html

