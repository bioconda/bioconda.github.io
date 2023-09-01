:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'intervene'
.. highlight: bash

intervene
=========

.. conda:recipe:: intervene
   :replaces_section_title:
   :noindex:

   A tool for intersection of multiple gene or genomic region sets and visualization as venn diagrams\, UpSet plots or pariwaise heatmaps

   :homepage: https://github.com/asntech/intervene
   :license: MIT / MIT License
   :recipe: /`intervene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/intervene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/intervene/meta.yaml>`_
   :links: biotools: :biotools:`Intervene`, doi: :doi:`10.1186/s12859-017-1708-7`

   


.. conda:package:: intervene

   |downloads_intervene| |docker_intervene|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.5-1</code>,  <code>0.6.5-0</code>,  <code>0.6.4-5</code>,  <code>0.6.4-4</code>,  <code>0.6.4-3</code>,  <code>0.6.4-2</code>,  <code>0.6.4-1</code>,  <code>0.6.4-0</code>,  <code>0.6.2-0</code>,  </span></summary>
      

      ``0.6.5-1``,  ``0.6.5-0``,  ``0.6.4-5``,  ``0.6.4-4``,  ``0.6.4-3``,  ``0.6.4-2``,  ``0.6.4-1``,  ``0.6.4-0``,  ``0.6.2-0``,  ``0.5.9-0``,  ``0.5.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends bedtools: ``>=2.29.1``
   :depends matplotlib-base: ``<3.4``
   :depends numpy: 
   :depends pandas: ``>=1.0.0``
   :depends pybedtools: 
   :depends pysam: ``>=0.15``
   :depends python: 
   :depends r-base: 
   :depends r-cairo: 
   :depends r-corrplot: 
   :depends r-upsetr: ``>=1.4.0``
   :depends scipy: 
   :depends seaborn: 
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

      mamba install intervene

   and update with::

      mamba update intervene

  To create a new environment, run::

      mamba create --name myenvname intervene

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/intervene:<tag>

   (see `intervene/tags`_ for valid values for ``<tag>``)


.. |downloads_intervene| image:: https://img.shields.io/conda/dn/bioconda/intervene.svg?style=flat
   :target: https://anaconda.org/bioconda/intervene
   :alt:   (downloads)
.. |docker_intervene| image:: https://quay.io/repository/biocontainers/intervene/status
   :target: https://quay.io/repository/biocontainers/intervene
.. _`intervene/tags`: https://quay.io/repository/biocontainers/intervene?tab=tags


.. raw:: html

    <script>
        var package = "intervene";
        var versions = ["0.6.5","0.6.5","0.6.4","0.6.4","0.6.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/intervene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/intervene/README.html