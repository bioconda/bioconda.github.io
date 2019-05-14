:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-mmod'
.. highlight: bash

r-mmod
======

.. conda:recipe:: r-mmod
   :replaces_section_title:

   Provides functions for measuring population divergence from genotypic data.

   :homepage: https://github.com/dwinter/mmod
   :license: MIT / MIT + file LICENSE
   :recipe: /`r-mmod <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mmod>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mmod/meta.yaml>`_

   


.. conda:package:: r-mmod

   |downloads_r-mmod| |docker_r-mmod|

   :versions: 1.3.3-0
   
   :depends r-adegenet: >=2.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-pegas: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-mmod

   and update with::

      conda update r-mmod

   or use the docker container::

      docker pull quay.io/biocontainers/r-mmod:<tag>

   (see `r-mmod/tags`_ for valid values for ``<tag>``)


.. |downloads_r-mmod| image:: https://img.shields.io/conda/dn/bioconda/r-mmod.svg?style=flat
   :target: https://anaconda.org/bioconda/r-mmod
   :alt:   (downloads)
.. |docker_r-mmod| image:: https://quay.io/repository/biocontainers/r-mmod/status
   :target: https://quay.io/repository/biocontainers/r-mmod
.. _`r-mmod/tags`: https://quay.io/repository/biocontainers/r-mmod?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-mmod/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-mmod/README.html