:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'estscan'
.. highlight: bash

estscan
=======

.. conda:recipe:: estscan/3.0
   :replaces_section_title:

   Detects coding regions in DNA sequences even if they are of low quality

   :homepage: http://estscan.sourceforge.net
   :license: open source
   :recipe: /`estscan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/estscan>`_/`3.0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/estscan/3.0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/estscan/3.0/meta.yaml>`_

   


.. conda:package:: estscan

   |downloads_estscan| |docker_estscan|

   :versions: 3.0-2, 3.0-1, 3.0-0
   
   :depends libgcc-ng: >=4.9
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install estscan

   and update with::

      conda update estscan

   or use the docker container::

      docker pull quay.io/biocontainers/estscan:<tag>

   (see `estscan/tags`_ for valid values for ``<tag>``)


.. |downloads_estscan| image:: https://img.shields.io/conda/dn/bioconda/estscan.svg?style=flat
   :target: https://anaconda.org/bioconda/estscan
   :alt:   (downloads)
.. |docker_estscan| image:: https://quay.io/repository/biocontainers/estscan/status
   :target: https://quay.io/repository/biocontainers/estscan
.. _`estscan/tags`: https://quay.io/repository/biocontainers/estscan?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/estscan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/estscan/README.html