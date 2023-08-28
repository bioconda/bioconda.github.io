:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mwga-utils'
.. highlight: bash

mwga-utils
==========

.. conda:recipe:: mwga-utils
   :replaces_section_title:
   :noindex:

   Collection of utilities for processing Multispecies Whole Genome Alignments

   :homepage: https://github.com/RomainFeron/mgwa_utils
   :license: GPL3
   :recipe: /`mwga-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mwga-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mwga-utils/meta.yaml>`_

   


.. conda:package:: mwga-utils

   |downloads_mwga-utils| |docker_mwga-utils|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.6-2</code>,  <code>0.1.6-1</code>,  <code>0.1.6-0</code>,  <code>0.1.4-1</code>,  <code>0.1.4-0</code>,  <code>0.1.2-2</code>,  <code>0.1.2-1</code>,  <code>0.1.2-0</code>,  <code>0.1.1-0</code>,  </span></summary>
      

      ``0.1.6-2``,  ``0.1.6-1``,  ``0.1.6-0``,  ``0.1.4-1``,  ``0.1.4-0``,  ``0.1.2-2``,  ``0.1.2-1``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install mwga-utils

   and update with::

      mamba update mwga-utils

  To create a new environment, run::

      mamba create --name myenvname mwga-utils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mwga-utils:<tag>

   (see `mwga-utils/tags`_ for valid values for ``<tag>``)


.. |downloads_mwga-utils| image:: https://img.shields.io/conda/dn/bioconda/mwga-utils.svg?style=flat
   :target: https://anaconda.org/bioconda/mwga-utils
   :alt:   (downloads)
.. |docker_mwga-utils| image:: https://quay.io/repository/biocontainers/mwga-utils/status
   :target: https://quay.io/repository/biocontainers/mwga-utils
.. _`mwga-utils/tags`: https://quay.io/repository/biocontainers/mwga-utils?tab=tags


.. raw:: html

    <script>
        var package = "mwga-utils";
        var versions = ["0.1.6","0.1.6","0.1.6","0.1.4","0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mwga-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mwga-utils/README.html