:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-agimicrorna'
.. highlight: bash

bioconductor-agimicrorna
========================

.. conda:recipe:: bioconductor-agimicrorna
   :replaces_section_title:
   :noindex:

   Processing and Differential Expression Analysis of Agilent microRNA chips

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/AgiMicroRna.html
   :license: GPL-3
   :recipe: /`bioconductor-agimicrorna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-agimicrorna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-agimicrorna/meta.yaml>`_

   Processing and Analysis of Agilent microRNA data


.. conda:package:: bioconductor-agimicrorna

   |downloads_bioconductor-agimicrorna| |docker_bioconductor-agimicrorna|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.52.0-0</code>,  <code>2.50.0-0</code>,  <code>2.48.0-0</code>,  <code>2.44.0-0</code>,  <code>2.42.0-0</code>,  <code>2.40.0-1</code>,  <code>2.40.0-0</code>,  <code>2.38.0-0</code>,  <code>2.36.0-0</code>,  </span></summary>
      

      ``2.52.0-0``,  ``2.50.0-0``,  ``2.48.0-0``,  ``2.44.0-0``,  ``2.42.0-0``,  ``2.40.0-1``,  ``2.40.0-0``,  ``2.38.0-0``,  ``2.36.0-0``,  ``2.34.0-1``,  ``2.32.0-1``,  ``2.32.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.80.0,<1.81.0``
   :depends bioconductor-affycoretools: ``>=1.74.0,<1.75.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-preprocesscore: ``>=1.64.0,<1.65.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-agimicrorna

   and update with::

      mamba update bioconductor-agimicrorna

  To create a new environment, run::

      mamba create --name myenvname bioconductor-agimicrorna

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-agimicrorna:<tag>

   (see `bioconductor-agimicrorna/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-agimicrorna| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-agimicrorna.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-agimicrorna
   :alt:   (downloads)
.. |docker_bioconductor-agimicrorna| image:: https://quay.io/repository/biocontainers/bioconductor-agimicrorna/status
   :target: https://quay.io/repository/biocontainers/bioconductor-agimicrorna
.. _`bioconductor-agimicrorna/tags`: https://quay.io/repository/biocontainers/bioconductor-agimicrorna?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-agimicrorna";
        var versions = ["2.52.0","2.50.0","2.48.0","2.44.0","2.42.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-agimicrorna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-agimicrorna/README.html