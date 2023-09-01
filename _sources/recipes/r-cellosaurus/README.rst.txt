:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-cellosaurus'
.. highlight: bash

r-cellosaurus
=============

.. conda:recipe:: r-cellosaurus
   :replaces_section_title:
   :noindex:

   Cellosaurus identifier mapping toolkit.

   :homepage: https://r.acidgenomics.com/packages/cellosaurus/
   :developer docs: https://github.com/acidgenomics/r-cellosaurus
   :license: GPL / AGPL-3.0
   :recipe: /`r-cellosaurus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cellosaurus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cellosaurus/meta.yaml>`_

   


.. conda:package:: r-cellosaurus

   |downloads_r-cellosaurus| |docker_r-cellosaurus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.0-0</code>,  <code>0.5.4-1</code>,  <code>0.5.4-0</code>,  <code>0.5.3-0</code>,  <code>0.5.2-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  </span></summary>
      

      ``0.6.0-0``,  ``0.5.4-1``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0``
   :depends bioconductor-iranges: ``>=2.34.0``
   :depends bioconductor-s4vectors: ``>=0.38.0``
   :depends r-acidbase: ``>=0.6.19``
   :depends r-acidcli: ``>=0.2.8``
   :depends r-acidgenerics: ``>=0.6.8``
   :depends r-acidplyr: ``>=0.4.2``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-goalie: ``>=0.6.15``
   :depends r-pipette: ``>=0.12.0``
   :depends r-stringi: ``>=1.7.12``
   :depends r-syntactic: ``>=0.6.6``
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

      mamba install r-cellosaurus

   and update with::

      mamba update r-cellosaurus

  To create a new environment, run::

      mamba create --name myenvname r-cellosaurus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-cellosaurus:<tag>

   (see `r-cellosaurus/tags`_ for valid values for ``<tag>``)


.. |downloads_r-cellosaurus| image:: https://img.shields.io/conda/dn/bioconda/r-cellosaurus.svg?style=flat
   :target: https://anaconda.org/bioconda/r-cellosaurus
   :alt:   (downloads)
.. |docker_r-cellosaurus| image:: https://quay.io/repository/biocontainers/r-cellosaurus/status
   :target: https://quay.io/repository/biocontainers/r-cellosaurus
.. _`r-cellosaurus/tags`: https://quay.io/repository/biocontainers/r-cellosaurus?tab=tags


.. raw:: html

    <script>
        var package = "r-cellosaurus";
        var versions = ["0.6.0","0.5.4","0.5.4","0.5.3","0.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-cellosaurus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-cellosaurus/README.html