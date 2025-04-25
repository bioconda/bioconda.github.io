:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dashing2'
.. highlight: bash

dashing2
========

.. conda:recipe:: dashing2
   :replaces_section_title:
   :noindex:

   A fast toolkit for k\-mer and minimizer encoding\, sketching\, comparison\, and indexing.

   :homepage: https://github.com/dnbaker/dashing2
   :documentation: https://github.com/dnbaker/dashing2/blob/v2.1.20/README.md
   
   :license: MIT / MIT
   :recipe: /`dashing2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dashing2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dashing2/meta.yaml>`_
   :links: doi: :doi:`10.1101/501726`

   


.. conda:package:: dashing2

   |downloads_dashing2| |docker_dashing2|

   :versions:
      
      

      ``2.1.20-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends fmt: ``>=10.2.1,<11.0a0``
   :depends libgcc: ``>=13``
   :depends libgomp: 
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends zstd: ``>=1.5.7,<1.6.0a0``
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

      mamba install dashing2

   and update with::

      mamba update dashing2

  To create a new environment, run::

      mamba create --name myenvname dashing2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dashing2:<tag>

   (see `dashing2/tags`_ for valid values for ``<tag>``)


.. |downloads_dashing2| image:: https://img.shields.io/conda/dn/bioconda/dashing2.svg?style=flat
   :target: https://anaconda.org/bioconda/dashing2
   :alt:   (downloads)
.. |docker_dashing2| image:: https://quay.io/repository/biocontainers/dashing2/status
   :target: https://quay.io/repository/biocontainers/dashing2
.. _`dashing2/tags`: https://quay.io/repository/biocontainers/dashing2?tab=tags


.. raw:: html

    <script>
        var package = "dashing2";
        var versions = ["2.1.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dashing2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dashing2/README.html