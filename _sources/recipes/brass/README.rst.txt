.. title:: Package Recipe 'brass'
.. highlight: bash


brass
=====

.. conda:recipe:: brass
   :replaces_section_title:

   BRASS analyses one or more related BAM files of paired\-end sequencing to determine potential rearrangement breakpoints.

   :homepage: https://github.com/cancerit/BRASS
   :license: AGPL-3-0
   :recipe: /`brass <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/brass>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/brass/meta.yaml>`_

   


.. conda:package:: brass

   |downloads_brass| |docker_brass|

   :versions: 5.1.6

   :depends: :conda:package:`bedtools`  :conda:package:`blat`  :conda:package:`cansam`  :conda:package:`exonerate`  :conda:package:`libgcc`  :conda:package:`perl-grass`  :conda:package:`perl-pcap`  :conda:package:`velvet`  

   :required~by: |required_by_brass|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install brass

   and update with::

      conda update brass

   or use the docker container::

      docker pull quay.io/repository/biocontainers/brass


.. |required_by_brass| conda:required_by:: brass
.. |downloads_brass| image:: https://img.shields.io/conda/dn/bioconda/brass.svg?style=flat
   :alt:   (downloads)
.. |docker_brass| image:: https://quay.io/repository/biocontainers/brass/status
   :target: https://quay.io/repository/biocontainers/brass







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/brass/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/brass/README.html

