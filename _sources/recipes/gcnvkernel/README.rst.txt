:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gcnvkernel'
.. highlight: bash

gcnvkernel
==========

.. conda:recipe:: gcnvkernel
   :replaces_section_title:
   :noindex:

   Python package to support GATK gCNV calling.

   :homepage: https://www.broadinstitute.org/gatk/
   :developer docs: https://github.com/broadinstitute/gatk
   :license: BSD / BSD-3-Clause
   :recipe: /`gcnvkernel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gcnvkernel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gcnvkernel/meta.yaml>`_

   


.. conda:package:: gcnvkernel

   |downloads_gcnvkernel| |docker_gcnvkernel|

   :versions:
      
      

      ``0.8-0``,  ``0.7-0``

      

   
   :depends biopython: ``1.76.*``
   :depends dill: ``0.3.4.*``
   :depends h5py: ``2.10.0.*``
   :depends intel-openmp: ``2019.4.*``
   :depends keras: ``2.2.4.*``
   :depends matplotlib: ``3.2.1.*``
   :depends mkl: ``2019.5.*``
   :depends mkl-service: ``2.3.0.*``
   :depends numpy: ``1.17.5.*``
   :depends pandas: ``1.0.3.*``
   :depends pip: ``20.0.2.*``
   :depends pymc3: ``3.1.*``
   :depends pysam: ``0.15.3.*``
   :depends python: ``3.6.10.*``
   :depends pyvcf: ``0.6.8.*``
   :depends r-backports: ``1.1.10.*``
   :depends r-base: ``3.6.2.*``
   :depends r-data.table: ``1.12.8.*``
   :depends r-dplyr: ``0.8.5.*``
   :depends r-getopt: ``1.20.3.*``
   :depends r-ggplot2: ``3.3.0.*``
   :depends r-gplots: ``3.0.3.*``
   :depends r-gsalib: ``2.1.*``
   :depends r-optparse: ``1.6.4.*``
   :depends scikit-learn: ``0.23.1.*``
   :depends scipy: ``1.0.0.*``
   :depends tensorflow: ``1.15.0.*``
   :depends theano: ``1.0.4.*``
   :depends typing_extensions: ``4.1.1.*``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install gcnvkernel

   and update with::

      mamba update gcnvkernel

  To create a new environment, run::

      mamba create --name myenvname gcnvkernel

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gcnvkernel:<tag>

   (see `gcnvkernel/tags`_ for valid values for ``<tag>``)


.. |downloads_gcnvkernel| image:: https://img.shields.io/conda/dn/bioconda/gcnvkernel.svg?style=flat
   :target: https://anaconda.org/bioconda/gcnvkernel
   :alt:   (downloads)
.. |docker_gcnvkernel| image:: https://quay.io/repository/biocontainers/gcnvkernel/status
   :target: https://quay.io/repository/biocontainers/gcnvkernel
.. _`gcnvkernel/tags`: https://quay.io/repository/biocontainers/gcnvkernel?tab=tags


.. raw:: html

    <script>
        var package = "gcnvkernel";
        var versions = ["0.8","0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gcnvkernel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gcnvkernel/README.html