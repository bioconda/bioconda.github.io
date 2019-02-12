:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sickle'
.. highlight: bash

sickle
======

.. conda:recipe:: sickle
   :replaces_section_title:

   A lightweight OAI client library for Python

   :homepage: http://github.com/mloesch/sickle
   :license: BSD / BSD License
   :recipe: /`sickle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sickle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sickle/meta.yaml>`_

   


.. conda:package:: sickle

   |downloads_sickle| |docker_sickle|

   :versions: 0.6.4-0, 0.6.3-2, 0.6.3-0, 0.5-0
   
   :depends lxml: >=3.2.3
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends requests: >=1.1.0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sickle

   and update with::

      conda update sickle

   or use the docker container::

      docker pull quay.io/repository/biocontainers/sickle:<tag>

   (see `sickle/tags`_ for valid values for ``<tag>``)


.. |downloads_sickle| image:: https://img.shields.io/conda/dn/bioconda/sickle.svg?style=flat
   :alt:   (downloads)
.. |docker_sickle| image:: https://quay.io/repository/biocontainers/sickle/status
   :target: https://quay.io/repository/biocontainers/sickle
.. _`sickle/tags`: https://quay.io/repository/biocontainers/sickle?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sickle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sickle/README.html