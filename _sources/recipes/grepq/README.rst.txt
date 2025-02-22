:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'grepq'
.. highlight: bash

grepq
=====

.. conda:recipe:: grepq
   :replaces_section_title:
   :noindex:

   Quickly filter FASTQ files

   :homepage: https://github.com/Rbfinch/grepq
   :license: MIT
   :recipe: /`grepq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grepq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grepq/meta.yaml>`_
   :links: DOI: :DOI:`10.5281/zenodo.14031703`

   


.. conda:package:: grepq

   |downloads_grepq| |docker_grepq|

   :versions:
      
      

      ``1.4.8-0``,  ``1.4.7-0``,  ``1.4.5-0``,  ``1.4.4-0``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install grepq

   and update with::

      mamba update grepq

  To create a new environment, run::

      mamba create --name myenvname grepq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/grepq:<tag>

   (see `grepq/tags`_ for valid values for ``<tag>``)


.. |downloads_grepq| image:: https://img.shields.io/conda/dn/bioconda/grepq.svg?style=flat
   :target: https://anaconda.org/bioconda/grepq
   :alt:   (downloads)
.. |docker_grepq| image:: https://quay.io/repository/biocontainers/grepq/status
   :target: https://quay.io/repository/biocontainers/grepq
.. _`grepq/tags`: https://quay.io/repository/biocontainers/grepq?tab=tags


.. raw:: html

    <script>
        var package = "grepq";
        var versions = ["1.4.8","1.4.7","1.4.5","1.4.4","1.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/grepq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/grepq/README.html