.. title:: Package Recipe 'metilene'
.. highlight: bash


metilene
========

.. conda:recipe:: metilene
   :replaces_section_title:

   Fast and sensitive detection of differential DNA methylation

   :homepage: http://www.bioinf.uni-leipzig.de/Software/metilene/
   :license: GPLv2
   :recipe: /`metilene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metilene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metilene/meta.yaml>`_

   


.. conda:package:: metilene

   |downloads_metilene| |docker_metilene|

   :versions: 0.2.6

   :depends: :conda:package:`bedtools` >=2.24 :conda:package:`libgcc-ng` >=4.9 :conda:package:`perl`  :conda:package:`r-base`  :conda:package:`r-ggplot2` >=2.0.0 

   :required~by: |required_by_metilene|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metilene

   and update with::

      conda update metilene

   or use the docker container::

      docker pull quay.io/repository/biocontainers/metilene


.. |required_by_metilene| conda:required_by:: metilene
.. |downloads_metilene| image:: https://img.shields.io/conda/dn/bioconda/metilene.svg?style=flat
   :alt:   (downloads)
.. |docker_metilene| image:: https://quay.io/repository/biocontainers/metilene/status
   :target: https://quay.io/repository/biocontainers/metilene







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metilene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metilene/README.html

