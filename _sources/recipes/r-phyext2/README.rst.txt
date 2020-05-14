:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-phyext2'
.. highlight: bash

r-phyext2
=========

.. conda:recipe:: r-phyext2
   :replaces_section_title:

   Based on \(but not identical to\) the no\-longer\-maintained package \'phyext\'\, provides enhancements to \'phylobase\' classes\, specifically for use by package \'SigTree\'\; provides classes and methods which help users manipulate branch\-annotated trees \(as in \'SigTree\'\)\; also provides support for a few other extra features.

   :homepage: https://CRAN.R-project.org/package=phyext2
   :license: GPL3 / GPL-3
   :recipe: /`r-phyext2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-phyext2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-phyext2/meta.yaml>`_

   


.. conda:package:: r-phyext2

   |downloads_r-phyext2| |docker_r-phyext2|

   :versions: 0.0.4-5, 0.0.4-4, 0.0.4-3, 0.0.4-2, 0.0.4-1, 0.0.4-0
   
   :depends r-ape: 
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-phylobase: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-phyext2

   and update with::

      conda update r-phyext2

   or use the docker container::

      docker pull quay.io/biocontainers/r-phyext2:<tag>

   (see `r-phyext2/tags`_ for valid values for ``<tag>``)


.. |downloads_r-phyext2| image:: https://img.shields.io/conda/dn/bioconda/r-phyext2.svg?style=flat
   :target: https://anaconda.org/bioconda/r-phyext2
   :alt:   (downloads)
.. |docker_r-phyext2| image:: https://quay.io/repository/biocontainers/r-phyext2/status
   :target: https://quay.io/repository/biocontainers/r-phyext2
.. _`r-phyext2/tags`: https://quay.io/repository/biocontainers/r-phyext2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-phyext2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-phyext2/README.html