:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'panplexity'
.. highlight: bash

panplexity
==========

.. conda:recipe:: panplexity
   :replaces_section_title:
   :noindex:

   Find low\-complexity regions in pangenome graphs

   :homepage: https://github.com/AndreaGuarracino/panplexity
   :license: MIT / MIT
   :recipe: /`panplexity <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panplexity>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panplexity/meta.yaml>`_

   


.. conda:package:: panplexity

   |downloads_panplexity| |docker_panplexity|

   :versions:
      
      

      ``0.1.1-0``

      

   
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

      mamba install panplexity

   and update with::

      mamba update panplexity

  To create a new environment, run::

      mamba create --name myenvname panplexity

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/panplexity:<tag>

   (see `panplexity/tags`_ for valid values for ``<tag>``)


.. |downloads_panplexity| image:: https://img.shields.io/conda/dn/bioconda/panplexity.svg?style=flat
   :target: https://anaconda.org/bioconda/panplexity
   :alt:   (downloads)
.. |docker_panplexity| image:: https://quay.io/repository/biocontainers/panplexity/status
   :target: https://quay.io/repository/biocontainers/panplexity
.. _`panplexity/tags`: https://quay.io/repository/biocontainers/panplexity?tab=tags


.. raw:: html

    <script>
        var package = "panplexity";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panplexity/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panplexity/README.html