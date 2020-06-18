:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sequnwinder'
.. highlight: bash

sequnwinder
===========

.. conda:recipe:: sequnwinder
   :replaces_section_title:
   :noindex:

   SeqUnwinder is a framework for characterizing class\-discriminative motifs in a collection of genomic loci that have several \(overlapping\) annotation labels.

   :homepage: http://mahonylab.org/software/sequnwinder/
   :license: MIT
   :recipe: /`sequnwinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequnwinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequnwinder/meta.yaml>`_

   


.. conda:package:: sequnwinder

   |downloads_sequnwinder| |docker_sequnwinder|

   :versions:
      
      

      ``0.1.3-0``

      

   
   :depends meme: ``>=4.11.2``
   :depends openjdk: ``>=8``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sequnwinder

   and update with::

      conda update sequnwinder

   or use the docker container::

      docker pull quay.io/biocontainers/sequnwinder:<tag>

   (see `sequnwinder/tags`_ for valid values for ``<tag>``)


.. |downloads_sequnwinder| image:: https://img.shields.io/conda/dn/bioconda/sequnwinder.svg?style=flat
   :target: https://anaconda.org/bioconda/sequnwinder
   :alt:   (downloads)
.. |docker_sequnwinder| image:: https://quay.io/repository/biocontainers/sequnwinder/status
   :target: https://quay.io/repository/biocontainers/sequnwinder
.. _`sequnwinder/tags`: https://quay.io/repository/biocontainers/sequnwinder?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sequnwinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sequnwinder/README.html