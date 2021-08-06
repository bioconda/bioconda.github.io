:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'orsum'
.. highlight: bash

orsum
=====

.. conda:recipe:: orsum
   :replaces_section_title:
   :noindex:

   A tool for the summary of over\-representation analysis results

   :homepage: https://github.com/ozanozisik/orsum/
   :license: MIT / MIT
   :recipe: /`orsum <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orsum>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orsum/meta.yaml>`_

   


.. conda:package:: orsum

   |downloads_orsum| |docker_orsum|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends matplotlib-base: ``>=3.3.0``
   :depends numpy: ``>=1.18.0``
   :depends pandas: ``>=1.2.0``
   :depends python: ``>=3.6``
   :depends seaborn: ``>=0.11.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install orsum

   and update with::

      conda update orsum

   or use the docker container::

      docker pull quay.io/biocontainers/orsum:<tag>

   (see `orsum/tags`_ for valid values for ``<tag>``)


.. |downloads_orsum| image:: https://img.shields.io/conda/dn/bioconda/orsum.svg?style=flat
   :target: https://anaconda.org/bioconda/orsum
   :alt:   (downloads)
.. |docker_orsum| image:: https://quay.io/repository/biocontainers/orsum/status
   :target: https://quay.io/repository/biocontainers/orsum
.. _`orsum/tags`: https://quay.io/repository/biocontainers/orsum?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/orsum/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/orsum/README.html