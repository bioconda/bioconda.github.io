:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'qcumber'
.. highlight: bash

qcumber
=======

.. conda:recipe:: qcumber
   :replaces_section_title:
   :noindex:

   Quality control\, quality trimming\, adapter removal and sequence content check of NGS data.

   :homepage: https://gitlab.com/RKIBioinformaticsPipelines/QCumber
   :license: LGPL3
   :recipe: /`qcumber <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qcumber>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qcumber/meta.yaml>`_

   


.. conda:package:: qcumber

   |downloads_qcumber| |docker_qcumber|

   :versions:
      
      

      ``2.0.4-0``

      

   
   :depends bioconductor-savr: 
   :depends bitstring: 
   :depends bowtie2: ``2.3.*``
   :depends docopt: 
   :depends fastqc: ``0.11.*``
   :depends jinja2: 
   :depends kraken: ``0.10.*``
   :depends krona: 
   :depends matplotlib: ``2.0.*``
   :depends numpy: 
   :depends pandas: 
   :depends python: ``3.6.*``
   :depends pyyaml: ``3.12.*``
   :depends r: ``3.3.*``
   :depends r-ggplot2: ``2.2.*``
   :depends r-quantreg: 
   :depends r-reshape2: 
   :depends r-stringi: 
   :depends samtools: ``1.3.*``
   :depends seaborn: 
   :depends setuptools: 
   :depends snakemake: ``3.12.*``
   :depends trimmomatic: ``0.36.*``
   :depends xmltodict: 
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

      mamba install qcumber

   and update with::

      mamba update qcumber

  To create a new environment, run::

      mamba create --name myenvname qcumber

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/qcumber:<tag>

   (see `qcumber/tags`_ for valid values for ``<tag>``)


.. |downloads_qcumber| image:: https://img.shields.io/conda/dn/bioconda/qcumber.svg?style=flat
   :target: https://anaconda.org/bioconda/qcumber
   :alt:   (downloads)
.. |docker_qcumber| image:: https://quay.io/repository/biocontainers/qcumber/status
   :target: https://quay.io/repository/biocontainers/qcumber
.. _`qcumber/tags`: https://quay.io/repository/biocontainers/qcumber?tab=tags


.. raw:: html

    <script>
        var package = "qcumber";
        var versions = ["2.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qcumber/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qcumber/README.html