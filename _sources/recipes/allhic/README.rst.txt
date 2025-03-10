:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'allhic'
.. highlight: bash

allhic
======

.. conda:recipe:: allhic
   :replaces_section_title:
   :noindex:

   Genome scaffolding based on HiC data in heterozygous and high ploidy genomes

   :homepage: https://github.com/tanghaibao/allhic
   :license: BSD / BSD-3-Clause
   :recipe: /`allhic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/allhic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/allhic/meta.yaml>`_

   


.. conda:package:: allhic

   |downloads_allhic| |docker_allhic|

   :versions:
      
      

      ``0.9.14-0``,  ``0.9.13.1-0``

      

   
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

      mamba install allhic

   and update with::

      mamba update allhic

  To create a new environment, run::

      mamba create --name myenvname allhic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/allhic:<tag>

   (see `allhic/tags`_ for valid values for ``<tag>``)


.. |downloads_allhic| image:: https://img.shields.io/conda/dn/bioconda/allhic.svg?style=flat
   :target: https://anaconda.org/bioconda/allhic
   :alt:   (downloads)
.. |docker_allhic| image:: https://quay.io/repository/biocontainers/allhic/status
   :target: https://quay.io/repository/biocontainers/allhic
.. _`allhic/tags`: https://quay.io/repository/biocontainers/allhic?tab=tags


.. raw:: html

    <script>
        var package = "allhic";
        var versions = ["0.9.14","0.9.13.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/allhic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/allhic/README.html