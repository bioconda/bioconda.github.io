:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'panx'
.. highlight: bash

panx
====

.. conda:recipe:: panX/1.5.0
   :replaces_section_title:

   Microbial pan\-genome analysis and exploration tool

   :homepage: http://pangenome.de
   :license: GNU General Public License v3.0
   :recipe: /`panX <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panX>`_/`1.5.0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panX/1.5.0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panX/1.5.0/meta.yaml>`_

   


.. conda:package:: panx

   |downloads_panx| |docker_panx|

   :versions: 1.6.0-0, 1.5.0-0
   
   :depends biopython: 
   :depends diamond: 
   :depends ete2: 
   :depends fasttree: 
   :depends mafft: 
   :depends mcl: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 2.7*
   :depends raxml: 
   :depends scipy: 
   :depends treetime: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install panx

   and update with::

      conda update panx

   or use the docker container::

      docker pull quay.io/biocontainers/panx:<tag>

   (see `panx/tags`_ for valid values for ``<tag>``)


.. |downloads_panx| image:: https://img.shields.io/conda/dn/bioconda/panx.svg?style=flat
   :target: https://anaconda.org/bioconda/panx
   :alt:   (downloads)
.. |docker_panx| image:: https://quay.io/repository/biocontainers/panx/status
   :target: https://quay.io/repository/biocontainers/panx
.. _`panx/tags`: https://quay.io/repository/biocontainers/panx?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panx/README.html