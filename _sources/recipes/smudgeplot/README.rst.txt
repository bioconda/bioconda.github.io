:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smudgeplot'
.. highlight: bash

smudgeplot
==========

.. conda:recipe:: smudgeplot
   :replaces_section_title:
   :noindex:

   Inference of ploidy and heterozygosity structure using whole genome sequencing data

   :homepage: https://github.com/KamilSJaron/smudgeplot
   :license: Apache-2.0
   :recipe: /`smudgeplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smudgeplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smudgeplot/meta.yaml>`_

   


.. conda:package:: smudgeplot

   |downloads_smudgeplot| |docker_smudgeplot|

   :versions:
      
      

      ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``

      

   
   :depends libgcc-ng: ``>=7.3.0``
   :depends numpy: 
   :depends python: ``>=3.6``
   :depends r-argparse: 
   :depends r-base: ``>=3.6,<3.7.0a0``
   :depends r-viridis: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install smudgeplot

   and update with::

      conda update smudgeplot

   or use the docker container::

      docker pull quay.io/biocontainers/smudgeplot:<tag>

   (see `smudgeplot/tags`_ for valid values for ``<tag>``)


.. |downloads_smudgeplot| image:: https://img.shields.io/conda/dn/bioconda/smudgeplot.svg?style=flat
   :target: https://anaconda.org/bioconda/smudgeplot
   :alt:   (downloads)
.. |docker_smudgeplot| image:: https://quay.io/repository/biocontainers/smudgeplot/status
   :target: https://quay.io/repository/biocontainers/smudgeplot
.. _`smudgeplot/tags`: https://quay.io/repository/biocontainers/smudgeplot?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smudgeplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smudgeplot/README.html