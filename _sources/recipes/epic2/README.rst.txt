:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'epic2'
.. highlight: bash

epic2
=====

.. conda:recipe:: epic2
   :replaces_section_title:
   :noindex:

   Ultraperformant Chip\-Seq broad domain finder based on SICER.

   :homepage: http://github.com/endrebak/epic2
   :license: MIT
   :recipe: /`epic2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epic2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epic2/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btz232`

   


.. conda:package:: epic2

   |downloads_epic2| |docker_epic2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.52-6</code>,  <code>0.0.52-5</code>,  <code>0.0.52-4</code>,  <code>0.0.52-3</code>,  <code>0.0.52-2</code>,  <code>0.0.52-1</code>,  <code>0.0.52-0</code>,  <code>0.0.51-0</code>,  <code>0.0.50-0</code>,  </span></summary>
      

      ``0.0.52-6``,  ``0.0.52-5``,  ``0.0.52-4``,  ``0.0.52-3``,  ``0.0.52-2``,  ``0.0.52-1``,  ``0.0.52-0``,  ``0.0.51-0``,  ``0.0.50-0``,  ``0.0.48-1``,  ``0.0.48-0``,  ``0.0.47-0``,  ``0.0.44-0``,  ``0.0.43-0``,  ``0.0.41-3``,  ``0.0.41-2``,  ``0.0.41-1``,  ``0.0.41-0``,  ``0.0.40-0``,  ``0.0.39-0``,  ``0.0.37-0``,  ``0.0.36-0``,  ``0.0.35-0``,  ``0.0.34-0``,  ``0.0.33-0``,  ``0.0.26-0``,  ``0.0.16-0``,  ``0.0.15-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends natsort: 
   :depends numpy: 
   :depends pysam: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scipy: 
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

      mamba install epic2

   and update with::

      mamba update epic2

  To create a new environment, run::

      mamba create --name myenvname epic2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/epic2:<tag>

   (see `epic2/tags`_ for valid values for ``<tag>``)


.. |downloads_epic2| image:: https://img.shields.io/conda/dn/bioconda/epic2.svg?style=flat
   :target: https://anaconda.org/bioconda/epic2
   :alt:   (downloads)
.. |docker_epic2| image:: https://quay.io/repository/biocontainers/epic2/status
   :target: https://quay.io/repository/biocontainers/epic2
.. _`epic2/tags`: https://quay.io/repository/biocontainers/epic2?tab=tags


.. raw:: html

    <script>
        var package = "epic2";
        var versions = ["0.0.52","0.0.52","0.0.52","0.0.52","0.0.52"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/epic2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/epic2/README.html