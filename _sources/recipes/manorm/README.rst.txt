.. title:: Package Recipe 'manorm'
.. highlight: bash


manorm
======

.. conda:recipe:: manorm
   :replaces_section_title:

   A robust model for quantitative comparison of ChIP\-Seq data sets.

   :homepage: https://github.com/shao-lab/MAnorm
   :license: BSD / BSD License
   :recipe: /`manorm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/manorm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/manorm/meta.yaml>`_

   


.. conda:package:: manorm

   |downloads_manorm| |docker_manorm|

   :versions: 1.1.4, 1.1.3, 1.1.2, 1.1.1, 1.1

   :depends: :conda:package:`matplotlib`  :conda:package:`numpy`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`scipy`  :conda:package:`statsmodels`  

   :required~by: |required_by_manorm|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install manorm

   and update with::

      conda update manorm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/manorm


.. |required_by_manorm| conda:required_by:: manorm
.. |downloads_manorm| image:: https://img.shields.io/conda/dn/bioconda/manorm.svg?style=flat
   :alt:   (downloads)
.. |docker_manorm| image:: https://quay.io/repository/biocontainers/manorm/status
   :target: https://quay.io/repository/biocontainers/manorm







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/manorm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/manorm/README.html

