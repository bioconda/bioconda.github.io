:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fqtrim'
.. highlight: bash

fqtrim
======

.. conda:recipe:: fqtrim
   :replaces_section_title:
   :noindex:

   fqtrim is a versatile stand\-alone utility that can be used to trim adapters\, poly\-A tails\, terminal unknown bases \(Ns\) and low quality 3\' regions in reads from high\-throughput next\-generation sequencing machines.

   :homepage: https://ccb.jhu.edu/software/fqtrim/
   :license: Artistic License 2.0
   :recipe: /`fqtrim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fqtrim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fqtrim/meta.yaml>`_

   


.. conda:package:: fqtrim

   |downloads_fqtrim| |docker_fqtrim|

   :versions:
      
      

      ``0.9.7-7``,  ``0.9.7-6``,  ``0.9.7-5``,  ``0.9.7-4``,  ``0.9.7-3``,  ``0.9.7-2``,  ``0.9.7-1``,  ``0.9.7-0``

      

   
   :depends gclib: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends zlib: 
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

      mamba install fqtrim

   and update with::

      mamba update fqtrim

  To create a new environment, run::

      mamba create --name myenvname fqtrim

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fqtrim:<tag>

   (see `fqtrim/tags`_ for valid values for ``<tag>``)


.. |downloads_fqtrim| image:: https://img.shields.io/conda/dn/bioconda/fqtrim.svg?style=flat
   :target: https://anaconda.org/bioconda/fqtrim
   :alt:   (downloads)
.. |docker_fqtrim| image:: https://quay.io/repository/biocontainers/fqtrim/status
   :target: https://quay.io/repository/biocontainers/fqtrim
.. _`fqtrim/tags`: https://quay.io/repository/biocontainers/fqtrim?tab=tags


.. raw:: html

    <script>
        var package = "fqtrim";
        var versions = ["0.9.7","0.9.7","0.9.7","0.9.7","0.9.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fqtrim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fqtrim/README.html