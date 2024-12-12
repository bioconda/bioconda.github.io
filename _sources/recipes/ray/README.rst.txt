:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ray'
.. highlight: bash

ray
===

.. conda:recipe:: ray
   :replaces_section_title:
   :noindex:

   Parallel genome assemblies for parallel DNA sequencing

   :homepage: http://denovoassembler.sourceforge.net/index.html
   :license: GPL3
   :recipe: /`ray <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ray>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ray/meta.yaml>`_
   :links: biotools: :biotools:`ray`, doi: :doi:`10.1186/gb-2012-13-12-r122`

   


.. conda:package:: ray

   |downloads_ray| |docker_ray|

   :versions:
      
      

      ``2.3.1-7``,  ``2.3.1-6``,  ``2.3.1-5``,  ``2.3.1-4``,  ``2.3.1-3``,  ``2.3.1-2``,  ``2.3.1-1``,  ``2.3.1-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends openmpi: ``>=4.1.6,<5.0a0``
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

      mamba install ray

   and update with::

      mamba update ray

  To create a new environment, run::

      mamba create --name myenvname ray

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ray:<tag>

   (see `ray/tags`_ for valid values for ``<tag>``)


.. |downloads_ray| image:: https://img.shields.io/conda/dn/bioconda/ray.svg?style=flat
   :target: https://anaconda.org/bioconda/ray
   :alt:   (downloads)
.. |docker_ray| image:: https://quay.io/repository/biocontainers/ray/status
   :target: https://quay.io/repository/biocontainers/ray
.. _`ray/tags`: https://quay.io/repository/biocontainers/ray?tab=tags


.. raw:: html

    <script>
        var package = "ray";
        var versions = ["2.3.1","2.3.1","2.3.1","2.3.1","2.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ray/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ray/README.html