:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'allegro'
.. highlight: bash

allegro
=======

.. conda:recipe:: allegro
   :replaces_section_title:
   :noindex:

   A fast linkage and haplotype analysis utility making use of MTBDD to reduce complexity.

   :homepage: http://www.nature.com/ng/journal/v37/n10/full/ng1005-1015.html?foxtrotcallback=true
   :license: INDIVIDUAL
   :recipe: /`allegro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/allegro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/allegro/meta.yaml>`_

   


.. conda:package:: allegro

   |downloads_allegro| |docker_allegro|

   :versions:
      
      

      ``3-7``,  ``3-6``,  ``3-5``,  ``3-4``,  ``3-3``,  ``3-2``,  ``3-1``,  ``2-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install allegro

   and update with::

      mamba update allegro

  To create a new environment, run::

      mamba create --name myenvname allegro

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/allegro:<tag>

   (see `allegro/tags`_ for valid values for ``<tag>``)


.. |downloads_allegro| image:: https://img.shields.io/conda/dn/bioconda/allegro.svg?style=flat
   :target: https://anaconda.org/bioconda/allegro
   :alt:   (downloads)
.. |docker_allegro| image:: https://quay.io/repository/biocontainers/allegro/status
   :target: https://quay.io/repository/biocontainers/allegro
.. _`allegro/tags`: https://quay.io/repository/biocontainers/allegro?tab=tags


.. raw:: html

    <script>
        var package = "allegro";
        var versions = ["3","3","3","3","3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/allegro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/allegro/README.html