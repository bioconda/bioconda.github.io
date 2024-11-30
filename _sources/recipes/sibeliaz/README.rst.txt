:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sibeliaz'
.. highlight: bash

sibeliaz
========

.. conda:recipe:: sibeliaz
   :replaces_section_title:
   :noindex:

   A fast whole\-genome aligner based on de Bruijn graphs.

   :homepage: https://github.com/medvedevgroup/SibeliaZ
   :license: Custom OSS
   :recipe: /`sibeliaz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sibeliaz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sibeliaz/meta.yaml>`_

   


.. conda:package:: sibeliaz

   |downloads_sibeliaz| |docker_sibeliaz|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.5-3</code>,  <code>1.2.5-2</code>,  <code>1.2.5-1</code>,  <code>1.2.5-0</code>,  <code>1.2.4-2</code>,  <code>1.2.4-1</code>,  <code>1.2.4-0</code>,  <code>1.2.3-0</code>,  <code>1.2.2-1</code>,  </span></summary>
      

      ``1.2.5-3``,  ``1.2.5-2``,  ``1.2.5-1``,  ``1.2.5-0``,  ``1.2.4-2``,  ``1.2.4-1``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-1``,  ``1.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends maf2synteny: 
   :depends spoa: ``4.0.3-0.*``
   :depends tbb: ``>=2021.9.0``
   :depends twopaco: ``>0.9.2``
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

      mamba install sibeliaz

   and update with::

      mamba update sibeliaz

  To create a new environment, run::

      mamba create --name myenvname sibeliaz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sibeliaz:<tag>

   (see `sibeliaz/tags`_ for valid values for ``<tag>``)


.. |downloads_sibeliaz| image:: https://img.shields.io/conda/dn/bioconda/sibeliaz.svg?style=flat
   :target: https://anaconda.org/bioconda/sibeliaz
   :alt:   (downloads)
.. |docker_sibeliaz| image:: https://quay.io/repository/biocontainers/sibeliaz/status
   :target: https://quay.io/repository/biocontainers/sibeliaz
.. _`sibeliaz/tags`: https://quay.io/repository/biocontainers/sibeliaz?tab=tags


.. raw:: html

    <script>
        var package = "sibeliaz";
        var versions = ["1.2.5","1.2.5","1.2.5","1.2.5","1.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sibeliaz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sibeliaz/README.html