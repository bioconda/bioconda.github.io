:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gqtlbase'
.. highlight: bash

bioconductor-gqtlbase
=====================

.. conda:recipe:: bioconductor-gqtlbase
   :replaces_section_title:

   Infrastructure for eQTL\, mQTL and similar studies.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/gQTLBase.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gqtlbase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gqtlbase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gqtlbase/meta.yaml>`_

   


.. conda:package:: bioconductor-gqtlbase

   |downloads_bioconductor-gqtlbase| |docker_bioconductor-gqtlbase|

   :versions: 1.18.0-0, 1.16.0-1, 1.14.0-0
   
   :depends bioconductor-biocgenerics: >=0.32.0,<0.33.0
   :depends bioconductor-genomicfiles: >=1.22.0,<1.23.0
   :depends bioconductor-genomicranges: >=1.38.0,<1.39.0
   :depends bioconductor-rtracklayer: >=1.46.0,<1.47.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-batchjobs: 
   :depends r-bbmisc: 
   :depends r-bit: 
   :depends r-doparallel: 
   :depends r-ff: 
   :depends r-ffbase: 
   :depends r-foreach: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gqtlbase

   and update with::

      conda update bioconductor-gqtlbase

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gqtlbase:<tag>

   (see `bioconductor-gqtlbase/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gqtlbase| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gqtlbase.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gqtlbase
   :alt:   (downloads)
.. |docker_bioconductor-gqtlbase| image:: https://quay.io/repository/biocontainers/bioconductor-gqtlbase/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gqtlbase
.. _`bioconductor-gqtlbase/tags`: https://quay.io/repository/biocontainers/bioconductor-gqtlbase?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gqtlbase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gqtlbase/README.html