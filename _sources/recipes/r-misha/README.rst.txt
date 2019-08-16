:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-misha'
.. highlight: bash

r-misha
=======

.. conda:recipe:: r-misha
   :replaces_section_title:

   Toolkit for analysis of genomic data

   :homepage: https://bitbucket.org/tanaylab/misha-package
   :license: GPL-2
   :recipe: /`r-misha <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-misha>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-misha/meta.yaml>`_

   


.. conda:package:: r-misha

   |downloads_r-misha| |docker_r-misha|

   :versions: 4.0.6-0, 4.0.5-0, 4.0.4-1
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-misha

   and update with::

      conda update r-misha

   or use the docker container::

      docker pull quay.io/biocontainers/r-misha:<tag>

   (see `r-misha/tags`_ for valid values for ``<tag>``)


.. |downloads_r-misha| image:: https://img.shields.io/conda/dn/bioconda/r-misha.svg?style=flat
   :target: https://anaconda.org/bioconda/r-misha
   :alt:   (downloads)
.. |docker_r-misha| image:: https://quay.io/repository/biocontainers/r-misha/status
   :target: https://quay.io/repository/biocontainers/r-misha
.. _`r-misha/tags`: https://quay.io/repository/biocontainers/r-misha?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-misha/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-misha/README.html