:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'eigensoft'
.. highlight: bash

eigensoft
=========

.. conda:recipe:: eigensoft
   :replaces_section_title:

   The EIGENSOFT package implements methods for analzing population structure and performing stratification correction

   :homepage: https://github.com/DReichLab/EIG
   :license: Custom OSS
   :recipe: /`eigensoft <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eigensoft>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eigensoft/meta.yaml>`_
   :links: biotools: :biotools:`Eigensoft`, doi: :doi:`10.1371/journal.pgen.0020190`

   


.. conda:package:: eigensoft

   |downloads_eigensoft| |docker_eigensoft|

   :versions: 7.2.1-0, 6.0.1-3, 6.0.1-1, 6.0.1-0
   
   :depends gsl: >=2.2.1,<2.3.0a0
   
   :depends openblas: >=0.2.20,<0.2.21.0a0
   
   :depends perl: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install eigensoft

   and update with::

      conda update eigensoft

   or use the docker container::

      docker pull quay.io/repository/biocontainers/eigensoft:<tag>

   (see `eigensoft/tags`_ for valid values for ``<tag>``)


.. |downloads_eigensoft| image:: https://img.shields.io/conda/dn/bioconda/eigensoft.svg?style=flat
   :alt:   (downloads)
.. |docker_eigensoft| image:: https://quay.io/repository/biocontainers/eigensoft/status
   :target: https://quay.io/repository/biocontainers/eigensoft
.. _`eigensoft/tags`: https://quay.io/repository/biocontainers/eigensoft?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eigensoft/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eigensoft/README.html