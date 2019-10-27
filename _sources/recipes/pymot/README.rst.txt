:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pymot'
.. highlight: bash

pymot
=====

.. conda:recipe:: pymot
   :replaces_section_title:

   This is a python implementation which determines the MOTP and MOTA metrics from a set of ground truth tracks and a set of hypothesis tracks given by the tracker to be evaluated.

   :homepage: https://github.com/Videmo/pymot
   :license: All Rights Reserved
   :recipe: /`pymot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymot/meta.yaml>`_

   


.. conda:package:: pymot

   |downloads_pymot| |docker_pymot|

   :versions: 13.09.2016-2, 13.09.2016-1, 13.09.2016-0
   
   :depends munkres: 
   :depends python: <3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pymot

   and update with::

      conda update pymot

   or use the docker container::

      docker pull quay.io/biocontainers/pymot:<tag>

   (see `pymot/tags`_ for valid values for ``<tag>``)


.. |downloads_pymot| image:: https://img.shields.io/conda/dn/bioconda/pymot.svg?style=flat
   :target: https://anaconda.org/bioconda/pymot
   :alt:   (downloads)
.. |docker_pymot| image:: https://quay.io/repository/biocontainers/pymot/status
   :target: https://quay.io/repository/biocontainers/pymot
.. _`pymot/tags`: https://quay.io/repository/biocontainers/pymot?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pymot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pymot/README.html