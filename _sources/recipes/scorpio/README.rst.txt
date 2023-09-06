:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scorpio'
.. highlight: bash

scorpio
=======

.. conda:recipe:: scorpio
   :replaces_section_title:
   :noindex:

   Serious constellations of reoccurring phylogenetically\-independent origin

   :homepage: https://github.com/cov-lineages/scorpio
   :license: GPL-3.0-only
   :recipe: /`scorpio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scorpio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scorpio/meta.yaml>`_

   


.. conda:package:: scorpio

   |downloads_scorpio| |docker_scorpio|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.19-0</code>,  <code>0.3.17-0</code>,  <code>0.3.16-0</code>,  <code>0.3.15-0</code>,  <code>0.3.14-0</code>,  <code>0.3.13-0</code>,  <code>0.3.12-0</code>,  <code>0.3.9-0</code>,  <code>0.3.8-0</code>,  </span></summary>
      

      ``0.3.19-0``,  ``0.3.17-0``,  ``0.3.16-0``,  ``0.3.15-0``,  ``0.3.14-0``,  ``0.3.13-0``,  ``0.3.12-0``,  ``0.3.9-0``,  ``0.3.8-0``,  ``0.3.7-0``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.74``
   :depends constellations: 
   :depends python: ``>=3.6``
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

      mamba install scorpio

   and update with::

      mamba update scorpio

  To create a new environment, run::

      mamba create --name myenvname scorpio

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scorpio:<tag>

   (see `scorpio/tags`_ for valid values for ``<tag>``)


.. |downloads_scorpio| image:: https://img.shields.io/conda/dn/bioconda/scorpio.svg?style=flat
   :target: https://anaconda.org/bioconda/scorpio
   :alt:   (downloads)
.. |docker_scorpio| image:: https://quay.io/repository/biocontainers/scorpio/status
   :target: https://quay.io/repository/biocontainers/scorpio
.. _`scorpio/tags`: https://quay.io/repository/biocontainers/scorpio?tab=tags


.. raw:: html

    <script>
        var package = "scorpio";
        var versions = ["0.3.19","0.3.17","0.3.16","0.3.15","0.3.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scorpio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scorpio/README.html