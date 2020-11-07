:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-derfinderdata'
.. highlight: bash

bioconductor-derfinderdata
==========================

.. conda:recipe:: bioconductor-derfinderdata
   :replaces_section_title:
   :noindex:

   Processed BigWigs from BrainSpan for examples

   :homepage: https://bioconductor.org/packages/3.12/data/experiment/html/derfinderData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-derfinderdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-derfinderdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-derfinderdata/meta.yaml>`_

   Processed 22 samples from BrainSpan keeping only the information for chromosome 21. Data is stored in the BigWig format and is used for examples in other packages.


.. conda:package:: bioconductor-derfinderdata

   |downloads_bioconductor-derfinderdata| |docker_bioconductor-derfinderdata|

   :versions:
      
      

      ``2.8.0-0``,  ``2.7.1-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.0.0-0``

      

   
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-derfinderdata

   and update with::

      conda update bioconductor-derfinderdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-derfinderdata:<tag>

   (see `bioconductor-derfinderdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-derfinderdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-derfinderdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-derfinderdata
   :alt:   (downloads)
.. |docker_bioconductor-derfinderdata| image:: https://quay.io/repository/biocontainers/bioconductor-derfinderdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-derfinderdata
.. _`bioconductor-derfinderdata/tags`: https://quay.io/repository/biocontainers/bioconductor-derfinderdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-derfinderdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-derfinderdata/README.html