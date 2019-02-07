.. title:: Package Recipe 'qualimap'
.. highlight: bash


qualimap
========

.. conda:recipe:: qualimap
   :replaces_section_title:

   Quality control of alignment sequencing data and its derivatives like feature counts

   :homepage: http://qualimap.bioinfo.cipf.es/
   :license: GPLv2
   :recipe: /`qualimap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qualimap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qualimap/meta.yaml>`_
   :links: biotools: :biotools:`qualimap`

   


.. conda:package:: qualimap

   |downloads_qualimap| |docker_qualimap|

   :versions: 2.2.2b, 2.2.2a, 2.2, 2.1.3

   :depends: :conda:package:`bioconductor-noiseq`  :conda:package:`bioconductor-rsamtools`  :conda:package:`bioconductor-rtracklayer`  :conda:package:`openjdk`  :conda:package:`r-optparse`  :conda:package:`r-xml`  

   :required~by: |required_by_qualimap|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install qualimap

   and update with::

      conda update qualimap

   or use the docker container::

      docker pull quay.io/repository/biocontainers/qualimap


.. |required_by_qualimap| conda:required_by:: qualimap
.. |downloads_qualimap| image:: https://img.shields.io/conda/dn/bioconda/qualimap.svg?style=flat
   :alt:   (downloads)
.. |docker_qualimap| image:: https://quay.io/repository/biocontainers/qualimap/status
   :target: https://quay.io/repository/biocontainers/qualimap







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qualimap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qualimap/README.html

