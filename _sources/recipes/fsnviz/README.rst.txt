:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fsnviz'
.. highlight: bash

fsnviz
======

.. conda:recipe:: fsnviz
   :replaces_section_title:

   Tool for plotting gene fusion events detected by various tools using Circos.

   :homepage: https://github.com/bow/fsnviz
   :license: BSD / BSD
   :recipe: /`fsnviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fsnviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fsnviz/meta.yaml>`_

   


.. conda:package:: fsnviz

   |downloads_fsnviz| |docker_fsnviz|

   :versions: 0.3.0-1, 0.3.0-0, 0.2.0-1, 0.2.0-0, 0.1.0-1, 0.1.0-0
   
   :depends circos: >=0.69.2
   :depends click: >=6.6
   :depends crimson: >=0.3.0
   :depends jinja2: 2.9.5
   :depends python: >=3.5,<3.6.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fsnviz

   and update with::

      conda update fsnviz

   or use the docker container::

      docker pull quay.io/biocontainers/fsnviz:<tag>

   (see `fsnviz/tags`_ for valid values for ``<tag>``)


.. |downloads_fsnviz| image:: https://img.shields.io/conda/dn/bioconda/fsnviz.svg?style=flat
   :target: https://anaconda.org/bioconda/fsnviz
   :alt:   (downloads)
.. |docker_fsnviz| image:: https://quay.io/repository/biocontainers/fsnviz/status
   :target: https://quay.io/repository/biocontainers/fsnviz
.. _`fsnviz/tags`: https://quay.io/repository/biocontainers/fsnviz?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fsnviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fsnviz/README.html