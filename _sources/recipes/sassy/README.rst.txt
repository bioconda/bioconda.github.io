:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sassy'
.. highlight: bash

sassy
=====

.. conda:recipe:: sassy
   :replaces_section_title:
   :noindex:

   Fast approximate string searching

   :homepage: https://github.com/ragnargrootkoerkamp/sassy
   :license: MIT
   :recipe: /`sassy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sassy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sassy/meta.yaml>`_

   


.. conda:package:: sassy

   |downloads_sassy| |docker_sassy|

   :versions:
      
      

      ``0.1.8-0``

      

   
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

      mamba install sassy

   and update with::

      mamba update sassy

  To create a new environment, run::

      mamba create --name myenvname sassy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sassy:<tag>

   (see `sassy/tags`_ for valid values for ``<tag>``)


.. |downloads_sassy| image:: https://img.shields.io/conda/dn/bioconda/sassy.svg?style=flat
   :target: https://anaconda.org/bioconda/sassy
   :alt:   (downloads)
.. |docker_sassy| image:: https://quay.io/repository/biocontainers/sassy/status
   :target: https://quay.io/repository/biocontainers/sassy
.. _`sassy/tags`: https://quay.io/repository/biocontainers/sassy?tab=tags


.. raw:: html

    <script>
        var package = "sassy";
        var versions = ["0.1.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sassy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sassy/README.html