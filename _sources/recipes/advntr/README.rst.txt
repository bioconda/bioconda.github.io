.. title:: Package Recipe 'advntr'
.. highlight: bash


advntr
======

.. conda:recipe:: advntr
   :replaces_section_title:

   A tool for genotyping Variable Number Tandem Repeats \(VNTR\) from sequence data

   :homepage: https://github.com/mehrdadbakhtiari/adVNTR
   :license: BSD 3-Clause
   :recipe: /`advntr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/advntr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/advntr/meta.yaml>`_

   


.. conda:package:: advntr

   |downloads_advntr| |docker_advntr|

   :versions: 1.2.0, 1.1.1, 1.1.0, 1.0.3

   :depends: :conda:package:`biopython`  :conda:package:`blast`  :conda:package:`cython`  :conda:package:`htslib` 1.3 :conda:package:`joblib`  :conda:package:`muscle`  :conda:package:`networkx` 1.11 :conda:package:`numpy` >=1.9.3,<2.0a0 :conda:package:`pysam` >=0.9.1.4 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`scikit-learn`  :conda:package:`scipy`  

   :required~by: |required_by_advntr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install advntr

   and update with::

      conda update advntr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/advntr


.. |required_by_advntr| conda:required_by:: advntr
.. |downloads_advntr| image:: https://img.shields.io/conda/dn/bioconda/advntr.svg?style=flat
   :alt:   (downloads)
.. |docker_advntr| image:: https://quay.io/repository/biocontainers/advntr/status
   :target: https://quay.io/repository/biocontainers/advntr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/advntr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/advntr/README.html

