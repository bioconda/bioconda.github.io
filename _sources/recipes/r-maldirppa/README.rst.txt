.. title:: Package Recipe 'r-maldirppa'
.. highlight: bash


r-maldirppa
===========

.. conda:recipe:: r-maldirppa
   :replaces_section_title:

   Provides methods for quality control and robust pre\-processing and analysis of MALDI mass spectrometry data.

   :homepage: https://CRAN.R-project.org/package=MALDIrppa
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-maldirppa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-maldirppa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-maldirppa/meta.yaml>`_

   


.. conda:package:: r-maldirppa

   |downloads_r-maldirppa| |docker_r-maldirppa|

   :versions: 1.0.1

   :depends: :conda:package:`r-base` 3.4.1* :conda:package:`r-lattice`  :conda:package:`r-maldiquant`  :conda:package:`r-robustbase`  :conda:package:`r-signal`  :conda:package:`r-wmtsa`  

   :required~by: |required_by_r-maldirppa|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-maldirppa

   and update with::

      conda update r-maldirppa

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-maldirppa


.. |required_by_r-maldirppa| conda:required_by:: r-maldirppa
.. |downloads_r-maldirppa| image:: https://img.shields.io/conda/dn/bioconda/r-maldirppa.svg?style=flat
   :alt:   (downloads)
.. |docker_r-maldirppa| image:: https://quay.io/repository/biocontainers/r-maldirppa/status
   :target: https://quay.io/repository/biocontainers/r-maldirppa







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-maldirppa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-maldirppa/README.html

