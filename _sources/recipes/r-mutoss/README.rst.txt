:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-mutoss'
.. highlight: bash

r-mutoss
========

.. conda:recipe:: r-mutoss
   :replaces_section_title:
   :noindex:

   Designed to ease the application and comparison of multiple hypothesis testing procedures for FWER\, gFWER\, FDR and FDX. Methods are  standardized and usable by the accompanying \'mutossGUI\'.

   :homepage: https://github.com/kornl/mutoss/
   :license: GPL / GPL
   :recipe: /`r-mutoss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mutoss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mutoss/meta.yaml>`_

   


.. conda:package:: r-mutoss

   |downloads_r-mutoss| |docker_r-mutoss|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1_12-8</code>,  <code>0.1_12-7</code>,  <code>0.1_12-6</code>,  <code>0.1_12-5</code>,  <code>0.1_12-4</code>,  <code>0.1_12-3</code>,  <code>0.1_12-2</code>,  <code>0.1_12-1</code>,  <code>0.1_12-0</code>,  </span></summary>
      

      ``0.1_12-8``,  ``0.1_12-7``,  ``0.1_12-6``,  ``0.1_12-5``,  ``0.1_12-4``,  ``0.1_12-3``,  ``0.1_12-2``,  ``0.1_12-1``,  ``0.1_12-0``,  ``0.1_10-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-multtest: ``>=2.2.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-multcomp: ``>=1.1_0``
   :depends r-mvtnorm: 
   :depends r-plotrix: 
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

      mamba install r-mutoss

   and update with::

      mamba update r-mutoss

  To create a new environment, run::

      mamba create --name myenvname r-mutoss

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-mutoss:<tag>

   (see `r-mutoss/tags`_ for valid values for ``<tag>``)


.. |downloads_r-mutoss| image:: https://img.shields.io/conda/dn/bioconda/r-mutoss.svg?style=flat
   :target: https://anaconda.org/bioconda/r-mutoss
   :alt:   (downloads)
.. |docker_r-mutoss| image:: https://quay.io/repository/biocontainers/r-mutoss/status
   :target: https://quay.io/repository/biocontainers/r-mutoss
.. _`r-mutoss/tags`: https://quay.io/repository/biocontainers/r-mutoss?tab=tags


.. raw:: html

    <script>
        var package = "r-mutoss";
        var versions = ["0.1_12","0.1_12","0.1_12","0.1_12","0.1_12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-mutoss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-mutoss/README.html