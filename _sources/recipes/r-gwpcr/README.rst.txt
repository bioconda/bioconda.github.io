:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-gwpcr'
.. highlight: bash

r-gwpcr
=======

.. conda:recipe:: r-gwpcr
   :replaces_section_title:

   Implements the necessary distributions and parameter estimation procedures for a model of amplification and high\-troughput sequencing. The model is based on a mechanistic model of PCR amplification as a Galton\-Watson branching process\, and on Poissonan sampling to model high\-throughput sequencing.

   :homepage: http://www.cibiv.at/~pflug_/trumicount
   :license: AGPLv3
   :recipe: /`r-gwpcr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-gwpcr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-gwpcr/meta.yaml>`_

   


.. conda:package:: r-gwpcr

   |downloads_r-gwpcr| |docker_r-gwpcr|

   :versions: 0.9.10-4, 0.9.10-3, 0.9.10-2, 0.9.10-1, 0.9.10-0, 0.9.9-0
   
   :depends libgcc-ng: >=7.3.0
   :depends r-akima: 
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-data.table: 
   :depends r-statmod: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-gwpcr

   and update with::

      conda update r-gwpcr

   or use the docker container::

      docker pull quay.io/biocontainers/r-gwpcr:<tag>

   (see `r-gwpcr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-gwpcr| image:: https://img.shields.io/conda/dn/bioconda/r-gwpcr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-gwpcr
   :alt:   (downloads)
.. |docker_r-gwpcr| image:: https://quay.io/repository/biocontainers/r-gwpcr/status
   :target: https://quay.io/repository/biocontainers/r-gwpcr
.. _`r-gwpcr/tags`: https://quay.io/repository/biocontainers/r-gwpcr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-gwpcr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-gwpcr/README.html