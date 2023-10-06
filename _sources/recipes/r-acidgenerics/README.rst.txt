:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-acidgenerics'
.. highlight: bash

r-acidgenerics
==============

.. conda:recipe:: r-acidgenerics
   :replaces_section_title:
   :noindex:

   S4 generic functions for Acid Genomics packages.

   :homepage: https://r.acidgenomics.com/packages/acidgenerics/
   :developer docs: https://github.com/acidgenomics/r-acidgenerics
   :license: GPL / AGPL-3.0
   :recipe: /`r-acidgenerics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidgenerics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidgenerics/meta.yaml>`_

   


.. conda:package:: r-acidgenerics

   |downloads_r-acidgenerics| |docker_r-acidgenerics|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.2-0</code>,  <code>0.7.1-0</code>,  <code>0.6.12-0</code>,  <code>0.6.11-0</code>,  <code>0.6.10-0</code>,  <code>0.6.9-0</code>,  <code>0.6.8-0</code>,  <code>0.6.7-2</code>,  <code>0.6.7-1</code>,  </span></summary>
      

      ``0.7.2-0``,  ``0.7.1-0``,  ``0.6.12-0``,  ``0.6.11-0``,  ``0.6.10-0``,  ``0.6.9-0``,  ``0.6.8-0``,  ``0.6.7-2``,  ``0.6.7-1``,  ``0.6.7-0``,  ``0.6.6-1``,  ``0.6.6-0``,  ``0.6.5-0``,  ``0.6.4-1``,  ``0.6.4-0``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.20-0``,  ``0.5.19-0``,  ``0.5.18-0``,  ``0.5.17-2``,  ``0.5.17-1``,  ``0.5.17-0``,  ``0.5.16-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.14-0``,  ``0.3.12-0``,  ``0.3.11-0``,  ``0.3.10-0``,  ``0.3.9-0``,  ``0.3.8-0``,  ``0.3.7-0``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-1``,  ``0.3.4-0``,  ``0.3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install r-acidgenerics

   and update with::

      mamba update r-acidgenerics

  To create a new environment, run::

      mamba create --name myenvname r-acidgenerics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-acidgenerics:<tag>

   (see `r-acidgenerics/tags`_ for valid values for ``<tag>``)


.. |downloads_r-acidgenerics| image:: https://img.shields.io/conda/dn/bioconda/r-acidgenerics.svg?style=flat
   :target: https://anaconda.org/bioconda/r-acidgenerics
   :alt:   (downloads)
.. |docker_r-acidgenerics| image:: https://quay.io/repository/biocontainers/r-acidgenerics/status
   :target: https://quay.io/repository/biocontainers/r-acidgenerics
.. _`r-acidgenerics/tags`: https://quay.io/repository/biocontainers/r-acidgenerics?tab=tags


.. raw:: html

    <script>
        var package = "r-acidgenerics";
        var versions = ["0.7.2","0.7.1","0.6.12","0.6.11","0.6.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-acidgenerics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-acidgenerics/README.html