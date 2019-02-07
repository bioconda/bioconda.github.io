.. title:: Package Recipe 'moca'
.. highlight: bash


moca
====

.. conda:recipe:: moca
   :replaces_section_title:

   Tool for motif conservation analysis

   :homepage: https://github.com/saketkc/moca
   :license: Public-Domain / ISC License (ISCL)
   :recipe: /`moca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/moca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/moca/meta.yaml>`_

   


.. conda:package:: moca

   |downloads_moca| |docker_moca|

   :versions: 0.4.3, 0.3.4, 0.3.3, 0.2.9

   :depends: :conda:package:`biopython` >=1.68 :conda:package:`certifi` >=2016.2.28 :conda:package:`cffi` >=1.9.1 :conda:package:`click` >=6.6 :conda:package:`click-help-colors` >=0.3 :conda:package:`coverage` >=4.2 :conda:package:`cryptography` >=1.7.1 :conda:package:`cycler` >=0.10.0 :conda:package:`enum34` >=1.1.6 :conda:package:`functools32` >=3.2.3.post2 :conda:package:`future` >=0.16.0 :conda:package:`idna` >=2.2 :conda:package:`ipaddress` >=1.0.18 :conda:package:`matplotlib` >=2.0.0 :conda:package:`mmtf-python` >=1.0.5 :conda:package:`msgpack-python` >=0.4.8 :conda:package:`numpy` >=1.11.3 :conda:package:`olefile` >=0.44 :conda:package:`pandas` >=0.19.2 :conda:package:`patsy` >=0.4.1 :conda:package:`pillow` >=4.0.0 :conda:package:`py` >=1.4.32 :conda:package:`pyasn1` >=0.1.9 :conda:package:`pybedtools` >=0.7.9 :conda:package:`pybigwig` >=0.2.8 :conda:package:`pycairo` >=1.10.0 :conda:package:`pycparser` >=2.17 :conda:package:`pyparsing` >=2.1.4 :conda:package:`pysam` >=0.9.1.4 :conda:package:`pytest` >=3.0.5 :conda:package:`pytest-cov` >=2.4.0 :conda:package:`pytest-mpl` >=0.5 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`python-dateutil` >=2.3 :conda:package:`pytz` >=2016.10 :conda:package:`pyyaml` >=3.12 :conda:package:`reportlab` >=3.3.0 :conda:package:`scipy` >=0.18.1 :conda:package:`seaborn` >=0.7.1 :conda:package:`setuptools`  :conda:package:`six` >=1.10.0 :conda:package:`statsmodels` >=0.6.1 :conda:package:`subprocess32` >=3.2.7 :conda:package:`tqdm` >=4.7.2 

   :required~by: |required_by_moca|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install moca

   and update with::

      conda update moca

   or use the docker container::

      docker pull quay.io/repository/biocontainers/moca


.. |required_by_moca| conda:required_by:: moca
.. |downloads_moca| image:: https://img.shields.io/conda/dn/bioconda/moca.svg?style=flat
   :alt:   (downloads)
.. |docker_moca| image:: https://quay.io/repository/biocontainers/moca/status
   :target: https://quay.io/repository/biocontainers/moca







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/moca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/moca/README.html

