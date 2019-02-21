:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rbsurv'
.. highlight: bash

bioconductor-rbsurv
===================

.. conda:recipe:: bioconductor-rbsurv
   :replaces_section_title:

   This package selects genes associated with survival.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/rbsurv.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-rbsurv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbsurv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbsurv/meta.yaml>`_
   :links: biotools: :biotools:`rbsurv`, doi: :doi:`10.18637/jss.v029.i01`

   


.. conda:package:: bioconductor-rbsurv

   |downloads_bioconductor-rbsurv| |docker_bioconductor-rbsurv|

   :versions: 2.40.0-0, 2.38.0-0, 2.36.0-0, 2.34.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-survival: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rbsurv

   and update with::

      conda update bioconductor-rbsurv

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rbsurv:<tag>

   (see `bioconductor-rbsurv/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rbsurv| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rbsurv.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rbsurv| image:: https://quay.io/repository/biocontainers/bioconductor-rbsurv/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rbsurv
.. _`bioconductor-rbsurv/tags`: https://quay.io/repository/biocontainers/bioconductor-rbsurv?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rbsurv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rbsurv/README.html