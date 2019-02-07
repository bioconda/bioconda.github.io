.. title:: Package Recipe 'mgkit'
.. highlight: bash


mgkit
=====

.. conda:recipe:: mgkit
   :replaces_section_title:

   Metagenomics Framework

   :homepage: https://bitbucket.org/setsuna80/mgkit/
   :license: GPL2 / GNU General Public License v2 or later (GPLv2+)
   :recipe: /`mgkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgkit/meta.yaml>`_
   :links: biotools: :biotools:`mgkit`, doi: :doi:`10.6084/m9.figshare.1588384`

   


.. conda:package:: mgkit

   |downloads_mgkit| |docker_mgkit|

   :versions: 0.3.4, 0.3.3, 0.3.0, 0.2.2

   :depends: :conda:package:`click`  :conda:package:`enum34`  :conda:package:`future`  :conda:package:`htseq` >=0.6.0 :conda:package:`matplotlib` >=2 :conda:package:`msgpack-python` >=0.4.6 :conda:package:`numpy` >=1.9.2 :conda:package:`pandas` >=0.18 :conda:package:`progressbar2`  :conda:package:`pymongo` >=3.1.1 :conda:package:`pysam` >=0.8.2.1 :conda:package:`pytables` >=3.4.2 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`requests`  :conda:package:`scipy` >=0.15.1 :conda:package:`semidbm` >=0.5.1 :conda:package:`statsmodels` >=0.8 

   :required~by: |required_by_mgkit|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mgkit

   and update with::

      conda update mgkit

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mgkit


.. |required_by_mgkit| conda:required_by:: mgkit
.. |downloads_mgkit| image:: https://img.shields.io/conda/dn/bioconda/mgkit.svg?style=flat
   :alt:   (downloads)
.. |docker_mgkit| image:: https://quay.io/repository/biocontainers/mgkit/status
   :target: https://quay.io/repository/biocontainers/mgkit







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mgkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mgkit/README.html

