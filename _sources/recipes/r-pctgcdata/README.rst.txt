:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-pctgcdata'
.. highlight: bash

r-pctgcdata
===========

.. conda:recipe:: r-pctgcdata
   :replaces_section_title:
   :noindex:

   Provides GC percentage of a 1 kilobase window at a genomic position for different builds of human and mouse genomes.

   :homepage: https://github.com/mskcc/pctGCdata
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-pctgcdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pctgcdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pctgcdata/meta.yaml>`_

   


.. conda:package:: r-pctgcdata

   |downloads_r-pctgcdata| |docker_r-pctgcdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.0-5</code>,  <code>0.3.0-4</code>,  <code>0.3.0-3</code>,  <code>0.3.0-2</code>,  <code>0.3.0-1</code>,  <code>0.3.0-0</code>,  <code>0.2.0-3</code>,  <code>0.2.0-2</code>,  <code>0.2.0-1</code>,  </span></summary>
      

      ``0.3.0-5``,  ``0.3.0-4``,  ``0.3.0-3``,  ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.0-3``,  ``0.2.0-2``,  ``0.2.0-1``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install r-pctgcdata

   and update with::

      mamba update r-pctgcdata

  To create a new environment, run::

      mamba create --name myenvname r-pctgcdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-pctgcdata:<tag>

   (see `r-pctgcdata/tags`_ for valid values for ``<tag>``)


.. |downloads_r-pctgcdata| image:: https://img.shields.io/conda/dn/bioconda/r-pctgcdata.svg?style=flat
   :target: https://anaconda.org/bioconda/r-pctgcdata
   :alt:   (downloads)
.. |docker_r-pctgcdata| image:: https://quay.io/repository/biocontainers/r-pctgcdata/status
   :target: https://quay.io/repository/biocontainers/r-pctgcdata
.. _`r-pctgcdata/tags`: https://quay.io/repository/biocontainers/r-pctgcdata?tab=tags


.. raw:: html

    <script>
        var package = "r-pctgcdata";
        var versions = ["0.3.0","0.3.0","0.3.0","0.3.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-pctgcdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-pctgcdata/README.html