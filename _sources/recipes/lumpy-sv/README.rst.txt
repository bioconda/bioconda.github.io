.. title:: Package Recipe 'lumpy-sv'
.. highlight: bash


lumpy-sv
========

.. conda:recipe:: lumpy-sv
   :replaces_section_title:

   a general probabilistic framework for structural variant discovery

   :homepage: https://github.com/arq5x/lumpy-sv
   :license: MIT
   :recipe: /`lumpy-sv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lumpy-sv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lumpy-sv/meta.yaml>`_

   


.. conda:package:: lumpy-sv

   |downloads_lumpy-sv| |docker_lumpy-sv|

   :versions: 0.2.14a, 0.2.13, 0.2.12, 0.2.11

   :depends: :conda:package:`curl` >=7.59.0,<8.0a0 :conda:package:`gawk`  :conda:package:`libgcc-ng` >=4.9 :conda:package:`numpy`  :conda:package:`pysam`  :conda:package:`python` 2.7.* :conda:package:`samtools`  :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_lumpy-sv|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lumpy-sv

   and update with::

      conda update lumpy-sv

   or use the docker container::

      docker pull quay.io/repository/biocontainers/lumpy-sv


.. |required_by_lumpy-sv| conda:required_by:: lumpy-sv
.. |downloads_lumpy-sv| image:: https://img.shields.io/conda/dn/bioconda/lumpy-sv.svg?style=flat
   :alt:   (downloads)
.. |docker_lumpy-sv| image:: https://quay.io/repository/biocontainers/lumpy-sv/status
   :target: https://quay.io/repository/biocontainers/lumpy-sv







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lumpy-sv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lumpy-sv/README.html

