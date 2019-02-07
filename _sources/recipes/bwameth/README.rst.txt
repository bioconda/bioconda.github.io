.. title:: Package Recipe 'bwameth'
.. highlight: bash


bwameth
=======

.. conda:recipe:: bwameth
   :replaces_section_title:

   A fast and accurate aligner of BS\-seq reads

   :homepage: https://github.com/brentp/bwa-meth
   :license: MIT
   :recipe: /`bwameth <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwameth>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwameth/meta.yaml>`_

   


.. conda:package:: bwameth

   |downloads_bwameth| |docker_bwameth|

   :versions: 0.2.2, 0.2.1, 0.2.0

   :depends: :conda:package:`bwa`  :conda:package:`python`  :conda:package:`samtools`  :conda:package:`toolshed` >=0.3.9 

   :required~by: |required_by_bwameth|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bwameth

   and update with::

      conda update bwameth

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bwameth


.. |required_by_bwameth| conda:required_by:: bwameth
.. |downloads_bwameth| image:: https://img.shields.io/conda/dn/bioconda/bwameth.svg?style=flat
   :alt:   (downloads)
.. |docker_bwameth| image:: https://quay.io/repository/biocontainers/bwameth/status
   :target: https://quay.io/repository/biocontainers/bwameth







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bwameth/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bwameth/README.html

