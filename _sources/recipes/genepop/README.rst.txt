:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genepop'
.. highlight: bash

genepop
=======

.. conda:recipe:: genepop
   :replaces_section_title:
   :noindex:

   The Genepop population genetics package.

   :homepage: http://kimura.univ-montp2.fr/~rousset/Genepop.htm
   :license: CeCILL
   :recipe: /`genepop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genepop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genepop/meta.yaml>`_

   


.. conda:package:: genepop

   |downloads_genepop| |docker_genepop|

   :versions:
      
      

      ``4.6-0``,  ``4.5.1-0``

      

   
   :depends libgcc: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genepop

   and update with::

      conda update genepop

   or use the docker container::

      docker pull quay.io/biocontainers/genepop:<tag>

   (see `genepop/tags`_ for valid values for ``<tag>``)


.. |downloads_genepop| image:: https://img.shields.io/conda/dn/bioconda/genepop.svg?style=flat
   :target: https://anaconda.org/bioconda/genepop
   :alt:   (downloads)
.. |docker_genepop| image:: https://quay.io/repository/biocontainers/genepop/status
   :target: https://quay.io/repository/biocontainers/genepop
.. _`genepop/tags`: https://quay.io/repository/biocontainers/genepop?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genepop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genepop/README.html