:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vartovcf'
.. highlight: bash

vartovcf
========

.. conda:recipe:: vartovcf
   :replaces_section_title:
   :noindex:

   Convert variants from VarDict\/VarDictJava into VCF v4.2 format.

   :homepage: https://github.com/clintval/vartovcf
   :documentation: https://github.com/clintval/vartovcf/blob/1.2.0/README.md
   
   :license: MIT / MIT
   :recipe: /`vartovcf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vartovcf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vartovcf/meta.yaml>`_

   


.. conda:package:: vartovcf

   |downloads_vartovcf| |docker_vartovcf|

   :versions:
      
      

      ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
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

      mamba install vartovcf

   and update with::

      mamba update vartovcf

  To create a new environment, run::

      mamba create --name myenvname vartovcf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vartovcf:<tag>

   (see `vartovcf/tags`_ for valid values for ``<tag>``)


.. |downloads_vartovcf| image:: https://img.shields.io/conda/dn/bioconda/vartovcf.svg?style=flat
   :target: https://anaconda.org/bioconda/vartovcf
   :alt:   (downloads)
.. |docker_vartovcf| image:: https://quay.io/repository/biocontainers/vartovcf/status
   :target: https://quay.io/repository/biocontainers/vartovcf
.. _`vartovcf/tags`: https://quay.io/repository/biocontainers/vartovcf?tab=tags


.. raw:: html

    <script>
        var package = "vartovcf";
        var versions = ["1.2.0","1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vartovcf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vartovcf/README.html