.. title:: Package Recipe 'motus'
.. highlight: bash


motus
=====

.. conda:recipe:: motus
   :replaces_section_title:

   Marker gene\-based OTU \(mOTU\) profiling

   :homepage: http://motu-tool.org/
   :developer docs: https://github.com/motu-tool/mOTUs_v2
   :license: GPL / GPL-3.0
   :recipe: /`motus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/motus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/motus/meta.yaml>`_
   :links: biotools: :biotools:`motus`

   


.. conda:package:: motus

   |downloads_motus| |docker_motus|

   :versions: 2.0.1, 2.0.0, 1.0

   :depends: :conda:package:`bwa`  :conda:package:`metasnv`  :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`samtools`  

   :required~by: |required_by_motus|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install motus

   and update with::

      conda update motus

   or use the docker container::

      docker pull quay.io/repository/biocontainers/motus


.. |required_by_motus| conda:required_by:: motus
.. |downloads_motus| image:: https://img.shields.io/conda/dn/bioconda/motus.svg?style=flat
   :alt:   (downloads)
.. |docker_motus| image:: https://quay.io/repository/biocontainers/motus/status
   :target: https://quay.io/repository/biocontainers/motus






Notes
-----
A tiny wrapper to the command motus was added. See build.sh for additional notes


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/motus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/motus/README.html

