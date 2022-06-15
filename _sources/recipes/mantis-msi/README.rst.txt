:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mantis-msi'
.. highlight: bash

mantis-msi
==========

.. conda:recipe:: mantis-msi
   :replaces_section_title:
   :noindex:

   MANTIS is a program developed for detecting microsatellite instability from paired\-end BAM files

   :homepage: https://github.com/OSU-SRLab/MANTIS/
   :license: GPL / GPL-3
   :recipe: /`mantis-msi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mantis-msi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mantis-msi/meta.yaml>`_

   MANTIS \(Microsatellite Analysis for Normal\-Tumor InStability\) is a program developed for detecting microsatellite instability from paired\-end BAM files. To perform analysis\, the program needs a tumor BAM and a matched normal BAM file \(produced using the same pipeline\) to determine the instability score between the two samples within the pair. Longer reads \(ideally\, 100 bp or longer\) are recommended\, as shorter reads are unlikely to entirely cover the microsatellite loci\, and will be discarded after failing the quality control filters.



.. conda:package:: mantis-msi

   |downloads_mantis-msi| |docker_mantis-msi|

   :versions:
      
      

      ``1.0.5-1``,  ``1.0.5-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends numpy: ``>=1.11``
   :depends pysam: ``>=0.13``
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mantis-msi

   and update with::

      conda update mantis-msi

   or use the docker container::

      docker pull quay.io/biocontainers/mantis-msi:<tag>

   (see `mantis-msi/tags`_ for valid values for ``<tag>``)


.. |downloads_mantis-msi| image:: https://img.shields.io/conda/dn/bioconda/mantis-msi.svg?style=flat
   :target: https://anaconda.org/bioconda/mantis-msi
   :alt:   (downloads)
.. |docker_mantis-msi| image:: https://quay.io/repository/biocontainers/mantis-msi/status
   :target: https://quay.io/repository/biocontainers/mantis-msi
.. _`mantis-msi/tags`: https://quay.io/repository/biocontainers/mantis-msi?tab=tags


.. raw:: html

    <script>
        var package = "mantis-msi";
        var versions = ["1.0.5","1.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mantis-msi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mantis-msi/README.html