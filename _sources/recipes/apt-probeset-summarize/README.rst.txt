:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'apt-probeset-summarize'
.. highlight: bash

apt-probeset-summarize
======================

.. conda:recipe:: apt-probeset-summarize
   :replaces_section_title:

   From Affymetrix Power Tools package. apt\-probeset\-summarize is program for analyzing expression arrays including 3\' IVT and exon arrays. Supports background correction \(MAS5\,RMA\)\, normalization \(linear scaling\, quantile\, sketch\)\, and summarization \(PLIER\, RMA\, MAS5\) methods.

   :homepage: https://downloads.thermofisher.com
   :license: GNU GENERAL PUBLIC LICENSE Version 2
   :recipe: /`apt-probeset-summarize <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/apt-probeset-summarize>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/apt-probeset-summarize/meta.yaml>`_

   


.. conda:package:: apt-probeset-summarize

   |downloads_apt-probeset-summarize| |docker_apt-probeset-summarize|

   :versions: 2.10.0-0
   
   :depends libstdcxx-ng: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install apt-probeset-summarize

   and update with::

      conda update apt-probeset-summarize

   or use the docker container::

      docker pull quay.io/biocontainers/apt-probeset-summarize:<tag>

   (see `apt-probeset-summarize/tags`_ for valid values for ``<tag>``)


.. |downloads_apt-probeset-summarize| image:: https://img.shields.io/conda/dn/bioconda/apt-probeset-summarize.svg?style=flat
   :alt:   (downloads)
.. |docker_apt-probeset-summarize| image:: https://quay.io/repository/biocontainers/apt-probeset-summarize/status
   :target: https://quay.io/repository/biocontainers/apt-probeset-summarize
.. _`apt-probeset-summarize/tags`: https://quay.io/repository/biocontainers/apt-probeset-summarize?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/apt-probeset-summarize/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/apt-probeset-summarize/README.html