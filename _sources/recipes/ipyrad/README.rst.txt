:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ipyrad'
.. highlight: bash

ipyrad
======

.. conda:recipe:: ipyrad
   :replaces_section_title:

   Interactive assembly and analysis of RAD\-seq data sets.

   :homepage: http://github.com/dereneaton/ipyrad
   :license: GPL3
   :recipe: /`ipyrad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ipyrad>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ipyrad/meta.yaml>`_

   


.. conda:package:: ipyrad

   |downloads_ipyrad| |docker_ipyrad|

   :versions: 0.9.45-0, 0.9.44-0, 0.9.43-0, 0.9.42-0, 0.9.41-0, 0.9.40-0, 0.9.33-0, 0.9.32-0, 0.9.31-0, 0.9.30-0, 0.9.29-0, 0.9.28-0, 0.9.26-0, 0.9.25-0, 0.9.24-0, 0.9.20-0, 0.9.19-1, 0.9.19-0, 0.9.18-0, 0.9.17-0, 0.9.16-0, 0.9.15-0, 0.9.14-0, 0.9.13-0, 0.9.12-0, 0.9.11-1, 0.9.11-0, 0.9.10-0, 0.9.8-0, 0.9.7-0
   
   :depends bedtools: 
   :depends bwa: 
   :depends cutadapt: 
   :depends future: 
   :depends h5py: 
   :depends ipyparallel: >=6.0.2
   :depends muscle: 
   :depends notebook: 
   :depends numba: >=0.37
   :depends numpy: 
   :depends pandas: 
   :depends pysam: >=0.15
   :depends python: 
   :depends requests: 
   :depends samtools: 
   :depends scipy: 
   :depends vsearch: >=2.13
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ipyrad

   and update with::

      conda update ipyrad

   or use the docker container::

      docker pull quay.io/biocontainers/ipyrad:<tag>

   (see `ipyrad/tags`_ for valid values for ``<tag>``)


.. |downloads_ipyrad| image:: https://img.shields.io/conda/dn/bioconda/ipyrad.svg?style=flat
   :target: https://anaconda.org/bioconda/ipyrad
   :alt:   (downloads)
.. |docker_ipyrad| image:: https://quay.io/repository/biocontainers/ipyrad/status
   :target: https://quay.io/repository/biocontainers/ipyrad
.. _`ipyrad/tags`: https://quay.io/repository/biocontainers/ipyrad?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ipyrad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ipyrad/README.html