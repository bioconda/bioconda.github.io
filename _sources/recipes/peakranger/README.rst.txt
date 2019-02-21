:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'peakranger'
.. highlight: bash

peakranger
==========

.. conda:recipe:: peakranger
   :replaces_section_title:

   PeakRanger is a multi\-purporse software suite for analyzing next\-generation sequencing \(NGS\) data.

   :homepage: http://ranger.sourceforge.net
   :license: Artistic License 2.0
   :recipe: /`peakranger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peakranger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peakranger/meta.yaml>`_
   :links: biotools: :biotools:`peakranger`

   


.. conda:package:: peakranger

   |downloads_peakranger| |docker_peakranger|

   :versions: 1.18-3, 1.18-2, 1.18-1, 1.18-0
   
   :depends boost: >=1.66.0,<1.66.1.0a0
   
   :depends libstdcxx-ng: >=4.9
   
   :depends r-base: 
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install peakranger

   and update with::

      conda update peakranger

   or use the docker container::

      docker pull quay.io/biocontainers/peakranger:<tag>

   (see `peakranger/tags`_ for valid values for ``<tag>``)


.. |downloads_peakranger| image:: https://img.shields.io/conda/dn/bioconda/peakranger.svg?style=flat
   :alt:   (downloads)
.. |docker_peakranger| image:: https://quay.io/repository/biocontainers/peakranger/status
   :target: https://quay.io/repository/biocontainers/peakranger
.. _`peakranger/tags`: https://quay.io/repository/biocontainers/peakranger?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/peakranger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/peakranger/README.html