:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mantis-msi2'
.. highlight: bash

mantis-msi2
===========

.. conda:recipe:: mantis-msi2
   :replaces_section_title:
   :noindex:

   MANTIS2 is a program developed for detecting microsatellite instability from paired\-end BAM files

   :homepage: https://github.com/nh13/MANTIS2/
   :license: GPL / GPL-3
   :recipe: /`mantis-msi2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mantis-msi2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mantis-msi2/meta.yaml>`_

   MANTIS2 \(Microsatellite Analysis for Normal\-Tumor InStability\) is a program developed for detecting microsatellite instability from paired\-end BAM files. To perform analysis\, the program needs a tumor BAM and a matched normal BAM file \(produced using the same pipeline\) to determine the instability score between the two samples within the pair. Longer reads \(ideally\, 100 bp or longer\) are recommended\, as shorter reads are unlikely to entirely cover the microsatellite loci\, and will be discarded after failing the quality control filters.  Originally developed and maintained here\: https\:\/\/github.com\/OSU\-SRLab\/MANTIS.



.. conda:package:: mantis-msi2

   |downloads_mantis-msi2| |docker_mantis-msi2|

   :versions:
      
      

      ``2.0.0-1``,  ``2.0.0-0``

      

   
   :depends libcxx: ``>=15.0.7``
   :depends numpy: ``>=1.11``
   :depends pysam: ``>=0.13``
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mantis-msi2

   and update with::

      conda update mantis-msi2

   or use the docker container::

      docker pull quay.io/biocontainers/mantis-msi2:<tag>

   (see `mantis-msi2/tags`_ for valid values for ``<tag>``)


.. |downloads_mantis-msi2| image:: https://img.shields.io/conda/dn/bioconda/mantis-msi2.svg?style=flat
   :target: https://anaconda.org/bioconda/mantis-msi2
   :alt:   (downloads)
.. |docker_mantis-msi2| image:: https://quay.io/repository/biocontainers/mantis-msi2/status
   :target: https://quay.io/repository/biocontainers/mantis-msi2
.. _`mantis-msi2/tags`: https://quay.io/repository/biocontainers/mantis-msi2?tab=tags


.. raw:: html

    <script>
        var package = "mantis-msi2";
        var versions = ["2.0.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mantis-msi2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mantis-msi2/README.html