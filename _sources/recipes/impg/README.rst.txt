:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'impg'
.. highlight: bash

impg
====

.. conda:recipe:: impg
   :replaces_section_title:
   :noindex:

   impg\: implicit pangenome graphs

   :homepage: https://github.com/pangenome/impg
   :license: MIT / MIT
   :recipe: /`impg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/impg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/impg/meta.yaml>`_

   


.. conda:package:: impg

   |downloads_impg| |docker_impg|

   :versions:
      
      

      ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.2.0-0``

      

   
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

      mamba install impg

   and update with::

      mamba update impg

  To create a new environment, run::

      mamba create --name myenvname impg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/impg:<tag>

   (see `impg/tags`_ for valid values for ``<tag>``)


.. |downloads_impg| image:: https://img.shields.io/conda/dn/bioconda/impg.svg?style=flat
   :target: https://anaconda.org/bioconda/impg
   :alt:   (downloads)
.. |docker_impg| image:: https://quay.io/repository/biocontainers/impg/status
   :target: https://quay.io/repository/biocontainers/impg
.. _`impg/tags`: https://quay.io/repository/biocontainers/impg?tab=tags


.. raw:: html

    <script>
        var package = "impg";
        var versions = ["0.2.3","0.2.2","0.2.1","0.2.1","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/impg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/impg/README.html