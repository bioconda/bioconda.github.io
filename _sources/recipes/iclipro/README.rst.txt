:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'iclipro'
.. highlight: bash

iclipro
=======

.. conda:recipe:: iclipro
   :replaces_section_title:

   iCLIPro is a Python package that can be used to control for systematic misassignments in iCLIP data.

   :homepage: http://www.biolab.si/iCLIPro/doc/
   :license: GPLv3
   :recipe: /`iclipro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iclipro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iclipro/meta.yaml>`_

   


.. conda:package:: iclipro

   |downloads_iclipro| |docker_iclipro|

   :versions: 0.1.1-1, 0.1.1-0
   
   :depends matplotlib: 
   :depends pysam: 
   :depends python: >=2.7,<2.8.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install iclipro

   and update with::

      conda update iclipro

   or use the docker container::

      docker pull quay.io/biocontainers/iclipro:<tag>

   (see `iclipro/tags`_ for valid values for ``<tag>``)


.. |downloads_iclipro| image:: https://img.shields.io/conda/dn/bioconda/iclipro.svg?style=flat
   :alt:   (downloads)
.. |docker_iclipro| image:: https://quay.io/repository/biocontainers/iclipro/status
   :target: https://quay.io/repository/biocontainers/iclipro
.. _`iclipro/tags`: https://quay.io/repository/biocontainers/iclipro?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/iclipro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/iclipro/README.html