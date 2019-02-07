.. title:: Package Recipe 'probamconvert'
.. highlight: bash


probamconvert
=============

.. conda:recipe:: probamconvert
   :replaces_section_title:

   proBAMconvert is a conversion tool to convert common peptide identification files \(mzIdentML\, pepXML\, mzTAB\) to the proBAM or proBED format

   :homepage: https://github.com/Biobix/proBAMconvert
   :license: Apache License
   :recipe: /`probamconvert <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/probamconvert>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/probamconvert/meta.yaml>`_

   


.. conda:package:: probamconvert

   |downloads_probamconvert| |docker_probamconvert|

   :versions: 1.0.2, 1.0.1, 1.0.0

   :depends: :conda:package:`bioservices`  :conda:package:`cogent`  :conda:package:`icu` 58.* :conda:package:`lxml`  :conda:package:`matplotlib`  :conda:package:`mysql-python`  :conda:package:`numpy`  :conda:package:`pysam` >=0.9 :conda:package:`pyteomics`  :conda:package:`python` 2.7* :conda:package:`xz`  

   :required~by: |required_by_probamconvert|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install probamconvert

   and update with::

      conda update probamconvert

   or use the docker container::

      docker pull quay.io/repository/biocontainers/probamconvert


.. |required_by_probamconvert| conda:required_by:: probamconvert
.. |downloads_probamconvert| image:: https://img.shields.io/conda/dn/bioconda/probamconvert.svg?style=flat
   :alt:   (downloads)
.. |docker_probamconvert| image:: https://quay.io/repository/biocontainers/probamconvert/status
   :target: https://quay.io/repository/biocontainers/probamconvert







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/probamconvert/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/probamconvert/README.html

