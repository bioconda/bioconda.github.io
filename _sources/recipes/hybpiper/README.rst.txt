:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hybpiper'
.. highlight: bash

hybpiper
========

.. conda:recipe:: hybpiper
   :replaces_section_title:
   :noindex:

   HybPiper is a suite of Python scripts\/modules for targeted sequence capture


   :homepage: https://github.com/mossmatters/HybPiper
   :license: GPL / GPL-3.0+
   :recipe: /`hybpiper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hybpiper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hybpiper/meta.yaml>`_

   


.. conda:package:: hybpiper

   |downloads_hybpiper| |docker_hybpiper|

   :versions:
      
      

      ``2.1.3-1``,  ``2.1.3-0``,  ``2.1.1-0``

      

   
   :depends bbmap: ``>=38.44``
   :depends biopython: ``>=1.80``
   :depends blast: ``>=2.9.0``
   :depends bwa: ``>=0.7.17``
   :depends diamond: ``>=2.0.11``
   :depends exonerate: ``>=2.4.0``
   :depends libgcc-ng: ``>=12``
   :depends mafft: ``>=7.487``
   :depends matplotlib-base: ``>=3.3.2``
   :depends numpy: 
   :depends parallel: ``>=20211022``
   :depends pebble: ``>=4.6.3``
   :depends progressbar2: ``>=3.38.0``
   :depends psutil: ``>=5.9.0``
   :depends python_abi: ``3.11.* *_cp311``
   :depends samtools: ``>=1.14``
   :depends seaborn: ``>=0.11.1``
   :depends spades: ``>=3.15.4``
   :depends trimmomatic: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hybpiper

   and update with::

      conda update hybpiper

   or use the docker container::

      docker pull quay.io/biocontainers/hybpiper:<tag>

   (see `hybpiper/tags`_ for valid values for ``<tag>``)


.. |downloads_hybpiper| image:: https://img.shields.io/conda/dn/bioconda/hybpiper.svg?style=flat
   :target: https://anaconda.org/bioconda/hybpiper
   :alt:   (downloads)
.. |docker_hybpiper| image:: https://quay.io/repository/biocontainers/hybpiper/status
   :target: https://quay.io/repository/biocontainers/hybpiper
.. _`hybpiper/tags`: https://quay.io/repository/biocontainers/hybpiper?tab=tags


.. raw:: html

    <script>
        var package = "hybpiper";
        var versions = ["2.1.3","2.1.3","2.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hybpiper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hybpiper/README.html