:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'orthofinder'
.. highlight: bash

orthofinder
===========

.. conda:recipe:: orthofinder
   :replaces_section_title:

   Accurate inference of orthogroups\, orthologues\, gene trees and rooted species tree made easy\!

   :homepage: https://github.com/davidemms/OrthoFinder
   :license: GPLv3
   :recipe: /`orthofinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orthofinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orthofinder/meta.yaml>`_

   


.. conda:package:: orthofinder

   |downloads_orthofinder| |docker_orthofinder|

   :versions: 2.3.12-0, 2.3.11-1, 2.3.11-0, 2.3.10-0, 2.3.8-2, 2.3.8-1, 2.3.8-0, 2.3.3-1, 2.3.3-0, 2.2.7-0, 2.2.6-0, 2.2.1-0, 2.2.0-0, 2.1.2-1, 2.1.2-0, 1.1.10-0, 1.1.8-0, 1.1.4-0, 1.1.2-0
   
   :depends blast: 
   :depends bzip2: 
   :depends diamond: <=0.9.24
   :depends fastme: 
   :depends fasttree: 
   :depends iqtree: 
   :depends mafft: 
   :depends mcl: 
   :depends mmseqs2: 
   :depends muscle: 
   :depends python: >=2.7
   :depends raxml: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install orthofinder

   and update with::

      conda update orthofinder

   or use the docker container::

      docker pull quay.io/biocontainers/orthofinder:<tag>

   (see `orthofinder/tags`_ for valid values for ``<tag>``)


.. |downloads_orthofinder| image:: https://img.shields.io/conda/dn/bioconda/orthofinder.svg?style=flat
   :target: https://anaconda.org/bioconda/orthofinder
   :alt:   (downloads)
.. |docker_orthofinder| image:: https://quay.io/repository/biocontainers/orthofinder/status
   :target: https://quay.io/repository/biocontainers/orthofinder
.. _`orthofinder/tags`: https://quay.io/repository/biocontainers/orthofinder?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/orthofinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/orthofinder/README.html