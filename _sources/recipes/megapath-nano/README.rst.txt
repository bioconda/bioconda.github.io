:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'megapath-nano'
.. highlight: bash

megapath-nano
=============

.. conda:recipe:: megapath-nano
   :replaces_section_title:
   :noindex:

   MegaPath\-Nano\: Accurate Compositional Analysis and Drug\-level Antimicrobial Resistance Detection Software for Oxford Nanopore Long\-read Metagenomics\; MegaPath\-Nano\-Amplicon\: filtering module for metagenomic amplicon data\; MegaPath\-Nano\-Amplicon\: filtering module for metagenomic amplicon data

   :homepage: https://github.com/HKU-BAL/MegaPath-Nano
   :license: BSD-3-Clause
   :recipe: /`megapath-nano <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/megapath-nano>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/megapath-nano/meta.yaml>`_

   


.. conda:package:: megapath-nano

   |downloads_megapath-nano| |docker_megapath-nano|

   :versions:
      
      

      ``2-0``,  ``1.0-0``

      

   
   :depends bcftools: 
   :depends bioconvert: 
   :depends cgecore: ``1.5.6.*``
   :depends clair: ``2.1.1.*``
   :depends colorlog: ``5.0.1.*``
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends minimap2: 
   :depends ncbi-amrfinderplus: ``>=3.10``
   :depends pandas: 
   :depends parallel: ``20191122.*``
   :depends porechop: ``0.2.4.*``
   :depends psutil: 
   :depends pybedtools: 
   :depends pysam: ``>=0.16.0``
   :depends python: ``3.6.10.*``
   :depends rgi: ``>=5``
   :depends samtools: ``1.9.*``
   :depends seqtk: 
   :depends tabulate: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install megapath-nano

   and update with::

      conda update megapath-nano

   or use the docker container::

      docker pull quay.io/biocontainers/megapath-nano:<tag>

   (see `megapath-nano/tags`_ for valid values for ``<tag>``)


.. |downloads_megapath-nano| image:: https://img.shields.io/conda/dn/bioconda/megapath-nano.svg?style=flat
   :target: https://anaconda.org/bioconda/megapath-nano
   :alt:   (downloads)
.. |docker_megapath-nano| image:: https://quay.io/repository/biocontainers/megapath-nano/status
   :target: https://quay.io/repository/biocontainers/megapath-nano
.. _`megapath-nano/tags`: https://quay.io/repository/biocontainers/megapath-nano?tab=tags


.. raw:: html

    <script>
        var package = "megapath-nano";
        var versions = ["2","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/megapath-nano/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/megapath-nano/README.html