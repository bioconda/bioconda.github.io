:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wgdi'
.. highlight: bash

wgdi
====

.. conda:recipe:: wgdi
   :replaces_section_title:
   :noindex:

   Whole Genome Duplication Identification

   :homepage: https://github.com/SunPengChuan/wgdi
   :license: BSD / BSD-2-Clause
   :recipe: /`wgdi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wgdi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wgdi/meta.yaml>`_

   Python utility libraries on comparative genomics


.. conda:package:: wgdi

   |downloads_wgdi| |docker_wgdi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.5-0</code>,  <code>0.6.4-0</code>,  <code>0.6.3-0</code>,  <code>0.6.2-0</code>,  <code>0.6.1-0</code>,  <code>0.6.0-0</code>,  <code>0.5.9-0</code>,  <code>0.5.8-0</code>,  <code>0.5.7-0</code>,  </span></summary>
      

      ``0.6.5-0``,  ``0.6.4-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.9-0``,  ``0.5.8-0``,  ``0.5.7-0``,  ``0.5.6-0``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.4.9-0``,  ``0.4.7-0``,  ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends divvier: ``1.01``
   :depends fasttree: 
   :depends iqtree: 
   :depends mafft: 
   :depends matplotlib-base: 
   :depends muscle: ``3.8.1551``
   :depends numpy: 
   :depends pal2nal: 
   :depends paml: 
   :depends pandas: ``>=1.1.0``
   :depends python: ``>=3``
   :depends scipy: 
   :depends trimal: 
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

      mamba install wgdi

   and update with::

      mamba update wgdi

  To create a new environment, run::

      mamba create --name myenvname wgdi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/wgdi:<tag>

   (see `wgdi/tags`_ for valid values for ``<tag>``)


.. |downloads_wgdi| image:: https://img.shields.io/conda/dn/bioconda/wgdi.svg?style=flat
   :target: https://anaconda.org/bioconda/wgdi
   :alt:   (downloads)
.. |docker_wgdi| image:: https://quay.io/repository/biocontainers/wgdi/status
   :target: https://quay.io/repository/biocontainers/wgdi
.. _`wgdi/tags`: https://quay.io/repository/biocontainers/wgdi?tab=tags


.. raw:: html

    <script>
        var package = "wgdi";
        var versions = ["0.6.5","0.6.4","0.6.3","0.6.2","0.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wgdi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wgdi/README.html