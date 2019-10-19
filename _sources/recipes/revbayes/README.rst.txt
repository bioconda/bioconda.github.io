:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'revbayes'
.. highlight: bash

revbayes
========

.. conda:recipe:: revbayes
   :replaces_section_title:

   Bayesian phylogenetic inference using probabilistic graphical models and an interactive language.

   :homepage: https://revbayes.github.io/
   :license: GPLv3
   :recipe: /`revbayes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/revbayes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/revbayes/meta.yaml>`_

   


.. conda:package:: revbayes

   |downloads_revbayes| |docker_revbayes|

   :versions: 1.0.13-0
   
   :depends boost-cpp: >=1.68.0,<1.68.1.0a0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends openmpi: >=4.0.1,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install revbayes

   and update with::

      conda update revbayes

   or use the docker container::

      docker pull quay.io/biocontainers/revbayes:<tag>

   (see `revbayes/tags`_ for valid values for ``<tag>``)


.. |downloads_revbayes| image:: https://img.shields.io/conda/dn/bioconda/revbayes.svg?style=flat
   :target: https://anaconda.org/bioconda/revbayes
   :alt:   (downloads)
.. |docker_revbayes| image:: https://quay.io/repository/biocontainers/revbayes/status
   :target: https://quay.io/repository/biocontainers/revbayes
.. _`revbayes/tags`: https://quay.io/repository/biocontainers/revbayes?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/revbayes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/revbayes/README.html