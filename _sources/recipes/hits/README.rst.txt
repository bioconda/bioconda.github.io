:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hits'
.. highlight: bash

hits
====

.. conda:recipe:: hits
   :replaces_section_title:
   :noindex:

   utilities for processing high\-throughput sequencing experiments

   :homepage: https://github.com/jeffhussmann/hits
   :license: GPLv3
   :recipe: /`hits <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hits>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hits/meta.yaml>`_

   


.. conda:package:: hits

   |downloads_hits| |docker_hits|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.0-1</code>,  <code>0.4.0-0</code>,  <code>0.3.3-1</code>,  <code>0.3.3-0</code>,  <code>0.3.2-0</code>,  <code>0.3.0-0</code>,  <code>0.1-2</code>,  <code>0.1-1</code>,  <code>0.1-0</code>,  </span></summary>
      

      ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.3-1``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.0-0``,  ``0.1-2``,  ``0.1-1``,  ``0.1-0``,  ``0.0.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.72``
   :depends bokeh: 
   :depends ipython: ``>=7.8.0``
   :depends ipywidgets: ``>=7.4.2``
   :depends libgcc-ng: ``>=12``
   :depends matplotlib-base: ``>=3.0.2``
   :depends numpy: ``>=1.15.4``
   :depends pandas: ``>=0.23.4``
   :depends pillow: ``>=5.3.0``
   :depends pysam: ``>=0.15.1``
   :depends python: ``>=3.8,<3.9.0a0``
   :depends python_abi: ``3.8.* *_cp38``
   :depends pyyaml: ``>=3.13``
   :depends scipy: ``>=1.2.1``
   :depends seaborn: ``>=0.11.0``
   :depends statsmodels: ``>=0.12.1``
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

      mamba install hits

   and update with::

      mamba update hits

  To create a new environment, run::

      mamba create --name myenvname hits

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hits:<tag>

   (see `hits/tags`_ for valid values for ``<tag>``)


.. |downloads_hits| image:: https://img.shields.io/conda/dn/bioconda/hits.svg?style=flat
   :target: https://anaconda.org/bioconda/hits
   :alt:   (downloads)
.. |docker_hits| image:: https://quay.io/repository/biocontainers/hits/status
   :target: https://quay.io/repository/biocontainers/hits
.. _`hits/tags`: https://quay.io/repository/biocontainers/hits?tab=tags


.. raw:: html

    <script>
        var package = "hits";
        var versions = ["0.4.0","0.4.0","0.3.3","0.3.3","0.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hits/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hits/README.html