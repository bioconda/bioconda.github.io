:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'commet'
.. highlight: bash

commet
======

.. conda:recipe:: commet
   :replaces_section_title:

   Comparing and combining multiple metagenomic datasets

   :homepage: https://colibread.inria.fr/software/commet/
   :license: GNU Affero General Public License
   :recipe: /`commet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/commet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/commet/meta.yaml>`_
   :links: biotools: :biotools:`commet`, doi: :doi:`10.1109/BIBM.2014.6999135`

   


.. conda:package:: commet

   |downloads_commet| |docker_commet|

   :versions: 24.7.14-1, 24.7.14-0
   
   :depends libgcc: 
   :depends libgfortran: 
   :depends python: 2.7*
   :depends r-base: 3.4.1*
   :depends r-gplots: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install commet

   and update with::

      conda update commet

   or use the docker container::

      docker pull quay.io/biocontainers/commet:<tag>

   (see `commet/tags`_ for valid values for ``<tag>``)


.. |downloads_commet| image:: https://img.shields.io/conda/dn/bioconda/commet.svg?style=flat
   :target: https://anaconda.org/bioconda/commet
   :alt:   (downloads)
.. |docker_commet| image:: https://quay.io/repository/biocontainers/commet/status
   :target: https://quay.io/repository/biocontainers/commet
.. _`commet/tags`: https://quay.io/repository/biocontainers/commet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/commet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/commet/README.html