:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'popins2'
.. highlight: bash

popins2
=======

.. conda:recipe:: popins2
   :replaces_section_title:
   :noindex:

   Population\-scale detection of non\-reference sequence variants using colored de Bruijn Graphs

   :homepage: https://github.com/kehrlab/PopIns2
   :license: GPL / GPL-2.0-only
   :recipe: /`popins2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/popins2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/popins2/meta.yaml>`_

   


.. conda:package:: popins2

   |downloads_popins2| |docker_popins2|

   :versions:
      
      

      ``0.13.0-0``

      

   
   :depends bifrost: ``>=1.3.5,<1.4.0a0``
   :depends bwa: ``>=0.7.18,<0.8.0a0``
   :depends htslib: ``>=1.21,<1.24.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends samtools: ``>=1.21,<2.0a0``
   :depends sickle-trim: ``>=1.33,<2.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install popins2

   and update with::

      mamba update popins2

  To create a new environment, run::

      mamba create --name myenvname popins2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/popins2:<tag>

   (see `popins2/tags`_ for valid values for ``<tag>``)


.. |downloads_popins2| image:: https://img.shields.io/conda/dn/bioconda/popins2.svg?style=flat
   :target: https://anaconda.org/bioconda/popins2
   :alt:   (downloads)
.. |docker_popins2| image:: https://quay.io/repository/biocontainers/popins2/status
   :target: https://quay.io/repository/biocontainers/popins2
.. _`popins2/tags`: https://quay.io/repository/biocontainers/popins2?tab=tags


.. raw:: html

    <script>
        var package = "popins2";
        var versions = ["0.13.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/popins2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/popins2/README.html