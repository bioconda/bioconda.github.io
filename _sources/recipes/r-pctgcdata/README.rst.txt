.. title:: Package Recipe 'r-pctgcdata'
.. highlight: bash


r-pctgcdata
===========

.. conda:recipe:: r-pctgcdata
   :replaces_section_title:

   Provides GC percentage of a 1 kilobase window at a genomic position for different builds of human and mouse genomes.

   :homepage: https://github.com/mskcc/pctGCdata
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-pctgcdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pctgcdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pctgcdata/meta.yaml>`_

   


.. conda:package:: r-pctgcdata

   |downloads_r-pctgcdata| |docker_r-pctgcdata|

   :versions: 0.2.0

   :depends: :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 

   :required~by: |required_by_r-pctgcdata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-pctgcdata

   and update with::

      conda update r-pctgcdata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-pctgcdata


.. |required_by_r-pctgcdata| conda:required_by:: r-pctgcdata
.. |downloads_r-pctgcdata| image:: https://img.shields.io/conda/dn/bioconda/r-pctgcdata.svg?style=flat
   :alt:   (downloads)
.. |docker_r-pctgcdata| image:: https://quay.io/repository/biocontainers/r-pctgcdata/status
   :target: https://quay.io/repository/biocontainers/r-pctgcdata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-pctgcdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-pctgcdata/README.html

