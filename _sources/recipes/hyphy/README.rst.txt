:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hyphy'
.. highlight: bash

hyphy
=====

.. conda:recipe:: hyphy
   :replaces_section_title:

   HyPhy \(Hypothesis Testing using Phylogenies\) is an open\-source software package for the analysis of genetic sequences
   \(in particular the inference of natural selection\) using techniques in phylogenetics\, molecular evolution\, and machine learning.


   :homepage: http://hyphy.org/
   :developer docs: https://github.com/veg/hyphy
   :license: MIT / MIT
   :recipe: /`hyphy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hyphy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hyphy/meta.yaml>`_

   


.. conda:package:: hyphy

   |downloads_hyphy| |docker_hyphy|

   :versions: 2.3.14-0, 2.3.12-1, 2.3.12-0
   
   :depends curl: >=7.59.0,<8.0a0
   
   :depends libgcc-ng: >=7.2.0
   
   :depends libstdcxx-ng: >=7.2.0
   
   :depends openmpi: >=3.1,<3.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hyphy

   and update with::

      conda update hyphy

   or use the docker container::

      docker pull quay.io/repository/biocontainers/hyphy:<tag>

   (see `hyphy/tags`_ for valid values for ``<tag>``)


.. |downloads_hyphy| image:: https://img.shields.io/conda/dn/bioconda/hyphy.svg?style=flat
   :alt:   (downloads)
.. |docker_hyphy| image:: https://quay.io/repository/biocontainers/hyphy/status
   :target: https://quay.io/repository/biocontainers/hyphy
.. _`hyphy/tags`: https://quay.io/repository/biocontainers/hyphy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hyphy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hyphy/README.html