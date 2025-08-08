:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'enhjoerning'
.. highlight: bash

enhjoerning
===========

.. conda:recipe:: enhjoerning
   :replaces_section_title:
   :noindex:

   A tool for computing statistics on short read alignments.

   :homepage: https://github.com/GeoGenetics/unicorn
   :documentation: https://github.com/GeoGenetics/unicorn/blob/v2.0.3/README.md
   
   :license: MIT / MIT
   :recipe: /`enhjoerning <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/enhjoerning>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/enhjoerning/meta.yaml>`_

   


.. conda:package:: enhjoerning

   |downloads_enhjoerning| |docker_enhjoerning|

   :versions:
      
      

      ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``

      

   
   :depends htslib: ``>=1.10``
   :depends htslib: ``>=1.22.1,<1.23.0a0``
   :depends libgcc: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install enhjoerning

   and update with::

      mamba update enhjoerning

  To create a new environment, run::

      mamba create --name myenvname enhjoerning

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/enhjoerning:<tag>

   (see `enhjoerning/tags`_ for valid values for ``<tag>``)


.. |downloads_enhjoerning| image:: https://img.shields.io/conda/dn/bioconda/enhjoerning.svg?style=flat
   :target: https://anaconda.org/bioconda/enhjoerning
   :alt:   (downloads)
.. |docker_enhjoerning| image:: https://quay.io/repository/biocontainers/enhjoerning/status
   :target: https://quay.io/repository/biocontainers/enhjoerning
.. _`enhjoerning/tags`: https://quay.io/repository/biocontainers/enhjoerning?tab=tags


.. raw:: html

    <script>
        var package = "enhjoerning";
        var versions = ["2.0.3","2.0.2","2.0.1","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/enhjoerning/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/enhjoerning/README.html