:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'confindr'
.. highlight: bash

confindr
========

.. conda:recipe:: confindr
   :replaces_section_title:
   :noindex:

   Detect intra\- and inter\-species bacterial contamination in NGS reads.

   :homepage: https://github.com/OLC-Bioinformatics/ConFindr
   :documentation: https://OLC-Bioinformatics.github.io/ConFindr
   
   :license: MIT / MIT
   :recipe: /`confindr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/confindr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/confindr/meta.yaml>`_

   


.. conda:package:: confindr

   |downloads_confindr| |docker_confindr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.2-0</code>,  <code>0.8.1-1</code>,  <code>0.8.1-0</code>,  <code>0.7.4-0</code>,  <code>0.7.3-0</code>,  <code>0.7.2-0</code>,  <code>0.7.1-0</code>,  <code>0.7.0-1</code>,  <code>0.7.0-0</code>,  </span></summary>
      

      ``0.8.2-0``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.7.4-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.8-0``,  ``0.4.7-0``,  ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bbmap: ``>=39.01``
   :depends biopython: ``1.81.*``
   :depends kma: ``>=1.4.9``
   :depends mash: ``>=2.3``
   :depends minimap2: 
   :depends pysam: ``>=0.15``
   :depends pytest: 
   :depends python: ``>=3.9.15``
   :depends rauth: 
   :depends samtools: ``>=1.6``
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

      mamba install confindr

   and update with::

      mamba update confindr

  To create a new environment, run::

      mamba create --name myenvname confindr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/confindr:<tag>

   (see `confindr/tags`_ for valid values for ``<tag>``)


.. |downloads_confindr| image:: https://img.shields.io/conda/dn/bioconda/confindr.svg?style=flat
   :target: https://anaconda.org/bioconda/confindr
   :alt:   (downloads)
.. |docker_confindr| image:: https://quay.io/repository/biocontainers/confindr/status
   :target: https://quay.io/repository/biocontainers/confindr
.. _`confindr/tags`: https://quay.io/repository/biocontainers/confindr?tab=tags


.. raw:: html

    <script>
        var package = "confindr";
        var versions = ["0.8.2","0.8.1","0.8.1","0.7.4","0.7.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/confindr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/confindr/README.html