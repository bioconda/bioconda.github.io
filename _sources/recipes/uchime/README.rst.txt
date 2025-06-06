:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'uchime'
.. highlight: bash

uchime
======

.. conda:recipe:: uchime
   :replaces_section_title:
   :noindex:

   UCHIME2 is an algorithm for detecting chimeric sequences.

   :homepage: https://drive5.com/uchime/uchime_download.html
   :documentation: https://drive5.com/usearch/manual/uchime_algo.html
   
   :license: MIT / MIT
   :recipe: /`uchime <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/uchime>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/uchime/meta.yaml>`_

   


.. conda:package:: uchime

   |downloads_uchime| |docker_uchime|

   :versions:
      
      

      ``4.2-0``

      

   
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

      mamba install uchime

   and update with::

      mamba update uchime

  To create a new environment, run::

      mamba create --name myenvname uchime

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/uchime:<tag>

   (see `uchime/tags`_ for valid values for ``<tag>``)


.. |downloads_uchime| image:: https://img.shields.io/conda/dn/bioconda/uchime.svg?style=flat
   :target: https://anaconda.org/bioconda/uchime
   :alt:   (downloads)
.. |docker_uchime| image:: https://quay.io/repository/biocontainers/uchime/status
   :target: https://quay.io/repository/biocontainers/uchime
.. _`uchime/tags`: https://quay.io/repository/biocontainers/uchime?tab=tags


.. raw:: html

    <script>
        var package = "uchime";
        var versions = ["4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/uchime/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/uchime/README.html