:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnaredprint'
.. highlight: bash

rnaredprint
===========

.. conda:recipe:: rnaredprint
   :replaces_section_title:
   :noindex:

   Tree\-decomposition based dynamic programming algorithm for multiple target RNA design

   :homepage: https://github.com/yannponty/RNARedPrint
   :license: GPL
   :recipe: /`rnaredprint <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnaredprint>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnaredprint/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-019-2784-7`

   


.. conda:package:: rnaredprint

   |downloads_rnaredprint| |docker_rnaredprint|

   :versions:
      
      

      ``0.3-0``,  ``0.3pre-4``,  ``0.3pre-3``,  ``0.3pre-2``,  ``0.3pre-1``,  ``0.3pre-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends matplotlib-base: 
   :depends numpy: 
   :depends openjdk: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends scipy: 
   :depends viennarna: ``>=2.4``
   :depends viennarna: ``>=2.6.3,<2.7.0a0``
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

      mamba install rnaredprint

   and update with::

      mamba update rnaredprint

  To create a new environment, run::

      mamba create --name myenvname rnaredprint

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rnaredprint:<tag>

   (see `rnaredprint/tags`_ for valid values for ``<tag>``)


.. |downloads_rnaredprint| image:: https://img.shields.io/conda/dn/bioconda/rnaredprint.svg?style=flat
   :target: https://anaconda.org/bioconda/rnaredprint
   :alt:   (downloads)
.. |docker_rnaredprint| image:: https://quay.io/repository/biocontainers/rnaredprint/status
   :target: https://quay.io/repository/biocontainers/rnaredprint
.. _`rnaredprint/tags`: https://quay.io/repository/biocontainers/rnaredprint?tab=tags


.. raw:: html

    <script>
        var package = "rnaredprint";
        var versions = ["0.3","0.3pre","0.3pre","0.3pre","0.3pre"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnaredprint/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnaredprint/README.html