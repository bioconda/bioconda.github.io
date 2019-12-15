:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cgat-daisy'
.. highlight: bash

cgat-daisy
==========

.. conda:recipe:: cgat-daisy
   :replaces_section_title:

   A system to design and execute benchmarks

   :homepage: https://github.com/cgat-developers/cgat-daisy
   :license: MIT
   :recipe: /`cgat-daisy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgat-daisy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgat-daisy/meta.yaml>`_

   


.. conda:package:: cgat-daisy

   |downloads_cgat-daisy| |docker_cgat-daisy|

   :versions: 0.1.7-0, 0.1.6-0, 0.1.5-0, 0.1.4-0, 0.1.2-0
   
   :depends cgatcore: 
   :depends pandas: 
   :depends pysam: 
   :depends python: 
   :depends ruamel_yaml: 
   :depends ruffus: 
   :depends sqlalchemy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cgat-daisy

   and update with::

      conda update cgat-daisy

   or use the docker container::

      docker pull quay.io/biocontainers/cgat-daisy:<tag>

   (see `cgat-daisy/tags`_ for valid values for ``<tag>``)


.. |downloads_cgat-daisy| image:: https://img.shields.io/conda/dn/bioconda/cgat-daisy.svg?style=flat
   :target: https://anaconda.org/bioconda/cgat-daisy
   :alt:   (downloads)
.. |docker_cgat-daisy| image:: https://quay.io/repository/biocontainers/cgat-daisy/status
   :target: https://quay.io/repository/biocontainers/cgat-daisy
.. _`cgat-daisy/tags`: https://quay.io/repository/biocontainers/cgat-daisy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cgat-daisy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cgat-daisy/README.html