:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mirge3'
.. highlight: bash

mirge3
======

.. conda:recipe:: mirge3
   :replaces_section_title:
   :noindex:

   Comprehensive analysis of small RNA sequencing Data

   :homepage: https://github.com/mhalushka/miRge3.0/
   :documentation: https://mirge3.readthedocs.io/
   
   :license: MIT / MIT
   :recipe: /`mirge3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirge3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirge3/meta.yaml>`_

   Comprehensive analysis of small RNA sequencing data


.. conda:package:: mirge3

   |downloads_mirge3| |docker_mirge3|

   :versions:
      
      

      ``0.0.5-0``,  ``0.0.4-1``,  ``0.0.4-0``,  ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends biopython: 
   :depends bowtie: 
   :depends cutadapt: 
   :depends future: ``>=0.18.2``
   :depends joblib: ``>=0.15.1``
   :depends matplotlib-base: 
   :depends pandas: ``>=1.0.3``
   :depends python: 
   :depends reportlab: ``>=3.5.42``
   :depends samtools: 
   :depends scikit-learn: ``0.23.1``
   :depends scipy: ``>=1.4.1``
   :depends viennarna: ``2.4.14``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mirge3

   and update with::

      conda update mirge3

   or use the docker container::

      docker pull quay.io/biocontainers/mirge3:<tag>

   (see `mirge3/tags`_ for valid values for ``<tag>``)


.. |downloads_mirge3| image:: https://img.shields.io/conda/dn/bioconda/mirge3.svg?style=flat
   :target: https://anaconda.org/bioconda/mirge3
   :alt:   (downloads)
.. |docker_mirge3| image:: https://quay.io/repository/biocontainers/mirge3/status
   :target: https://quay.io/repository/biocontainers/mirge3
.. _`mirge3/tags`: https://quay.io/repository/biocontainers/mirge3?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mirge3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mirge3/README.html