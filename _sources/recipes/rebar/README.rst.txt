:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rebar'
.. highlight: bash

rebar
=====

.. conda:recipe:: rebar
   :replaces_section_title:
   :noindex:

   Genomic recombination detection using mutational barcodes.

   :homepage: https://github.com/phac-nml/rebar
   :license: APACHE / Apache-2.0
   :recipe: /`rebar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rebar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rebar/meta.yaml>`_

   


.. conda:package:: rebar

   |downloads_rebar| |docker_rebar|

   :versions:
      
      

      ``0.2.0-0``

      

   
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

      mamba install rebar

   and update with::

      mamba update rebar

  To create a new environment, run::

      mamba create --name myenvname rebar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rebar:<tag>

   (see `rebar/tags`_ for valid values for ``<tag>``)


.. |downloads_rebar| image:: https://img.shields.io/conda/dn/bioconda/rebar.svg?style=flat
   :target: https://anaconda.org/bioconda/rebar
   :alt:   (downloads)
.. |docker_rebar| image:: https://quay.io/repository/biocontainers/rebar/status
   :target: https://quay.io/repository/biocontainers/rebar
.. _`rebar/tags`: https://quay.io/repository/biocontainers/rebar?tab=tags


.. raw:: html

    <script>
        var package = "rebar";
        var versions = ["0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rebar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rebar/README.html