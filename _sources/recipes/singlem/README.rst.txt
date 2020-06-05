:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'singlem'
.. highlight: bash

singlem
=======

.. conda:recipe:: singlem
   :replaces_section_title:
   :noindex:

   SingleM is a tool to find the abundances of discrete operational taxonomic units \(OTUs\) directly from shotgun metagenome data\, without heavy reliance on reference sequence databases. It is able to differentiate closely related species even if those species are from lineages new to science.

   :homepage: https://github.com/wwood/singlem
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`singlem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/singlem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/singlem/meta.yaml>`_

   


.. conda:package:: singlem

   |downloads_singlem| |docker_singlem|

   :versions:
      
      

      ``0.13.2-0``

      

   
   :depends biom-format: ``>=2.1.6``
   :depends biopython: ``>=1.64``
   :depends dendropy: ``>=0.4.0``
   :depends diamond: ``>=0.9``
   :depends expressbetadiversity: 
   :depends extern: ``>=0.0.4``
   :depends graftm: ``>=0.12.2``
   :depends h5py: 
   :depends hmmer: ``>=3.1b1``
   :depends krona: ``>=2.4``
   :depends matplotlib-base: ``>=2.0.2``
   :depends mfqe: ``>=0.5.0``
   :depends orator: ``>=0.9.7``
   :depends orfm: ``>=0.2.0``
   :depends pandas: 
   :depends pplacer: ``>=1.1.alpha17``
   :depends python: ``>=3.6``
   :depends smafa: ``>=0.5.0``
   :depends squarify: ``>=0.3.0``
   :depends tempdir: ``>=0.6``
   :depends vsearch: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install singlem

   and update with::

      conda update singlem

   or use the docker container::

      docker pull quay.io/biocontainers/singlem:<tag>

   (see `singlem/tags`_ for valid values for ``<tag>``)


.. |downloads_singlem| image:: https://img.shields.io/conda/dn/bioconda/singlem.svg?style=flat
   :target: https://anaconda.org/bioconda/singlem
   :alt:   (downloads)
.. |docker_singlem| image:: https://quay.io/repository/biocontainers/singlem/status
   :target: https://quay.io/repository/biocontainers/singlem
.. _`singlem/tags`: https://quay.io/repository/biocontainers/singlem?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/singlem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/singlem/README.html