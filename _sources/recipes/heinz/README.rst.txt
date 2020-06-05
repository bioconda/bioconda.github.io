:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'heinz'
.. highlight: bash

heinz
=====

.. conda:recipe:: heinz
   :replaces_section_title:
   :noindex:

   The algorithm for identification of the optimal scoring subnetwork.

   :homepage: https://github.com/ls-cwi/heinz
   :license: MIT
   :recipe: /`heinz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/heinz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/heinz/meta.yaml>`_

   


.. conda:package:: heinz

   |downloads_heinz| |docker_heinz|

   :versions:
      
      

      ``2.0-1``,  ``2.0-0``

      

   
   :depends libgcc: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install heinz

   and update with::

      conda update heinz

   or use the docker container::

      docker pull quay.io/biocontainers/heinz:<tag>

   (see `heinz/tags`_ for valid values for ``<tag>``)


.. |downloads_heinz| image:: https://img.shields.io/conda/dn/bioconda/heinz.svg?style=flat
   :target: https://anaconda.org/bioconda/heinz
   :alt:   (downloads)
.. |docker_heinz| image:: https://quay.io/repository/biocontainers/heinz/status
   :target: https://quay.io/repository/biocontainers/heinz
.. _`heinz/tags`: https://quay.io/repository/biocontainers/heinz?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/heinz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/heinz/README.html