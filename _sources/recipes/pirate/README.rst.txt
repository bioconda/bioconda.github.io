:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pirate'
.. highlight: bash

pirate
======

.. conda:recipe:: pirate
   :replaces_section_title:
   :noindex:

   Pangenome analysis and threshold evaluation toolbox

   :homepage: https://github.com/SionBayliss/PIRATE
   :license: GPL / GPL3
   :recipe: /`pirate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pirate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pirate/meta.yaml>`_
   :links: biotools: :biotools:`pirate`, doi: :doi:`10.1101/598391`

   


.. conda:package:: pirate

   |downloads_pirate| |docker_pirate|

   :versions:
      
      

      ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends blast: ``>=2.2.31``
   :depends cd-hit: ``>=4.7``
   :depends diamond: ``>=0.9.14``
   :depends fasttree: ``>=2.1.10``
   :depends mafft: ``>=7.310``
   :depends mcl: ``>=14.137``
   :depends parallel: ``>=20170422``
   :depends perl-bioperl: ``>=1.7.2``
   :depends unzip: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pirate

   and update with::

      conda update pirate

   or use the docker container::

      docker pull quay.io/biocontainers/pirate:<tag>

   (see `pirate/tags`_ for valid values for ``<tag>``)


.. |downloads_pirate| image:: https://img.shields.io/conda/dn/bioconda/pirate.svg?style=flat
   :target: https://anaconda.org/bioconda/pirate
   :alt:   (downloads)
.. |docker_pirate| image:: https://quay.io/repository/biocontainers/pirate/status
   :target: https://quay.io/repository/biocontainers/pirate
.. _`pirate/tags`: https://quay.io/repository/biocontainers/pirate?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pirate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pirate/README.html