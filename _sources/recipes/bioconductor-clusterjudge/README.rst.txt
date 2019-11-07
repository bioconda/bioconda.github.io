:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-clusterjudge'
.. highlight: bash

bioconductor-clusterjudge
=========================

.. conda:recipe:: bioconductor-clusterjudge
   :replaces_section_title:

   Judging Quality of Clustering Methods using Mutual Information

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/ClusterJudge.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-clusterjudge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clusterjudge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clusterjudge/meta.yaml>`_

   ClusterJudge implements the functions\, examples and other software published as an algorithm by Gibbons\, FD and Roth FP. The article is called \"Judging the Quality of Gene Expression\-Based Clustering Methods Using Gene Annotation\" and it appeared in Genome Research\, vol. 12\, pp1574\-1581 \(2002\). See package\?ClusterJudge for an overview.


.. conda:package:: bioconductor-clusterjudge

   |downloads_bioconductor-clusterjudge| |docker_bioconductor-clusterjudge|

   :versions: 1.8.0-0, 1.6.0-1, 1.6.0-0, 1.4.0-0
   
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-httr: 
   :depends r-infotheo: 
   :depends r-jsonlite: 
   :depends r-lattice: 
   :depends r-latticeextra: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-clusterjudge

   and update with::

      conda update bioconductor-clusterjudge

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-clusterjudge:<tag>

   (see `bioconductor-clusterjudge/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-clusterjudge| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clusterjudge.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-clusterjudge
   :alt:   (downloads)
.. |docker_bioconductor-clusterjudge| image:: https://quay.io/repository/biocontainers/bioconductor-clusterjudge/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clusterjudge
.. _`bioconductor-clusterjudge/tags`: https://quay.io/repository/biocontainers/bioconductor-clusterjudge?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clusterjudge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clusterjudge/README.html