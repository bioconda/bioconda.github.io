:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'olivar'
.. highlight: bash

olivar
======

.. conda:recipe:: olivar
   :replaces_section_title:
   :noindex:

   Olivar PCR tiling design

   :homepage: https://github.com/treangenlab/Olivar
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`olivar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/olivar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/olivar/meta.yaml>`_

   


.. conda:package:: olivar

   |downloads_olivar| |docker_olivar|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.1-0</code>,  <code>1.2.0-0</code>,  <code>1.1.5-0</code>,  <code>1.1.4-0</code>,  <code>1.1.3-0</code>,  <code>1.1.2-3</code>,  <code>1.1.2-2</code>,  <code>1.1.2-1</code>,  <code>1.1.2-0</code>,  </span></summary>
      

      ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-3``,  ``1.1.2-2``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends blast: ``>=2.12.0``
   :depends numpy: ``<2``
   :depends pandas: 
   :depends plotly: ``>=5.13.0``
   :depends python: ``>=3.8``
   :depends tqdm: 
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

      mamba install olivar

   and update with::

      mamba update olivar

  To create a new environment, run::

      mamba create --name myenvname olivar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/olivar:<tag>

   (see `olivar/tags`_ for valid values for ``<tag>``)


.. |downloads_olivar| image:: https://img.shields.io/conda/dn/bioconda/olivar.svg?style=flat
   :target: https://anaconda.org/bioconda/olivar
   :alt:   (downloads)
.. |docker_olivar| image:: https://quay.io/repository/biocontainers/olivar/status
   :target: https://quay.io/repository/biocontainers/olivar
.. _`olivar/tags`: https://quay.io/repository/biocontainers/olivar?tab=tags


.. raw:: html

    <script>
        var package = "olivar";
        var versions = ["1.2.1","1.2.0","1.1.5","1.1.4","1.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/olivar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/olivar/README.html