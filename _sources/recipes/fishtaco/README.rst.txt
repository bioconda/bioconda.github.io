:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fishtaco'
.. highlight: bash

fishtaco
========

.. conda:recipe:: fishtaco
   :replaces_section_title:

   FishTaco\: a metagenomic computational framework\, aiming to identify the taxa that are driving functional shifts in microbiomes.

   :homepage: https://github.com/borenstein-lab/fishtaco/
   :license: BSD-3-Clause
   :recipe: /`fishtaco <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fishtaco>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fishtaco/meta.yaml>`_

   


.. conda:package:: fishtaco

   |downloads_fishtaco| |docker_fishtaco|

   :versions: 1.1.1-0, 1.0.5-1, 1.0.5-0
   
   :depends musicc: >=1.0.1
   
   :depends numpy: >=1.6.1
   
   :depends pandas: >=0.14
   
   :depends python: 2.7*
   
   :depends scikit-learn: >=0.15.2
   
   :depends scipy: >=0.9
   
   :depends statsmodels: >=0.5.0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fishtaco

   and update with::

      conda update fishtaco

   or use the docker container::

      docker pull quay.io/repository/biocontainers/fishtaco:<tag>

   (see `fishtaco/tags`_ for valid values for ``<tag>``)


.. |downloads_fishtaco| image:: https://img.shields.io/conda/dn/bioconda/fishtaco.svg?style=flat
   :alt:   (downloads)
.. |docker_fishtaco| image:: https://quay.io/repository/biocontainers/fishtaco/status
   :target: https://quay.io/repository/biocontainers/fishtaco
.. _`fishtaco/tags`: https://quay.io/repository/biocontainers/fishtaco?tab=tags






Notes
-----
With FishTaco 1.1.0 the license has been changed such that 1.1.0 and 1.1.1 cannot be distributed in the Bioconda channel. DO NOT update the recipe to those versions\! See https\:\/\/github.com\/borenstein\-lab\/fishtaco\/issues\/2.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fishtaco/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fishtaco/README.html