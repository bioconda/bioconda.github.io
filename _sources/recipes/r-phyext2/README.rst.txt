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

   :versions: 0.0.4

   :depends: :conda:package:`r-ape`  :conda:package:`r-base` 3.4.1* :conda:package:`r-phylobase`  

   :required~by: |required_by_r-phyext2|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-phyext2

   and update with::

      conda update r-phyext2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-phyext2


.. |required_by_r-phyext2| conda:required_by:: r-phyext2
.. |downloads_r-phyext2| image:: https://img.shields.io/conda/dn/bioconda/r-phyext2.svg?style=flat
   :alt:   (downloads)
.. |docker_r-phyext2| image:: https://quay.io/repository/biocontainers/r-phyext2/status
   :target: https://quay.io/repository/biocontainers/r-phyext2







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-phyext2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-phyext2/README.html

