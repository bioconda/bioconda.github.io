:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metachip'
.. highlight: bash

metachip
========

.. conda:recipe:: metachip
   :replaces_section_title:
   :noindex:

   HGT detection pipeline

   :homepage: https://github.com/songweizhi/MetaCHIP
   :license: GPL3 / GPL3+
   :recipe: /`metachip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metachip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metachip/meta.yaml>`_
   :links: doi: :doi:`10.1186/s40168-019-0649-y`

   


.. conda:package:: metachip

   |downloads_metachip| |docker_metachip|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.10.13-0</code>,  <code>1.10.12-0</code>,  <code>1.10.10-0</code>,  <code>1.10.9-0</code>,  <code>1.10.8-0</code>,  <code>1.10.6-0</code>,  <code>1.10.5-0</code>,  <code>1.10.4-0</code>,  <code>1.10.3-0</code>,  </span></summary>
      

      ``1.10.13-0``,  ``1.10.12-0``,  ``1.10.10-0``,  ``1.10.9-0``,  ``1.10.8-0``,  ``1.10.6-0``,  ``1.10.5-0``,  ``1.10.4-0``,  ``1.10.3-0``,  ``1.10.2-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``<=1.77``
   :depends blast: 
   :depends ete3: 
   :depends fasttree: 
   :depends hmmer: 
   :depends mafft: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends prodigal: 
   :depends python: 
   :depends r-ape: 
   :depends r-base: 
   :depends r-circlize: 
   :depends r-optparse: 
   :depends reportlab: 
   :depends scipy: 
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

      mamba install metachip

   and update with::

      mamba update metachip

  To create a new environment, run::

      mamba create --name myenvname metachip

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metachip:<tag>

   (see `metachip/tags`_ for valid values for ``<tag>``)


.. |downloads_metachip| image:: https://img.shields.io/conda/dn/bioconda/metachip.svg?style=flat
   :target: https://anaconda.org/bioconda/metachip
   :alt:   (downloads)
.. |docker_metachip| image:: https://quay.io/repository/biocontainers/metachip/status
   :target: https://quay.io/repository/biocontainers/metachip
.. _`metachip/tags`: https://quay.io/repository/biocontainers/metachip?tab=tags


.. raw:: html

    <script>
        var package = "metachip";
        var versions = ["1.10.13","1.10.12","1.10.10","1.10.9","1.10.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metachip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metachip/README.html