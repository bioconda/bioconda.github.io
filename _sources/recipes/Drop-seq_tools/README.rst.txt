.. title:: Package Recipe 'dropseq_tools'
.. highlight: bash


dropseq_tools
=============

.. conda:recipe:: Drop-seq_tools
   :replaces_section_title:

   Package for the analysis of Drop\-seq data developed by Jim Nemesh in the McCarroll Lab


   :homepage: http://mccarrolllab.com/dropseq/
   :license: MIT / MIT License
   :recipe: /`Drop-seq_tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/Drop-seq_tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/Drop-seq_tools/meta.yaml>`_

   


.. conda:package:: dropseq_tools

   |downloads_dropseq_tools| |docker_dropseq_tools|

   :versions: 2.0.0, 1.13

   :depends: :conda:package:`openjdk` >=8 

   :required~by: |required_by_dropseq_tools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dropseq_tools

   and update with::

      conda update dropseq_tools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/dropseq_tools


.. |required_by_dropseq_tools| conda:required_by:: dropseq_tools
.. |downloads_dropseq_tools| image:: https://img.shields.io/conda/dn/bioconda/dropseq_tools.svg?style=flat
   :alt:   (downloads)
.. |docker_dropseq_tools| image:: https://quay.io/repository/biocontainers/dropseq_tools/status
   :target: https://quay.io/repository/biocontainers/dropseq_tools






Notes
-----
Drop\-seq\_tools utilities are wrapper shell scripts. To get help on individual tool\, use e.g. \`PolyATrimmer \-\- \-\-help\`


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dropseq_tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dropseq_tools/README.html

