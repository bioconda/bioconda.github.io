:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcfbub'
.. highlight: bash

vcfbub
======

.. conda:recipe:: vcfbub
   :replaces_section_title:
   :noindex:

   Popping bubbles in vg deconstruct VCFs

   :homepage: https://github.com/pangenome/vcfbub
   :license: MIT / MIT
   :recipe: /`vcfbub <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfbub>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfbub/meta.yaml>`_

   


.. conda:package:: vcfbub

   |downloads_vcfbub| |docker_vcfbub|

   :versions:
      
      

      ``0.1.1-1``,  ``0.1.1-0``,  ``0.1.0-2``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends libgcc-ng: ``>=12``
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

      mamba install vcfbub

   and update with::

      mamba update vcfbub

  To create a new environment, run::

      mamba create --name myenvname vcfbub

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vcfbub:<tag>

   (see `vcfbub/tags`_ for valid values for ``<tag>``)


.. |downloads_vcfbub| image:: https://img.shields.io/conda/dn/bioconda/vcfbub.svg?style=flat
   :target: https://anaconda.org/bioconda/vcfbub
   :alt:   (downloads)
.. |docker_vcfbub| image:: https://quay.io/repository/biocontainers/vcfbub/status
   :target: https://quay.io/repository/biocontainers/vcfbub
.. _`vcfbub/tags`: https://quay.io/repository/biocontainers/vcfbub?tab=tags


.. raw:: html

    <script>
        var package = "vcfbub";
        var versions = ["0.1.1","0.1.1","0.1.0","0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcfbub/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcfbub/README.html