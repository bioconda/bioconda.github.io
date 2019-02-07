.. title:: Package Recipe 'beagle'
.. highlight: bash


beagle
======

.. conda:recipe:: beagle
   :replaces_section_title:

   Beagle is a software package that performs genotype calling\, genotype phasing\, imputation of ungenotyped markers\, and identity\-by\-descent segment detection.

   :homepage: http://faculty.washington.edu/browning/beagle/beagle.html
   :license: GPLv3
   :recipe: /`beagle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beagle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beagle/meta.yaml>`_
   :links: biotools: :biotools:`BEAGLE`, doi: :doi:`10.1086/521987`

   


.. conda:package:: beagle

   |downloads_beagle| |docker_beagle|

   :versions: 4.1_21Jan17.6cc.jar, 4.1_03May16.862.jar, 4.0_06Jun17

   :depends: :conda:package:`openjdk`  

   :required~by: |required_by_beagle|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install beagle

   and update with::

      conda update beagle

   or use the docker container::

      docker pull quay.io/repository/biocontainers/beagle


.. |required_by_beagle| conda:required_by:: beagle
.. |downloads_beagle| image:: https://img.shields.io/conda/dn/bioconda/beagle.svg?style=flat
   :alt:   (downloads)
.. |docker_beagle| image:: https://quay.io/repository/biocontainers/beagle/status
   :target: https://quay.io/repository/biocontainers/beagle







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/beagle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/beagle/README.html

