:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'openbabel'
.. highlight: bash

openbabel
=========

.. conda:recipe:: openbabel/2.3.2
   :replaces_section_title:

   Open Babel is a chemical toolbox designed to speak the many languages of chemical data. It\'s an open\, collaborative project allowing anyone to search\, convert\, analyze\, or store data from molecular modeling\, chemistry\, solid\-state materials\, biochemistry\, or related areas.

   :homepage: http://openbabel.org
   :license: GPL
   :recipe: /`openbabel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/openbabel>`_/`2.3.2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/openbabel/2.3.2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/openbabel/2.3.2/meta.yaml>`_

   


.. conda:package:: openbabel

   |downloads_openbabel| |docker_openbabel|

   :versions: 2.4.1-3, 2.4.1-2, 2.4.1-1, 2.4.1-0, 2.3.90dev7d621d9-0, 2.3.2-2, 2.3.2-1
   
   :depends libxml2: >=2.9.8,<2.10.0a0
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends xorg-libsm: 
   
   :depends xorg-libxau: 
   
   :depends xorg-libxdmcp: 
   
   :depends xorg-libxext: 
   
   :depends xorg-libxrender: 
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install openbabel

   and update with::

      conda update openbabel

   or use the docker container::

      docker pull quay.io/biocontainers/openbabel:<tag>

   (see `openbabel/tags`_ for valid values for ``<tag>``)


.. |downloads_openbabel| image:: https://img.shields.io/conda/dn/bioconda/openbabel.svg?style=flat
   :alt:   (downloads)
.. |docker_openbabel| image:: https://quay.io/repository/biocontainers/openbabel/status
   :target: https://quay.io/repository/biocontainers/openbabel
.. _`openbabel/tags`: https://quay.io/repository/biocontainers/openbabel?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/openbabel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/openbabel/README.html