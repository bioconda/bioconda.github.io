:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cmfinder'
.. highlight: bash

cmfinder
========

.. conda:recipe:: cmfinder
   :replaces_section_title:
   :noindex:

   CMfinder \- A Covariance Model Based RNA Motif Finding Algorithm

   :homepage: https://sourceforge.net/projects/weinberg-cmfinder/
   :license: GPL3
   :recipe: /`cmfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmfinder/meta.yaml>`_

   


.. conda:package:: cmfinder

   |downloads_cmfinder| |docker_cmfinder|

   :versions:
      
      

      ``0.4.1.9-2``,  ``0.4.1.9-1``,  ``0.4.1.9-0``,  ``0.2-0``

      

   
   :depends blast: 
   :depends libgcc-ng: ``>=4.9``
   :depends perl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cmfinder

   and update with::

      conda update cmfinder

   or use the docker container::

      docker pull quay.io/biocontainers/cmfinder:<tag>

   (see `cmfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_cmfinder| image:: https://img.shields.io/conda/dn/bioconda/cmfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/cmfinder
   :alt:   (downloads)
.. |docker_cmfinder| image:: https://quay.io/repository/biocontainers/cmfinder/status
   :target: https://quay.io/repository/biocontainers/cmfinder
.. _`cmfinder/tags`: https://quay.io/repository/biocontainers/cmfinder?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cmfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cmfinder/README.html