.. title:: Package Recipe 'mir-prefer'
.. highlight: bash


mir-prefer
==========

.. conda:recipe:: mir-prefer
   :replaces_section_title:

   microRNA PREdiction From small RNA\-seq data

   :homepage: https://github.com/hangelwen/miR-PREFeR
   :license: GPL
   :recipe: /`mir-prefer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mir-prefer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mir-prefer/meta.yaml>`_

   microRNA PREdiction From small RNA\-seq data


.. conda:package:: mir-prefer

   |downloads_mir-prefer| |docker_mir-prefer|

   :versions: 0.24

   :depends: :conda:package:`bowtie` ==1.2.0 :conda:package:`python` 2.7* :conda:package:`samtools` ==0.1.19 :conda:package:`viennarna`  

   :required~by: |required_by_mir-prefer|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mir-prefer

   and update with::

      conda update mir-prefer

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mir-prefer


.. |required_by_mir-prefer| conda:required_by:: mir-prefer
.. |downloads_mir-prefer| image:: https://img.shields.io/conda/dn/bioconda/mir-prefer.svg?style=flat
   :alt:   (downloads)
.. |docker_mir-prefer| image:: https://quay.io/repository/biocontainers/mir-prefer/status
   :target: https://quay.io/repository/biocontainers/mir-prefer







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mir-prefer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mir-prefer/README.html

