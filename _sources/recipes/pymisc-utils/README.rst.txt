.. title:: Package Recipe 'pymisc-utils'
.. highlight: bash


pymisc-utils
============

.. conda:recipe:: pymisc-utils
   :replaces_section_title:

   Utility library for rp\-bp

   :homepage: https://github.com/dieterich-lab/pymisc-utils
   :license: MIT
   :recipe: /`pymisc-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymisc-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymisc-utils/meta.yaml>`_

   


.. conda:package:: pymisc-utils

   |downloads_pymisc-utils| |docker_pymisc-utils|

   :versions: 0.2.11, 0.2.10

   :depends: :conda:package:`cython`  :conda:package:`dask`  :conda:package:`docopt`  :conda:package:`fastparquet`  :conda:package:`graphviz` >=2.38.0,<3.0a0 :conda:package:`joblib`  :conda:package:`libgcc-ng` >=4.9 :conda:package:`matplotlib`  :conda:package:`networkx`  :conda:package:`nltk`  :conda:package:`numpy`  :conda:package:`openpyxl`  :conda:package:`pandas`  :conda:package:`paramiko`  :conda:package:`pydot`  :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`scikit-learn`  :conda:package:`scipy`  :conda:package:`six`  :conda:package:`statsmodels`  :conda:package:`tqdm`  :conda:package:`xlrd`  

   :required~by: |required_by_pymisc-utils|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pymisc-utils

   and update with::

      conda update pymisc-utils

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pymisc-utils


.. |required_by_pymisc-utils| conda:required_by:: pymisc-utils
.. |downloads_pymisc-utils| image:: https://img.shields.io/conda/dn/bioconda/pymisc-utils.svg?style=flat
   :alt:   (downloads)
.. |docker_pymisc-utils| image:: https://quay.io/repository/biocontainers/pymisc-utils/status
   :target: https://quay.io/repository/biocontainers/pymisc-utils







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pymisc-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pymisc-utils/README.html

