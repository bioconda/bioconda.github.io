:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'amptk'
.. highlight: bash

amptk
=====

.. conda:recipe:: amptk
   :replaces_section_title:

   AMPtk\: Amplicon tool kit for processing high throughput amplicon sequencing data.

   :homepage: https://github.com/nextgenusfs/amptk
   :documentation: http://amptk.readthedocs.io/
   
   :license: BSD / BSD-2
   :recipe: /`amptk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amptk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amptk/meta.yaml>`_
   :links: doi: :doi:`10.7717/peerj.4925`

   


.. conda:package:: amptk

   |downloads_amptk| |docker_amptk|

   :versions: 1.4.2-0, 1.4.1-0, 1.4.0-0, 1.3.0-0, 1.2.4-1, 1.2.4-0, 1.2.2-0, 1.2.0-0, 1.1.3-0
   
   :depends bioconductor-dada2: >=1.4
   :depends bioconductor-phyloseq: 
   :depends biom-format: 
   :depends biopython: 
   :depends matplotlib-base: 
   :depends natsort: 
   :depends numpy: 
   :depends pandas: 
   :depends pigz: 
   :depends psutil: 
   :depends python: 
   :depends python-edlib: >=1.2.1
   :depends r-base: 
   :depends r-dt: 
   :depends r-htmltools: 
   :depends r-plotly: 
   :depends seaborn: 
   :depends vsearch: >=2.2.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install amptk

   and update with::

      conda update amptk

   or use the docker container::

      docker pull quay.io/biocontainers/amptk:<tag>

   (see `amptk/tags`_ for valid values for ``<tag>``)


.. |downloads_amptk| image:: https://img.shields.io/conda/dn/bioconda/amptk.svg?style=flat
   :target: https://anaconda.org/bioconda/amptk
   :alt:   (downloads)
.. |docker_amptk| image:: https://quay.io/repository/biocontainers/amptk/status
   :target: https://quay.io/repository/biocontainers/amptk
.. _`amptk/tags`: https://quay.io/repository/biocontainers/amptk?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/amptk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/amptk/README.html