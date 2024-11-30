:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'find_differential_primers'
.. highlight: bash

find_differential_primers
=========================

.. conda:recipe:: find_differential_primers
   :replaces_section_title:
   :noindex:

   Scripts to aid the design of differential primers for diagnostic PCR.

   :homepage: https://github.com/widdowquinn/find_differential_primers
   :license: MIT / MIT
   :recipe: /`find_differential_primers <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/find_differential_primers>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/find_differential_primers/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.9861`

   


.. conda:package:: find_differential_primers

   |downloads_find_differential_primers| |docker_find_differential_primers|

   :versions:
      
      

      ``0.1.4-2``,  ``0.1.4-1``,  ``0.1.4-0``,  ``0.1.3-3``,  ``0.1.3-2``,  ``0.1.3-1``,  ``0.1.3-0``,  ``0.1.3.p1-0``

      

   
   :depends biopython: ``<1.78``
   :depends blast: 
   :depends bx-python: 
   :depends emboss: 
   :depends primer3: ``<=1.1.4``
   :depends prodigal: 
   :depends python: ``>2``
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

      mamba install find_differential_primers

   and update with::

      mamba update find_differential_primers

  To create a new environment, run::

      mamba create --name myenvname find_differential_primers

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/find_differential_primers:<tag>

   (see `find_differential_primers/tags`_ for valid values for ``<tag>``)


.. |downloads_find_differential_primers| image:: https://img.shields.io/conda/dn/bioconda/find_differential_primers.svg?style=flat
   :target: https://anaconda.org/bioconda/find_differential_primers
   :alt:   (downloads)
.. |docker_find_differential_primers| image:: https://quay.io/repository/biocontainers/find_differential_primers/status
   :target: https://quay.io/repository/biocontainers/find_differential_primers
.. _`find_differential_primers/tags`: https://quay.io/repository/biocontainers/find_differential_primers?tab=tags


.. raw:: html

    <script>
        var package = "find_differential_primers";
        var versions = ["0.1.4","0.1.4","0.1.4","0.1.3","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/find_differential_primers/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/find_differential_primers/README.html