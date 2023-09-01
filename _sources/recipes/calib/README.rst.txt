:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'calib'
.. highlight: bash

calib
=====

.. conda:recipe:: calib
   :replaces_section_title:
   :noindex:

   Clustering without alignment using \(locality sensitive hashing\) LSH and MinHashing of barcoded reads

   :homepage: https://github.com/vpc-ccg/calib
   :license: MIT
   :recipe: /`calib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/calib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/calib/meta.yaml>`_

   


.. conda:package:: calib

   |downloads_calib| |docker_calib|

   :versions:
      
      

      ``0.3.4-5``,  ``0.3.4-4``,  ``0.3.4-3``,  ``0.3.4-2``,  ``0.3.4-1``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install calib

   and update with::

      mamba update calib

  To create a new environment, run::

      mamba create --name myenvname calib

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/calib:<tag>

   (see `calib/tags`_ for valid values for ``<tag>``)


.. |downloads_calib| image:: https://img.shields.io/conda/dn/bioconda/calib.svg?style=flat
   :target: https://anaconda.org/bioconda/calib
   :alt:   (downloads)
.. |docker_calib| image:: https://quay.io/repository/biocontainers/calib/status
   :target: https://quay.io/repository/biocontainers/calib
.. _`calib/tags`: https://quay.io/repository/biocontainers/calib?tab=tags


.. raw:: html

    <script>
        var package = "calib";
        var versions = ["0.3.4","0.3.4","0.3.4","0.3.4","0.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/calib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/calib/README.html