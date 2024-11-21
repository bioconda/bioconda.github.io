:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'finemap'
.. highlight: bash

finemap
=======

.. conda:recipe:: finemap
   :replaces_section_title:
   :noindex:

   Program for identifying causal SNPs and their effect sizes and heritability contributions


   :homepage: http://www.christianbenner.com
   :license: `Custom Academic <http://www.christianbenner.com/license_finemap_v1.4.html>`_
   :recipe: /`finemap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/finemap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/finemap/meta.yaml>`_

   


.. conda:package:: finemap

   |downloads_finemap| |docker_finemap|

   :versions:
      
      

      ``1.4.2-0``,  ``1.4.1-0``

      

   
   :depends __glibc: ``>=2.17,<3.0.a0``
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc: 
   :depends libgomp: 
   :depends sysroot_linux-64: ``2.17.*``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install finemap

   and update with::

      mamba update finemap

  To create a new environment, run::

      mamba create --name myenvname finemap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/finemap:<tag>

   (see `finemap/tags`_ for valid values for ``<tag>``)


.. |downloads_finemap| image:: https://img.shields.io/conda/dn/bioconda/finemap.svg?style=flat
   :target: https://anaconda.org/bioconda/finemap
   :alt:   (downloads)
.. |docker_finemap| image:: https://quay.io/repository/biocontainers/finemap/status
   :target: https://quay.io/repository/biocontainers/finemap
.. _`finemap/tags`: https://quay.io/repository/biocontainers/finemap?tab=tags


.. raw:: html

    <script>
        var package = "finemap";
        var versions = ["1.4.2","1.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/finemap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/finemap/README.html