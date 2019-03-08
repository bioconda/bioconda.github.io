:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-lsd'
.. highlight: bash

r-lsd
=====

.. conda:recipe:: r-lsd
   :replaces_section_title:

   Create lots of colorful plots in a plethora of variations. Try the LSD demotour\(\).

   :homepage: https://CRAN.R-project.org/package=LSD
   :license: MIT / Unlimited
   :recipe: /`r-lsd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-lsd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-lsd/meta.yaml>`_

   


.. conda:package:: r-lsd

   |downloads_r-lsd| |docker_r-lsd|

   :versions: 3.0-0
   
   :depends r-base: 3.3.2*
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-lsd

   and update with::

      conda update r-lsd

   or use the docker container::

      docker pull quay.io/biocontainers/r-lsd:<tag>

   (see `r-lsd/tags`_ for valid values for ``<tag>``)


.. |downloads_r-lsd| image:: https://img.shields.io/conda/dn/bioconda/r-lsd.svg?style=flat
   :alt:   (downloads)
.. |docker_r-lsd| image:: https://quay.io/repository/biocontainers/r-lsd/status
   :target: https://quay.io/repository/biocontainers/r-lsd
.. _`r-lsd/tags`: https://quay.io/repository/biocontainers/r-lsd?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-lsd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-lsd/README.html