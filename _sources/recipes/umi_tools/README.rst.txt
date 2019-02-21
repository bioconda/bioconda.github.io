:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'umi_tools'
.. highlight: bash

umi_tools
=========

.. conda:recipe:: umi_tools
   :replaces_section_title:

   Tools for dealing with Unique Molecular Identifiers \(UMIs\) \/ Random Molecular Tags \(RMTs\)

   :homepage: https://github.com/CGATOxford/UMI-tools
   :license: MIT / MIT License
   :recipe: /`umi_tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/umi_tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/umi_tools/meta.yaml>`_

   


.. conda:package:: umi_tools

   |downloads_umi_tools| |docker_umi_tools|

   :versions: 0.5.5-1, 0.5.5-0, 0.5.4-3, 0.5.4-2, 0.5.4-1, 0.5.4-0, 0.5.3-1, 0.5.3-0, 0.5.2-0, 0.5.1-0, 0.5.0-0, 0.4.4-0, 0.4.3-0, 0.2.3-2, 0.2.3-1, 0.2.3-0
   
   :depends future: 
   
   :depends libgcc-ng: >=7.3.0
   
   :depends matplotlib: 
   
   :depends numpy: >=1.7
   
   :depends pandas: >=0.12.0
   
   :depends pysam: >=0.9
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends regex: 
   
   :depends scipy: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install umi_tools

   and update with::

      conda update umi_tools

   or use the docker container::

      docker pull quay.io/biocontainers/umi_tools:<tag>

   (see `umi_tools/tags`_ for valid values for ``<tag>``)


.. |downloads_umi_tools| image:: https://img.shields.io/conda/dn/bioconda/umi_tools.svg?style=flat
   :alt:   (downloads)
.. |docker_umi_tools| image:: https://quay.io/repository/biocontainers/umi_tools/status
   :target: https://quay.io/repository/biocontainers/umi_tools
.. _`umi_tools/tags`: https://quay.io/repository/biocontainers/umi_tools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/umi_tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/umi_tools/README.html