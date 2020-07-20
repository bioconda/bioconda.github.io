:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genometreetk'
.. highlight: bash

genometreetk
============

.. conda:recipe:: genometreetk
   :replaces_section_title:
   :noindex:

   The genome tree toolkit is a collection of methods for working with genome trees.

   :homepage: https://github.com/dparks1134/GenomeTreeTk
   :license: GPL3 / GPL3
   :recipe: /`genometreetk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genometreetk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genometreetk/meta.yaml>`_

   


.. conda:package:: genometreetk

   |downloads_genometreetk| |docker_genometreetk|

   :versions:
      
      

      ``0.1.6-2``,  ``0.1.6-1``,  ``0.1.6-0``

      

   
   :depends biolib: ``>=0.1.0``
   :depends blast: 
   :depends dendropy: ``>=4.0.0``
   :depends easel: 
   :depends fastani: ``>=1.3``
   :depends fasttree: 
   :depends future: 
   :depends hmmer: ``>=3.1b2``
   :depends infernal: 
   :depends mash: 
   :depends mothur: 
   :depends numpy: ``>=1.8.0``
   :depends python: ``>=3.6``
   :depends scipy: ``>=0.16.0``
   :depends ssu-align: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genometreetk

   and update with::

      conda update genometreetk

   or use the docker container::

      docker pull quay.io/biocontainers/genometreetk:<tag>

   (see `genometreetk/tags`_ for valid values for ``<tag>``)


.. |downloads_genometreetk| image:: https://img.shields.io/conda/dn/bioconda/genometreetk.svg?style=flat
   :target: https://anaconda.org/bioconda/genometreetk
   :alt:   (downloads)
.. |docker_genometreetk| image:: https://quay.io/repository/biocontainers/genometreetk/status
   :target: https://quay.io/repository/biocontainers/genometreetk
.. _`genometreetk/tags`: https://quay.io/repository/biocontainers/genometreetk?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genometreetk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genometreetk/README.html