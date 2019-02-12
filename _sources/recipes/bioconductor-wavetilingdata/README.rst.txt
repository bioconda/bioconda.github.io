:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-wavetilingdata'
.. highlight: bash

bioconductor-wavetilingdata
===========================

.. conda:recipe:: bioconductor-wavetilingdata
   :replaces_section_title:

   Experiment and Annotation Data files used by the examples \/ vignette in the waveTiling package

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/waveTilingData.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-wavetilingdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wavetilingdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wavetilingdata/meta.yaml>`_

   


.. conda:package:: bioconductor-wavetilingdata

   |downloads_bioconductor-wavetilingdata| |docker_bioconductor-wavetilingdata|

   :versions: 1.18.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-wavetilingdata

   and update with::

      conda update bioconductor-wavetilingdata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-wavetilingdata:<tag>

   (see `bioconductor-wavetilingdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-wavetilingdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-wavetilingdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-wavetilingdata| image:: https://quay.io/repository/biocontainers/bioconductor-wavetilingdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-wavetilingdata
.. _`bioconductor-wavetilingdata/tags`: https://quay.io/repository/biocontainers/bioconductor-wavetilingdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-wavetilingdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-wavetilingdata/README.html