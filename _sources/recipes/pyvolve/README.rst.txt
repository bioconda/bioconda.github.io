:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyvolve'
.. highlight: bash

pyvolve
=======

.. conda:recipe:: pyvolve
   :replaces_section_title:
   :noindex:

   Pyvolve is an open\-source Python module for simulating sequences along a phylogenetic tree according to continuous\-time Markov models of sequence evolution.

   :homepage: https://github.com/sjspielman/pyvolve
   :documentation: https://sjspielman.github.io/pyvolve
   
   :license: BSD / BSD-2-Clause
   :recipe: /`pyvolve <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyvolve>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyvolve/meta.yaml>`_

   


.. conda:package:: pyvolve

   |downloads_pyvolve| |docker_pyvolve|

   :versions:
      
      

      ``1.1.0-0``,  ``0.9.0-0``,  ``0.8.9-0``,  ``0.8.8-2``,  ``0.8.8-0``,  ``0.8.7-0``

      

   
   :depends biopython: 
   :depends numpy: ``>=1.20.0``
   :depends python: ``>=3``
   :depends scipy: 
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

      mamba install pyvolve

   and update with::

      mamba update pyvolve

  To create a new environment, run::

      mamba create --name myenvname pyvolve

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyvolve:<tag>

   (see `pyvolve/tags`_ for valid values for ``<tag>``)


.. |downloads_pyvolve| image:: https://img.shields.io/conda/dn/bioconda/pyvolve.svg?style=flat
   :target: https://anaconda.org/bioconda/pyvolve
   :alt:   (downloads)
.. |docker_pyvolve| image:: https://quay.io/repository/biocontainers/pyvolve/status
   :target: https://quay.io/repository/biocontainers/pyvolve
.. _`pyvolve/tags`: https://quay.io/repository/biocontainers/pyvolve?tab=tags


.. raw:: html

    <script>
        var package = "pyvolve";
        var versions = ["1.1.0","0.9.0","0.8.9","0.8.8","0.8.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyvolve/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyvolve/README.html