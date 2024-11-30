:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'macrel'
.. highlight: bash

macrel
======

.. conda:recipe:: macrel
   :replaces_section_title:
   :noindex:

   A pipeline for AMP \(antimicrobial peptide\) prediction

   :homepage: https://github.com/BigDataBiology/macrel
   :license: MIT
   :recipe: /`macrel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/macrel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/macrel/meta.yaml>`_
   :links: doi: :doi:`10.7717/peerj.10555`

   Used for the prediction of AMPs in \(meta\)genomes.



.. conda:package:: macrel

   |downloads_macrel| |docker_macrel|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.0-0</code>,  <code>1.4.0-0</code>,  <code>1.3.0-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  <code>1.1.0-1</code>,  <code>1.1.0-0</code>,  <code>1.0.1-0</code>,  <code>1.0.0-1</code>,  </span></summary>
      

      ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.0-2``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends atomicwrites: 
   :depends joblib: ``<1.3.0``
   :depends megahit: 
   :depends ngless: 
   :depends paladin: 
   :depends pandas: 
   :depends pyrodigal: ``>=0.7.3``
   :depends python: 
   :depends scikit-learn: ``<1.3.0``
   :depends tzlocal: 
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

      mamba install macrel

   and update with::

      mamba update macrel

  To create a new environment, run::

      mamba create --name myenvname macrel

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/macrel:<tag>

   (see `macrel/tags`_ for valid values for ``<tag>``)


.. |downloads_macrel| image:: https://img.shields.io/conda/dn/bioconda/macrel.svg?style=flat
   :target: https://anaconda.org/bioconda/macrel
   :alt:   (downloads)
.. |docker_macrel| image:: https://quay.io/repository/biocontainers/macrel/status
   :target: https://quay.io/repository/biocontainers/macrel
.. _`macrel/tags`: https://quay.io/repository/biocontainers/macrel?tab=tags


.. raw:: html

    <script>
        var package = "macrel";
        var versions = ["1.5.0","1.4.0","1.3.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/macrel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/macrel/README.html