:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'secimtools'
.. highlight: bash

secimtools
==========

.. conda:recipe:: secimtools
   :replaces_section_title:
   :noindex:

   Metabolomics tools from the SECIM project

   :homepage: https://github.com/secimTools/SECIMTools
   :license: MIT / MIT License
   :recipe: /`secimtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/secimtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/secimtools/meta.yaml>`_

   suite of standalone and Galaxy tools for processing of metabolomics data.


.. conda:package:: secimtools

   |downloads_secimtools| |docker_secimtools|

   :versions:
      
      

      ``22.3.23-0``,  ``21.6.3-0``,  ``21.3.4.2-0``,  ``1.0.0-4``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-impute: 
   :depends lxml: 
   :depends matplotlib-base: 
   :depends matplotlib-venn: 
   :depends numpy: ``>=1.16``
   :depends palettable: 
   :depends pandas: 
   :depends perl-vcftools-vcf: 
   :depends pymc: 
   :depends python: ``>=3.7``
   :depends r-glmnet: 
   :depends rpy2: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
   :depends statsmodels: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install secimtools

   and update with::

      mamba update secimtools

  To create a new environment, run::

      mamba create --name myenvname secimtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/secimtools:<tag>

   (see `secimtools/tags`_ for valid values for ``<tag>``)


.. |downloads_secimtools| image:: https://img.shields.io/conda/dn/bioconda/secimtools.svg?style=flat
   :target: https://anaconda.org/bioconda/secimtools
   :alt:   (downloads)
.. |docker_secimtools| image:: https://quay.io/repository/biocontainers/secimtools/status
   :target: https://quay.io/repository/biocontainers/secimtools
.. _`secimtools/tags`: https://quay.io/repository/biocontainers/secimtools?tab=tags


.. raw:: html

    <script>
        var package = "secimtools";
        var versions = ["22.3.23","21.6.3","21.3.4.2","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/secimtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/secimtools/README.html