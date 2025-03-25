:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-acidplyr'
.. highlight: bash

r-acidplyr
==========

.. conda:recipe:: r-acidplyr
   :replaces_section_title:
   :noindex:

   A grammar of S4 class data manipulation.

   :homepage: https://r.acidgenomics.com/packages/acidplyr/
   :developer docs: https://github.com/acidgenomics/r-acidplyr
   :license: GPL / AGPL-3.0
   :recipe: /`r-acidplyr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidplyr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidplyr/meta.yaml>`_

   


.. conda:package:: r-acidplyr

   |downloads_r-acidplyr| |docker_r-acidplyr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.5-0</code>,  <code>0.5.4-1</code>,  <code>0.5.4-0</code>,  <code>0.5.3-0</code>,  <code>0.5.2-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-0</code>,  </span></summary>
      

      ``0.5.5-0``,  ``0.5.4-1``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.3.11-0``,  ``0.3.10-2``,  ``0.3.10-1``,  ``0.3.10-0``,  ``0.3.9-1``,  ``0.3.9-0``,  ``0.3.8-0``,  ``0.3.7-1``,  ``0.3.7-0``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.2-1``,  ``0.3.2-0``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.22-0``,  ``0.1.21-0``,  ``0.1.20-0``,  ``0.1.18-2``,  ``0.1.18-1``,  ``0.1.18-0``,  ``0.1.17-1``,  ``0.1.17-0``,  ``0.1.4-1``,  ``0.1.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0``
   :depends bioconductor-iranges: ``>=2.34.0``
   :depends bioconductor-s4vectors: ``>=0.38.0``
   :depends r-acidgenerics: ``>=0.7.4``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-goalie: ``>=0.7.6``
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

      mamba install r-acidplyr

   and update with::

      mamba update r-acidplyr

  To create a new environment, run::

      mamba create --name myenvname r-acidplyr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-acidplyr:<tag>

   (see `r-acidplyr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-acidplyr| image:: https://img.shields.io/conda/dn/bioconda/r-acidplyr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-acidplyr
   :alt:   (downloads)
.. |docker_r-acidplyr| image:: https://quay.io/repository/biocontainers/r-acidplyr/status
   :target: https://quay.io/repository/biocontainers/r-acidplyr
.. _`r-acidplyr/tags`: https://quay.io/repository/biocontainers/r-acidplyr?tab=tags


.. raw:: html

    <script>
        var package = "r-acidplyr";
        var versions = ["0.5.5","0.5.4","0.5.4","0.5.3","0.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-acidplyr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-acidplyr/README.html