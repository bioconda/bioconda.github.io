:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'visor'
.. highlight: bash

visor
=====

.. conda:recipe:: visor
   :replaces_section_title:
   :noindex:

   Haplotype\-aware structural variants simulator for short\, long and linked reads

   :homepage: https://github.com/davidebolo1993/VISOR.git
   :license: LGPL-3.0
   :recipe: /`visor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/visor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/visor/meta.yaml>`_

   


.. conda:package:: visor

   |downloads_visor| |docker_visor|

   :versions:
      
      

      ``1.1.2.1-0``,  ``1.1.2-0``

      

   
   :depends badread: ``>=0.4.0``
   :depends mappy: ``>=2.17``
   :depends minimap2: ``>=2.17``
   :depends numpy: ``>=1.15.3``
   :depends plotly: ``3.10.0``
   :depends pybedtools: ``>=0.8.0``
   :depends pyfaidx: ``>=0.5.5.2``
   :depends pysam: ``>=0.15.0``
   :depends python: 
   :depends pywgsim: ``>=0.3.3``
   :depends samtools: ``>=1.9``
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

      mamba install visor

   and update with::

      mamba update visor

  To create a new environment, run::

      mamba create --name myenvname visor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/visor:<tag>

   (see `visor/tags`_ for valid values for ``<tag>``)


.. |downloads_visor| image:: https://img.shields.io/conda/dn/bioconda/visor.svg?style=flat
   :target: https://anaconda.org/bioconda/visor
   :alt:   (downloads)
.. |docker_visor| image:: https://quay.io/repository/biocontainers/visor/status
   :target: https://quay.io/repository/biocontainers/visor
.. _`visor/tags`: https://quay.io/repository/biocontainers/visor?tab=tags


.. raw:: html

    <script>
        var package = "visor";
        var versions = ["1.1.2.1","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/visor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/visor/README.html