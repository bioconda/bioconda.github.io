.. title:: Package Recipe 'ribotish'
.. highlight: bash


ribotish
========

.. conda:recipe:: ribotish
   :replaces_section_title:

   Ribo TIS Hunter \(Ribo\-TISH\) identifies translation activities using ribosome profiling data.

   :homepage: https://github.com/zhpn1024/ribotish
   :license: GPL-3
   :recipe: /`ribotish <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribotish>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribotish/meta.yaml>`_

   


.. conda:package:: ribotish

   |downloads_ribotish| |docker_ribotish|

   :versions: 0.2.1, 0.2.0

   :depends: :conda:package:`matplotlib`  :conda:package:`numpy`  :conda:package:`pip`  :conda:package:`pysam`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`scipy`  

   :required~by: |required_by_ribotish|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ribotish

   and update with::

      conda update ribotish

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ribotish


.. |required_by_ribotish| conda:required_by:: ribotish
.. |downloads_ribotish| image:: https://img.shields.io/conda/dn/bioconda/ribotish.svg?style=flat
   :alt:   (downloads)
.. |docker_ribotish| image:: https://quay.io/repository/biocontainers/ribotish/status
   :target: https://quay.io/repository/biocontainers/ribotish







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ribotish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ribotish/README.html

