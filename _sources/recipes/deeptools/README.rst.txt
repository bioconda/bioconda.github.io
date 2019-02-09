.. title:: Package Recipe 'deeptools'
.. highlight: bash


deeptools
=========

.. conda:recipe:: deeptools
   :replaces_section_title:

   A set of user\-friendly tools for normalization and visualzation of deep\-sequencing data

   :homepage: https://github.com/deeptools/deepTools
   :license: GPL3
   :recipe: /`deeptools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deeptools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deeptools/meta.yaml>`_
   :links: biotools: :biotools:`deeptools`, doi: :doi:`10.1093/nar/gkw257`

   


.. conda:package:: deeptools

   |downloads_deeptools| |docker_deeptools|

   :versions: 3.1.3, 3.1.2, 3.1.1, 3.1.0, 3.0.2, 3.0.1, 3.0.0, 2.5.7, 2.5.6, 2.5.5, 2.5.4, 2.5.3, 2.5.2, 2.5.1, 2.5.0, 2.4.3, 2.4.2, 2.4.1, 2.4.0, 2.3.6, 2.3.5, 2.3.4, 2.3.3, 2.3.2, 2.3.1, 2.2.4, 2.2.3, 2.2.2, 2.2.1, 2.2.0, 2.1.0, 2.0.1, 2.0.0, 1.5.9.1, 1.5.8.2

   :depends: :conda:package:`matplotlib` >=2.1.1 :conda:package:`numpy` >=1.9.0 :conda:package:`pandas`  :conda:package:`plotly` >=1.9.0 :conda:package:`py2bit` >=0.2.0 :conda:package:`pybigwig` >=0.2.3 :conda:package:`pysam` >=0.14.0 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`scipy` >=0.17.0 

   :required~by: |required_by_deeptools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install deeptools

   and update with::

      conda update deeptools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/deeptools


.. |required_by_deeptools| conda:required_by:: deeptools
.. |downloads_deeptools| image:: https://img.shields.io/conda/dn/bioconda/deeptools.svg?style=flat
   :alt:   (downloads)
.. |docker_deeptools| image:: https://quay.io/repository/biocontainers/deeptools/status
   :target: https://quay.io/repository/biocontainers/deeptools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deeptools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deeptools/README.html

