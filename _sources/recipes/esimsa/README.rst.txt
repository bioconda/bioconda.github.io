:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'esimsa'
.. highlight: bash

esimsa
======

.. conda:recipe:: esimsa
   :replaces_section_title:

   Simple deconvolution of electrospray ionization peak lists

   :homepage: http://www.ms-utils.org/esimsa.html
   :license: GPL3
   :recipe: /`esimsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/esimsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/esimsa/meta.yaml>`_
   :links: biotools: :biotools:`esimsa`, pmid: :pmid:`10861983`

   


.. conda:package:: esimsa

   |downloads_esimsa| |docker_esimsa|

   :versions: 1.0-1, 1.0-0
   
   :depends libgcc-ng: >=4.9
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install esimsa

   and update with::

      conda update esimsa

   or use the docker container::

      docker pull quay.io/biocontainers/esimsa:<tag>

   (see `esimsa/tags`_ for valid values for ``<tag>``)


.. |downloads_esimsa| image:: https://img.shields.io/conda/dn/bioconda/esimsa.svg?style=flat
   :alt:   (downloads)
.. |docker_esimsa| image:: https://quay.io/repository/biocontainers/esimsa/status
   :target: https://quay.io/repository/biocontainers/esimsa
.. _`esimsa/tags`: https://quay.io/repository/biocontainers/esimsa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/esimsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/esimsa/README.html