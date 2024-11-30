:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tb_variant_filter'
.. highlight: bash

tb_variant_filter
=================

.. conda:recipe:: tb_variant_filter
   :replaces_section_title:
   :noindex:

   VCF variant filter optimised for filter M. tuberculosis H37Rv variants

   :homepage: http://github.com/COMBAT-TB/tb_variant_filter
   :license: GPL / GPL-3.0
   :recipe: /`tb_variant_filter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tb_variant_filter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tb_variant_filter/meta.yaml>`_

   tb\_variant\_filter filters variants in VCF filters\, with a focus on the kinds of filtering
   done with variants found relative to M. tuberculosis H37Rv


.. conda:package:: tb_variant_filter

   |downloads_tb_variant_filter| |docker_tb_variant_filter|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.0-0</code>,  <code>0.3.6-0</code>,  <code>0.3.5-0</code>,  <code>0.3.0-0</code>,  <code>0.2.0-1</code>,  <code>0.2.0-0</code>,  <code>0.1.3-0</code>,  <code>0.1.2-0</code>,  <code>0.1.1-0</code>,  </span></summary>
      

      ``0.4.0-0``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.0-0``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends intervaltree: 
   :depends lxml: 
   :depends neo4j-python-driver: 
   :depends pandas: 
   :depends python: ``>=3.7``
   :depends requests: 
   :depends vcfpy: 
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

      mamba install tb_variant_filter

   and update with::

      mamba update tb_variant_filter

  To create a new environment, run::

      mamba create --name myenvname tb_variant_filter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tb_variant_filter:<tag>

   (see `tb_variant_filter/tags`_ for valid values for ``<tag>``)


.. |downloads_tb_variant_filter| image:: https://img.shields.io/conda/dn/bioconda/tb_variant_filter.svg?style=flat
   :target: https://anaconda.org/bioconda/tb_variant_filter
   :alt:   (downloads)
.. |docker_tb_variant_filter| image:: https://quay.io/repository/biocontainers/tb_variant_filter/status
   :target: https://quay.io/repository/biocontainers/tb_variant_filter
.. _`tb_variant_filter/tags`: https://quay.io/repository/biocontainers/tb_variant_filter?tab=tags


.. raw:: html

    <script>
        var package = "tb_variant_filter";
        var versions = ["0.4.0","0.3.6","0.3.5","0.3.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tb_variant_filter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tb_variant_filter/README.html