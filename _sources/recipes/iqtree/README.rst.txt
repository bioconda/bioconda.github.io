:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'iqtree'
.. highlight: bash

iqtree
======

.. conda:recipe:: iqtree
   :replaces_section_title:
   :noindex:

   Efficient phylogenomic software by maximum likelihood.

   :homepage: http://www.iqtree.org
   :documentation: http://www.iqtree.org/doc
   
   :developer docs: https://github.com/iqtree/iqtree2
   :license: GPL2 / GPL-2.0-or-later
   :recipe: /`iqtree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iqtree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iqtree/meta.yaml>`_
   :links: biotools: :biotools:`iq-tree`, doi: :doi:`10.1093/molbev/msu300`, doi: :doi:`10.1038/nmeth.4285`, doi: :doi:`10.1093/molbev/msx281`, doi: :doi:`10.1093/sysbio/syae008`, usegalaxy-eu: :usegalaxy-eu:`iqtree`

   


.. conda:package:: iqtree

   |downloads_iqtree| |docker_iqtree|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3.4-2</code>,  <code>2.3.4-1</code>,  <code>2.3.4-0</code>,  <code>2.3.3-0</code>,  <code>2.3.0-0</code>,  <code>2.2.6-0</code>,  <code>2.2.5-0</code>,  <code>2.2.3-0</code>,  <code>2.2.2.9-0</code>,  </span></summary>
      

      ``2.3.4-2``,  ``2.3.4-1``,  ``2.3.4-0``,  ``2.3.3-0``,  ``2.3.0-0``,  ``2.2.6-0``,  ``2.2.5-0``,  ``2.2.3-0``,  ``2.2.2.9-0``,  ``2.2.2.7-2``,  ``2.2.2.7-0``,  ``2.2.2.3-2``,  ``2.2.2.3-1``,  ``2.2.2.3-0``,  ``2.2.0.3-1``,  ``2.2.0.3-0``,  ``2.2.0_beta-1``,  ``2.2.0_beta-0``,  ``2.1.4_beta-0``,  ``2.1.2-0``,  ``2.0.3-1``,  ``2.0.3-0``,  ``1.6.12-1``,  ``1.6.12-0``,  ``1.6.11.1-0``,  ``1.6.11-0``,  ``1.6.10-0``,  ``1.6.9-1``,  ``1.6.9-0``,  ``1.6.8-0``,  ``1.6.7.2-0``,  ``1.6.7.1-0``,  ``1.6.7-1``,  ``1.6.7-0``,  ``1.6.6-0``,  ``1.5.5-2``,  ``1.5.5-1``,  ``1.5.5-0``,  ``1.5.3-2``,  ``1.5.3-1``,  ``1.5.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install iqtree

   and update with::

      mamba update iqtree

  To create a new environment, run::

      mamba create --name myenvname iqtree

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/iqtree:<tag>

   (see `iqtree/tags`_ for valid values for ``<tag>``)


.. |downloads_iqtree| image:: https://img.shields.io/conda/dn/bioconda/iqtree.svg?style=flat
   :target: https://anaconda.org/bioconda/iqtree
   :alt:   (downloads)
.. |docker_iqtree| image:: https://quay.io/repository/biocontainers/iqtree/status
   :target: https://quay.io/repository/biocontainers/iqtree
.. _`iqtree/tags`: https://quay.io/repository/biocontainers/iqtree?tab=tags


.. raw:: html

    <script>
        var package = "iqtree";
        var versions = ["2.3.4","2.3.4","2.3.4","2.3.3","2.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/iqtree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/iqtree/README.html