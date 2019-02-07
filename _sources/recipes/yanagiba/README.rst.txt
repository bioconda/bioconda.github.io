.. title:: Package Recipe 'yanagiba'
.. highlight: bash


yanagiba
========

.. conda:recipe:: yanagiba
   :replaces_section_title:

   Filter short or low quality Oxford Nanopore reads which have been basecalled with Albacore.

   :homepage: https://github.com/Adamtaranto/Yanagiba
   :license: MIT / MIT License
   :recipe: /`yanagiba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yanagiba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yanagiba/meta.yaml>`_

   


.. conda:package:: yanagiba

   |downloads_yanagiba| |docker_yanagiba|

   :versions: 1.0.0, 0.1.0

   :depends: :conda:package:`biopython` >=1.70 :conda:package:`nanomath` >=0.13.0 :conda:package:`pandas` >=0.20.3 :conda:package:`python` 3.5* 

   :required~by: |required_by_yanagiba|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install yanagiba

   and update with::

      conda update yanagiba

   or use the docker container::

      docker pull quay.io/repository/biocontainers/yanagiba


.. |required_by_yanagiba| conda:required_by:: yanagiba
.. |downloads_yanagiba| image:: https://img.shields.io/conda/dn/bioconda/yanagiba.svg?style=flat
   :alt:   (downloads)
.. |docker_yanagiba| image:: https://quay.io/repository/biocontainers/yanagiba/status
   :target: https://quay.io/repository/biocontainers/yanagiba







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/yanagiba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/yanagiba/README.html

