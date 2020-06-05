:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pp'
.. highlight: bash

pp
==

.. conda:recipe:: pp
   :replaces_section_title:
   :noindex:

   Parallel and distributed programming for Python

   :homepage: http://www.parallelpython.com
   :license: BSD / BSD License
   :recipe: /`pp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pp/meta.yaml>`_

   


.. conda:package:: pp

   |downloads_pp| |docker_pp|

   :versions:
      
      

      ``1.6.5-2``,  ``1.6.5-1``,  ``1.6.5-0``,  ``1.6.4.4-0``,  ``1.6.4-1``,  ``1.6.4-0``

      

   
   :depends python: ``<3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pp

   and update with::

      conda update pp

   or use the docker container::

      docker pull quay.io/biocontainers/pp:<tag>

   (see `pp/tags`_ for valid values for ``<tag>``)


.. |downloads_pp| image:: https://img.shields.io/conda/dn/bioconda/pp.svg?style=flat
   :target: https://anaconda.org/bioconda/pp
   :alt:   (downloads)
.. |docker_pp| image:: https://quay.io/repository/biocontainers/pp/status
   :target: https://quay.io/repository/biocontainers/pp
.. _`pp/tags`: https://quay.io/repository/biocontainers/pp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pp/README.html