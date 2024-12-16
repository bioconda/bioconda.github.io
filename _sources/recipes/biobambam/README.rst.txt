:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobambam'
.. highlight: bash

biobambam
=========

.. conda:recipe:: biobambam
   :replaces_section_title:
   :noindex:

   Tools for early stage alignment file processing.

   :homepage: https://gitlab.com/german.tischler/biobambam2
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`biobambam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobambam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobambam/meta.yaml>`_
   :links: biotools: :biotools:`biobambam`

   


.. conda:package:: biobambam

   |downloads_biobambam| |docker_biobambam|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.185-1</code>,  <code>2.0.185-0</code>,  <code>2.0.183-4</code>,  <code>2.0.183-3</code>,  <code>2.0.183-2</code>,  <code>2.0.183-1</code>,  <code>2.0.183-0</code>,  <code>2.0.182-1</code>,  <code>2.0.182-0</code>,  </span></summary>
      

      ``2.0.185-1``,  ``2.0.185-0``,  ``2.0.183-4``,  ``2.0.183-3``,  ``2.0.183-2``,  ``2.0.183-1``,  ``2.0.183-0``,  ``2.0.182-1``,  ``2.0.182-0``,  ``2.0.180-1``,  ``2.0.180-0``,  ``2.0.179-1``,  ``2.0.179-0``,  ``2.0.87-2``,  ``2.0.87-1``,  ``2.0.87-0``,  ``2.0.79-0``,  ``2.0.78-0``,  ``2.0.72-0``,  ``2.0.62-0``,  ``2.0.58-0``,  ``2.0.57-0``,  ``2.0.44-0``,  ``2.0.42-0``,  ``2.0.39-0``,  ``2.0.25-0``

      
      .. raw:: html

         </details>
      

   
   :depends gmp: ``>=6.3.0,<7.0a0``
   :depends libgcc: ``>=13``
   :depends libmaus2: ``>=2.0.813``
   :depends libmaus2: ``>=2.0.813,<3.0a0``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends xerces-c: ``>=3.2.5,<3.3.0a0``
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

      mamba install biobambam

   and update with::

      mamba update biobambam

  To create a new environment, run::

      mamba create --name myenvname biobambam

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biobambam:<tag>

   (see `biobambam/tags`_ for valid values for ``<tag>``)


.. |downloads_biobambam| image:: https://img.shields.io/conda/dn/bioconda/biobambam.svg?style=flat
   :target: https://anaconda.org/bioconda/biobambam
   :alt:   (downloads)
.. |docker_biobambam| image:: https://quay.io/repository/biocontainers/biobambam/status
   :target: https://quay.io/repository/biocontainers/biobambam
.. _`biobambam/tags`: https://quay.io/repository/biocontainers/biobambam?tab=tags


.. raw:: html

    <script>
        var package = "biobambam";
        var versions = ["2.0.185","2.0.185","2.0.183","2.0.183","2.0.183"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobambam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobambam/README.html