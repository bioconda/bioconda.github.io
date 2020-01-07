:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genometools-genometools'
.. highlight: bash

genometools-genometools
=======================

.. conda:recipe:: genometools-genometools
   :replaces_section_title:

   GenomeTools genome analysis system.

   :homepage: http://genometools.org/
   :documentation: http://genometools.org/documentation.html
   
   :developer docs: https://github.com/genometools/genometools
   :license: BSD
   :recipe: /`genometools-genometools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genometools-genometools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genometools-genometools/meta.yaml>`_
   :links: doi: :doi:`10.1109/TCBB.2013.68`

   


.. conda:package:: genometools-genometools

   |downloads_genometools-genometools| |docker_genometools-genometools|

   :versions: 1.6.0-0, 1.5.10-3, 1.5.10-2, 1.5.10-1, 1.5.10-0, 1.5.9-1, 1.5.9-0
   
   :depends cairo: >=1.16.0,<1.17.0a0
   :depends gettext: 
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends pango: >=1.42.4,<1.43.0a0
   :depends python: >=2.7,<2.8.0a0
   :depends xorg-libsm: 
   :depends xorg-libxext: 
   :depends xorg-libxrender: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genometools-genometools

   and update with::

      conda update genometools-genometools

   or use the docker container::

      docker pull quay.io/biocontainers/genometools-genometools:<tag>

   (see `genometools-genometools/tags`_ for valid values for ``<tag>``)


.. |downloads_genometools-genometools| image:: https://img.shields.io/conda/dn/bioconda/genometools-genometools.svg?style=flat
   :target: https://anaconda.org/bioconda/genometools-genometools
   :alt:   (downloads)
.. |docker_genometools-genometools| image:: https://quay.io/repository/biocontainers/genometools-genometools/status
   :target: https://quay.io/repository/biocontainers/genometools-genometools
.. _`genometools-genometools/tags`: https://quay.io/repository/biocontainers/genometools-genometools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genometools-genometools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genometools-genometools/README.html