:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pipits'
.. highlight: bash

pipits
======

.. conda:recipe:: pipits
   :replaces_section_title:
   :noindex:

   PIPITS\: An automated pipeline for analyses of fungal internal transcribed spacer \(ITS\) sequences from the Illumina sequencing platform.

   :homepage: https://github.com/hsgweon/pipits
   :documentation: https://github.com/hsgweon/pipits/blob/4.0/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`pipits <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pipits>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pipits/meta.yaml>`_
   :links: doi: :doi:`10.1111/2041-210X.12399`

   


.. conda:package:: pipits

   |downloads_pipits| |docker_pipits|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.0-1</code>,  <code>4.0-0</code>,  <code>3.1-0</code>,  <code>3.0-0</code>,  <code>2.8-0</code>,  <code>2.7-0</code>,  <code>2.6-0</code>,  <code>2.5-0</code>,  <code>2.4-0</code>,  </span></summary>
      

      ``4.0-1``,  ``4.0-0``,  ``3.1-0``,  ``3.0-0``,  ``2.8-0``,  ``2.7-0``,  ``2.6-0``,  ``2.5-0``,  ``2.4-0``,  ``2.3-4``,  ``2.3-3``,  ``2.3-2``,  ``2.3-1``,  ``2.3-0``,  ``2.2-2``,  ``2.2-1``,  ``2.1-5``,  ``2.1-3``,  ``2.1-2``,  ``2.1-1``,  ``2.0-1``,  ``2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biom-format: 
   :depends fastx_toolkit: 
   :depends hmmer: 
   :depends itsx: 
   :depends numpy: 
   :depends progressbar2: 
   :depends python: ``>=3.10``
   :depends rdptools: 
   :depends requests: 
   :depends seqkit: 
   :depends vsearch: 
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

      mamba install pipits

   and update with::

      mamba update pipits

  To create a new environment, run::

      mamba create --name myenvname pipits

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pipits:<tag>

   (see `pipits/tags`_ for valid values for ``<tag>``)


.. |downloads_pipits| image:: https://img.shields.io/conda/dn/bioconda/pipits.svg?style=flat
   :target: https://anaconda.org/bioconda/pipits
   :alt:   (downloads)
.. |docker_pipits| image:: https://quay.io/repository/biocontainers/pipits/status
   :target: https://quay.io/repository/biocontainers/pipits
.. _`pipits/tags`: https://quay.io/repository/biocontainers/pipits?tab=tags


.. raw:: html

    <script>
        var package = "pipits";
        var versions = ["4.0","4.0","3.1","3.0","2.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pipits/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pipits/README.html