:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pycoqc'
.. highlight: bash

pycoqc
======

.. conda:recipe:: pycoqc
   :replaces_section_title:
   :noindex:

   PycoQC computes metrics and generates interactive QC plots for Oxford Nanopore technologies sequencing data

   :homepage: https://github.com/a-slide/pycoQC
   :documentation: https://a-slide.github.io/pycoQC/
   
   :license: GPL / GNU General Public v3 (GPLv3)
   :recipe: /`pycoqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pycoqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pycoqc/meta.yaml>`_

   


.. conda:package:: pycoqc

   |downloads_pycoqc| |docker_pycoqc|

   :versions:
      
      

      ``2.5.2-0``,  ``2.5.0.23-0``,  ``2.5.0.21-0``,  ``2.5.0.3-0``,  ``2.2.4-0``,  ``2.2.3-2``,  ``2.2.3-1``,  ``1.0.alpha1-0``

      

   
   :depends h5py: ``2.9.0.*``
   :depends jinja2: ``2.10.1.*``
   :depends numpy: ``1.17.1.*``
   :depends pandas: ``0.25.1.*``
   :depends plotly: ``4.1.0.*``
   :depends pysam: ``0.15.3.*``
   :depends python: ``>=3.6``
   :depends scipy: ``1.3.1.*``
   :depends tqdm: ``4.35.0.*``
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

      mamba install pycoqc

   and update with::

      mamba update pycoqc

  To create a new environment, run::

      mamba create --name myenvname pycoqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pycoqc:<tag>

   (see `pycoqc/tags`_ for valid values for ``<tag>``)


.. |downloads_pycoqc| image:: https://img.shields.io/conda/dn/bioconda/pycoqc.svg?style=flat
   :target: https://anaconda.org/bioconda/pycoqc
   :alt:   (downloads)
.. |docker_pycoqc| image:: https://quay.io/repository/biocontainers/pycoqc/status
   :target: https://quay.io/repository/biocontainers/pycoqc
.. _`pycoqc/tags`: https://quay.io/repository/biocontainers/pycoqc?tab=tags


.. raw:: html

    <script>
        var package = "pycoqc";
        var versions = ["2.5.2","2.5.0.23","2.5.0.21","2.5.0.3","2.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pycoqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pycoqc/README.html