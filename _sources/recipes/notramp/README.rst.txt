:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'notramp'
.. highlight: bash

notramp
=======

.. conda:recipe:: notramp
   :replaces_section_title:
   :noindex:

   Super\-fast Normalization and Trimming for Amplicon Sequencing Data \(Long\- and Short\-read\)

   :homepage: https://github.com/simakro/NoTrAmp.git
   :documentation: https://github.com/simakro/NoTrAmp/blob/main/README.md
   
   :license: BSD / BSD-2
   :recipe: /`notramp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/notramp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/notramp/meta.yaml>`_

   NoTrAmp is a Tool for super fast trimming and read\-depth normalization of amplicon reads. It is designed to be used in amplicon\-tiling panels \(or similar multiplexed amplicon sequencing approaches\) to cap coverage of each amplicon \(if desired\) and to trim amplicons to their appropriate length removing barcodes\, adpaters and primers \(if desired\) in a single clipping step.

   NoTrAmp is suitable for use with both long \(e.g. ONT\/PacBio\) and short reads \(e.g Illumina\). When using reads that are significantly shorter than amplicon sizes\, you should adjust the minimum required alignment length using the \-\-set\_min\_len argument.

   See the projects \[home\]\(https\:\/\/github.com\/simakro\/NoTrAmp\) for usage and additional documentation.


.. conda:package:: notramp

   |downloads_notramp| |docker_notramp|

   :versions:
      
      

      ``1.1.9-0``,  ``1.1.8-0``,  ``1.1.7-0``,  ``1.1.6-1``,  ``1.1.6-0``,  ``1.0.5-0``

      

   
   :depends minimap2: 
   :depends psutil: 
   :depends python: 
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

      mamba install notramp

   and update with::

      mamba update notramp

  To create a new environment, run::

      mamba create --name myenvname notramp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/notramp:<tag>

   (see `notramp/tags`_ for valid values for ``<tag>``)


.. |downloads_notramp| image:: https://img.shields.io/conda/dn/bioconda/notramp.svg?style=flat
   :target: https://anaconda.org/bioconda/notramp
   :alt:   (downloads)
.. |docker_notramp| image:: https://quay.io/repository/biocontainers/notramp/status
   :target: https://quay.io/repository/biocontainers/notramp
.. _`notramp/tags`: https://quay.io/repository/biocontainers/notramp?tab=tags


.. raw:: html

    <script>
        var package = "notramp";
        var versions = ["1.1.9","1.1.8","1.1.7","1.1.6","1.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/notramp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/notramp/README.html