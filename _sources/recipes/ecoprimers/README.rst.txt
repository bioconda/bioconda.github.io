:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ecoprimers'
.. highlight: bash

ecoprimers
==========

.. conda:recipe:: ecoprimers
   :replaces_section_title:
   :noindex:

   ecoPrimers is a software that finds primers from a set of sequence.

   :homepage: https://git.metabarcoding.org/obitools/ecoprimers/wikis/home
   :license: CeCill v2
   :recipe: /`ecoprimers <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ecoprimers>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ecoprimers/meta.yaml>`_

   


.. conda:package:: ecoprimers

   |downloads_ecoprimers| |docker_ecoprimers|

   :versions:
      
      

      ``1.0-7``,  ``1.0-6``,  ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install ecoprimers

   and update with::

      mamba update ecoprimers

  To create a new environment, run::

      mamba create --name myenvname ecoprimers

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ecoprimers:<tag>

   (see `ecoprimers/tags`_ for valid values for ``<tag>``)


.. |downloads_ecoprimers| image:: https://img.shields.io/conda/dn/bioconda/ecoprimers.svg?style=flat
   :target: https://anaconda.org/bioconda/ecoprimers
   :alt:   (downloads)
.. |docker_ecoprimers| image:: https://quay.io/repository/biocontainers/ecoprimers/status
   :target: https://quay.io/repository/biocontainers/ecoprimers
.. _`ecoprimers/tags`: https://quay.io/repository/biocontainers/ecoprimers?tab=tags


.. raw:: html

    <script>
        var package = "ecoprimers";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ecoprimers/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ecoprimers/README.html