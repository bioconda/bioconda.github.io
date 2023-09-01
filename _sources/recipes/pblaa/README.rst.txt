:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pblaa'
.. highlight: bash

pblaa
=====

.. conda:recipe:: pblaa
   :replaces_section_title:
   :noindex:

   PacBio tool to deconvolute mixtures of alleles and loci into phased consensus sequences.

   :homepage: https://github.com/PacificBiosciences/pbbioconda
   :license: BSD-3-Clause-Clear
   :recipe: /`pblaa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pblaa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pblaa/meta.yaml>`_

   


.. conda:package:: pblaa

   |downloads_pblaa| |docker_pblaa|

   :versions:
      
      

      ``2.4.2-2``,  ``2.4.2-1``,  ``2.4.2-0``

      

   
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

      mamba install pblaa

   and update with::

      mamba update pblaa

  To create a new environment, run::

      mamba create --name myenvname pblaa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pblaa:<tag>

   (see `pblaa/tags`_ for valid values for ``<tag>``)


.. |downloads_pblaa| image:: https://img.shields.io/conda/dn/bioconda/pblaa.svg?style=flat
   :target: https://anaconda.org/bioconda/pblaa
   :alt:   (downloads)
.. |docker_pblaa| image:: https://quay.io/repository/biocontainers/pblaa/status
   :target: https://quay.io/repository/biocontainers/pblaa
.. _`pblaa/tags`: https://quay.io/repository/biocontainers/pblaa?tab=tags


.. raw:: html

    <script>
        var package = "pblaa";
        var versions = ["2.4.2","2.4.2","2.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pblaa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pblaa/README.html