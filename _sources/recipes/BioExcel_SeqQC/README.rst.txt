.. title:: Package Recipe 'bioexcel_seqqc'
.. highlight: bash


bioexcel_seqqc
==============

.. conda:recipe:: BioExcel_SeqQC
   :replaces_section_title:

   Sequence Quality Control pipeline\/modules

   :homepage: https://github.com/bioexcel/bioexcel_seqqc
   :license: APACHE / Apache Software License
   :recipe: /`BioExcel_SeqQC <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/BioExcel_SeqQC>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/BioExcel_SeqQC/meta.yaml>`_

   


.. conda:package:: bioexcel_seqqc

   |downloads_bioexcel_seqqc| |docker_bioexcel_seqqc|

   :versions: 0.6, 0.5

   :depends: :conda:package:`cutadapt`  :conda:package:`fastqc`  :conda:package:`python` >=3 :conda:package:`pyyaml`  

   :required~by: |required_by_bioexcel_seqqc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioexcel_seqqc

   and update with::

      conda update bioexcel_seqqc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioexcel_seqqc


.. |required_by_bioexcel_seqqc| conda:required_by:: bioexcel_seqqc
.. |downloads_bioexcel_seqqc| image:: https://img.shields.io/conda/dn/bioconda/bioexcel_seqqc.svg?style=flat
   :alt:   (downloads)
.. |docker_bioexcel_seqqc| image:: https://quay.io/repository/biocontainers/bioexcel_seqqc/status
   :target: https://quay.io/repository/biocontainers/bioexcel_seqqc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioexcel_seqqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioexcel_seqqc/README.html

