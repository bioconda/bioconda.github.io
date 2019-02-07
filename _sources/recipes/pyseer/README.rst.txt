.. title:: Package Recipe 'pyseer'
.. highlight: bash


pyseer
======

.. conda:recipe:: pyseer
   :replaces_section_title:

   Sequence Elements Enrichment Analysis \(SEER\)\, python implementation

   :homepage: https://github.com/mgalardini/pyseer
   :license: APACHE / Apache-2.0
   :recipe: /`pyseer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyseer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyseer/meta.yaml>`_

   


.. conda:package:: pyseer

   |downloads_pyseer| |docker_pyseer|

   :versions: 1.2.0, 1.1.2, 1.1.1, 1.1.0, 1.0.2, 0.3.1

   :depends: :conda:package:`bedops`  :conda:package:`bedtools`  :conda:package:`bwa`  :conda:package:`dendropy`  :conda:package:`glmnet_py`  :conda:package:`mash`  :conda:package:`matplotlib`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`pybedtools`  :conda:package:`pysam`  :conda:package:`python`  :conda:package:`python-dateutil` >=2.5.0 :conda:package:`scikit-learn`  :conda:package:`scipy`  :conda:package:`statsmodels`  :conda:package:`tqdm`  

   :required~by: |required_by_pyseer|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyseer

   and update with::

      conda update pyseer

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pyseer


.. |required_by_pyseer| conda:required_by:: pyseer
.. |downloads_pyseer| image:: https://img.shields.io/conda/dn/bioconda/pyseer.svg?style=flat
   :alt:   (downloads)
.. |docker_pyseer| image:: https://quay.io/repository/biocontainers/pyseer/status
   :target: https://quay.io/repository/biocontainers/pyseer







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyseer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyseer/README.html

