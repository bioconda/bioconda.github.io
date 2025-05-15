:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sistem'
.. highlight: bash

sistem
======

.. conda:recipe:: sistem
   :replaces_section_title:
   :noindex:

   A tool for simulating tumor growth\, metastasis\, and DNA\-seq data.

   :homepage: https://github.com/samsonweiner/sistem
   :documentation: https://sistem.readthedocs.io/en/latest
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`sistem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sistem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sistem/meta.yaml>`_

   SISTEM \(SImulation of Single\-cell Tumor Evolution and Metastasis\) is a software package and mathematical model for simulating tumor evolution\, cell migrations\, and DNA\-seq data at single\-cell resolution.



.. conda:package:: sistem

   |downloads_sistem| |docker_sistem|

   :versions:
      
      

      ``1.0.3-0``

      

   
   :depends biopython: ``>=1.8.1``
   :depends dwgsim: 
   :depends numpy: ``>=1.24.3``
   :depends pyfaidx: ``>=0.7.2.1``
   :depends python: ``>=3.9``
   :depends samtools: 
   :depends scikit-learn: ``>=1.6.1``
   :depends scipy: ``>=1.10.1``
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

      mamba install sistem

   and update with::

      mamba update sistem

  To create a new environment, run::

      mamba create --name myenvname sistem

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sistem:<tag>

   (see `sistem/tags`_ for valid values for ``<tag>``)


.. |downloads_sistem| image:: https://img.shields.io/conda/dn/bioconda/sistem.svg?style=flat
   :target: https://anaconda.org/bioconda/sistem
   :alt:   (downloads)
.. |docker_sistem| image:: https://quay.io/repository/biocontainers/sistem/status
   :target: https://quay.io/repository/biocontainers/sistem
.. _`sistem/tags`: https://quay.io/repository/biocontainers/sistem?tab=tags


.. raw:: html

    <script>
        var package = "sistem";
        var versions = ["1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sistem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sistem/README.html