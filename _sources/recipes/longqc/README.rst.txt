:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'longqc'
.. highlight: bash

longqc
======

.. conda:recipe:: longqc
   :replaces_section_title:
   :noindex:

   LongQC is a tool for the data quality control of the PacBio and ONT long reads

   :homepage: https://github.com/yfukasawa/LongQC
   :license: MIT
   :recipe: /`longqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longqc/meta.yaml>`_

   


.. conda:package:: longqc

   |downloads_longqc| |docker_longqc|

   :versions:
      
      

      ``1.2.0c-0``

      

   
   :depends h5py: 
   :depends jinja2: 
   :depends matplotlib-base: ``>=2.1.2``
   :depends minimap2-coverage: 
   :depends numpy: 
   :depends pandas: ``>=0.24.0``
   :depends pysam: 
   :depends python: ``>=3``
   :depends python-edlib: 
   :depends scikit-learn: 
   :depends scipy: 
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

      mamba install longqc

   and update with::

      mamba update longqc

  To create a new environment, run::

      mamba create --name myenvname longqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/longqc:<tag>

   (see `longqc/tags`_ for valid values for ``<tag>``)


.. |downloads_longqc| image:: https://img.shields.io/conda/dn/bioconda/longqc.svg?style=flat
   :target: https://anaconda.org/bioconda/longqc
   :alt:   (downloads)
.. |docker_longqc| image:: https://quay.io/repository/biocontainers/longqc/status
   :target: https://quay.io/repository/biocontainers/longqc
.. _`longqc/tags`: https://quay.io/repository/biocontainers/longqc?tab=tags


.. raw:: html

    <script>
        var package = "longqc";
        var versions = ["1.2.0c"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/longqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/longqc/README.html