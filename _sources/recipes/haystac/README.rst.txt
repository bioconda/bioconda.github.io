:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'haystac'
.. highlight: bash

haystac
=======

.. conda:recipe:: haystac
   :replaces_section_title:
   :noindex:

   Species identification pipeline for both single species and metagenomic samples.

   :homepage: https://github.com/antonisdim/haystac
   :license: MIT / MIT
   :recipe: /`haystac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haystac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haystac/meta.yaml>`_

   


.. conda:package:: haystac

   |downloads_haystac| |docker_haystac|

   :versions:
      
      

      ``0.2-0``

      

   
   :depends adapterremoval: ``>=2.3.1``
   :depends argcomplete: ``>=1.12.1``
   :depends argparse: ``>=1.4.0``
   :depends biopython: ``>=1.77``
   :depends bowtie2: ``>=2.3.5.1``
   :depends dedup: ``>=0.12.5``
   :depends mapdamage2: ``>=2.2.1``
   :depends numpy: ``>=1.19.2``
   :depends pandas: ``>=1.0.3``
   :depends psutil: ``>=5.7.2``
   :depends pysam: ``>=0.16``
   :depends python: ``>=3.6``
   :depends pyyaml: ``>=5.3.1``
   :depends r-gam: ``>=1.16.1``
   :depends r-ggplot2: ``>=3.3.0``
   :depends r-inline: ``>=0.3.15``
   :depends r-rcpp: ``>=1.0.4.6``
   :depends r-rcppgsl: ``>=0.3.8``
   :depends requests: ``>=2.24.0``
   :depends samtools: ``>=1.9``
   :depends scipy: ``>=1.4.1``
   :depends seqkit: ``>=0.13.2``
   :depends seqtk: ``>=1.3``
   :depends setuptools: ``>=49.6.0``
   :depends snakemake: ``>=5.20.1``
   :depends sra-tools: ``>=2.9.1``
   :depends wget: ``>=1.20.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install haystac

   and update with::

      conda update haystac

   or use the docker container::

      docker pull quay.io/biocontainers/haystac:<tag>

   (see `haystac/tags`_ for valid values for ``<tag>``)


.. |downloads_haystac| image:: https://img.shields.io/conda/dn/bioconda/haystac.svg?style=flat
   :target: https://anaconda.org/bioconda/haystac
   :alt:   (downloads)
.. |docker_haystac| image:: https://quay.io/repository/biocontainers/haystac/status
   :target: https://quay.io/repository/biocontainers/haystac
.. _`haystac/tags`: https://quay.io/repository/biocontainers/haystac?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/haystac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/haystac/README.html