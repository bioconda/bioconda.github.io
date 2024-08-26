:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cogent3'
.. highlight: bash

cogent3
=======

.. conda:recipe:: cogent3
   :replaces_section_title:
   :noindex:

   COmparative GENomics Toolkit 3\: genomic sequence analysis within notebooks or on compute systems with 1000s of CPUs.

   :homepage: https://github.com/cogent3/cogent3
   :documentation: https://github.com/cogent3/cogent3/blob/2024.7.19a5/README.md
   
   :license: BSD / BSD-3-Clause
   :recipe: /`cogent3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cogent3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cogent3/meta.yaml>`_

   


.. conda:package:: cogent3

   |downloads_cogent3| |docker_cogent3|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2024.7.19a5-0</code>,  <code>2024.7.19a4-0</code>,  <code>2024.7.19a3-0</code>,  <code>2024.7.19a1-0</code>,  <code>2024.5.7a1-0</code>,  <code>2024.2.5a1-0</code>,  <code>2023.12.15a1-0</code>,  <code>2023.9.22a1-0</code>,  <code>2023.7.18a1-0</code>,  </span></summary>
      

      ``2024.7.19a5-0``,  ``2024.7.19a4-0``,  ``2024.7.19a3-0``,  ``2024.7.19a1-0``,  ``2024.5.7a1-0``,  ``2024.2.5a1-0``,  ``2023.12.15a1-0``,  ``2023.9.22a1-0``,  ``2023.7.18a1-0``,  ``2022.8.24a1-0``

      
      .. raw:: html

         </details>
      

   
   :depends chardet: 
   :depends charset-normalizer: 
   :depends numba: ``>0.53.0``
   :depends numpy: 
   :depends python: ``>=3.9,<3.13``
   :depends scipy: 
   :depends scitrack: 
   :depends stevedore: 
   :depends tinydb: 
   :depends tqdm: 
   :depends typing_extensions: 
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

      mamba install cogent3

   and update with::

      mamba update cogent3

  To create a new environment, run::

      mamba create --name myenvname cogent3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cogent3:<tag>

   (see `cogent3/tags`_ for valid values for ``<tag>``)


.. |downloads_cogent3| image:: https://img.shields.io/conda/dn/bioconda/cogent3.svg?style=flat
   :target: https://anaconda.org/bioconda/cogent3
   :alt:   (downloads)
.. |docker_cogent3| image:: https://quay.io/repository/biocontainers/cogent3/status
   :target: https://quay.io/repository/biocontainers/cogent3
.. _`cogent3/tags`: https://quay.io/repository/biocontainers/cogent3?tab=tags


.. raw:: html

    <script>
        var package = "cogent3";
        var versions = ["2024.7.19a5","2024.7.19a4","2024.7.19a3","2024.7.19a1","2024.5.7a1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cogent3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cogent3/README.html