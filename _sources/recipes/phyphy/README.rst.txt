:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phyphy'
.. highlight: bash

phyphy
======

.. conda:recipe:: phyphy
   :replaces_section_title:

   Facilitating the execution and parsing of standard HyPhy \(\>\=2.3.7\) analyses

   :homepage: https://github.com/sjspielman/phyphy
   :license: OTHER / BSD-3-Clause
   :recipe: /`phyphy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyphy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyphy/meta.yaml>`_

   


.. conda:package:: phyphy

   |downloads_phyphy| |docker_phyphy|

   :versions: 0.4.3-0
   
   :depends ete3: >=3.1
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phyphy

   and update with::

      conda update phyphy

   or use the docker container::

      docker pull quay.io/biocontainers/phyphy:<tag>

   (see `phyphy/tags`_ for valid values for ``<tag>``)


.. |downloads_phyphy| image:: https://img.shields.io/conda/dn/bioconda/phyphy.svg?style=flat
   :target: https://anaconda.org/bioconda/phyphy
   :alt:   (downloads)
.. |docker_phyphy| image:: https://quay.io/repository/biocontainers/phyphy/status
   :target: https://quay.io/repository/biocontainers/phyphy
.. _`phyphy/tags`: https://quay.io/repository/biocontainers/phyphy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phyphy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phyphy/README.html