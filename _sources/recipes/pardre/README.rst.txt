:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pardre'
.. highlight: bash

pardre
======

.. conda:recipe:: pardre
   :replaces_section_title:
   :noindex:

   ParDRe is a parallel tool to remove duplicate reads.

   :homepage: https://sourceforge.net/projects/pardre/
   :license: GPL-3.0-only
   :recipe: /`pardre <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pardre>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pardre/meta.yaml>`_
   :links: https: :https:`//doi.org/10.1093/bioinformatics/btw038`

   


.. conda:package:: pardre

   |downloads_pardre| |docker_pardre|

   :versions:
      
      

      ``2.2.5-3``,  ``2.2.5-2``,  ``2.2.5-1``,  ``2.2.5-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends mpich: ``>=4.1.1,<5.0a0``
   :depends zlib: 
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

      mamba install pardre

   and update with::

      mamba update pardre

  To create a new environment, run::

      mamba create --name myenvname pardre

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pardre:<tag>

   (see `pardre/tags`_ for valid values for ``<tag>``)


.. |downloads_pardre| image:: https://img.shields.io/conda/dn/bioconda/pardre.svg?style=flat
   :target: https://anaconda.org/bioconda/pardre
   :alt:   (downloads)
.. |docker_pardre| image:: https://quay.io/repository/biocontainers/pardre/status
   :target: https://quay.io/repository/biocontainers/pardre
.. _`pardre/tags`: https://quay.io/repository/biocontainers/pardre?tab=tags


.. raw:: html

    <script>
        var package = "pardre";
        var versions = ["2.2.5","2.2.5","2.2.5","2.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pardre/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pardre/README.html