:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biofluff'
.. highlight: bash

biofluff
========

.. conda:recipe:: biofluff
   :replaces_section_title:

   Exploratory analysis and visualization of high\-throughput sequencing data

   :homepage: https://github.com/simonvh/fluff
   :license: MIT
   :recipe: /`biofluff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biofluff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biofluff/meta.yaml>`_

   


.. conda:package:: biofluff

   |downloads_biofluff| |docker_biofluff|

   :versions: 3.0.3-0, 3.0.2-1, 3.0.2-0, 2.1.3-0, 2.1.2-0, 2.1.1-0, 2.1.0-0, 2.0.2-0, 2.0.1-1
   
   :depends htseq: 
   
   :depends matplotlib: >=2
   
   :depends palettable: 
   
   :depends pybedtools: 
   
   :depends pybigwig: 
   
   :depends pysam: 
   
   :depends python: >=3.5,<3.6.0a0
   
   :depends scikit-learn: 
   
   :depends scipy: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biofluff

   and update with::

      conda update biofluff

   or use the docker container::

      docker pull quay.io/repository/biocontainers/biofluff:<tag>

   (see `biofluff/tags`_ for valid values for ``<tag>``)


.. |downloads_biofluff| image:: https://img.shields.io/conda/dn/bioconda/biofluff.svg?style=flat
   :alt:   (downloads)
.. |docker_biofluff| image:: https://quay.io/repository/biocontainers/biofluff/status
   :target: https://quay.io/repository/biocontainers/biofluff
.. _`biofluff/tags`: https://quay.io/repository/biocontainers/biofluff?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biofluff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biofluff/README.html