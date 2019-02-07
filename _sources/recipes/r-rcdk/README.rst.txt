.. title:: Package Recipe 'r-rcdk'
.. highlight: bash


r-rcdk
======

.. conda:recipe:: r-rcdk
   :replaces_section_title:

   Allows the user to access functionality in the \'CDK\'\, a Java framework for chemoinformatics. This allows the user to load molecules\, evaluate fingerprints\, calculate molecular descriptors and so on. In addition\, the \'CDK\' API allows the user to view structures in 2D.

   :homepage: https://CRAN.R-project.org/package=rcdk
   :license: LGPL / LGPL
   :recipe: /`r-rcdk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rcdk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rcdk/meta.yaml>`_

   


.. conda:package:: r-rcdk

   |downloads_r-rcdk| |docker_r-rcdk|

   :versions: 

   :depends: 

   :required~by: |required_by_r-rcdk|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-rcdk

   and update with::

      conda update r-rcdk

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-rcdk


.. |required_by_r-rcdk| conda:required_by:: r-rcdk
.. |downloads_r-rcdk| image:: https://img.shields.io/conda/dn/bioconda/r-rcdk.svg?style=flat
   :alt:   (downloads)
.. |docker_r-rcdk| image:: https://quay.io/repository/biocontainers/r-rcdk/status
   :target: https://quay.io/repository/biocontainers/r-rcdk







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-rcdk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-rcdk/README.html

