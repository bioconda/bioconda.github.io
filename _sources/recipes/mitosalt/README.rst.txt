:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mitosalt'
.. highlight: bash

mitosalt
========

.. conda:recipe:: mitosalt
   :replaces_section_title:
   :noindex:

   MitoSAlt is a pipeline to identify large deletions and duplications in human and mouse mitochondrial genomes from next generation whole genome\/exome sequencing data. The pipeline is capable of analyzing any circular genome in principle\, as long as a proper configuration file is provided.

   :homepage: https://sourceforge.net/projects/mitosalt/
   :license: MIT / MIT-0
   :recipe: /`mitosalt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mitosalt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mitosalt/meta.yaml>`_

   This mitosalt version can\:

   \- download user\-selected reference genomes
     \- \`download\-mitosalt\-db.sh \-h \[human\_genome\_url\, blank for custom hg19 genome\]\`
     \- \`download\-mitosalt\-db.sh \-m \[mouse\_genome\_url\, blank for custom GRCm38.p6 genome\]\`
     \- \`download\-mitosalt\-db.sh \-h \[human\_genome\_url\, blank for custom hg19 genome\] \-m \[mouse\_genome\_url\, blank for custom GRCm38.p6 genome\]\`
   \- let us choose the destination folder of the reference genomes and indices
     \- \`export MITOSALT\_DATA\=\/path\/to\/mitosalt\/genomedata\`
   \- specify custom config files that are available in the package at \`\$CONDA\_PREFIX\/share\/mitosalt\-1.1.1\-0\/\`



.. conda:package:: mitosalt

   |downloads_mitosalt| |docker_mitosalt|

   :versions:
      
      

      ``1.1.1-1``,  ``1.1.1-0``

      

   
   :depends bedtools: ``2.31.1.*``
   :depends bioconductor-biostrings: ``2.70.1.*``
   :depends last: ``1608.*``
   :depends openjdk: ``>=11.0.1``
   :depends perl: ``5.32.*``
   :depends r-base: ``4.3.3.*``
   :depends r-plotrix: ``3.8_4.*``
   :depends r-rcolorbrewer: ``1.1.*``
   :depends samtools: ``1.21.*``
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

      mamba install mitosalt

   and update with::

      mamba update mitosalt

  To create a new environment, run::

      mamba create --name myenvname mitosalt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mitosalt:<tag>

   (see `mitosalt/tags`_ for valid values for ``<tag>``)


.. |downloads_mitosalt| image:: https://img.shields.io/conda/dn/bioconda/mitosalt.svg?style=flat
   :target: https://anaconda.org/bioconda/mitosalt
   :alt:   (downloads)
.. |docker_mitosalt| image:: https://quay.io/repository/biocontainers/mitosalt/status
   :target: https://quay.io/repository/biocontainers/mitosalt
.. _`mitosalt/tags`: https://quay.io/repository/biocontainers/mitosalt?tab=tags


.. raw:: html

    <script>
        var package = "mitosalt";
        var versions = ["1.1.1","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mitosalt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mitosalt/README.html