.. title:: Package Recipe 'edd'
.. highlight: bash


edd
===

.. conda:recipe:: edd
   :replaces_section_title:

   Enriched domain detector for ChIP\-seq data

   :homepage: http://github.com/CollasLab/edd
   :license: MIT / MIT
   :recipe: /`edd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/edd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/edd/meta.yaml>`_

   


.. conda:package:: edd

   |downloads_edd| |docker_edd|

   :versions: 1.1.18

   :depends: :conda:package:`logbook`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`patsy`  :conda:package:`pybedtools`  :conda:package:`pysam` >=0.10.0 :conda:package:`python` 2.7* :conda:package:`python-dateutil`  :conda:package:`scipy`  :conda:package:`statsmodels`  

   :required~by: |required_by_edd|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install edd

   and update with::

      conda update edd

   or use the docker container::

      docker pull quay.io/repository/biocontainers/edd


.. |required_by_edd| conda:required_by:: edd
.. |downloads_edd| image:: https://img.shields.io/conda/dn/bioconda/edd.svg?style=flat
   :alt:   (downloads)
.. |docker_edd| image:: https://quay.io/repository/biocontainers/edd/status
   :target: https://quay.io/repository/biocontainers/edd







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/edd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/edd/README.html

