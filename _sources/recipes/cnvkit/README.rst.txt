:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cnvkit'
.. highlight: bash

cnvkit
======

.. conda:recipe:: cnvkit
   :replaces_section_title:

   Copy number variant detection from high\-throughput sequencing

   :homepage: https://github.com/etal/cnvkit
   :license: Apache License 2.0
   :recipe: /`cnvkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cnvkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cnvkit/meta.yaml>`_
   :links: biotools: :biotools:`cnvkit`, doi: :doi:`10.1371/journal.pcbi.1004873`

   


.. conda:package:: cnvkit

   |downloads_cnvkit| |docker_cnvkit|

   :versions: 0.9.6-1, 0.9.6-0, 0.9.6a0-2, 0.9.6a0-1, 0.9.6a0-0, 0.9.5-1, 0.9.5-0, 0.9.4a0-0, 0.9.3-2, 0.9.2-2, 0.9.2a0-2, 0.9.2a0-1, 0.9.2a0-0, 0.9.1-0, 0.9.1a0-0, 0.9.0-0, 0.8.6a0-2, 0.8.6a0-1, 0.8.6a0-0, 0.8.5-0, 0.8.5dev0-1, 0.8.5dev0-0, 0.8.4-0, 0.8.3a0-1, 0.8.3a0-0, 0.8.2-0, 0.8.1-0, 0.8.0-0, 0.7.11-0, 0.7.10-1, 0.7.10-0, 0.7.9-0, 0.7.8-1, 0.7.8-0, 0.7.7-0, 0.7.6-0, 0.7.5-0, 0.7.4-1, 0.7.4-0, 0.7.3-0
   
   :depends bioconductor-dnacopy: 
   :depends biopython: >=1.62
   :depends future: >=0.15.2
   :depends futures: >=3.0
   :depends matplotlib: >=1.3.1
   :depends numpy: >=1.9
   :depends pandas: >=0.22.0
   :depends pomegranate: >=0.9.0
   :depends pyfaidx: >=0.4.7
   :depends pysam: >=0.10.0
   :depends python: >=2.7,<2.8.0a0
   :depends python-dateutil: >=2.5.0
   :depends r-base: >=3.4.1
   :depends r-cghflasso: 
   :depends reportlab: >=3.0
   :depends scipy: >=0.15.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cnvkit

   and update with::

      conda update cnvkit

   or use the docker container::

      docker pull quay.io/biocontainers/cnvkit:<tag>

   (see `cnvkit/tags`_ for valid values for ``<tag>``)


.. |downloads_cnvkit| image:: https://img.shields.io/conda/dn/bioconda/cnvkit.svg?style=flat
   :target: https://anaconda.org/bioconda/cnvkit
   :alt:   (downloads)
.. |docker_cnvkit| image:: https://quay.io/repository/biocontainers/cnvkit/status
   :target: https://quay.io/repository/biocontainers/cnvkit
.. _`cnvkit/tags`: https://quay.io/repository/biocontainers/cnvkit?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cnvkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cnvkit/README.html