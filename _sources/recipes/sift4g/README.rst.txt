:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sift4g'
.. highlight: bash

sift4g
======

.. conda:recipe:: sift4g
   :replaces_section_title:
   :noindex:

   SIFT 4G is a faster version of SIFT that enables us to scale up and provide SIFT predictions for more organisms.

   :homepage: http://sift.bii.a-star.edu.sg/sift4g/
   :license: GPL-3.0
   :recipe: /`sift4g <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sift4g>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sift4g/meta.yaml>`_

   


.. conda:package:: sift4g

   |downloads_sift4g| |docker_sift4g|

   :versions:
      
      

      ``2.0.0-3``,  ``2.0.0-2``,  ``2.0.0-1``,  ``2.0.0-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sift4g

   and update with::

      conda update sift4g

   or use the docker container::

      docker pull quay.io/biocontainers/sift4g:<tag>

   (see `sift4g/tags`_ for valid values for ``<tag>``)


.. |downloads_sift4g| image:: https://img.shields.io/conda/dn/bioconda/sift4g.svg?style=flat
   :target: https://anaconda.org/bioconda/sift4g
   :alt:   (downloads)
.. |docker_sift4g| image:: https://quay.io/repository/biocontainers/sift4g/status
   :target: https://quay.io/repository/biocontainers/sift4g
.. _`sift4g/tags`: https://quay.io/repository/biocontainers/sift4g?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sift4g/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sift4g/README.html