:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'compare-reads'
.. highlight: bash

compare-reads
=============

.. conda:recipe:: compare-reads
   :replaces_section_title:
   :noindex:

   cythonized function to compare reads by name.

   :homepage: https://github.com/mvdbeek/pysam-compare-reads
   :license: MIT
   :recipe: /`compare-reads <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/compare-reads>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/compare-reads/meta.yaml>`_

   


.. conda:package:: compare-reads

   |downloads_compare-reads| |docker_compare-reads|

   :versions:
      
      

      ``0.0.1-2``,  ``0.0.1-0``

      

   
   :depends libgcc: ``>=13``
   :depends pysam: ``>=0.23.3,<0.24.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install compare-reads

   and update with::

      mamba update compare-reads

  To create a new environment, run::

      mamba create --name myenvname compare-reads

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/compare-reads:<tag>

   (see `compare-reads/tags`_ for valid values for ``<tag>``)


.. |downloads_compare-reads| image:: https://img.shields.io/conda/dn/bioconda/compare-reads.svg?style=flat
   :target: https://anaconda.org/bioconda/compare-reads
   :alt:   (downloads)
.. |docker_compare-reads| image:: https://quay.io/repository/biocontainers/compare-reads/status
   :target: https://quay.io/repository/biocontainers/compare-reads
.. _`compare-reads/tags`: https://quay.io/repository/biocontainers/compare-reads?tab=tags


.. raw:: html

    <script>
        var package = "compare-reads";
        var versions = ["0.0.1","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/compare-reads/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/compare-reads/README.html