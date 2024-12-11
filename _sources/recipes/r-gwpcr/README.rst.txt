:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-gwpcr'
.. highlight: bash

r-gwpcr
=======

.. conda:recipe:: r-gwpcr
   :replaces_section_title:
   :noindex:

   Implements the necessary distributions and parameter estimation procedures for a model of amplification and high\-troughput sequencing. The model is based on a mechanistic model of PCR amplification as a Galton\-Watson branching process\, and on Poissonan sampling to model high\-throughput sequencing.

   :homepage: http://www.cibiv.at/~pflug_/trumicount
   :license: AGPLv3
   :recipe: /`r-gwpcr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-gwpcr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-gwpcr/meta.yaml>`_

   


.. conda:package:: r-gwpcr

   |downloads_r-gwpcr| |docker_r-gwpcr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.4-6</code>,  <code>1.0.4-5</code>,  <code>1.0.4-4</code>,  <code>1.0.4-3</code>,  <code>1.0.4-2</code>,  <code>1.0.4-1</code>,  <code>1.0.4-0</code>,  <code>1.0.3-0</code>,  <code>1.0.2-0</code>,  </span></summary>
      

      ``1.0.4-6``,  ``1.0.4-5``,  ``1.0.4-4``,  ``1.0.4-3``,  ``1.0.4-2``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0-0``,  ``0.9.11-2``,  ``0.9.11-1``,  ``0.9.11-0``,  ``0.9.10-4``,  ``0.9.10-3``,  ``0.9.10-2``,  ``0.9.10-1``,  ``0.9.10-0``,  ``0.9.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends r-akima: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-statmod: 
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

      mamba install r-gwpcr

   and update with::

      mamba update r-gwpcr

  To create a new environment, run::

      mamba create --name myenvname r-gwpcr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-gwpcr:<tag>

   (see `r-gwpcr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-gwpcr| image:: https://img.shields.io/conda/dn/bioconda/r-gwpcr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-gwpcr
   :alt:   (downloads)
.. |docker_r-gwpcr| image:: https://quay.io/repository/biocontainers/r-gwpcr/status
   :target: https://quay.io/repository/biocontainers/r-gwpcr
.. _`r-gwpcr/tags`: https://quay.io/repository/biocontainers/r-gwpcr?tab=tags


.. raw:: html

    <script>
        var package = "r-gwpcr";
        var versions = ["1.0.4","1.0.4","1.0.4","1.0.4","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-gwpcr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-gwpcr/README.html