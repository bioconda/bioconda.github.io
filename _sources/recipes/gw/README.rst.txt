:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gw'
.. highlight: bash

gw
==

.. conda:recipe:: gw
   :replaces_section_title:
   :noindex:

   View genomic sequencing data and vcf files

   :homepage: https://github.com/kcleal/gw
   :license: MIT
   :recipe: /`gw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gw/meta.yaml>`_

   


.. conda:package:: gw

   |downloads_gw| |docker_gw|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.3-0</code>,  <code>0.9.1-0</code>,  <code>0.8.2-1</code>,  <code>0.8.2-0</code>,  <code>0.8.1-0</code>,  <code>0.7.0-2</code>,  <code>0.7.0-1</code>,  <code>0.7.0-0</code>,  <code>0.6.4-1</code>,  </span></summary>
      

      ``0.9.3-0``,  ``0.9.1-0``,  ``0.8.2-1``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.7.0-2``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.4-1``,  ``0.6.4-0``,  ``0.6.3-1``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.0-0``,  ``0.4.3-0``,  ``0.4.2-1``,  ``0.4.2-0``,  ``0.4.0-0``,  ``0.3.1-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.8-0``,  ``0.1.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends fontconfig: ``>=2.14.2,<3.0a0``
   :depends fonts-conda-ecosystem: 
   :depends freetype: ``>=2.12.1,<3.0a0``
   :depends glfw: ``>=3.3``
   :depends glfw: ``>=3.3.9,<4.0a0``
   :depends htslib: ``>=1.19,<1.20.0a0``
   :depends libcurl: ``>=8.5.0,<9.0a0``
   :depends libdeflate: ``>=1.19,<1.20.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install gw

   and update with::

      mamba update gw

  To create a new environment, run::

      mamba create --name myenvname gw

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gw:<tag>

   (see `gw/tags`_ for valid values for ``<tag>``)


.. |downloads_gw| image:: https://img.shields.io/conda/dn/bioconda/gw.svg?style=flat
   :target: https://anaconda.org/bioconda/gw
   :alt:   (downloads)
.. |docker_gw| image:: https://quay.io/repository/biocontainers/gw/status
   :target: https://quay.io/repository/biocontainers/gw
.. _`gw/tags`: https://quay.io/repository/biocontainers/gw?tab=tags


.. raw:: html

    <script>
        var package = "gw";
        var versions = ["0.9.3","0.9.1","0.8.2","0.8.2","0.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gw/README.html