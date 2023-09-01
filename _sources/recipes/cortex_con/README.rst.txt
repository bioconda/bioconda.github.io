:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cortex_con'
.. highlight: bash

cortex_con
==========

.. conda:recipe:: cortex_con
   :replaces_section_title:
   :noindex:

   cortex\_con \(primary contact Mario Caccamo\) is for consensus genome assembly

   :homepage: http://cortexassembler.sourceforge.net/index.html
   :license: GPL3
   :recipe: /`cortex_con <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cortex_con>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cortex_con/meta.yaml>`_
   :links: biotools: :biotools:`cortex`, doi: :doi:`10.1038/ng.1028`

   


.. conda:package:: cortex_con

   |downloads_cortex_con| |docker_cortex_con|

   :versions:
      
      

      ``0.04c-1``,  ``0.04c-0``

      

   
   :depends libgcc-ng: ``>=4.9``
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

      mamba install cortex_con

   and update with::

      mamba update cortex_con

  To create a new environment, run::

      mamba create --name myenvname cortex_con

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cortex_con:<tag>

   (see `cortex_con/tags`_ for valid values for ``<tag>``)


.. |downloads_cortex_con| image:: https://img.shields.io/conda/dn/bioconda/cortex_con.svg?style=flat
   :target: https://anaconda.org/bioconda/cortex_con
   :alt:   (downloads)
.. |docker_cortex_con| image:: https://quay.io/repository/biocontainers/cortex_con/status
   :target: https://quay.io/repository/biocontainers/cortex_con
.. _`cortex_con/tags`: https://quay.io/repository/biocontainers/cortex_con?tab=tags


.. raw:: html

    <script>
        var package = "cortex_con";
        var versions = ["0.04c","0.04c"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cortex_con/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cortex_con/README.html