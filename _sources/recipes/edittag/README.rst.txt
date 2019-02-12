:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'edittag'
.. highlight: bash

edittag
=======

.. conda:recipe:: edittag
   :replaces_section_title:

   Design and check sets of edit metric sequence tags.

   :homepage: http://github.com/faircloth-lab/edittag/
   :license: http://www.opensource.org/licenses/BSD-3-Clause
   :recipe: /`edittag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/edittag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/edittag/meta.yaml>`_

   


.. conda:package:: edittag

   |downloads_edittag| |docker_edittag|

   :versions: 1.1-1, 1.1-0
   
   :depends numpy: >=1.3
   
   :depends python: >=2.7,<2.8.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install edittag

   and update with::

      conda update edittag

   or use the docker container::

      docker pull quay.io/repository/biocontainers/edittag:<tag>

   (see `edittag/tags`_ for valid values for ``<tag>``)


.. |downloads_edittag| image:: https://img.shields.io/conda/dn/bioconda/edittag.svg?style=flat
   :alt:   (downloads)
.. |docker_edittag| image:: https://quay.io/repository/biocontainers/edittag/status
   :target: https://quay.io/repository/biocontainers/edittag
.. _`edittag/tags`: https://quay.io/repository/biocontainers/edittag?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/edittag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/edittag/README.html