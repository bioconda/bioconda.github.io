:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flux-simulator'
.. highlight: bash

flux-simulator
==============

.. conda:recipe:: flux-simulator
   :replaces_section_title:

   Tool for modeling RNA\-Seq experiments in silico

   :homepage: http://sammeth.net/confluence/display/SIM/Home
   :license: BSD
   :recipe: /`flux-simulator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flux-simulator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flux-simulator/meta.yaml>`_

   


.. conda:package:: flux-simulator

   |downloads_flux-simulator| |docker_flux-simulator|

   :versions: 1.2.1-1, 1.2.1-0
   
   :depends java-jdk: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install flux-simulator

   and update with::

      conda update flux-simulator

   or use the docker container::

      docker pull quay.io/biocontainers/flux-simulator:<tag>

   (see `flux-simulator/tags`_ for valid values for ``<tag>``)


.. |downloads_flux-simulator| image:: https://img.shields.io/conda/dn/bioconda/flux-simulator.svg?style=flat
   :target: https://anaconda.org/bioconda/flux-simulator
   :alt:   (downloads)
.. |docker_flux-simulator| image:: https://quay.io/repository/biocontainers/flux-simulator/status
   :target: https://quay.io/repository/biocontainers/flux-simulator
.. _`flux-simulator/tags`: https://quay.io/repository/biocontainers/flux-simulator?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flux-simulator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flux-simulator/README.html