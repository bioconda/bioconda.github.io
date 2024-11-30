:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svtyper'
.. highlight: bash

svtyper
=======

.. conda:recipe:: svtyper
   :replaces_section_title:
   :noindex:

   Bayesian genotyper for structural variants

   :homepage: https://github.com/hall-lab/svtyper
   :license: MIT
   :recipe: /`svtyper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svtyper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svtyper/meta.yaml>`_

   


.. conda:package:: svtyper

   |downloads_svtyper| |docker_svtyper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.1-0</code>,  <code>0.7.0-1</code>,  <code>0.7.0-0</code>,  <code>0.6.1-1</code>,  <code>0.6.1-0</code>,  <code>0.1.4-0</code>,  <code>0.1.1-0</code>,  <code>0.0.4-0</code>,  <code>0.0.2-4</code>,  </span></summary>
      

      ``0.7.1-0``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.1.4-0``,  ``0.1.1-0``,  ``0.0.4-0``,  ``0.0.2-4``,  ``0.0.2-3``

      
      .. raw:: html

         </details>
      

   
   :depends cytoolz: ``>=0.8.2``
   :depends numpy: 
   :depends pysam: ``>=0.15.0``
   :depends python: ``<3``
   :depends scipy: 
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

      mamba install svtyper

   and update with::

      mamba update svtyper

  To create a new environment, run::

      mamba create --name myenvname svtyper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/svtyper:<tag>

   (see `svtyper/tags`_ for valid values for ``<tag>``)


.. |downloads_svtyper| image:: https://img.shields.io/conda/dn/bioconda/svtyper.svg?style=flat
   :target: https://anaconda.org/bioconda/svtyper
   :alt:   (downloads)
.. |docker_svtyper| image:: https://quay.io/repository/biocontainers/svtyper/status
   :target: https://quay.io/repository/biocontainers/svtyper
.. _`svtyper/tags`: https://quay.io/repository/biocontainers/svtyper?tab=tags


.. raw:: html

    <script>
        var package = "svtyper";
        var versions = ["0.7.1","0.7.0","0.7.0","0.6.1","0.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svtyper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svtyper/README.html