:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ldblockshow'
.. highlight: bash

ldblockshow
===========

.. conda:recipe:: ldblockshow
   :replaces_section_title:
   :noindex:

   A tool for showing linkage disequilibrium heatmaps from variant call format \(VCF\) files.

   :homepage: https://github.com/BGI-shenzhen/LDBlockShow
   :license: MIT / MIT
   :recipe: /`ldblockshow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ldblockshow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ldblockshow/meta.yaml>`_
   :links: biotools: :biotools:`ldblockshow`

   


.. conda:package:: ldblockshow

   |downloads_ldblockshow| |docker_ldblockshow|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.41-0</code>,  <code>1.40-3</code>,  <code>1.40-2</code>,  <code>1.40-1</code>,  <code>1.40-0</code>,  <code>1.38-0</code>,  <code>1.37-0</code>,  <code>1.36-0</code>,  <code>1.35-0</code>,  </span></summary>
      

      ``1.41-0``,  ``1.40-3``,  ``1.40-2``,  ``1.40-1``,  ``1.40-0``,  ``1.38-0``,  ``1.37-0``,  ``1.36-0``,  ``1.35-0``,  ``1.34-0``,  ``1.33-0``,  ``1.32-0``,  ``1.31-0``,  ``1.27-0``,  ``1.25-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-svg: 
   :depends plink: 
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

      mamba install ldblockshow

   and update with::

      mamba update ldblockshow

  To create a new environment, run::

      mamba create --name myenvname ldblockshow

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ldblockshow:<tag>

   (see `ldblockshow/tags`_ for valid values for ``<tag>``)


.. |downloads_ldblockshow| image:: https://img.shields.io/conda/dn/bioconda/ldblockshow.svg?style=flat
   :target: https://anaconda.org/bioconda/ldblockshow
   :alt:   (downloads)
.. |docker_ldblockshow| image:: https://quay.io/repository/biocontainers/ldblockshow/status
   :target: https://quay.io/repository/biocontainers/ldblockshow
.. _`ldblockshow/tags`: https://quay.io/repository/biocontainers/ldblockshow?tab=tags


.. raw:: html

    <script>
        var package = "ldblockshow";
        var versions = ["1.41","1.40","1.40","1.40","1.40"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ldblockshow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ldblockshow/README.html