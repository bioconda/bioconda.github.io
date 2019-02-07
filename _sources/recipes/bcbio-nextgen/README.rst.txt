.. title:: Package Recipe 'bcbio-nextgen'
.. highlight: bash


bcbio-nextgen
=============

.. conda:recipe:: bcbio-nextgen
   :replaces_section_title:

   Validated\, scalable\, community developed variant calling\, RNA\-seq and small RNA analysis

   :homepage: https://github.com/chapmanb/bcbio-nextgen
   :license: MIT
   :recipe: /`bcbio-nextgen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbio-nextgen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbio-nextgen/meta.yaml>`_
   :links: biotools: :biotools:`bcbio-nextgen`, doi: :doi:`10.1093/bioinformatics/btv061`

   


.. conda:package:: bcbio-nextgen

   |downloads_bcbio-nextgen| |docker_bcbio-nextgen|

   :versions: 1.1.4a, 1.1.3, 1.1.3a, 1.1.2, 1.1.2a, 1.1.1, 1.1.1a, 1.1.0, 1.1.0a, 1.0.9, 1.0.9a, 1.0.8, 1.0.8a, 1.0.7, 1.0.7a0, 1.0.6, 1.0.6a0, 1.0.5, 1.0.5a, 1.0.4, 1.0.4a0, 1.0.3, 1.0.3a, 1.0.2, 1.0.2a, 1.0.1, 1.0.1a0, 1.0.0, 1.0.0a0, 0.9.9, 0.9.9a0, 0.9.8, 0.9.8a0, 0.9.7, 0.9.7a, 0.9.6, 0.9.6a, 0.9.5

   :depends: :conda:package:`arrow`  :conda:package:`beautifulsoup4`  :conda:package:`bioblend`  :conda:package:`biopython`  :conda:package:`boto`  :conda:package:`cython`  :conda:package:`cyvcf2`  :conda:package:`dnapi`  :conda:package:`fabric`  :conda:package:`fadapa`  :conda:package:`geneimpacts`  :conda:package:`gffutils`  :conda:package:`h5py`  :conda:package:`htslib`  :conda:package:`ipyparallel` >=6.0.2 :conda:package:`ipython-cluster-helper` >=0.6.1 :conda:package:`joblib` >=0.12 :conda:package:`logbook`  :conda:package:`matplotlib`  :conda:package:`mock`  :conda:package:`msgpack-python`  :conda:package:`openssl` >=1.0.2p,<1.0.3a :conda:package:`pandas`  :conda:package:`pip`  :conda:package:`psutil`  :conda:package:`py`  :conda:package:`pybedtools`  :conda:package:`pycrypto`  :conda:package:`pysam` >=0.13.0 :conda:package:`pytest`  :conda:package:`pytest-cov` >=2.6.1 :conda:package:`pytest-mock`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`python-dateutil` >=2.5.0 :conda:package:`pyvcf`  :conda:package:`pyyaml`  :conda:package:`requests`  :conda:package:`scipy`  :conda:package:`seaborn`  :conda:package:`seqcluster`  :conda:package:`statsmodels`  :conda:package:`tabulate`  :conda:package:`toolz`  :conda:package:`yamllint`  

   :required~by: |required_by_bcbio-nextgen|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bcbio-nextgen

   and update with::

      conda update bcbio-nextgen

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bcbio-nextgen


.. |required_by_bcbio-nextgen| conda:required_by:: bcbio-nextgen
.. |downloads_bcbio-nextgen| image:: https://img.shields.io/conda/dn/bioconda/bcbio-nextgen.svg?style=flat
   :alt:   (downloads)
.. |docker_bcbio-nextgen| image:: https://quay.io/repository/biocontainers/bcbio-nextgen/status
   :target: https://quay.io/repository/biocontainers/bcbio-nextgen







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcbio-nextgen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcbio-nextgen/README.html

