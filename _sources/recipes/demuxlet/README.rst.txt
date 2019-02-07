.. title:: Package Recipe 'demuxlet'
.. highlight: bash


demuxlet
========

.. conda:recipe:: demuxlet
   :replaces_section_title:

   Genetic multiplexing of barcoded single cell RNA\-seq

   :homepage: https://github.com/statgen/demuxlet
   :license: GPL3
   :recipe: /`demuxlet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/demuxlet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/demuxlet/meta.yaml>`_

   


.. conda:package:: demuxlet

   |downloads_demuxlet| |docker_demuxlet|

   :versions: 1.0

   :depends: :conda:package:`bzip2` >=1.0.6,<2.0a0 :conda:package:`curl` >=7.59.0,<8.0a0 :conda:package:`htslib` >=1.9,<1.10.0a0 :conda:package:`libdeflate` >=1.0,<1.1.0a0 :conda:package:`libgcc-ng` >=4.9 :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`libtool`  :conda:package:`samtools`  :conda:package:`xz` >=5.2.4,<5.3.0a0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_demuxlet|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install demuxlet

   and update with::

      conda update demuxlet

   or use the docker container::

      docker pull quay.io/repository/biocontainers/demuxlet


.. |required_by_demuxlet| conda:required_by:: demuxlet
.. |downloads_demuxlet| image:: https://img.shields.io/conda/dn/bioconda/demuxlet.svg?style=flat
   :alt:   (downloads)
.. |docker_demuxlet| image:: https://quay.io/repository/biocontainers/demuxlet/status
   :target: https://quay.io/repository/biocontainers/demuxlet







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/demuxlet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/demuxlet/README.html

