:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-bcbiobase'
.. highlight: bash

r-bcbiobase
===========

.. conda:recipe:: r-bcbiobase
   :replaces_section_title:

   Base functions and generics for bcbio R packages.

   :homepage: http://bioinformatics.sph.harvard.edu/bcbioBase/
   :developer docs: https://github.com/hbc/bcbioBase
   :license: MIT
   :recipe: /`r-bcbiobase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bcbiobase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bcbiobase/meta.yaml>`_

   


.. conda:package:: r-bcbiobase

   |downloads_r-bcbiobase| |docker_r-bcbiobase|

   :versions: 0.6.10-0, 0.4.1-3, 0.4.1-2, 0.4.1-1, 0.4.1-0, 0.2.15-1, 0.2.15-0, 0.2.12-0, 0.2.10-0, 0.2.9-0, 0.0.3-0
   
   :depends bioconductor-s4vectors: >=0.22
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-basejump: >=0.11.11
   :depends r-goalie: >=0.3.6
   :depends r-plyr: >=1.8
   :depends r-rdrop2: >=0.8
   :depends r-stringr: >=1.3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-bcbiobase

   and update with::

      conda update r-bcbiobase

   or use the docker container::

      docker pull quay.io/biocontainers/r-bcbiobase:<tag>

   (see `r-bcbiobase/tags`_ for valid values for ``<tag>``)


.. |downloads_r-bcbiobase| image:: https://img.shields.io/conda/dn/bioconda/r-bcbiobase.svg?style=flat
   :target: https://anaconda.org/bioconda/r-bcbiobase
   :alt:   (downloads)
.. |docker_r-bcbiobase| image:: https://quay.io/repository/biocontainers/r-bcbiobase/status
   :target: https://quay.io/repository/biocontainers/r-bcbiobase
.. _`r-bcbiobase/tags`: https://quay.io/repository/biocontainers/r-bcbiobase?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-bcbiobase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-bcbiobase/README.html