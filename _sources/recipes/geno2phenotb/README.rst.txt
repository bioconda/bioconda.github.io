:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'geno2phenotb'
.. highlight: bash

geno2phenotb
============

.. conda:recipe:: geno2phenotb
   :replaces_section_title:
   :noindex:

   Prediction of Mycobacterium tuberculosis drug resistance from WGS data.

   :homepage: https://github.com/msmdev/geno2phenoTB
   :documentation: https://geno2phenotb.readthedocs.io/en/latest
   
   :license: LGPL / LGPL-3.0-only
   :recipe: /`geno2phenotb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/geno2phenotb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/geno2phenotb/meta.yaml>`_

   geno2phenoTB is a machine learning based tool to predict resistance of Mycobacterium tuberculosis against antibiotics using whole\-genome sequencing data.



.. conda:package:: geno2phenotb

   |downloads_geno2phenotb| |docker_geno2phenotb|

   :versions:
      
      

      ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends bwa: 
   :depends gatk: ``3.8.*``
   :depends imbalanced-learn: ``0.8.1.*``
   :depends importlib_metadata: 
   :depends joblib: ``1.2.*``
   :depends mtbseq: 
   :depends numpy: ``1.21.5.*``
   :depends packaging: ``21.*``
   :depends pandas: ``0.25.3.*``
   :depends perl-base: ``2.23.*``
   :depends python: ``3.8.17.*``
   :depends requests: ``2.*``
   :depends samtools: ``1.6.*``
   :depends scikit-learn: ``0.24.2.*``
   :depends scipy: ``1.7.3.*``
   :depends setuptools: 
   :depends tqdm: ``4.*``
   :depends wheel: ``0.37.*``
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

      mamba install geno2phenotb

   and update with::

      mamba update geno2phenotb

  To create a new environment, run::

      mamba create --name myenvname geno2phenotb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/geno2phenotb:<tag>

   (see `geno2phenotb/tags`_ for valid values for ``<tag>``)


.. |downloads_geno2phenotb| image:: https://img.shields.io/conda/dn/bioconda/geno2phenotb.svg?style=flat
   :target: https://anaconda.org/bioconda/geno2phenotb
   :alt:   (downloads)
.. |docker_geno2phenotb| image:: https://quay.io/repository/biocontainers/geno2phenotb/status
   :target: https://quay.io/repository/biocontainers/geno2phenotb
.. _`geno2phenotb/tags`: https://quay.io/repository/biocontainers/geno2phenotb?tab=tags


.. raw:: html

    <script>
        var package = "geno2phenotb";
        var versions = ["1.0.1","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/geno2phenotb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/geno2phenotb/README.html