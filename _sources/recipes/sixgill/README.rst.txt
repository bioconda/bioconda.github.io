:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sixgill'
.. highlight: bash

sixgill
=======

.. conda:recipe:: sixgill
   :replaces_section_title:

   six\-frame genome\-inferred libraries for LC\-MS\/MS

   :homepage: 
   :license: Apache / Apache Software License
   :recipe: /`sixgill <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sixgill>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sixgill/meta.yaml>`_

   


.. conda:package:: sixgill

   |downloads_sixgill| |docker_sixgill|

   :versions: 0.2.4-2, 0.2.4-1, 0.2.4-0, 0.2.3-0
   
   :depends biopython: 
   :depends pysam: >=0.9.0
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sixgill

   and update with::

      conda update sixgill

   or use the docker container::

      docker pull quay.io/biocontainers/sixgill:<tag>

   (see `sixgill/tags`_ for valid values for ``<tag>``)


.. |downloads_sixgill| image:: https://img.shields.io/conda/dn/bioconda/sixgill.svg?style=flat
   :target: https://anaconda.org/bioconda/sixgill
   :alt:   (downloads)
.. |docker_sixgill| image:: https://quay.io/repository/biocontainers/sixgill/status
   :target: https://quay.io/repository/biocontainers/sixgill
.. _`sixgill/tags`: https://quay.io/repository/biocontainers/sixgill?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sixgill/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sixgill/README.html