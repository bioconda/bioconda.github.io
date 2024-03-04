:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hicstuff'
.. highlight: bash

hicstuff
========

.. conda:recipe:: hicstuff
   :replaces_section_title:
   :noindex:

   General purpose stuff to generate and handle Hi\-C data in its simplest form.

   :homepage: https://github.com/koszullab/hicstuff
   :documentation: https://hicstuff.readthedocs.io/en/latest/
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`hicstuff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hicstuff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hicstuff/meta.yaml>`_

   


.. conda:package:: hicstuff

   |downloads_hicstuff| |docker_hicstuff|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.2-0</code>,  <code>3.2.1-0</code>,  <code>3.2.0-0</code>,  <code>3.1.7-0</code>,  <code>3.1.6-0</code>,  <code>3.1.5-2</code>,  <code>3.1.5-1</code>,  <code>3.1.5-0</code>,  <code>3.1.4-0</code>,  </span></summary>
      

      ``3.2.2-0``,  ``3.2.1-0``,  ``3.2.0-0``,  ``3.1.7-0``,  ``3.1.6-0``,  ``3.1.5-2``,  ``3.1.5-1``,  ``3.1.5-0``,  ``3.1.4-0``,  ``3.1.3-0``,  ``3.1.2-0``,  ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.3-0``,  ``3.0.2-0``,  ``2.3.2-0``,  ``2.3.1-0``,  ``2.3.0-2``,  ``2.3.0-1``,  ``2.3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends bowtie2: 
   :depends cooler: 
   :depends coreutils: 
   :depends docopt: 
   :depends matplotlib-base: 
   :depends minimap2: 
   :depends numpy: 
   :depends pandas: 
   :depends pyfastx: 
   :depends pysam: 
   :depends python: ``>=3.7``
   :depends requests: 
   :depends samtools: 
   :depends scikit-learn: 
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

      mamba install hicstuff

   and update with::

      mamba update hicstuff

  To create a new environment, run::

      mamba create --name myenvname hicstuff

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hicstuff:<tag>

   (see `hicstuff/tags`_ for valid values for ``<tag>``)


.. |downloads_hicstuff| image:: https://img.shields.io/conda/dn/bioconda/hicstuff.svg?style=flat
   :target: https://anaconda.org/bioconda/hicstuff
   :alt:   (downloads)
.. |docker_hicstuff| image:: https://quay.io/repository/biocontainers/hicstuff/status
   :target: https://quay.io/repository/biocontainers/hicstuff
.. _`hicstuff/tags`: https://quay.io/repository/biocontainers/hicstuff?tab=tags


.. raw:: html

    <script>
        var package = "hicstuff";
        var versions = ["3.2.2","3.2.1","3.2.0","3.1.7","3.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hicstuff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hicstuff/README.html