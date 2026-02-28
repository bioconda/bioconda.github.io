:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sqz'
.. highlight: bash

sqz
===

.. conda:recipe:: sqz
   :replaces_section_title:
   :noindex:

   sqz is a tool for compressing and decompressing path annotations in GFA files.

   :homepage: https://github.com/codialab/sqz
   :developer docs: https://githubcom/codialab/sqz
   :license: MIT / MIT
   :recipe: /`sqz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sqz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sqz/meta.yaml>`_

   


.. conda:package:: sqz

   |downloads_sqz| |docker_sqz|

   :versions:
      
      

      ``0.2.0-0``

      

   
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code>,  <code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install sqz

   and update with::

      mamba update sqz

  To create a new environment, run::

      mamba create --name myenvname sqz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sqz:<tag>

   (see `sqz/tags`_ for valid values for ``<tag>``)


.. |downloads_sqz| image:: https://img.shields.io/conda/dn/bioconda/sqz.svg?style=flat
   :target: https://anaconda.org/bioconda/sqz
   :alt:   (downloads)
.. |docker_sqz| image:: https://quay.io/repository/biocontainers/sqz/status
   :target: https://quay.io/repository/biocontainers/sqz
.. _`sqz/tags`: https://quay.io/repository/biocontainers/sqz?tab=tags


.. raw:: html

    <script>
        var package = "sqz";
        var versions = ["0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sqz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sqz/README.html