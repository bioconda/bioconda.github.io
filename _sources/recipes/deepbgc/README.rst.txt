:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepbgc'
.. highlight: bash

deepbgc
=======

.. conda:recipe:: deepbgc
   :replaces_section_title:

   DeepBGC \- Biosynthetic Gene Cluster detection and classification

   :homepage: https://github.com/Merck/DeepBGC
   :license: MIT / MIT
   :recipe: /`deepbgc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepbgc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepbgc/meta.yaml>`_

   


.. conda:package:: deepbgc

   |downloads_deepbgc| |docker_deepbgc|

   :versions: 0.1.3-1, 0.1.3-0
   
   :depends appdirs: >=1.4.3
   
   :depends biopython: >=1.70
   
   :depends hmmer: >=3.1b2
   
   :depends keras: >=2.2.4
   
   :depends matplotlib: >=2.2.3
   
   :depends numpy: >=1.16.1
   
   :depends pandas: >=0.24.1
   
   :depends prodigal: 
   
   :depends python: >=2.7,!=3.1.*,!=3.2.*,!=3.3.*,!=3.4.*
   
   :depends scikit-learn: >=0.18.2
   
   :depends tensorflow: >=1.12.0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install deepbgc

   and update with::

      conda update deepbgc

   or use the docker container::

      docker pull quay.io/biocontainers/deepbgc:<tag>

   (see `deepbgc/tags`_ for valid values for ``<tag>``)


.. |downloads_deepbgc| image:: https://img.shields.io/conda/dn/bioconda/deepbgc.svg?style=flat
   :alt:   (downloads)
.. |docker_deepbgc| image:: https://quay.io/repository/biocontainers/deepbgc/status
   :target: https://quay.io/repository/biocontainers/deepbgc
.. _`deepbgc/tags`: https://quay.io/repository/biocontainers/deepbgc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepbgc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepbgc/README.html