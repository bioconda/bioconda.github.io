:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plotsr'
.. highlight: bash

plotsr
======

.. conda:recipe:: plotsr
   :replaces_section_title:
   :noindex:

   Visualiser for structural annotations between multiple genomes

   :homepage: https://github.com/schneebergerlab/plotsr
   :license: MIT / MIT
   :recipe: /`plotsr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plotsr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plotsr/meta.yaml>`_

   


.. conda:package:: plotsr

   |downloads_plotsr| |docker_plotsr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.1-0</code>,  <code>1.1.0-0</code>,  <code>1.0.0-0</code>,  <code>0.5.4-0</code>,  <code>0.5.3-0</code>,  <code>0.5.2-0</code>,  <code>0.5.1-0</code>,  <code>0.5-1</code>,  <code>0.5-0</code>,  </span></summary>
      

      ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5-1``,  ``0.5-0``,  ``0.4-0``,  ``0.3.1-0``,  ``0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends matplotlib-base: ``>=3.3``
   :depends numpy: ``>=1.21``
   :depends pandas: ``>=1.2.4``
   :depends python: 
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

      mamba install plotsr

   and update with::

      mamba update plotsr

  To create a new environment, run::

      mamba create --name myenvname plotsr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/plotsr:<tag>

   (see `plotsr/tags`_ for valid values for ``<tag>``)


.. |downloads_plotsr| image:: https://img.shields.io/conda/dn/bioconda/plotsr.svg?style=flat
   :target: https://anaconda.org/bioconda/plotsr
   :alt:   (downloads)
.. |docker_plotsr| image:: https://quay.io/repository/biocontainers/plotsr/status
   :target: https://quay.io/repository/biocontainers/plotsr
.. _`plotsr/tags`: https://quay.io/repository/biocontainers/plotsr?tab=tags


.. raw:: html

    <script>
        var package = "plotsr";
        var versions = ["1.1.1","1.1.0","1.0.0","0.5.4","0.5.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plotsr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plotsr/README.html