:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flopp'
.. highlight: bash

flopp
=====

.. conda:recipe:: flopp
   :replaces_section_title:
   :noindex:

   flopp is a software package for single individual haplotype phasing of polyploid organisms from long read sequencing.

   :homepage: https://github.com/bluenote-1577/flopp
   :license: MIT
   :recipe: /`flopp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flopp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flopp/meta.yaml>`_

   


.. conda:package:: flopp

   |downloads_flopp| |docker_flopp|

   :versions:
      
      

      ``0.2.0-1``,  ``0.2.0-0``

      

   
   :depends libcxx: ``>=18``
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

      mamba install flopp

   and update with::

      mamba update flopp

  To create a new environment, run::

      mamba create --name myenvname flopp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/flopp:<tag>

   (see `flopp/tags`_ for valid values for ``<tag>``)


.. |downloads_flopp| image:: https://img.shields.io/conda/dn/bioconda/flopp.svg?style=flat
   :target: https://anaconda.org/bioconda/flopp
   :alt:   (downloads)
.. |docker_flopp| image:: https://quay.io/repository/biocontainers/flopp/status
   :target: https://quay.io/repository/biocontainers/flopp
.. _`flopp/tags`: https://quay.io/repository/biocontainers/flopp?tab=tags


.. raw:: html

    <script>
        var package = "flopp";
        var versions = ["0.2.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flopp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flopp/README.html