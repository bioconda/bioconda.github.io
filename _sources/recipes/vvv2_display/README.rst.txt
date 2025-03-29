:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vvv2_display'
.. highlight: bash

vvv2_display
============

.. conda:recipe:: vvv2_display
   :replaces_section_title:
   :noindex:

   Creates png image file with all \[vardict\] variants proportions alongside genome\/assembly with annotations from \[vadr\].

   :homepage: https://github.com/ANSES-Ploufragan/vvv2_display/
   :license: GPL / GPL-3.0-only
   :recipe: /`vvv2_display <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vvv2_display>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vvv2_display/meta.yaml>`_

   


.. conda:package:: vvv2_display

   |downloads_vvv2_display| |docker_vvv2_display|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.3.8-0</code>,  <code>0.2.3.7-0</code>,  <code>0.2.3.6-0</code>,  <code>0.2.3.5-0</code>,  <code>0.2.3.4-0</code>,  <code>0.2.3.3-0</code>,  <code>0.2.3.2-0</code>,  <code>0.2.3.1-0</code>,  <code>0.2.2-0</code>,  </span></summary>
      

      ``0.2.3.8-0``,  ``0.2.3.7-0``,  ``0.2.3.6-0``,  ``0.2.3.5-0``,  ``0.2.3.4-0``,  ``0.2.3.3-0``,  ``0.2.3.2-0``,  ``0.2.3.1-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.1.10-0``

      
      .. raw:: html

         </details>
      

   
   :depends numpy: ``>=1.23.3``
   :depends pip: 
   :depends pysam: ``>=0.19.1``
   :depends python: ``>=3.9``
   :depends r-cowplot: ``>=1.1.1``
   :depends r-ggplot2: ``>=3.4.4``
   :depends r-gridextra: ``>=2.3``
   :depends r-jsonlite: ``>=1.8.8``
   :depends r-stringr: ``>=1.5.1``
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

      mamba install vvv2_display

   and update with::

      mamba update vvv2_display

  To create a new environment, run::

      mamba create --name myenvname vvv2_display

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vvv2_display:<tag>

   (see `vvv2_display/tags`_ for valid values for ``<tag>``)


.. |downloads_vvv2_display| image:: https://img.shields.io/conda/dn/bioconda/vvv2_display.svg?style=flat
   :target: https://anaconda.org/bioconda/vvv2_display
   :alt:   (downloads)
.. |docker_vvv2_display| image:: https://quay.io/repository/biocontainers/vvv2_display/status
   :target: https://quay.io/repository/biocontainers/vvv2_display
.. _`vvv2_display/tags`: https://quay.io/repository/biocontainers/vvv2_display?tab=tags


.. raw:: html

    <script>
        var package = "vvv2_display";
        var versions = ["0.2.3.8","0.2.3.7","0.2.3.6","0.2.3.5","0.2.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vvv2_display/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vvv2_display/README.html