:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ig-checkflowtypes'
.. highlight: bash

ig-checkflowtypes
=================

.. conda:recipe:: ig-checkflowtypes
   :replaces_section_title:

   quick flow\-related datatype for galaxy checks

   :homepage: https://github.com/ImmPortDB/ig-checkflowtypes
   :license: BSD / BSD License
   :recipe: /`ig-checkflowtypes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ig-checkflowtypes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ig-checkflowtypes/meta.yaml>`_

   


.. conda:package:: ig-checkflowtypes

   |downloads_ig-checkflowtypes| |docker_ig-checkflowtypes|

   :versions: 1.0.0-2, 1.0.0-1, 1.0.0-0
   
   :depends bioconductor-flowcore: 
   
   :depends libcxx: >=4.0.1
   
   :depends libgfortran: >=3.0.1,<4.0.0.a0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ig-checkflowtypes

   and update with::

      conda update ig-checkflowtypes

   or use the docker container::

      docker pull quay.io/biocontainers/ig-checkflowtypes:<tag>

   (see `ig-checkflowtypes/tags`_ for valid values for ``<tag>``)


.. |downloads_ig-checkflowtypes| image:: https://img.shields.io/conda/dn/bioconda/ig-checkflowtypes.svg?style=flat
   :alt:   (downloads)
.. |docker_ig-checkflowtypes| image:: https://quay.io/repository/biocontainers/ig-checkflowtypes/status
   :target: https://quay.io/repository/biocontainers/ig-checkflowtypes
.. _`ig-checkflowtypes/tags`: https://quay.io/repository/biocontainers/ig-checkflowtypes?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ig-checkflowtypes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ig-checkflowtypes/README.html