:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cpstools'
.. highlight: bash

cpstools
========

.. conda:recipe:: cpstools
   :replaces_section_title:
   :noindex:

   CPStools is a package for analyzing chloroplast genome sequences.

   :homepage: https://github.com/Xwb7533/CPStools
   :license: MIT / MIT
   :recipe: /`cpstools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cpstools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cpstools/meta.yaml>`_

   CPStools is a package for analyzing chloroplast genome sequences.


.. conda:package:: cpstools

   |downloads_cpstools| |docker_cpstools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3-0</code>,  <code>2.2-0</code>,  <code>2.0.9-0</code>,  <code>2.0.8-0</code>,  <code>2.0.7-0</code>,  <code>2.0.6-0</code>,  <code>2.0.5-0</code>,  <code>2.0.4-0</code>,  <code>2.0.2-0</code>,  </span></summary>
      

      ``2.3-0``,  ``2.2-0``,  ``2.0.9-0``,  ``2.0.8-0``,  ``2.0.7-0``,  ``2.0.6-0``,  ``2.0.5-0``,  ``2.0.4-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.0.13-0``,  ``1.0.12-0``,  ``1.0.11-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.84.0``
   :depends numpy: ``>=1.26.4``
   :depends python: ``>=3.9``
   :depends tqdm: ``>=4.66.5``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install cpstools

   and update with::

      mamba update cpstools

  To create a new environment, run::

      mamba create --name myenvname cpstools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cpstools:<tag>

   (see `cpstools/tags`_ for valid values for ``<tag>``)


.. |downloads_cpstools| image:: https://img.shields.io/conda/dn/bioconda/cpstools.svg?style=flat
   :target: https://anaconda.org/bioconda/cpstools
   :alt:   (downloads)
.. |docker_cpstools| image:: https://quay.io/repository/biocontainers/cpstools/status
   :target: https://quay.io/repository/biocontainers/cpstools
.. _`cpstools/tags`: https://quay.io/repository/biocontainers/cpstools?tab=tags


.. raw:: html

    <script>
        var package = "cpstools";
        var versions = ["2.3","2.2","2.0.9","2.0.8","2.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cpstools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cpstools/README.html