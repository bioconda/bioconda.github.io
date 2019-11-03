:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ping'
.. highlight: bash

bioconductor-ping
=================

.. conda:recipe:: bioconductor-ping
   :replaces_section_title:

   Probabilistic inference of ChIP\-Seq using an empirical Bayes mixture model approach.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/PING.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ping <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ping>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ping/meta.yaml>`_
   :links: biotools: :biotools:`ping`

   


.. conda:package:: bioconductor-ping

   |downloads_bioconductor-ping| |docker_bioconductor-ping|

   :versions: 2.30.0-0, 2.28.0-1, 2.26.0-0, 2.24.0-0, 2.22.0-0, 2.20.0-0
   
   :depends bioconductor-biocgenerics: >=0.32.0,<0.33.0
   :depends bioconductor-bsgenome: >=1.54.0,<1.55.0
   :depends bioconductor-chipseq: >=1.36.0,<1.37.0
   :depends bioconductor-genomicranges: >=1.38.0,<1.39.0
   :depends bioconductor-gviz: >=1.30.0,<1.31.0
   :depends bioconductor-iranges: >=2.20.0,<2.21.0
   :depends bioconductor-pics: >=2.30.0,<2.31.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-fda: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ping

   and update with::

      conda update bioconductor-ping

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ping:<tag>

   (see `bioconductor-ping/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ping| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ping.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ping
   :alt:   (downloads)
.. |docker_bioconductor-ping| image:: https://quay.io/repository/biocontainers/bioconductor-ping/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ping
.. _`bioconductor-ping/tags`: https://quay.io/repository/biocontainers/bioconductor-ping?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ping/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ping/README.html