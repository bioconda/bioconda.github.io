:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-perfmeas'
.. highlight: bash

r-perfmeas
==========

.. conda:recipe:: r-perfmeas
   :replaces_section_title:
   :noindex:

   Package that implements different performance measures for classification and ranking tasks. AUC\, precision at a given recall\, F\-score for single and multiple classes are available.

   :homepage: https://CRAN.R-project.org/package=PerfMeas
   :license: GPL3 / GPL-2.0-or-later
   :recipe: /`r-perfmeas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-perfmeas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-perfmeas/meta.yaml>`_

   


.. conda:package:: r-perfmeas

   |downloads_r-perfmeas| |docker_r-perfmeas|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.5-3</code>,  <code>1.2.5-2</code>,  <code>1.2.5-1</code>,  <code>1.2.5-0</code>,  <code>1.2.1-7</code>,  <code>1.2.1-6</code>,  <code>1.2.1-5</code>,  <code>1.2.1-4</code>,  <code>1.2.1-3</code>,  </span></summary>
      

      ``1.2.5-3``,  ``1.2.5-2``,  ``1.2.5-1``,  ``1.2.5-0``,  ``1.2.1-7``,  ``1.2.1-6``,  ``1.2.1-5``,  ``1.2.1-4``,  ``1.2.1-3``,  ``1.2.1-2``,  ``1.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-graph: 
   :depends bioconductor-limma: 
   :depends bioconductor-rbgl: 
   :depends libgcc-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install r-perfmeas

   and update with::

      mamba update r-perfmeas

  To create a new environment, run::

      mamba create --name myenvname r-perfmeas

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-perfmeas:<tag>

   (see `r-perfmeas/tags`_ for valid values for ``<tag>``)


.. |downloads_r-perfmeas| image:: https://img.shields.io/conda/dn/bioconda/r-perfmeas.svg?style=flat
   :target: https://anaconda.org/bioconda/r-perfmeas
   :alt:   (downloads)
.. |docker_r-perfmeas| image:: https://quay.io/repository/biocontainers/r-perfmeas/status
   :target: https://quay.io/repository/biocontainers/r-perfmeas
.. _`r-perfmeas/tags`: https://quay.io/repository/biocontainers/r-perfmeas?tab=tags


.. raw:: html

    <script>
        var package = "r-perfmeas";
        var versions = ["1.2.5","1.2.5","1.2.5","1.2.5","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-perfmeas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-perfmeas/README.html