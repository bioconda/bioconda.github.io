:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'exparna'
.. highlight: bash

exparna
=======

.. conda:recipe:: exparna
   :replaces_section_title:

   The program finds the longest common subsequence of exact pattern matches \(LCS\-EPM\)

   :homepage: https://github.com/BackofenLab/ExpaRNA
   :license: GPL-2.0
   :recipe: /`exparna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/exparna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/exparna/meta.yaml>`_
   :links: biotools: :biotools:`exparna`

   


.. conda:package:: exparna

   |downloads_exparna| |docker_exparna|

   :versions: 1.0.1-2, 1.0.1-1, 1.0.1-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends viennarna: >=2.4.11,<2.5.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install exparna

   and update with::

      conda update exparna

   or use the docker container::

      docker pull quay.io/biocontainers/exparna:<tag>

   (see `exparna/tags`_ for valid values for ``<tag>``)


.. |downloads_exparna| image:: https://img.shields.io/conda/dn/bioconda/exparna.svg?style=flat
   :alt:   (downloads)
.. |docker_exparna| image:: https://quay.io/repository/biocontainers/exparna/status
   :target: https://quay.io/repository/biocontainers/exparna
.. _`exparna/tags`: https://quay.io/repository/biocontainers/exparna?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/exparna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/exparna/README.html