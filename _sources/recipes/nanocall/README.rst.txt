:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanocall'
.. highlight: bash

nanocall
========

.. conda:recipe:: nanocall
   :replaces_section_title:
   :noindex:

   An Oxford Nanopore Basecaller

   :homepage: https://github.com/mateidavid/nanocall
   :license: MIT
   :recipe: /`nanocall <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanocall>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanocall/meta.yaml>`_

   


.. conda:package:: nanocall

   |downloads_nanocall| |docker_nanocall|

   :versions:
      
      

      ``v0.7.4-4``,  ``v0.7.4-3``,  ``v0.7.4-2``,  ``v0.7.4-1``,  ``v0.7.4-0``,  ``v0.6.14-0``,  ``v0.6.13-0``,  ``v0.6.5-0``

      

   
   :depends hdf5: ``>=1.10.6,<1.10.7.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install nanocall

   and update with::

      mamba update nanocall

  To create a new environment, run::

      mamba create --name myenvname nanocall

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nanocall:<tag>

   (see `nanocall/tags`_ for valid values for ``<tag>``)


.. |downloads_nanocall| image:: https://img.shields.io/conda/dn/bioconda/nanocall.svg?style=flat
   :target: https://anaconda.org/bioconda/nanocall
   :alt:   (downloads)
.. |docker_nanocall| image:: https://quay.io/repository/biocontainers/nanocall/status
   :target: https://quay.io/repository/biocontainers/nanocall
.. _`nanocall/tags`: https://quay.io/repository/biocontainers/nanocall?tab=tags


.. raw:: html

    <script>
        var package = "nanocall";
        var versions = ["v0.7.4","v0.7.4","v0.7.4","v0.7.4","v0.7.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanocall/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanocall/README.html