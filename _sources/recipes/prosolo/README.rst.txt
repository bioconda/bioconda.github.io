:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prosolo'
.. highlight: bash

prosolo
=======

.. conda:recipe:: prosolo
   :replaces_section_title:
   :noindex:

   A highly sensitive and accurate Bayesian caller for variants in single cell sequencing data.

   :homepage: https://github.com/prosolo/prosolo/tree/v0.6.1
   :license: GPLv3
   :recipe: /`prosolo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prosolo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prosolo/meta.yaml>`_

   


.. conda:package:: prosolo

   |downloads_prosolo| |docker_prosolo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.1-2</code>,  <code>0.6.1-1</code>,  <code>0.6.1-0</code>,  <code>0.6.0-0</code>,  <code>0.5.0-0</code>,  <code>0.4.0-4</code>,  <code>0.4.0-3</code>,  <code>0.4.0-2</code>,  <code>0.4.0-1</code>,  </span></summary>
      

      ``0.6.1-2``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.0-4``,  ``0.4.0-3``,  ``0.4.0-2``,  ``0.4.0-1``,  ``0.3.1-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends clangdev: 
   :depends gsl: ``>=2.6,<2.7.0a0``
   :depends libcblas: ``>=3.8.0,<4.0a0``
   :depends xz: ``>=5.2.5,<5.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install prosolo

   and update with::

      mamba update prosolo

  To create a new environment, run::

      mamba create --name myenvname prosolo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/prosolo:<tag>

   (see `prosolo/tags`_ for valid values for ``<tag>``)


.. |downloads_prosolo| image:: https://img.shields.io/conda/dn/bioconda/prosolo.svg?style=flat
   :target: https://anaconda.org/bioconda/prosolo
   :alt:   (downloads)
.. |docker_prosolo| image:: https://quay.io/repository/biocontainers/prosolo/status
   :target: https://quay.io/repository/biocontainers/prosolo
.. _`prosolo/tags`: https://quay.io/repository/biocontainers/prosolo?tab=tags


.. raw:: html

    <script>
        var package = "prosolo";
        var versions = ["0.6.1","0.6.1","0.6.1","0.6.0","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prosolo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prosolo/README.html