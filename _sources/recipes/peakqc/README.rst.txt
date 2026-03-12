:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'peakqc'
.. highlight: bash

peakqc
======

.. conda:recipe:: peakqc
   :replaces_section_title:
   :noindex:

   Quality control of single cell ATAC\-seq data based on fragment length distributions.

   :homepage: https://github.com/loosolab/PEAKQC
   :documentation: https://loosolab.pages.gwdg.de/software/peakqc/
   
   :license: MIT
   :recipe: /`peakqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peakqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peakqc/meta.yaml>`_

   


.. conda:package:: peakqc

   |downloads_peakqc| |docker_peakqc|

   :versions:
      
      

      ``0.1.6-0``

      

   
   :depends beartype: 
   :depends pysam: 
   :depends python: 
   :depends scanpy: ``>=1.9``
   :depends scipy: 
   :depends tqdm: 
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

      mamba install peakqc

   and update with::

      mamba update peakqc

  To create a new environment, run::

      mamba create --name myenvname peakqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/peakqc:<tag>

   (see `peakqc/tags`_ for valid values for ``<tag>``)


.. |downloads_peakqc| image:: https://img.shields.io/conda/dn/bioconda/peakqc.svg?style=flat
   :target: https://anaconda.org/bioconda/peakqc
   :alt:   (downloads)
.. |docker_peakqc| image:: https://quay.io/repository/biocontainers/peakqc/status
   :target: https://quay.io/repository/biocontainers/peakqc
.. _`peakqc/tags`: https://quay.io/repository/biocontainers/peakqc?tab=tags


.. raw:: html

    <script>
        var package = "peakqc";
        var versions = ["0.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/peakqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/peakqc/README.html