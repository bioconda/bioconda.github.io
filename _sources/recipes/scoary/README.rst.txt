:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scoary'
.. highlight: bash

scoary
======

.. conda:recipe:: scoary
   :replaces_section_title:

   Microbial pan\-GWAS using the output from Roary

   :homepage: https://github.com/AdmiralenOla/Scoary
   :license: GPL / GPL-3.0
   :recipe: /`scoary <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scoary>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scoary/meta.yaml>`_
   :links: biotools: :biotools:`Scoary`, doi: :doi:`10.1186/s13059-016-1108-8`

   


.. conda:package:: scoary

   |downloads_scoary| |docker_scoary|

   :versions: 1.6.16-2, 1.6.16-1, 1.6.16-0, 1.6.9-0
   
   :depends argparse: 
   :depends ete3: 
   :depends python: 
   :depends scipy: >=0.16
   :depends six: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scoary

   and update with::

      conda update scoary

   or use the docker container::

      docker pull quay.io/biocontainers/scoary:<tag>

   (see `scoary/tags`_ for valid values for ``<tag>``)


.. |downloads_scoary| image:: https://img.shields.io/conda/dn/bioconda/scoary.svg?style=flat
   :target: https://anaconda.org/bioconda/scoary
   :alt:   (downloads)
.. |docker_scoary| image:: https://quay.io/repository/biocontainers/scoary/status
   :target: https://quay.io/repository/biocontainers/scoary
.. _`scoary/tags`: https://quay.io/repository/biocontainers/scoary?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scoary/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scoary/README.html