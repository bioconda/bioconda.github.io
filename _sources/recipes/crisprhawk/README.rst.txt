:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crisprhawk'
.. highlight: bash

crisprhawk
==========

.. conda:recipe:: crisprhawk
   :replaces_section_title:
   :noindex:

   CRISPR\-HAWK\: Haplotype and vAriant\-aWare guide design toolKit

   :homepage: https://github.com/pinellolab/CRISPR-HAWK
   :license: AGPL-3.0-or-later AND BSD-3-Clause
   :recipe: /`crisprhawk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crisprhawk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crisprhawk/meta.yaml>`_

   


.. conda:package:: crisprhawk

   |downloads_crisprhawk| |docker_crisprhawk|

   :versions:
      
      

      ``0.1.2-0``

      

   
   :depends biopython: ``1.83.*``
   :depends charset-normalizer: ``3.3.2.*``
   :depends colorama: ``0.4.6.*``
   :depends contourpy: ``1.1.1.*``
   :depends cycler: ``0.12.1.*``
   :depends exceptiongroup: ``1.2.2.*``
   :depends filelock: ``3.16.1.*``
   :depends fonttools: ``4.53.1.*``
   :depends fsspec: ``2024.10.0.*``
   :depends gmpy2: ``2.1.5.*``
   :depends h5py: ``3.7.0.*``
   :depends idna: ``3.10.*``
   :depends iniconfig: ``2.0.0.*``
   :depends jinja2: ``3.1.4.*``
   :depends joblib: ``1.4.2.*``
   :depends kiwisolver: ``1.4.5.*``
   :depends lightgbm: ``3.3.5.*``
   :depends markupsafe: ``2.1.5.*``
   :depends matplotlib-base: ``3.5.3.*``
   :depends mpmath: ``1.3.0.*``
   :depends munkres: ``1.1.4.*``
   :depends networkx: ``3.1.*``
   :depends numexpr: ``2.8.3.*``
   :depends numpy: ``1.24.4.*``
   :depends openpyxl: ``3.1.5.*``
   :depends packaging: ``25.0.*``
   :depends pandas: ``1.4.4.*``
   :depends pillow: ``10.4.0.*``
   :depends pluggy: ``1.5.0.*``
   :depends pyarrow: ``17.0.0.*``
   :depends pybedtools: ``0.10.0.*``
   :depends pysam: ``0.22.1.*``
   :depends pytables: ``3.7.0.*``
   :depends pytest: ``8.3.4.*``
   :depends python: ``>=3.8,<3.9``
   :depends pytorch: ``2.3.0.*``
   :depends requests: ``2.32.3.*``
   :depends rs3: ``0.0.16.*``
   :depends scikit-learn: ``1.1.1.*``
   :depends scipy: ``1.9.1.*``
   :depends seaborn: ``0.13.2.*``
   :depends six: ``1.16.0.*``
   :depends sympy: ``1.13.3.*``
   :depends threadpoolctl: ``3.5.0.*``
   :depends tornado: ``6.4.1.*``
   :depends tqdm: ``4.67.1.*``
   :depends typing_extensions: ``4.12.2.*``
   :depends unicodedata2: ``15.1.0.*``
   :depends urllib3: ``2.2.3.*``
   :depends xlrd: ``2.0.1.*``
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

      mamba install crisprhawk

   and update with::

      mamba update crisprhawk

  To create a new environment, run::

      mamba create --name myenvname crisprhawk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/crisprhawk:<tag>

   (see `crisprhawk/tags`_ for valid values for ``<tag>``)


.. |downloads_crisprhawk| image:: https://img.shields.io/conda/dn/bioconda/crisprhawk.svg?style=flat
   :target: https://anaconda.org/bioconda/crisprhawk
   :alt:   (downloads)
.. |docker_crisprhawk| image:: https://quay.io/repository/biocontainers/crisprhawk/status
   :target: https://quay.io/repository/biocontainers/crisprhawk
.. _`crisprhawk/tags`: https://quay.io/repository/biocontainers/crisprhawk?tab=tags


.. raw:: html

    <script>
        var package = "crisprhawk";
        var versions = ["0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crisprhawk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crisprhawk/README.html