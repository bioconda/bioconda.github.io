:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'munkres'
.. highlight: bash

munkres
=======

.. conda:recipe:: munkres
   :replaces_section_title:

   munkres algorithm for the Assignment Problem

   :homepage: http://software.clapper.org/munkres/
   :license: Apache License
   :recipe: /`munkres <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/munkres>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/munkres/meta.yaml>`_

   


.. conda:package:: munkres

   |downloads_munkres| |docker_munkres|

   :versions: 1.0.7-1, 1.0.7-0
   
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install munkres

   and update with::

      conda update munkres

   or use the docker container::

      docker pull quay.io/biocontainers/munkres:<tag>

   (see `munkres/tags`_ for valid values for ``<tag>``)


.. |downloads_munkres| image:: https://img.shields.io/conda/dn/bioconda/munkres.svg?style=flat
   :alt:   (downloads)
.. |docker_munkres| image:: https://quay.io/repository/biocontainers/munkres/status
   :target: https://quay.io/repository/biocontainers/munkres
.. _`munkres/tags`: https://quay.io/repository/biocontainers/munkres?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/munkres/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/munkres/README.html