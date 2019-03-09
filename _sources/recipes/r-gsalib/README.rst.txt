:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-gsalib'
.. highlight: bash

r-gsalib
========

.. conda:recipe:: r-gsalib
   :replaces_section_title:

   This package contains utility functions used by the Genome Analysis Toolkit \(GATK\) to load tables and plot data. The GATK is a toolkit for variant discovery in high\-throughput sequencing data.

   :homepage: https://CRAN.R-project.org/package=gsalib
   :license: MIT / MIT
   :recipe: /`r-gsalib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-gsalib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-gsalib/meta.yaml>`_

   


.. conda:package:: r-gsalib

   |downloads_r-gsalib| |docker_r-gsalib|

   :versions: 2.1-0
   
   :depends r: 3.2.2*
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-gsalib

   and update with::

      conda update r-gsalib

   or use the docker container::

      docker pull quay.io/biocontainers/r-gsalib:<tag>

   (see `r-gsalib/tags`_ for valid values for ``<tag>``)


.. |downloads_r-gsalib| image:: https://img.shields.io/conda/dn/bioconda/r-gsalib.svg?style=flat
   :alt:   (downloads)
.. |docker_r-gsalib| image:: https://quay.io/repository/biocontainers/r-gsalib/status
   :target: https://quay.io/repository/biocontainers/r-gsalib
.. _`r-gsalib/tags`: https://quay.io/repository/biocontainers/r-gsalib?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-gsalib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-gsalib/README.html