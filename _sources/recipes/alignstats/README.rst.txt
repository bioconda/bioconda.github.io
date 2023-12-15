:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'alignstats'
.. highlight: bash

alignstats
==========

.. conda:recipe:: alignstats
   :replaces_section_title:
   :noindex:

   Comprehensive alignment\, whole\-genome coverage\, and capture coverage statistics.

   :homepage: https://github.com/jfarek/alignstats
   :license: BSD-3-Clause
   :recipe: /`alignstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alignstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alignstats/meta.yaml>`_

   


.. conda:package:: alignstats

   |downloads_alignstats| |docker_alignstats|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.10-1</code>,  <code>0.10-0</code>,  <code>0.9.1-2</code>,  <code>0.9.1-1</code>,  <code>0.9.1-0</code>,  <code>0.9-0</code>,  <code>0.8-0</code>,  <code>0.7-0</code>,  <code>0.5-1</code>,  </span></summary>
      

      ``0.10-1``,  ``0.10-0``,  ``0.9.1-2``,  ``0.9.1-1``,  ``0.9.1-0``,  ``0.9-0``,  ``0.8-0``,  ``0.7-0``,  ``0.5-1``,  ``0.5-0``,  ``0.3-1``,  ``0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.17,<1.20.0a0``
   :depends libgcc-ng: ``>=12``
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

      mamba install alignstats

   and update with::

      mamba update alignstats

  To create a new environment, run::

      mamba create --name myenvname alignstats

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/alignstats:<tag>

   (see `alignstats/tags`_ for valid values for ``<tag>``)


.. |downloads_alignstats| image:: https://img.shields.io/conda/dn/bioconda/alignstats.svg?style=flat
   :target: https://anaconda.org/bioconda/alignstats
   :alt:   (downloads)
.. |docker_alignstats| image:: https://quay.io/repository/biocontainers/alignstats/status
   :target: https://quay.io/repository/biocontainers/alignstats
.. _`alignstats/tags`: https://quay.io/repository/biocontainers/alignstats?tab=tags


.. raw:: html

    <script>
        var package = "alignstats";
        var versions = ["0.10","0.10","0.9.1","0.9.1","0.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alignstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alignstats/README.html