:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vibrant'
.. highlight: bash

vibrant
=======

.. conda:recipe:: vibrant
   :replaces_section_title:

   Virus Identification By iteRative ANnoTation

   :homepage: https://github.com/AnantharamanLab/VIBRANT
   :license: GPL / GPL
   :recipe: /`vibrant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vibrant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vibrant/meta.yaml>`_

   


.. conda:package:: vibrant

   |downloads_vibrant| |docker_vibrant|

   :versions: 1.0.1-0
   
   :depends biopython: 
   :depends hmmer: 
   :depends matplotlib: 
   :depends numpy: 
   :depends pandas: 
   :depends prodigal: 
   :depends python: >=3.5
   :depends scikit-learn: 
   :depends seaborn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vibrant

   and update with::

      conda update vibrant

   or use the docker container::

      docker pull quay.io/biocontainers/vibrant:<tag>

   (see `vibrant/tags`_ for valid values for ``<tag>``)


.. |downloads_vibrant| image:: https://img.shields.io/conda/dn/bioconda/vibrant.svg?style=flat
   :target: https://anaconda.org/bioconda/vibrant
   :alt:   (downloads)
.. |docker_vibrant| image:: https://quay.io/repository/biocontainers/vibrant/status
   :target: https://quay.io/repository/biocontainers/vibrant
.. _`vibrant/tags`: https://quay.io/repository/biocontainers/vibrant?tab=tags






Notes
-----
Read post\-link.sh on how to download 11GB required data files.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vibrant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vibrant/README.html