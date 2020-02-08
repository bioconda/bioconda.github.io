:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libis'
.. highlight: bash

libis
=====

.. conda:recipe:: libis
   :replaces_section_title:

   Low input Bisulfite sequencing alignment

   :homepage: https://github.com/Dangertrip/LiBis
   :license: MIT / MIT
   :recipe: /`libis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libis/meta.yaml>`_

   


.. conda:package:: libis

   |downloads_libis| |docker_libis|

   :versions: 0.1.3-0, 0.1.2-0, 0.1.1-0, 0.1.0-0, 0.0.15-2, 0.0.15-0, 0.0.14-0, 0.0.12-0, 0.0.11-0, 0.0.9-2, 0.0.9-1, 0.0.9-0
   
   :depends bedtools: 
   :depends cutadapt: 
   :depends fastqc: 
   :depends matplotlib-base: 
   :depends moabs: >=1.3.8.5
   :depends numpy: 
   :depends pandas: 
   :depends pysam: >=0.15.3
   :depends python: >=3
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
   :depends trim-galore: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install libis

   and update with::

      conda update libis

   or use the docker container::

      docker pull quay.io/biocontainers/libis:<tag>

   (see `libis/tags`_ for valid values for ``<tag>``)


.. |downloads_libis| image:: https://img.shields.io/conda/dn/bioconda/libis.svg?style=flat
   :target: https://anaconda.org/bioconda/libis
   :alt:   (downloads)
.. |docker_libis| image:: https://quay.io/repository/biocontainers/libis/status
   :target: https://quay.io/repository/biocontainers/libis
.. _`libis/tags`: https://quay.io/repository/biocontainers/libis?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libis/README.html