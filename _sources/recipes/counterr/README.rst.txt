:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'counterr'
.. highlight: bash

counterr
========

.. conda:recipe:: counterr
   :replaces_section_title:

   Counterr is a light\-weight command line tool that computes errors in sequencing data by comparing the reads to a reference genome.

   :homepage: https://github.com/dayzerodx/counterr
   :license: GPL-3.0
   :recipe: /`counterr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/counterr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/counterr/meta.yaml>`_

   


.. conda:package:: counterr

   |downloads_counterr| |docker_counterr|

   :versions: 0.1-0
   
   :depends matplotlib: >=2.2.3
   
   :depends numpy: >=1.15.4
   
   :depends pandas: >=0.23.4
   
   :depends pysam: >=0.14.1
   
   :depends python: 
   
   :depends seaborn: >=0.9.0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install counterr

   and update with::

      conda update counterr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/counterr:<tag>

   (see `counterr/tags`_ for valid values for ``<tag>``)


.. |downloads_counterr| image:: https://img.shields.io/conda/dn/bioconda/counterr.svg?style=flat
   :alt:   (downloads)
.. |docker_counterr| image:: https://quay.io/repository/biocontainers/counterr/status
   :target: https://quay.io/repository/biocontainers/counterr
.. _`counterr/tags`: https://quay.io/repository/biocontainers/counterr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/counterr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/counterr/README.html