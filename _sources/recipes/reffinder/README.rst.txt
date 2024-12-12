:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'reffinder'
.. highlight: bash

reffinder
=========

.. conda:recipe:: reffinder
   :replaces_section_title:
   :noindex:

   refFinder\: Fast Lightweighttool for extracting nucleotides from fastafile using streams

   :homepage: https://github.com/ANGSD/refFinder
   :license: GPLv3, MIT
   :recipe: /`reffinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reffinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reffinder/meta.yaml>`_

   


.. conda:package:: reffinder

   |downloads_reffinder| |docker_reffinder|

   :versions:
      
      

      ``0.81-3``,  ``0.81-2``,  ``0.81-1``,  ``0.81-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install reffinder

   and update with::

      mamba update reffinder

  To create a new environment, run::

      mamba create --name myenvname reffinder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/reffinder:<tag>

   (see `reffinder/tags`_ for valid values for ``<tag>``)


.. |downloads_reffinder| image:: https://img.shields.io/conda/dn/bioconda/reffinder.svg?style=flat
   :target: https://anaconda.org/bioconda/reffinder
   :alt:   (downloads)
.. |docker_reffinder| image:: https://quay.io/repository/biocontainers/reffinder/status
   :target: https://quay.io/repository/biocontainers/reffinder
.. _`reffinder/tags`: https://quay.io/repository/biocontainers/reffinder?tab=tags


.. raw:: html

    <script>
        var package = "reffinder";
        var versions = ["0.81","0.81","0.81","0.81"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/reffinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/reffinder/README.html