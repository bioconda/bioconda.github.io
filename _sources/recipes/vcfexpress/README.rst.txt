:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcfexpress'
.. highlight: bash

vcfexpress
==========

.. conda:recipe:: vcfexpress
   :replaces_section_title:
   :noindex:

   expressions on VCFs

   :homepage: https://github.com/brentp/vcfexpress/
   :license: MIT
   :recipe: /`vcfexpress <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfexpress>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfexpress/meta.yaml>`_

   


.. conda:package:: vcfexpress

   |downloads_vcfexpress| |docker_vcfexpress|

   :versions:
      
      

      ``0.3.4-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install vcfexpress

   and update with::

      mamba update vcfexpress

  To create a new environment, run::

      mamba create --name myenvname vcfexpress

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vcfexpress:<tag>

   (see `vcfexpress/tags`_ for valid values for ``<tag>``)


.. |downloads_vcfexpress| image:: https://img.shields.io/conda/dn/bioconda/vcfexpress.svg?style=flat
   :target: https://anaconda.org/bioconda/vcfexpress
   :alt:   (downloads)
.. |docker_vcfexpress| image:: https://quay.io/repository/biocontainers/vcfexpress/status
   :target: https://quay.io/repository/biocontainers/vcfexpress
.. _`vcfexpress/tags`: https://quay.io/repository/biocontainers/vcfexpress?tab=tags


.. raw:: html

    <script>
        var package = "vcfexpress";
        var versions = ["0.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcfexpress/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcfexpress/README.html