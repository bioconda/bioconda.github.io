:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'humann'
.. highlight: bash

humann
======

.. conda:recipe:: humann
   :replaces_section_title:
   :noindex:

   HUMAnN\: The HMP Unified Metabolic Analysis Network\, version 3

   :homepage: https://huttenhower.sph.harvard.edu/humann
   :documentation: http://huttenhower.sph.harvard.edu/humann
   
   :developer docs: https://github.com/biobakery/humann
   :license: MIT / MIT
   :recipe: /`humann <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/humann>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/humann/meta.yaml>`_
   :links: doi: :doi:`10.7554/eLife.65088`, biotools: :biotools:`humann`

   


.. conda:package:: humann

   |downloads_humann| |docker_humann|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.9-0</code>,  <code>3.8-0</code>,  <code>3.7-1</code>,  <code>3.7-0</code>,  <code>3.6.1-1</code>,  <code>3.6.1-0</code>,  <code>3.6-2</code>,  <code>3.6-1</code>,  <code>3.6-0</code>,  </span></summary>
      

      ``3.9-0``,  ``3.8-0``,  ``3.7-1``,  ``3.7-0``,  ``3.6.1-1``,  ``3.6.1-0``,  ``3.6-2``,  ``3.6-1``,  ``3.6-0``,  ``3.5-0``,  ``3.1.1-1``,  ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.1-0``,  ``3.0.0-1``,  ``3.0.0-0``,  ``3.0.0a4-0``

      
      .. raw:: html

         </details>
      

   
   :depends bowtie2: ``>2.1``
   :depends diamond: ``>=0.9.36``
   :depends glpk: 
   :depends metaphlan: ``>=4.0``
   :depends python: ``>=3``
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

      mamba install humann

   and update with::

      mamba update humann

  To create a new environment, run::

      mamba create --name myenvname humann

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/humann:<tag>

   (see `humann/tags`_ for valid values for ``<tag>``)


.. |downloads_humann| image:: https://img.shields.io/conda/dn/bioconda/humann.svg?style=flat
   :target: https://anaconda.org/bioconda/humann
   :alt:   (downloads)
.. |docker_humann| image:: https://quay.io/repository/biocontainers/humann/status
   :target: https://quay.io/repository/biocontainers/humann
.. _`humann/tags`: https://quay.io/repository/biocontainers/humann?tab=tags


.. raw:: html

    <script>
        var package = "humann";
        var versions = ["3.9","3.8","3.7","3.7","3.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/humann/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/humann/README.html