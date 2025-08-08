:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gotohscan'
.. highlight: bash

gotohscan
=========

.. conda:recipe:: gotohscan
   :replaces_section_title:
   :noindex:

   A search tool that finds shorter sequences \(usually genes\) in large database sequences \(chromosomes\, genomes\, ..\) by computing all semi\-global alignments.

   :homepage: https://www.bioinf.uni-leipzig.de
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`gotohscan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gotohscan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gotohscan/meta.yaml>`_

   


.. conda:package:: gotohscan

   |downloads_gotohscan| |docker_gotohscan|

   :versions:
      
      

      ``2.0-0``,  ``1.3-7``,  ``1.3-6``,  ``1.3-5``,  ``1.3-4``,  ``1.3-3``,  ``1.3-2``,  ``1.3-1``,  ``1.3-0``

      

   
   :depends libgcc: ``>=13``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install gotohscan

   and update with::

      mamba update gotohscan

  To create a new environment, run::

      mamba create --name myenvname gotohscan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gotohscan:<tag>

   (see `gotohscan/tags`_ for valid values for ``<tag>``)


.. |downloads_gotohscan| image:: https://img.shields.io/conda/dn/bioconda/gotohscan.svg?style=flat
   :target: https://anaconda.org/bioconda/gotohscan
   :alt:   (downloads)
.. |docker_gotohscan| image:: https://quay.io/repository/biocontainers/gotohscan/status
   :target: https://quay.io/repository/biocontainers/gotohscan
.. _`gotohscan/tags`: https://quay.io/repository/biocontainers/gotohscan?tab=tags


.. raw:: html

    <script>
        var package = "gotohscan";
        var versions = ["2.0","1.3","1.3","1.3","1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gotohscan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gotohscan/README.html