:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nmrml2isa'
.. highlight: bash

nmrml2isa
=========

.. conda:recipe:: nmrml2isa
   :replaces_section_title:

   nmrml2isa \- nmrML to ISA\-Tab parsing tool

   :homepage: http://github.com/althonos/nmrml2isa
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`nmrml2isa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nmrml2isa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nmrml2isa/meta.yaml>`_

   


.. conda:package:: nmrml2isa

   |downloads_nmrml2isa| |docker_nmrml2isa|

   :versions: 0.3.0-1, 0.3.0-0
   
   :depends chainmap: 
   :depends lxml: 
   :depends pronto: 
   :depends python: >=2.7,<2.8.0a0
   :depends six: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nmrml2isa

   and update with::

      conda update nmrml2isa

   or use the docker container::

      docker pull quay.io/biocontainers/nmrml2isa:<tag>

   (see `nmrml2isa/tags`_ for valid values for ``<tag>``)


.. |downloads_nmrml2isa| image:: https://img.shields.io/conda/dn/bioconda/nmrml2isa.svg?style=flat
   :alt:   (downloads)
.. |docker_nmrml2isa| image:: https://quay.io/repository/biocontainers/nmrml2isa/status
   :target: https://quay.io/repository/biocontainers/nmrml2isa
.. _`nmrml2isa/tags`: https://quay.io/repository/biocontainers/nmrml2isa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nmrml2isa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nmrml2isa/README.html