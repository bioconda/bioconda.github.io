:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coolbox'
.. highlight: bash

coolbox
=======

.. conda:recipe:: coolbox
   :replaces_section_title:
   :noindex:

   Jupyter notebook based genomic data visulization toolkit.

   :homepage: https://github.com/GangCaoLab/CoolBox
   :license: GPL3
   :recipe: /`coolbox <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coolbox>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coolbox/meta.yaml>`_

   


.. conda:package:: coolbox

   |downloads_coolbox| |docker_coolbox|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.8-0</code>,  <code>0.3.7-1</code>,  <code>0.3.7-0</code>,  <code>0.3.6-0</code>,  <code>0.3.5-0</code>,  <code>0.3.4-0</code>,  <code>0.3.3-0</code>,  <code>0.3.1-0</code>,  <code>0.3.0-0</code>,  </span></summary>
      

      ``0.3.8-0``,  ``0.3.7-1``,  ``0.3.7-0``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.2-0``,  ``0.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends cooler: ``>=0.8.10``
   :depends dna_features_viewer: 
   :depends fire: 
   :depends h5py: 
   :depends htslib: 
   :depends intervaltree: 
   :depends ipywidgets: ``>=7.5.1``
   :depends jupyter: ``>=1.0.0``
   :depends matplotlib-base: ``>=3.1.1``
   :depends nbformat: 
   :depends numpy: 
   :depends numpydoc: 
   :depends pairix: 
   :depends pandas: ``>=1.0.0``
   :depends pybbi: 
   :depends python: ``>=3.7``
   :depends samtools: ``>=1.10``
   :depends scipy: ``>=1.0.0``
   :depends statsmodels: 
   :depends svgutils: 
   :depends voila: 
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

      mamba install coolbox

   and update with::

      mamba update coolbox

  To create a new environment, run::

      mamba create --name myenvname coolbox

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/coolbox:<tag>

   (see `coolbox/tags`_ for valid values for ``<tag>``)


.. |downloads_coolbox| image:: https://img.shields.io/conda/dn/bioconda/coolbox.svg?style=flat
   :target: https://anaconda.org/bioconda/coolbox
   :alt:   (downloads)
.. |docker_coolbox| image:: https://quay.io/repository/biocontainers/coolbox/status
   :target: https://quay.io/repository/biocontainers/coolbox
.. _`coolbox/tags`: https://quay.io/repository/biocontainers/coolbox?tab=tags


.. raw:: html

    <script>
        var package = "coolbox";
        var versions = ["0.3.8","0.3.7","0.3.7","0.3.6","0.3.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coolbox/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coolbox/README.html