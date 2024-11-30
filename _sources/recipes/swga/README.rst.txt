:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'swga'
.. highlight: bash

swga
====

.. conda:recipe:: swga
   :replaces_section_title:
   :noindex:

   Select primer sets for selective whole genome amplification \(SWGA\)

   :homepage: https://github.com/eclarke/swga
   :license: GPL / GPL-3.0
   :recipe: /`swga <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/swga>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/swga/meta.yaml>`_

   


.. conda:package:: swga

   |downloads_swga| |docker_swga|

   :versions:
      
      

      ``0.4.4-3``,  ``0.4.4-2``,  ``0.4.4-1``,  ``0.4.4-0``,  ``0.4.3.p1-0``,  ``0.4.2-1``,  ``0.4.2-0``

      

   
   :depends argutils: 
   :depends click: 
   :depends libcxx: ``>=11.1.0``
   :depends llvm-openmp: ``>=11.1.0``
   :depends melt: 
   :depends peewee: ``>=2.7.3,<3.0``
   :depends pyfaidx: ``>0.4.5.2``
   :depends pytest: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27m``
   :depends pyyaml: 
   :depends semantic_version: 
   :depends workspace: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install swga

   and update with::

      mamba update swga

  To create a new environment, run::

      mamba create --name myenvname swga

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/swga:<tag>

   (see `swga/tags`_ for valid values for ``<tag>``)


.. |downloads_swga| image:: https://img.shields.io/conda/dn/bioconda/swga.svg?style=flat
   :target: https://anaconda.org/bioconda/swga
   :alt:   (downloads)
.. |docker_swga| image:: https://quay.io/repository/biocontainers/swga/status
   :target: https://quay.io/repository/biocontainers/swga
.. _`swga/tags`: https://quay.io/repository/biocontainers/swga?tab=tags


.. raw:: html

    <script>
        var package = "swga";
        var versions = ["0.4.4","0.4.4","0.4.4","0.4.4","0.4.3.p1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/swga/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/swga/README.html