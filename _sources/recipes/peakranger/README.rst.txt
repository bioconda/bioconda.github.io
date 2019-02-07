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

   :versions: 1.18

   :depends: :conda:package:`boost` 1.60* :conda:package:`r` 3.2.2* :conda:package:`zlib`  

   :required~by: |required_by_peakranger|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install peakranger

   and update with::

      conda update peakranger

   or use the docker container::

      docker pull quay.io/repository/biocontainers/peakranger


.. |required_by_peakranger| conda:required_by:: peakranger
.. |downloads_peakranger| image:: https://img.shields.io/conda/dn/bioconda/peakranger.svg?style=flat
   :alt:   (downloads)
.. |docker_peakranger| image:: https://quay.io/repository/biocontainers/peakranger/status
   :target: https://quay.io/repository/biocontainers/peakranger







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/peakranger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/peakranger/README.html

