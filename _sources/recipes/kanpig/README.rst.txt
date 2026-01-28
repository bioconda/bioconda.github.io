:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kanpig'
.. highlight: bash

kanpig
======

.. conda:recipe:: kanpig
   :replaces_section_title:
   :noindex:

   A fast tool for genotyping structural variants with long\-reads.

   :homepage: https://github.com/ACEnglish/kanpig
   :documentation: https://github.com/ACEnglish/kanpig/wiki
   
   :license: MIT / MIT
   :recipe: /`kanpig <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kanpig>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kanpig/meta.yaml>`_

   


.. conda:package:: kanpig

   |downloads_kanpig| |docker_kanpig|

   :versions:
      
      

      ``2.0.1-0``,  ``1.1.0-1``,  ``1.1.0-0``

      

   
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

      mamba install kanpig

   and update with::

      mamba update kanpig

  To create a new environment, run::

      mamba create --name myenvname kanpig

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kanpig:<tag>

   (see `kanpig/tags`_ for valid values for ``<tag>``)


.. |downloads_kanpig| image:: https://img.shields.io/conda/dn/bioconda/kanpig.svg?style=flat
   :target: https://anaconda.org/bioconda/kanpig
   :alt:   (downloads)
.. |docker_kanpig| image:: https://quay.io/repository/biocontainers/kanpig/status
   :target: https://quay.io/repository/biocontainers/kanpig
.. _`kanpig/tags`: https://quay.io/repository/biocontainers/kanpig?tab=tags


.. raw:: html

    <script>
        var package = "kanpig";
        var versions = ["2.0.1","1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kanpig/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kanpig/README.html