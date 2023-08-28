:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'andi'
.. highlight: bash

andi
====

.. conda:recipe:: andi
   :replaces_section_title:
   :noindex:

   Efficient Estimation of Evolutionary Distances

   :homepage: https://github.com/evolbioinf/andi/
   :license: GPL / GPL-3.0-or-later
   :recipe: /`andi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/andi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/andi/meta.yaml>`_
   :links: biotools: :biotools:`andi`, doi: :doi:`10.1093/bioinformatics/btu815`

   


.. conda:package:: andi

   |downloads_andi| |docker_andi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.14-0</code>,  <code>0.13-4</code>,  <code>0.13-3</code>,  <code>0.13-2</code>,  <code>0.13-1</code>,  <code>0.13-0</code>,  <code>0.12-4</code>,  <code>0.12-3</code>,  <code>0.12-0</code>,  </span></summary>
      

      ``0.14-0``,  ``0.13-4``,  ``0.13-3``,  ``0.13-2``,  ``0.13-1``,  ``0.13-0``,  ``0.12-4``,  ``0.12-3``,  ``0.12-0``,  ``0.11-1``,  ``0.11-0``,  ``0.10-0``

      
      .. raw:: html

         </details>
      

   
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libdivsufsort: ``>=2.0.2,<2.1.0a0``
   :depends libgcc-ng: ``>=12``
   :depends mkl: 
   :depends openblas: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install andi

   and update with::

      mamba update andi

  To create a new environment, run::

      mamba create --name myenvname andi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/andi:<tag>

   (see `andi/tags`_ for valid values for ``<tag>``)


.. |downloads_andi| image:: https://img.shields.io/conda/dn/bioconda/andi.svg?style=flat
   :target: https://anaconda.org/bioconda/andi
   :alt:   (downloads)
.. |docker_andi| image:: https://quay.io/repository/biocontainers/andi/status
   :target: https://quay.io/repository/biocontainers/andi
.. _`andi/tags`: https://quay.io/repository/biocontainers/andi?tab=tags


.. raw:: html

    <script>
        var package = "andi";
        var versions = ["0.14","0.13","0.13","0.13","0.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/andi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/andi/README.html