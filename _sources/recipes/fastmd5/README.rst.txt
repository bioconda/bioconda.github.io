:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastmd5'
.. highlight: bash

fastmd5
=======

.. conda:recipe:: fastmd5
   :replaces_section_title:
   :noindex:

   Fast command\-line tool to compute and verify MD5 checksums

   :homepage: https://github.com/moold/fastMD5
   :documentation: https://github.com/moold/fastMD5/blob/main/README.md
   
   :license: MIT
   :recipe: /`fastmd5 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastmd5>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastmd5/meta.yaml>`_

   


.. conda:package:: fastmd5

   |downloads_fastmd5| |docker_fastmd5|

   :versions:
      
      

      ``1.0.0-0``

      

   
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

      mamba install fastmd5

   and update with::

      mamba update fastmd5

  To create a new environment, run::

      mamba create --name myenvname fastmd5

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastmd5:<tag>

   (see `fastmd5/tags`_ for valid values for ``<tag>``)


.. |downloads_fastmd5| image:: https://img.shields.io/conda/dn/bioconda/fastmd5.svg?style=flat
   :target: https://anaconda.org/bioconda/fastmd5
   :alt:   (downloads)
.. |docker_fastmd5| image:: https://quay.io/repository/biocontainers/fastmd5/status
   :target: https://quay.io/repository/biocontainers/fastmd5
.. _`fastmd5/tags`: https://quay.io/repository/biocontainers/fastmd5?tab=tags


.. raw:: html

    <script>
        var package = "fastmd5";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastmd5/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastmd5/README.html