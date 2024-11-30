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

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends numpy: ``>=1.11``
   :depends pysam: ``>=0.13``
   :depends python: ``>=3.6``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install mantis-msi2

   and update with::

      mamba update mantis-msi2

  To create a new environment, run::

      mamba create --name myenvname mantis-msi2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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