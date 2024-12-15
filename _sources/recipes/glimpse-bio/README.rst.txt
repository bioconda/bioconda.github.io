:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'glimpse-bio'
.. highlight: bash

glimpse-bio
===========

.. conda:recipe:: glimpse-bio
   :replaces_section_title:
   :noindex:

   GLIMPSE is a phasing and imputation method for large\-scale low\-coverage sequencing studies.

   :homepage: https://odelaneau.github.io/GLIMPSE/
   :license: MIT
   :recipe: /`glimpse-bio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/glimpse-bio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/glimpse-bio/meta.yaml>`_

   


.. conda:package:: glimpse-bio

   |downloads_glimpse-bio| |docker_glimpse-bio|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.1-3</code>,  <code>2.0.1-2</code>,  <code>2.0.1-1</code>,  <code>2.0.1-0</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.1.1-3</code>,  <code>1.1.1-2</code>,  <code>1.1.1-1</code>,  </span></summary>
      

      ``2.0.1-3``,  ``2.0.1-2``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.1.1-3``,  ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``,  ``v1.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: 
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends htslib: ``>=1.21,<1.22.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends openssl: ``>=3.4.0,<4.0a0``
   :depends pthread-stubs: 
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

      mamba install glimpse-bio

   and update with::

      mamba update glimpse-bio

  To create a new environment, run::

      mamba create --name myenvname glimpse-bio

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/glimpse-bio:<tag>

   (see `glimpse-bio/tags`_ for valid values for ``<tag>``)


.. |downloads_glimpse-bio| image:: https://img.shields.io/conda/dn/bioconda/glimpse-bio.svg?style=flat
   :target: https://anaconda.org/bioconda/glimpse-bio
   :alt:   (downloads)
.. |docker_glimpse-bio| image:: https://quay.io/repository/biocontainers/glimpse-bio/status
   :target: https://quay.io/repository/biocontainers/glimpse-bio
.. _`glimpse-bio/tags`: https://quay.io/repository/biocontainers/glimpse-bio?tab=tags


.. raw:: html

    <script>
        var package = "glimpse-bio";
        var versions = ["2.0.1","2.0.1","2.0.1","2.0.1","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/glimpse-bio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/glimpse-bio/README.html