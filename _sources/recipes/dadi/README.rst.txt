:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dadi'
.. highlight: bash

dadi
====

.. conda:recipe:: dadi
   :replaces_section_title:

   Fit population genetic models using diffusion approximations to the allele frequency spectrum

   :homepage: https://bitbucket.org/gutenkunstlab/dadi
   :license: BSD / BSD-3-Clause
   :recipe: /`dadi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dadi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dadi/meta.yaml>`_

   


.. conda:package:: dadi

   |downloads_dadi| |docker_dadi|

   :versions: 2.0.4-0, 2.0.3-0, 1.7.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends matplotlib: 
   :depends numpy: >=1.14.6,<2.0a0
   :depends python: >=3.6,<3.7.0a0
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dadi

   and update with::

      conda update dadi

   or use the docker container::

      docker pull quay.io/biocontainers/dadi:<tag>

   (see `dadi/tags`_ for valid values for ``<tag>``)


.. |downloads_dadi| image:: https://img.shields.io/conda/dn/bioconda/dadi.svg?style=flat
   :target: https://anaconda.org/bioconda/dadi
   :alt:   (downloads)
.. |docker_dadi| image:: https://quay.io/repository/biocontainers/dadi/status
   :target: https://quay.io/repository/biocontainers/dadi
.. _`dadi/tags`: https://quay.io/repository/biocontainers/dadi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dadi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dadi/README.html