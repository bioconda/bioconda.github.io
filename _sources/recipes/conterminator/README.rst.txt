:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'conterminator'
.. highlight: bash

conterminator
=============

.. conda:recipe:: conterminator
   :replaces_section_title:
   :noindex:

   Conterminator\: software to detect contamination in large sequence sets

   :homepage: https://github.com/martin-steinegger/conterminator
   :license: GPL3
   :recipe: /`conterminator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/conterminator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/conterminator/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-020-02023-1`, biotools: :biotools:`conterminator`

   


.. conda:package:: conterminator

   |downloads_conterminator| |docker_conterminator|

   :versions:
      
      

      ``1.c74b5-1``,  ``1.c74b5-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends gawk: 
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends openmp: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install conterminator

   and update with::

      mamba update conterminator

  To create a new environment, run::

      mamba create --name myenvname conterminator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/conterminator:<tag>

   (see `conterminator/tags`_ for valid values for ``<tag>``)


.. |downloads_conterminator| image:: https://img.shields.io/conda/dn/bioconda/conterminator.svg?style=flat
   :target: https://anaconda.org/bioconda/conterminator
   :alt:   (downloads)
.. |docker_conterminator| image:: https://quay.io/repository/biocontainers/conterminator/status
   :target: https://quay.io/repository/biocontainers/conterminator
.. _`conterminator/tags`: https://quay.io/repository/biocontainers/conterminator?tab=tags


.. raw:: html

    <script>
        var package = "conterminator";
        var versions = ["1.c74b5","1.c74b5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/conterminator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/conterminator/README.html