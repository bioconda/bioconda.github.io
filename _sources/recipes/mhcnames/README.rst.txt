:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mhcnames'
.. highlight: bash

mhcnames
========

.. conda:recipe:: mhcnames
   :replaces_section_title:

   Python library for MHC nomenclature parsing

   :homepage: https://github.com/hammerlab/mhcnames
   :license: Apache License Version 2.0
   :recipe: /`mhcnames <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mhcnames>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mhcnames/meta.yaml>`_

   


.. conda:package:: mhcnames

   |downloads_mhcnames| |docker_mhcnames|

   :versions: 0.4.8-0
   
   :depends python: 
   
   :depends six: >=1.9.0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mhcnames

   and update with::

      conda update mhcnames

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mhcnames:<tag>

   (see `mhcnames/tags`_ for valid values for ``<tag>``)


.. |downloads_mhcnames| image:: https://img.shields.io/conda/dn/bioconda/mhcnames.svg?style=flat
   :alt:   (downloads)
.. |docker_mhcnames| image:: https://quay.io/repository/biocontainers/mhcnames/status
   :target: https://quay.io/repository/biocontainers/mhcnames
.. _`mhcnames/tags`: https://quay.io/repository/biocontainers/mhcnames?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mhcnames/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mhcnames/README.html