:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'damageprofiler'
.. highlight: bash

damageprofiler
==============

.. conda:recipe:: damageprofiler
   :replaces_section_title:
   :noindex:

   A Java based tool to determine damage patterns on ancient DNA as a replacement for mapDamage

   :homepage: https://github.com/Integrative-Transcriptomics/DamageProfiler
   :license: GPL / GPL-3.0
   :recipe: /`damageprofiler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/damageprofiler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/damageprofiler/meta.yaml>`_

   


.. conda:package:: damageprofiler

   |downloads_damageprofiler| |docker_damageprofiler|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1-2</code>,  <code>1.1-1</code>,  <code>1.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.9-0</code>,  <code>0.4.8-1</code>,  <code>0.4.8-0</code>,  <code>0.4.6-2</code>,  <code>0.4.6-1</code>,  </span></summary>
      

      ``1.1-2``,  ``1.1-1``,  ``1.1-0``,  ``0.5.0-0``,  ``0.4.9-0``,  ``0.4.8-1``,  ``0.4.8-0``,  ``0.4.6-2``,  ``0.4.6-1``,  ``0.4.5-1``,  ``0.4.4-1``,  ``0.4.3-1``,  ``0.4.2-1``,  ``0.3.11-1``,  ``0.3.11-0``

      
      .. raw:: html

         </details>
      

   
   :depends font-ttf-dejavu-sans-mono: 
   :depends fontconfig: 
   :depends openjdk: ``>=11``
   :depends python: 
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

      mamba install damageprofiler

   and update with::

      mamba update damageprofiler

  To create a new environment, run::

      mamba create --name myenvname damageprofiler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/damageprofiler:<tag>

   (see `damageprofiler/tags`_ for valid values for ``<tag>``)


.. |downloads_damageprofiler| image:: https://img.shields.io/conda/dn/bioconda/damageprofiler.svg?style=flat
   :target: https://anaconda.org/bioconda/damageprofiler
   :alt:   (downloads)
.. |docker_damageprofiler| image:: https://quay.io/repository/biocontainers/damageprofiler/status
   :target: https://quay.io/repository/biocontainers/damageprofiler
.. _`damageprofiler/tags`: https://quay.io/repository/biocontainers/damageprofiler?tab=tags


.. raw:: html

    <script>
        var package = "damageprofiler";
        var versions = ["1.1","1.1","1.1","0.5.0","0.4.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/damageprofiler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/damageprofiler/README.html