:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-minionsummarydata'
.. highlight: bash

bioconductor-minionsummarydata
==============================

.. conda:recipe:: bioconductor-minionsummarydata
   :replaces_section_title:
   :noindex:

   Summarised MinION sequencing data published by Ashton et al. 2015

   :homepage: https://bioconductor.org/packages/3.11/data/experiment/html/minionSummaryData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-minionsummarydata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-minionsummarydata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-minionsummarydata/meta.yaml>`_

   Summarised MinION sequencing data for Salmonella Typhi published by Ashton et al. in 2015. Three replicate runs are each provided as Fast5Summary objects.


.. conda:package:: bioconductor-minionsummarydata

   |downloads_bioconductor-minionsummarydata| |docker_bioconductor-minionsummarydata|

   :versions:
      
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``

      

   
   :depends curl: ``>=7.69.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-minionsummarydata

   and update with::

      conda update bioconductor-minionsummarydata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-minionsummarydata:<tag>

   (see `bioconductor-minionsummarydata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-minionsummarydata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-minionsummarydata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-minionsummarydata
   :alt:   (downloads)
.. |docker_bioconductor-minionsummarydata| image:: https://quay.io/repository/biocontainers/bioconductor-minionsummarydata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-minionsummarydata
.. _`bioconductor-minionsummarydata/tags`: https://quay.io/repository/biocontainers/bioconductor-minionsummarydata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-minionsummarydata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-minionsummarydata/README.html