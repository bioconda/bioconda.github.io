:orphan:  .. only available via index, not via toctree

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
   :links: doi: :doi:`10.1093/bioinformatics/bts447`

   


.. conda:package:: r-maldiquantforeign

   |downloads_r-maldiquantforeign| |docker_r-maldiquantforeign|

   :versions: 0.12-0, 0.11.5-2, 0.11.5-1, 0.11.5-0, 0.11-0, 0.10-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-base64enc: 
   :depends r-digest: 
   :depends r-maldiquant: >=1.16.4
   :depends r-readbrukerflexdata: >=1.7
   :depends r-readmzxmldata: >=2.7
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-maldiquantforeign

   and update with::

      conda update r-maldiquantforeign

   or use the docker container::

      docker pull quay.io/biocontainers/r-maldiquantforeign:<tag>

   (see `r-maldiquantforeign/tags`_ for valid values for ``<tag>``)


.. |downloads_r-maldiquantforeign| image:: https://img.shields.io/conda/dn/bioconda/r-maldiquantforeign.svg?style=flat
   :target: https://anaconda.org/bioconda/r-maldiquantforeign
   :alt:   (downloads)
.. |docker_r-maldiquantforeign| image:: https://quay.io/repository/biocontainers/r-maldiquantforeign/status
   :target: https://quay.io/repository/biocontainers/r-maldiquantforeign
.. _`r-maldiquantforeign/tags`: https://quay.io/repository/biocontainers/r-maldiquantforeign?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-maldiquantforeign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-maldiquantforeign/README.html