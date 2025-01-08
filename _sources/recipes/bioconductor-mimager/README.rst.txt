:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mimager'
.. highlight: bash

bioconductor-mimager
====================

.. conda:recipe:: bioconductor-mimager
   :replaces_section_title:
   :noindex:

   mimager\: The Microarray Imager

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/mimager.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-mimager <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mimager>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mimager/meta.yaml>`_

   Easily visualize and inspect microarrays for spatial artifacts.


.. conda:package:: bioconductor-mimager

   |downloads_bioconductor-mimager| |docker_bioconductor-mimager|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.84.0,<1.85.0``
   :depends bioconductor-affyplm: ``>=1.82.0,<1.83.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-oligo: ``>=1.70.0,<1.71.0``
   :depends bioconductor-oligoclasses: ``>=1.68.0,<1.69.0``
   :depends bioconductor-preprocesscore: ``>=1.68.0,<1.69.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dbi: 
   :depends r-gtable: 
   :depends r-scales: 
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

      mamba install bioconductor-mimager

   and update with::

      mamba update bioconductor-mimager

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mimager

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mimager:<tag>

   (see `bioconductor-mimager/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mimager| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mimager.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mimager
   :alt:   (downloads)
.. |docker_bioconductor-mimager| image:: https://quay.io/repository/biocontainers/bioconductor-mimager/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mimager
.. _`bioconductor-mimager/tags`: https://quay.io/repository/biocontainers/bioconductor-mimager?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mimager";
        var versions = ["1.30.0","1.26.0","1.24.0","1.22.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mimager/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mimager/README.html