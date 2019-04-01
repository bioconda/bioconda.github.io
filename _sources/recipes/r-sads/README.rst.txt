:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-sads'
.. highlight: bash

r-sads
======

.. conda:recipe:: r-sads
   :replaces_section_title:

   Maximum likelihood tools to fit and compare models of species abundance distributions and of species rank\-abundance distributions.

   :homepage: http://piLaboratory.github.io/sads, https://github.com/piklprado/sads
   :license: GPL2 / GPL-2
   :recipe: /`r-sads <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sads>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sads/meta.yaml>`_

   


.. conda:package:: r-sads

   |downloads_r-sads| |docker_r-sads|

   :versions: 0.4.2-1, 0.4.2-0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends libgfortran-ng: >=7,<8.0a0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-bbmle: >=1.0.19
   
   :depends r-guilds: 
   
   :depends r-mass: 
   
   :depends r-poilog: 
   
   :depends r-vgam: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-sads

   and update with::

      conda update r-sads

   or use the docker container::

      docker pull quay.io/biocontainers/r-sads:<tag>

   (see `r-sads/tags`_ for valid values for ``<tag>``)


.. |downloads_r-sads| image:: https://img.shields.io/conda/dn/bioconda/r-sads.svg?style=flat
   :alt:   (downloads)
.. |docker_r-sads| image:: https://quay.io/repository/biocontainers/r-sads/status
   :target: https://quay.io/repository/biocontainers/r-sads
.. _`r-sads/tags`: https://quay.io/repository/biocontainers/r-sads?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-sads/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-sads/README.html