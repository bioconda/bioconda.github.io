:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crimson'
.. highlight: bash

crimson
=======

.. conda:recipe:: crimson
   :replaces_section_title:

   Bioinformatics tool outputs converter to JSON or YAML.

   :homepage: https://github.com/bow/crimson
   :license: BSD / BSD License
   :recipe: /`crimson <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crimson>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crimson/meta.yaml>`_

   


.. conda:package:: crimson

   |downloads_crimson| |docker_crimson|

   :versions: 0.4.0-1, 0.3.0-1, 0.3.0-0
   
   :depends click: >=6.6
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends pyyaml: >=3.11
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install crimson

   and update with::

      conda update crimson

   or use the docker container::

      docker pull quay.io/biocontainers/crimson:<tag>

   (see `crimson/tags`_ for valid values for ``<tag>``)


.. |downloads_crimson| image:: https://img.shields.io/conda/dn/bioconda/crimson.svg?style=flat
   :alt:   (downloads)
.. |docker_crimson| image:: https://quay.io/repository/biocontainers/crimson/status
   :target: https://quay.io/repository/biocontainers/crimson
.. _`crimson/tags`: https://quay.io/repository/biocontainers/crimson?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crimson/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crimson/README.html