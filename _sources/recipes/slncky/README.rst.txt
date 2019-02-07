.. title:: Package Recipe 'slncky'
.. highlight: bash


slncky
======

.. conda:recipe:: slncky
   :replaces_section_title:

   slncky is a tool for lncRNA discovery from RNA\-Seq data. slncky filters a high\-quality set of noncoding transcripts\, discovers lncRNA orthologs\, and characterizes conserved lncRNA evolution. slncky was developed as a collaboration between the Garber Lab at UMass Medical and the Regev Lab at the Broad Institute.

   :homepage: https://github.com/slncky/slncky
   :license: MIT / MIT
   :recipe: /`slncky <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slncky>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slncky/meta.yaml>`_

   


.. conda:package:: slncky

   |downloads_slncky| |docker_slncky|

   :versions: 1.0.4, 1.0.3

   :depends: :conda:package:`bedtools` >=2.17.0,<=2.24.0 :conda:package:`lastz`  :conda:package:`python` <3 :conda:package:`ucsc-liftover`  

   :required~by: |required_by_slncky|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install slncky

   and update with::

      conda update slncky

   or use the docker container::

      docker pull quay.io/repository/biocontainers/slncky


.. |required_by_slncky| conda:required_by:: slncky
.. |downloads_slncky| image:: https://img.shields.io/conda/dn/bioconda/slncky.svg?style=flat
   :alt:   (downloads)
.. |docker_slncky| image:: https://quay.io/repository/biocontainers/slncky/status
   :target: https://quay.io/repository/biocontainers/slncky







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/slncky/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/slncky/README.html

