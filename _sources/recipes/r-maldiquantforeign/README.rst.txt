.. title:: Package Recipe 'r-maldiquantforeign'
.. highlight: bash


r-maldiquantforeign
===================

.. conda:recipe:: r-maldiquantforeign
   :replaces_section_title:

   Functions for reading \(tab\, csv\, Bruker fid\, Ciphergen XML\, mzXML\, mzML\, imzML\, Analyze 7.5\, CDF\, mMass MSD\) and writing \(tab\, csv\, mMass MSD\, mzML\, imzML\) different file formats of mass spectrometry data into\/from \'MALDIquant\' objects.

   :homepage: http://strimmerlab.org/software/maldiquant/ https://github.com/sgibb/MALDIquantForeign/
   :license: GPL3 / GPL (>= 3)
   :recipe: /`r-maldiquantforeign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-maldiquantforeign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-maldiquantforeign/meta.yaml>`_

   


.. conda:package:: r-maldiquantforeign

   |downloads_r-maldiquantforeign| |docker_r-maldiquantforeign|

   :versions: 0.11.5, 0.11, 0.10

   :depends: :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-base64enc`  :conda:package:`r-digest`  :conda:package:`r-maldiquant` >=1.16.4 :conda:package:`r-readbrukerflexdata` >=1.7 :conda:package:`r-readmzxmldata` >=2.7 :conda:package:`r-xml`  

   :required~by: |required_by_r-maldiquantforeign|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-maldiquantforeign

   and update with::

      conda update r-maldiquantforeign

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-maldiquantforeign


.. |required_by_r-maldiquantforeign| conda:required_by:: r-maldiquantforeign
.. |downloads_r-maldiquantforeign| image:: https://img.shields.io/conda/dn/bioconda/r-maldiquantforeign.svg?style=flat
   :alt:   (downloads)
.. |docker_r-maldiquantforeign| image:: https://quay.io/repository/biocontainers/r-maldiquantforeign/status
   :target: https://quay.io/repository/biocontainers/r-maldiquantforeign







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-maldiquantforeign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-maldiquantforeign/README.html

