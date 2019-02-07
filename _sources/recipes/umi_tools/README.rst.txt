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

   :versions: 0.5.5, 0.5.4, 0.5.3, 0.5.2, 0.5.1, 0.5.0, 0.4.4, 0.4.3, 0.2.3

   :depends: :conda:package:`future`  :conda:package:`libgcc-ng` >=4.9 :conda:package:`matplotlib`  :conda:package:`numpy` >=1.7 :conda:package:`pandas` >=0.12.0 :conda:package:`pysam` >=0.9 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`regex`  :conda:package:`scipy`  

   :required~by: |required_by_umi_tools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install umi_tools

   and update with::

      conda update umi_tools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/umi_tools


.. |required_by_umi_tools| conda:required_by:: umi_tools
.. |downloads_umi_tools| image:: https://img.shields.io/conda/dn/bioconda/umi_tools.svg?style=flat
   :alt:   (downloads)
.. |docker_umi_tools| image:: https://quay.io/repository/biocontainers/umi_tools/status
   :target: https://quay.io/repository/biocontainers/umi_tools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/umi_tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/umi_tools/README.html

