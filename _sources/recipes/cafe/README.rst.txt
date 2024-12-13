:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cafe'
.. highlight: bash

cafe
====

.. conda:recipe:: cafe
   :replaces_section_title:
   :noindex:

   Computational Analysis of gene Family Evolution \(CAFE\)

   :homepage: https://github.com/hahnlab/CAFE5
   :license: IU OPEN SOURCE LICENSE (see https://github.com/hahnlab/CAFE5/blob/master/LICENSE)
   :recipe: /`cafe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cafe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cafe/meta.yaml>`_
   :links: biotools: :biotools:`cafe`

   


.. conda:package:: cafe

   |downloads_cafe| |docker_cafe|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.1.0-1</code>,  <code>5.1.0-0</code>,  <code>5.0.0-3</code>,  <code>5.0.0-2</code>,  <code>5.0.0-1</code>,  <code>5.0.0-0</code>,  <code>4.2.1-5</code>,  <code>4.2.1-4</code>,  <code>4.2.1-3</code>,  </span></summary>
      

      ``5.1.0-1``,  ``5.1.0-0``,  ``5.0.0-3``,  ``5.0.0-2``,  ``5.0.0-1``,  ``5.0.0-0``,  ``4.2.1-5``,  ``4.2.1-4``,  ``4.2.1-3``,  ``4.2.1-2``,  ``4.2.1-1``,  ``4.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends zlib: 
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

      mamba install cafe

   and update with::

      mamba update cafe

  To create a new environment, run::

      mamba create --name myenvname cafe

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cafe:<tag>

   (see `cafe/tags`_ for valid values for ``<tag>``)


.. |downloads_cafe| image:: https://img.shields.io/conda/dn/bioconda/cafe.svg?style=flat
   :target: https://anaconda.org/bioconda/cafe
   :alt:   (downloads)
.. |docker_cafe| image:: https://quay.io/repository/biocontainers/cafe/status
   :target: https://quay.io/repository/biocontainers/cafe
.. _`cafe/tags`: https://quay.io/repository/biocontainers/cafe?tab=tags


.. raw:: html

    <script>
        var package = "cafe";
        var versions = ["5.1.0","5.1.0","5.0.0","5.0.0","5.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cafe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cafe/README.html