:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bandage'
.. highlight: bash

bandage
=======

.. conda:recipe:: bandage
   :replaces_section_title:

   Bandage \- a Bioinformatics Application for Navigating De novo Assembly Graphs Easily

   :homepage: https://github.com/rrwick/Bandage
   :license: GPL3 / GNU General Public License, version 3
   :recipe: /`bandage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bandage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bandage/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btv383`

   


.. conda:package:: bandage

   |downloads_bandage| |docker_bandage|

   :versions: 0.8.1-0
   
   :depends libstdcxx-ng: >=4.9
   :depends qt: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bandage

   and update with::

      conda update bandage

   or use the docker container::

      docker pull quay.io/biocontainers/bandage:<tag>

   (see `bandage/tags`_ for valid values for ``<tag>``)


.. |downloads_bandage| image:: https://img.shields.io/conda/dn/bioconda/bandage.svg?style=flat
   :alt:   (downloads)
.. |docker_bandage| image:: https://quay.io/repository/biocontainers/bandage/status
   :target: https://quay.io/repository/biocontainers/bandage
.. _`bandage/tags`: https://quay.io/repository/biocontainers/bandage?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bandage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bandage/README.html