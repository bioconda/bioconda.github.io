:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyseer'
.. highlight: bash

pyseer
======

.. conda:recipe:: pyseer
   :replaces_section_title:

   Sequence Element Enrichment Analysis \(SEER\)\, python implementation

   :homepage: https://github.com/mgalardini/pyseer
   :license: APACHE / Apache-2.0
   :recipe: /`pyseer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyseer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyseer/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bty539`

   


.. conda:package:: pyseer

   |downloads_pyseer| |docker_pyseer|

   :versions: 1.3.1-1, 1.3.1-0, 1.3.0-0, 1.2.0-0, 1.1.2-0, 1.1.1-0, 1.1.0-1, 1.1.0-0, 1.0.2-0, 0.3.1-0
   
   :depends bedops: 
   :depends bedtools: 
   :depends bwa: 
   :depends dendropy: 
   :depends glmnet_py: 
   :depends mash: 
   :depends matplotlib: 
   :depends numpy: 
   :depends pandas: 
   :depends pybedtools: 
   :depends pysam: 
   :depends python: 
   :depends python-dateutil: >=2.5.0
   :depends scikit-learn: 
   :depends scipy: 
   :depends statsmodels: >=0.10
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyseer

   and update with::

      conda update pyseer

   or use the docker container::

      docker pull quay.io/biocontainers/pyseer:<tag>

   (see `pyseer/tags`_ for valid values for ``<tag>``)


.. |downloads_pyseer| image:: https://img.shields.io/conda/dn/bioconda/pyseer.svg?style=flat
   :target: https://anaconda.org/bioconda/pyseer
   :alt:   (downloads)
.. |docker_pyseer| image:: https://quay.io/repository/biocontainers/pyseer/status
   :target: https://quay.io/repository/biocontainers/pyseer
.. _`pyseer/tags`: https://quay.io/repository/biocontainers/pyseer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyseer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyseer/README.html