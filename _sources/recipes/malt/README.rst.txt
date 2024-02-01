:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'malt'
.. highlight: bash

malt
====

.. conda:recipe:: malt
   :replaces_section_title:
   :noindex:

   A tool for mapping metagenomic data

   :homepage: http://ab.inf.uni-tuebingen.de/software/malt/
   :license: GPLv3
   :recipe: /`malt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/malt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/malt/meta.yaml>`_
   :links: biotools: :biotools:`malt`

   


.. conda:package:: malt

   |downloads_malt| |docker_malt|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.62-0</code>,  <code>0.61-0</code>,  <code>0.53-0</code>,  <code>0.41-1</code>,  <code>0.41-0</code>,  <code>0.5.2-1</code>,  <code>0.5.2-0</code>,  <code>0.5.1-1</code>,  <code>0.5.1-0</code>,  </span></summary>
      

      ``0.62-0``,  ``0.61-0``,  ``0.53-0``,  ``0.41-1``,  ``0.41-0``,  ``0.5.2-1``,  ``0.5.2-0``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: 
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

      mamba install malt

   and update with::

      mamba update malt

  To create a new environment, run::

      mamba create --name myenvname malt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/malt:<tag>

   (see `malt/tags`_ for valid values for ``<tag>``)


.. |downloads_malt| image:: https://img.shields.io/conda/dn/bioconda/malt.svg?style=flat
   :target: https://anaconda.org/bioconda/malt
   :alt:   (downloads)
.. |docker_malt| image:: https://quay.io/repository/biocontainers/malt/status
   :target: https://quay.io/repository/biocontainers/malt
.. _`malt/tags`: https://quay.io/repository/biocontainers/malt?tab=tags


.. raw:: html

    <script>
        var package = "malt";
        var versions = ["0.62","0.61","0.53","0.41","0.41"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/malt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/malt/README.html