:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tirmite'
.. highlight: bash

tirmite
=======

.. conda:recipe:: tirmite
   :replaces_section_title:
   :noindex:

   Map profile HMMs of transposon termini to genomic sequences for annotation of cryptic transposon variants.

   :homepage: https://github.com/Adamtaranto/TIRmite
   :license: GPL-3 / GPL-3
   :recipe: /`tirmite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tirmite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tirmite/meta.yaml>`_

   Map profile HMMs of transposon termini to genomic sequences for annotation of cryptic transposon variants.


.. conda:package:: tirmite

   |downloads_tirmite| |docker_tirmite|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.0-0</code>,  <code>1.2.0-0</code>,  <code>1.1.6-0</code>,  <code>1.1.5-1</code>,  <code>1.1.5-0</code>,  <code>1.1.4-0</code>,  <code>1.1.3-1</code>,  <code>1.1.3-0</code>,  <code>1.1.1-0</code>,  </span></summary>
      

      ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.6-0``,  ``1.1.5-1``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.3-1``,  ``1.1.3-0``,  ``1.1.1-0``,  ``1.1.0-1``,  ``1.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.70``
   :depends pandas: ``>=0.23.4``
   :depends pyfaidx: 
   :depends pyhmmer: 
   :depends python: ``>=3.8``
   :depends rich: 
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

      mamba install tirmite

   and update with::

      mamba update tirmite

  To create a new environment, run::

      mamba create --name myenvname tirmite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tirmite:<tag>

   (see `tirmite/tags`_ for valid values for ``<tag>``)


.. |downloads_tirmite| image:: https://img.shields.io/conda/dn/bioconda/tirmite.svg?style=flat
   :target: https://anaconda.org/bioconda/tirmite
   :alt:   (downloads)
.. |docker_tirmite| image:: https://quay.io/repository/biocontainers/tirmite/status
   :target: https://quay.io/repository/biocontainers/tirmite
.. _`tirmite/tags`: https://quay.io/repository/biocontainers/tirmite?tab=tags


.. raw:: html

    <script>
        var package = "tirmite";
        var versions = ["1.3.0","1.2.0","1.1.6","1.1.5","1.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tirmite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tirmite/README.html