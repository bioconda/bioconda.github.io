:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pics'
.. highlight: bash

bioconductor-pics
=================

.. conda:recipe:: bioconductor-pics
   :replaces_section_title:

   Probabilistic inference of ChIP\-Seq using an empirical Bayes mixture model approach.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/PICS.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pics/meta.yaml>`_
   :links: biotools: :biotools:`pics`

   


.. conda:package:: bioconductor-pics

   |downloads_bioconductor-pics| |docker_bioconductor-pics|

   :versions: 2.26.0-0, 2.24.0-0, 2.22.0-0, 2.20.0-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-genomicalignments: >=1.18.0,<1.19.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends gsl: >=2.4,<2.5.0a0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pics

   and update with::

      conda update bioconductor-pics

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pics:<tag>

   (see `bioconductor-pics/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pics.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-pics| image:: https://quay.io/repository/biocontainers/bioconductor-pics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pics
.. _`bioconductor-pics/tags`: https://quay.io/repository/biocontainers/bioconductor-pics?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pics/README.html