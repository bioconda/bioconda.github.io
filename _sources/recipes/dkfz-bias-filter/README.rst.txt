.. title:: Package Recipe 'dkfz-bias-filter'
.. highlight: bash


dkfz-bias-filter
================

.. conda:recipe:: dkfz-bias-filter
   :replaces_section_title:

   The DKFZ bias filter flags SNVs that appear to be biased based on the variant read support

   :homepage: https://github.com/eilslabs/DKFZBiasFilter
   :license: GPLv3
   :recipe: /`dkfz-bias-filter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dkfz-bias-filter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dkfz-bias-filter/meta.yaml>`_

   


.. conda:package:: dkfz-bias-filter

   |downloads_dkfz-bias-filter| |docker_dkfz-bias-filter|

   :versions: 1.2.3a

   :depends: :conda:package:`matplotlib`  :conda:package:`numpy`  :conda:package:`pysam`  :conda:package:`python` 2.7* :conda:package:`scipy`  

   :required~by: |required_by_dkfz-bias-filter|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dkfz-bias-filter

   and update with::

      conda update dkfz-bias-filter

   or use the docker container::

      docker pull quay.io/repository/biocontainers/dkfz-bias-filter


.. |required_by_dkfz-bias-filter| conda:required_by:: dkfz-bias-filter
.. |downloads_dkfz-bias-filter| image:: https://img.shields.io/conda/dn/bioconda/dkfz-bias-filter.svg?style=flat
   :alt:   (downloads)
.. |docker_dkfz-bias-filter| image:: https://quay.io/repository/biocontainers/dkfz-bias-filter/status
   :target: https://quay.io/repository/biocontainers/dkfz-bias-filter







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dkfz-bias-filter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dkfz-bias-filter/README.html

