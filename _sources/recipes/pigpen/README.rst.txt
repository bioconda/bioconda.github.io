:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pigpen'
.. highlight: bash

pigpen
======

.. conda:recipe:: pigpen
   :replaces_section_title:
   :noindex:

   A package to quantify RNA localization using OINC\-seq data.

   :homepage: https://github.com/TaliaferroLab/OINC-seq
   :documentation: https://github.com/TaliaferroLab/OINC-seq/blob/v0.0.6/README.md
   
   :license: MIT / MIT
   :recipe: /`pigpen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pigpen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pigpen/meta.yaml>`_
   :links: https: :https:`//doi.org/10.1101/2024.11.12.623278`

   


.. conda:package:: pigpen

   |downloads_pigpen| |docker_pigpen|

   :versions:
      
      

      ``0.0.6-1``,  ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.4-1``,  ``0.0.4-0``

      

   
   :depends bamtools: ``>=2.5.2``
   :depends bcftools: ``>=1.15``
   :depends gffutils: ``>=0.11.0``
   :depends numpy: ``>=1.21``
   :depends pandas: ``>=1.3.5``
   :depends postmaster: ``>=0.1.0``
   :depends pybedtools: ``>=0.9.0``
   :depends pysam: ``>=0.19``
   :depends python: ``>=3.5,<3.11``
   :depends r-base: ``>=4.1``
   :depends r-lme4: ``>=1.1``
   :depends rpy2: ``>=3.4.5``
   :depends salmon: ``>=1.9.0``
   :depends samtools: ``>=1.15``
   :depends star: ``>=2.7.10``
   :depends statsmodels: ``>=0.13.2``
   :depends umi_tools: ``>=1.1.0``
   :depends varscan: ``>=2.4.4``
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

      mamba install pigpen

   and update with::

      mamba update pigpen

  To create a new environment, run::

      mamba create --name myenvname pigpen

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pigpen:<tag>

   (see `pigpen/tags`_ for valid values for ``<tag>``)


.. |downloads_pigpen| image:: https://img.shields.io/conda/dn/bioconda/pigpen.svg?style=flat
   :target: https://anaconda.org/bioconda/pigpen
   :alt:   (downloads)
.. |docker_pigpen| image:: https://quay.io/repository/biocontainers/pigpen/status
   :target: https://quay.io/repository/biocontainers/pigpen
.. _`pigpen/tags`: https://quay.io/repository/biocontainers/pigpen?tab=tags


.. raw:: html

    <script>
        var package = "pigpen";
        var versions = ["0.0.6","0.0.6","0.0.5","0.0.4","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pigpen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pigpen/README.html