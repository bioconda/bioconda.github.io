:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'presto'
.. highlight: bash

presto
======

.. conda:recipe:: presto
   :replaces_section_title:
   :noindex:

   A bioinformatics toolkit for processing high\-throughput lymphocyte receptor sequencing data.

   :homepage: https://github.com/immcantation/presto
   :documentation: https://presto.readthedocs.io
   
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`presto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/presto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/presto/meta.yaml>`_

   


.. conda:package:: presto

   |downloads_presto| |docker_presto|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.7-0</code>,  <code>0.7.6-0</code>,  <code>0.7.5-0</code>,  <code>0.7.4-0</code>,  <code>0.7.3-0</code>,  <code>0.7.2-0</code>,  <code>0.7.1-0</code>,  <code>0.7.0-0</code>,  <code>0.6.2-0</code>,  </span></summary>
      

      ``0.7.7-0``,  ``0.7.6-0``,  ``0.7.5-0``,  ``0.7.4-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.13-1``,  ``0.5.13-0``,  ``0.5.12-0``,  ``0.5.10-0``,  ``0.5.4-1``,  ``0.5.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.81``
   :depends blast: 
   :depends muscle: 
   :depends numpy: ``>=1.8``
   :depends packaging: 
   :depends pandas: ``>=0.24``
   :depends python: ``>=3``
   :depends scipy: ``>=0.14``
   :depends vsearch: 
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

      mamba install presto

   and update with::

      mamba update presto

  To create a new environment, run::

      mamba create --name myenvname presto

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/presto:<tag>

   (see `presto/tags`_ for valid values for ``<tag>``)


.. |downloads_presto| image:: https://img.shields.io/conda/dn/bioconda/presto.svg?style=flat
   :target: https://anaconda.org/bioconda/presto
   :alt:   (downloads)
.. |docker_presto| image:: https://quay.io/repository/biocontainers/presto/status
   :target: https://quay.io/repository/biocontainers/presto
.. _`presto/tags`: https://quay.io/repository/biocontainers/presto?tab=tags


.. raw:: html

    <script>
        var package = "presto";
        var versions = ["0.7.7","0.7.6","0.7.5","0.7.4","0.7.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/presto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/presto/README.html