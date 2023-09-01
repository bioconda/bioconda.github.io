:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snaptools'
.. highlight: bash

snaptools
=========

.. conda:recipe:: snaptools
   :replaces_section_title:
   :noindex:

   A module for working with snap files in Python

   :homepage: https://github.com/r3fang/SnapTools.git
   :license: OTHER / LICENSE
   :recipe: /`snaptools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snaptools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snaptools/meta.yaml>`_

   


.. conda:package:: snaptools

   |downloads_snaptools| |docker_snaptools|

   :versions:
      
      

      ``1.4.8-1``,  ``1.4.8-0``

      

   
   :depends future: 
   :depends h5py: 
   :depends numpy: 
   :depends pybedtools: ``>=0.7``
   :depends pysam: 
   :depends python: 
   :depends python-louvain: 
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

      mamba install snaptools

   and update with::

      mamba update snaptools

  To create a new environment, run::

      mamba create --name myenvname snaptools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snaptools:<tag>

   (see `snaptools/tags`_ for valid values for ``<tag>``)


.. |downloads_snaptools| image:: https://img.shields.io/conda/dn/bioconda/snaptools.svg?style=flat
   :target: https://anaconda.org/bioconda/snaptools
   :alt:   (downloads)
.. |docker_snaptools| image:: https://quay.io/repository/biocontainers/snaptools/status
   :target: https://quay.io/repository/biocontainers/snaptools
.. _`snaptools/tags`: https://quay.io/repository/biocontainers/snaptools?tab=tags


.. raw:: html

    <script>
        var package = "snaptools";
        var versions = ["1.4.8","1.4.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snaptools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snaptools/README.html