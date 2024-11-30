:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'usearch'
.. highlight: bash

usearch
=======

.. conda:recipe:: usearch
   :replaces_section_title:
   :noindex:

   USEARCH is a unique sequence analysis tool which offers search and clustering algorithms that are often orders of magnitude faster than BLAST.

   :homepage: https://github.com/rcedgar/usearch12
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`usearch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/usearch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/usearch/meta.yaml>`_

   


.. conda:package:: usearch

   |downloads_usearch| |docker_usearch|

   :versions:
      
      

      ``12.0_beta-1``,  ``12.0_beta-0``

      

   
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

      mamba install usearch

   and update with::

      mamba update usearch

  To create a new environment, run::

      mamba create --name myenvname usearch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/usearch:<tag>

   (see `usearch/tags`_ for valid values for ``<tag>``)


.. |downloads_usearch| image:: https://img.shields.io/conda/dn/bioconda/usearch.svg?style=flat
   :target: https://anaconda.org/bioconda/usearch
   :alt:   (downloads)
.. |docker_usearch| image:: https://quay.io/repository/biocontainers/usearch/status
   :target: https://quay.io/repository/biocontainers/usearch
.. _`usearch/tags`: https://quay.io/repository/biocontainers/usearch?tab=tags


.. raw:: html

    <script>
        var package = "usearch";
        var versions = ["12.0_beta","12.0_beta"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/usearch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/usearch/README.html