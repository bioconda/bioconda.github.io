:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-acidbase'
.. highlight: bash

r-acidbase
==========

.. conda:recipe:: r-acidbase
   :replaces_section_title:
   :noindex:

   Low\-level base functions imported by Acid Genomics packages.

   :homepage: https://r.acidgenomics.com/packages/acidbase/
   :developer docs: https://github.com/acidgenomics/r-acidbase
   :license: GPL / AGPL-3.0
   :recipe: /`r-acidbase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidbase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidbase/meta.yaml>`_

   


.. conda:package:: r-acidbase

   |downloads_r-acidbase| |docker_r-acidbase|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.0-0</code>,  <code>0.6.23-0</code>,  <code>0.6.22-0</code>,  <code>0.6.21-0</code>,  <code>0.6.20-0</code>,  <code>0.6.19-0</code>,  <code>0.6.18-0</code>,  <code>0.6.17-0</code>,  <code>0.6.16-1</code>,  </span></summary>
      

      ``0.7.0-0``,  ``0.6.23-0``,  ``0.6.22-0``,  ``0.6.21-0``,  ``0.6.20-0``,  ``0.6.19-0``,  ``0.6.18-0``,  ``0.6.17-0``,  ``0.6.16-1``,  ``0.6.16-0``,  ``0.6.15-1``,  ``0.6.15-0``,  ``0.6.13-0``,  ``0.6.12-1``,  ``0.6.12-0``,  ``0.6.11-0``,  ``0.6.10-0``,  ``0.6.9-0``,  ``0.6.8-1``,  ``0.6.8-0``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.3.16-0``,  ``0.3.15-0``,  ``0.3.14-0``,  ``0.3.13-3``,  ``0.3.13-2``,  ``0.3.13-1``,  ``0.3.13-0``,  ``0.2.6-1``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.1.14-0``,  ``0.1.13-0``,  ``0.1.12-0``,  ``0.1.11-0``,  ``0.1.10-0``,  ``0.1.9-1``,  ``0.1.9-0``,  ``0.1.8-1``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0``
   :depends bioconductor-s4vectors: ``>=0.38.0``
   :depends r-acidcli: ``>=0.2.8``
   :depends r-acidgenerics: ``>=0.7.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-goalie: ``>=0.7.0``
   :depends r-memuse: ``>=4.2.3``
   :depends r-processx: ``>=3.8.2``
   :depends r-withr: ``>=2.5.1``
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

      mamba install r-acidbase

   and update with::

      mamba update r-acidbase

  To create a new environment, run::

      mamba create --name myenvname r-acidbase

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-acidbase:<tag>

   (see `r-acidbase/tags`_ for valid values for ``<tag>``)


.. |downloads_r-acidbase| image:: https://img.shields.io/conda/dn/bioconda/r-acidbase.svg?style=flat
   :target: https://anaconda.org/bioconda/r-acidbase
   :alt:   (downloads)
.. |docker_r-acidbase| image:: https://quay.io/repository/biocontainers/r-acidbase/status
   :target: https://quay.io/repository/biocontainers/r-acidbase
.. _`r-acidbase/tags`: https://quay.io/repository/biocontainers/r-acidbase?tab=tags


.. raw:: html

    <script>
        var package = "r-acidbase";
        var versions = ["0.7.0","0.6.23","0.6.22","0.6.21","0.6.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-acidbase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-acidbase/README.html