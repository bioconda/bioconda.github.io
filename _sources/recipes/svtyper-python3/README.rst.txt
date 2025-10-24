:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svtyper-python3'
.. highlight: bash

svtyper-python3
===============

.. conda:recipe:: svtyper-python3
   :replaces_section_title:
   :noindex:

   Bayesian genotyper for structural variants

   :homepage: https://github.com/hall-lab/svtyper
   :license: MIT
   :recipe: /`svtyper-python3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svtyper-python3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svtyper-python3/meta.yaml>`_

   


.. conda:package:: svtyper-python3

   |downloads_svtyper-python3| |docker_svtyper-python3|

   :versions:
      
      

      ``0.7.1-0``

      

   
   :depends cytoolz: 
   :depends numpy: 
   :depends pysam: ``>=0.15.0``
   :depends python: ``>=3.6``
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

      mamba install svtyper-python3

   and update with::

      mamba update svtyper-python3

  To create a new environment, run::

      mamba create --name myenvname svtyper-python3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/svtyper-python3:<tag>

   (see `svtyper-python3/tags`_ for valid values for ``<tag>``)


.. |downloads_svtyper-python3| image:: https://img.shields.io/conda/dn/bioconda/svtyper-python3.svg?style=flat
   :target: https://anaconda.org/bioconda/svtyper-python3
   :alt:   (downloads)
.. |docker_svtyper-python3| image:: https://quay.io/repository/biocontainers/svtyper-python3/status
   :target: https://quay.io/repository/biocontainers/svtyper-python3
.. _`svtyper-python3/tags`: https://quay.io/repository/biocontainers/svtyper-python3?tab=tags


.. raw:: html

    <script>
        var package = "svtyper-python3";
        var versions = ["0.7.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svtyper-python3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svtyper-python3/README.html