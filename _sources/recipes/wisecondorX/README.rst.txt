:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wisecondorx'
.. highlight: bash

wisecondorx
===========

.. conda:recipe:: wisecondorX
   :replaces_section_title:

   WIthin\-SamplE COpy Number aberration DetectOR\, including sex chromosomes

   :homepage: https://github.com/CenterForMedicalGeneticsGhent/wisecondorX
   :license: Attribution-NonCommercial-ShareAlike CC BY-NC-SA
   :recipe: /`wisecondorX <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wisecondorX>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wisecondorX/meta.yaml>`_

   


.. conda:package:: wisecondorx

   |downloads_wisecondorx| |docker_wisecondorx|

   :versions: 1.1.0-1, 1.1.0-0, 1.0.2-0, 1.0.1-0, 1.0.0-0, 0.2.1-0, 0.2.0-1, 0.1.0-2, 0.1.0-1, 0.1.0-0
   
   :depends bioconductor-dnacopy: 
   :depends futures: 
   :depends numpy: 
   :depends pysam: 
   :depends python: 
   :depends r-jsonlite: >=1.5
   :depends r-png: 
   :depends scikit-learn: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install wisecondorx

   and update with::

      conda update wisecondorx

   or use the docker container::

      docker pull quay.io/biocontainers/wisecondorx:<tag>

   (see `wisecondorx/tags`_ for valid values for ``<tag>``)


.. |downloads_wisecondorx| image:: https://img.shields.io/conda/dn/bioconda/wisecondorx.svg?style=flat
   :target: https://anaconda.org/bioconda/wisecondorx
   :alt:   (downloads)
.. |docker_wisecondorx| image:: https://quay.io/repository/biocontainers/wisecondorx/status
   :target: https://quay.io/repository/biocontainers/wisecondorx
.. _`wisecondorx/tags`: https://quay.io/repository/biocontainers/wisecondorx?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wisecondorx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wisecondorx/README.html