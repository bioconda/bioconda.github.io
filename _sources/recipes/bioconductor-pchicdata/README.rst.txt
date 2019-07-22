:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pchicdata'
.. highlight: bash

bioconductor-pchicdata
======================

.. conda:recipe:: bioconductor-pchicdata
   :replaces_section_title:

   Subsets of Promoter Capture Hi\-C data conveniently packaged for Chicago users. Data includes interactions detected for chromosomes 20 and 21 in GM12878 cells and for chromosomes 18 and 19 in mESC.

   :homepage: https://bioconductor.org/packages/3.9/data/experiment/html/PCHiCdata.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pchicdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pchicdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pchicdata/meta.yaml>`_

   


.. conda:package:: bioconductor-pchicdata

   |downloads_bioconductor-pchicdata| |docker_bioconductor-pchicdata|

   :versions: 1.12.0-1, 1.12.0-0, 1.10.0-0, 1.8.0-0, 1.6.0-1, 1.6.0-0, 1.4.0-0, 1.2.0-0
   
   :depends bioconductor-chicago: >=1.12.0,<1.13.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pchicdata

   and update with::

      conda update bioconductor-pchicdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pchicdata:<tag>

   (see `bioconductor-pchicdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pchicdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pchicdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pchicdata
   :alt:   (downloads)
.. |docker_bioconductor-pchicdata| image:: https://quay.io/repository/biocontainers/bioconductor-pchicdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pchicdata
.. _`bioconductor-pchicdata/tags`: https://quay.io/repository/biocontainers/bioconductor-pchicdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pchicdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pchicdata/README.html