.. title:: Package Recipe 'bioconductor-clusterjudge'
.. highlight: bash


bioconductor-clusterjudge
=========================

.. conda:recipe:: bioconductor-clusterjudge
   :replaces_section_title:

   ClusterJudge implements the functions\, examples and other software published as an algorithm by Gibbons\, FD and Roth FP. The article is called \"Judging the Quality of Gene Expression\-Based Clustering Methods Using Gene Annotation\" and it appeared in Genome Research\, vol. 12\, pp1574\-1581 \(2002\). See package\?ClusterJudge for an overview.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ClusterJudge.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-clusterjudge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clusterjudge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clusterjudge/meta.yaml>`_

   


.. conda:package:: bioconductor-clusterjudge

   |downloads_bioconductor-clusterjudge| |docker_bioconductor-clusterjudge|

   :versions: 1.4.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-httr`  :conda:package:`r-infotheo`  :conda:package:`r-jsonlite`  :conda:package:`r-lattice`  :conda:package:`r-latticeextra`  

   :required~by: |required_by_bioconductor-clusterjudge|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-clusterjudge

   and update with::

      conda update bioconductor-clusterjudge

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-clusterjudge


.. |required_by_bioconductor-clusterjudge| conda:required_by:: bioconductor-clusterjudge
.. |downloads_bioconductor-clusterjudge| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clusterjudge.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-clusterjudge| image:: https://quay.io/repository/biocontainers/bioconductor-clusterjudge/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clusterjudge







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clusterjudge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clusterjudge/README.html

