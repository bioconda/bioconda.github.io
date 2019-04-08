:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fiji'
.. highlight: bash

fiji
====

.. conda:recipe:: fiji/20151222
   :replaces_section_title:

   Fiji is an image processing package—a \"batteries\-included\" distribution of ImageJ\, bundling a lot of plugins which facilitate scientific image analysis.

   :homepage: http://fiji.sc
   :license: GNU General Public License
   :recipe: /`fiji <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fiji>`_/`20151222 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fiji/20151222>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fiji/20151222/meta.yaml>`_

   


.. conda:package:: fiji

   |downloads_fiji| |docker_fiji|

   :versions: 20151222-2, 20151222-1, 20151222-0, 20141125-6, 20141125-5, 20141125-4, 20141125-3, 20141125-2, 20141125-1
   
   :depends java-jdk: >=6
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fiji

   and update with::

      conda update fiji

   or use the docker container::

      docker pull quay.io/biocontainers/fiji:<tag>

   (see `fiji/tags`_ for valid values for ``<tag>``)


.. |downloads_fiji| image:: https://img.shields.io/conda/dn/bioconda/fiji.svg?style=flat
   :alt:   (downloads)
.. |docker_fiji| image:: https://quay.io/repository/biocontainers/fiji/status
   :target: https://quay.io/repository/biocontainers/fiji
.. _`fiji/tags`: https://quay.io/repository/biocontainers/fiji?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fiji/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fiji/README.html