:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'longcallr'
.. highlight: bash

longcallr
=========

.. conda:recipe:: longcallr
   :replaces_section_title:
   :noindex:

   A Rust tool for SNP calling and haplotype phasing with long RNA\-seq reads.

   :homepage: https://github.com/huangnengCSU/longcallR
   :license: MIT
   :recipe: /`longcallr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longcallr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longcallr/meta.yaml>`_

   


.. conda:package:: longcallr

   |downloads_longcallr| |docker_longcallr|

   :versions:
      
      

      ``1.12.0-0``,  ``1.11.0-0``

      

   
   :depends intervaltree: 
   :depends networkx: 
   :depends numpy: ``>=1.22.4,<2.0a0``
   :depends pysam: ``>=0.23.3,<0.24.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scipy: 
   :depends statsmodels: 
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

      mamba install longcallr

   and update with::

      mamba update longcallr

  To create a new environment, run::

      mamba create --name myenvname longcallr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/longcallr:<tag>

   (see `longcallr/tags`_ for valid values for ``<tag>``)


.. |downloads_longcallr| image:: https://img.shields.io/conda/dn/bioconda/longcallr.svg?style=flat
   :target: https://anaconda.org/bioconda/longcallr
   :alt:   (downloads)
.. |docker_longcallr| image:: https://quay.io/repository/biocontainers/longcallr/status
   :target: https://quay.io/repository/biocontainers/longcallr
.. _`longcallr/tags`: https://quay.io/repository/biocontainers/longcallr?tab=tags


.. raw:: html

    <script>
        var package = "longcallr";
        var versions = ["1.12.0","1.11.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/longcallr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/longcallr/README.html