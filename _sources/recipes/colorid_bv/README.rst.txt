:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'colorid_bv'
.. highlight: bash

colorid_bv
==========

.. conda:recipe:: colorid_bv
   :replaces_section_title:
   :noindex:

   Experiments with using BIGSI data structure for metagenomic and QC applications

   :homepage: https://github.com/hcdenbakker/colorid_bv
   :license: MIT / MIT
   :recipe: /`colorid_bv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/colorid_bv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/colorid_bv/meta.yaml>`_

   


.. conda:package:: colorid_bv

   |downloads_colorid_bv| |docker_colorid_bv|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install colorid_bv

   and update with::

      mamba update colorid_bv

  To create a new environment, run::

      mamba create --name myenvname colorid_bv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/colorid_bv:<tag>

   (see `colorid_bv/tags`_ for valid values for ``<tag>``)


.. |downloads_colorid_bv| image:: https://img.shields.io/conda/dn/bioconda/colorid_bv.svg?style=flat
   :target: https://anaconda.org/bioconda/colorid_bv
   :alt:   (downloads)
.. |docker_colorid_bv| image:: https://quay.io/repository/biocontainers/colorid_bv/status
   :target: https://quay.io/repository/biocontainers/colorid_bv
.. _`colorid_bv/tags`: https://quay.io/repository/biocontainers/colorid_bv?tab=tags


.. raw:: html

    <script>
        var package = "colorid_bv";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/colorid_bv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/colorid_bv/README.html