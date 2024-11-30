:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vispr'
.. highlight: bash

vispr
=====

.. conda:recipe:: vispr
   :replaces_section_title:
   :noindex:

   VISPR is a visualization framework and analysis workflow for CRISPR\/Cas9 knockout screens. VISPR is designed to display results calculated by MAGeCK.

   :homepage: https://bitbucket.org/liulab/vispr
   :license: MIT / MIT
   :recipe: /`vispr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vispr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vispr/meta.yaml>`_

   


.. conda:package:: vispr

   |downloads_vispr| |docker_vispr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.17-1</code>,  <code>0.4.17-0</code>,  <code>0.4.16-0</code>,  <code>0.4.15-0</code>,  <code>0.4.14-2</code>,  <code>0.4.14-1</code>,  <code>0.4.14-0</code>,  <code>0.4.13-0</code>,  <code>0.4.12-0</code>,  </span></summary>
      

      ``0.4.17-1``,  ``0.4.17-0``,  ``0.4.16-0``,  ``0.4.15-0``,  ``0.4.14-2``,  ``0.4.14-1``,  ``0.4.14-0``,  ``0.4.13-0``,  ``0.4.12-0``,  ``0.4.11-0``,  ``0.4.10-0``,  ``0.4.9-0``,  ``0.4.8-0``,  ``0.4.7-0``,  ``0.4.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends appdirs: 
   :depends flask: 
   :depends numpy: ``1.10.*``
   :depends pandas: 
   :depends python: ``>=3``
   :depends pyyaml: 
   :depends scikit-learn: 
   :depends scipy: 
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

      mamba install vispr

   and update with::

      mamba update vispr

  To create a new environment, run::

      mamba create --name myenvname vispr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vispr:<tag>

   (see `vispr/tags`_ for valid values for ``<tag>``)


.. |downloads_vispr| image:: https://img.shields.io/conda/dn/bioconda/vispr.svg?style=flat
   :target: https://anaconda.org/bioconda/vispr
   :alt:   (downloads)
.. |docker_vispr| image:: https://quay.io/repository/biocontainers/vispr/status
   :target: https://quay.io/repository/biocontainers/vispr
.. _`vispr/tags`: https://quay.io/repository/biocontainers/vispr?tab=tags


.. raw:: html

    <script>
        var package = "vispr";
        var versions = ["0.4.17","0.4.17","0.4.16","0.4.15","0.4.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vispr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vispr/README.html