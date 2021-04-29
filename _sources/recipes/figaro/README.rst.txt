:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'figaro'
.. highlight: bash

figaro
======

.. conda:recipe:: figaro
   :replaces_section_title:
   :noindex:

   An efficient and objective tool for optimizing microbiome rRNA gene trimming parameters

   :homepage: https://github.com/Zymo-Research/figaro
   :license: GPLv3
   :recipe: /`figaro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/figaro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/figaro/meta.yaml>`_

   


.. conda:package:: figaro

   |downloads_figaro| |docker_figaro|

   :versions:
      
      

      ``1.1.2-0``

      

   
   :depends matplotlib-base: ``>=3.0.2``
   :depends numpy: ``>=1.13.1``
   :depends python: ``>=3.7``
   :depends scipy: ``>=1.2.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install figaro

   and update with::

      conda update figaro

   or use the docker container::

      docker pull quay.io/biocontainers/figaro:<tag>

   (see `figaro/tags`_ for valid values for ``<tag>``)


.. |downloads_figaro| image:: https://img.shields.io/conda/dn/bioconda/figaro.svg?style=flat
   :target: https://anaconda.org/bioconda/figaro
   :alt:   (downloads)
.. |docker_figaro| image:: https://quay.io/repository/biocontainers/figaro/status
   :target: https://quay.io/repository/biocontainers/figaro
.. _`figaro/tags`: https://quay.io/repository/biocontainers/figaro?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/figaro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/figaro/README.html