:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shapeit4'
.. highlight: bash

shapeit4
========

.. conda:recipe:: shapeit4
   :replaces_section_title:
   :noindex:

   fast and accurate method for estimation of haplotypes \(phasing\)

   :homepage: https://odelaneau.github.io/shapeit4/
   :license: MIT
   :recipe: /`shapeit4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shapeit4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shapeit4/meta.yaml>`_
   :links: doi: :doi:`10.1101/493403`

   


.. conda:package:: shapeit4

   |downloads_shapeit4| |docker_shapeit4|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.2.2-3</code>,  <code>4.2.2-2</code>,  <code>4.2.2-1</code>,  <code>4.2.2-0</code>,  <code>4.2.1-0</code>,  <code>4.2.0-1</code>,  <code>4.2.0-0</code>,  <code>4.1.3-1</code>,  <code>4.1.3-0</code>,  </span></summary>
      

      ``4.2.2-3``,  ``4.2.2-2``,  ``4.2.2-1``,  ``4.2.2-0``,  ``4.2.1-0``,  ``4.2.0-1``,  ``4.2.0-0``,  ``4.1.3-1``,  ``4.1.3-0``,  ``4.1-0``,  ``4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: ``>=1.78.0,<1.78.1.0a0``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends htslib: ``1.11.*``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install shapeit4

   and update with::

      mamba update shapeit4

  To create a new environment, run::

      mamba create --name myenvname shapeit4

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/shapeit4:<tag>

   (see `shapeit4/tags`_ for valid values for ``<tag>``)


.. |downloads_shapeit4| image:: https://img.shields.io/conda/dn/bioconda/shapeit4.svg?style=flat
   :target: https://anaconda.org/bioconda/shapeit4
   :alt:   (downloads)
.. |docker_shapeit4| image:: https://quay.io/repository/biocontainers/shapeit4/status
   :target: https://quay.io/repository/biocontainers/shapeit4
.. _`shapeit4/tags`: https://quay.io/repository/biocontainers/shapeit4?tab=tags


.. raw:: html

    <script>
        var package = "shapeit4";
        var versions = ["4.2.2","4.2.2","4.2.2","4.2.2","4.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shapeit4/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shapeit4/README.html