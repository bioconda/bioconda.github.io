:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ribodiff'
.. highlight: bash

ribodiff
========

.. conda:recipe:: ribodiff
   :replaces_section_title:

   RiboDiff is a statistical tool that detects the protein translational efficiency change from Ribo\-Seq \(ribosome footprinting\) and RNA\-Seq data.

   :homepage: http://public.bmi.inf.ethz.ch/user/zhongy/RiboDiff/index.html
   :license: GPL 3
   :recipe: /`ribodiff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribodiff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribodiff/meta.yaml>`_

   


.. conda:package:: ribodiff

   |downloads_ribodiff| |docker_ribodiff|

   :versions: 0.2.2-1, 0.2.2-0
   
   :depends matplotlib: >=1.3.0
   :depends numpy: >=1.8.0
   :depends python: >=2.7,<2.8.0a0
   :depends scipy: >=0.13.3
   :depends statsmodels: >=0.5.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ribodiff

   and update with::

      conda update ribodiff

   or use the docker container::

      docker pull quay.io/biocontainers/ribodiff:<tag>

   (see `ribodiff/tags`_ for valid values for ``<tag>``)


.. |downloads_ribodiff| image:: https://img.shields.io/conda/dn/bioconda/ribodiff.svg?style=flat
   :alt:   (downloads)
.. |docker_ribodiff| image:: https://quay.io/repository/biocontainers/ribodiff/status
   :target: https://quay.io/repository/biocontainers/ribodiff
.. _`ribodiff/tags`: https://quay.io/repository/biocontainers/ribodiff?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ribodiff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ribodiff/README.html