:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncbimeta'
.. highlight: bash

ncbimeta
========

.. conda:recipe:: ncbimeta
   :replaces_section_title:
   :noindex:

   Efficient and comprehensive metadata acquisition from the NCBI databases \(includes SRA\).

   :homepage: https://github.com/ktmeaton/NCBImeta
   :license: MIT
   :recipe: /`ncbimeta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbimeta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbimeta/meta.yaml>`_

   


.. conda:package:: ncbimeta

   |downloads_ncbimeta| |docker_ncbimeta|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.3-0</code>,  <code>0.8.2-0</code>,  <code>0.8.1-0</code>,  <code>0.7.0-0</code>,  <code>0.6.6-0</code>,  <code>0.6.5-0</code>,  <code>0.6.4-0</code>,  <code>0.6.3-0</code>,  <code>0.6.2-0</code>,  </span></summary>
      

      ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.7.0-0``,  ``0.6.6-0``,  ``0.6.5-0``,  ``0.6.4-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.74``
   :depends lxml: ``>=4.6.3``
   :depends numpy: 
   :depends python: ``>=3.6,<3.10``
   :depends pyyaml: ``>=5.4``
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

      mamba install ncbimeta

   and update with::

      mamba update ncbimeta

  To create a new environment, run::

      mamba create --name myenvname ncbimeta

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ncbimeta:<tag>

   (see `ncbimeta/tags`_ for valid values for ``<tag>``)


.. |downloads_ncbimeta| image:: https://img.shields.io/conda/dn/bioconda/ncbimeta.svg?style=flat
   :target: https://anaconda.org/bioconda/ncbimeta
   :alt:   (downloads)
.. |docker_ncbimeta| image:: https://quay.io/repository/biocontainers/ncbimeta/status
   :target: https://quay.io/repository/biocontainers/ncbimeta
.. _`ncbimeta/tags`: https://quay.io/repository/biocontainers/ncbimeta?tab=tags


.. raw:: html

    <script>
        var package = "ncbimeta";
        var versions = ["0.8.3","0.8.2","0.8.1","0.7.0","0.6.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncbimeta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncbimeta/README.html