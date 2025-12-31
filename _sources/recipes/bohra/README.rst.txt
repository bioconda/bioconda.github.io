:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bohra'
.. highlight: bash

bohra
=====

.. conda:recipe:: bohra
   :replaces_section_title:
   :noindex:

   Pipeline for analysing Illumina data for microbiological public health.

   :homepage: https://github.com/MDU-PHL/bohra
   :documentation: https://mdu-phl.github.io/bohra/
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`bohra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bohra>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bohra/meta.yaml>`_

   


.. conda:package:: bohra

   |downloads_bohra| |docker_bohra|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.6-0</code>,  <code>2.3.10-0</code>,  <code>2.3.9-0</code>,  <code>2.3.8-0</code>,  <code>2.3.7-0</code>,  <code>2.3.6-0</code>,  <code>2.3.4-0</code>,  <code>2.3.3-0</code>,  <code>2.3.2-0</code>,  </span></summary>
      

      ``3.0.6-0``,  ``2.3.10-0``,  ``2.3.9-0``,  ``2.3.8-0``,  ``2.3.7-0``,  ``2.3.6-0``,  ``2.3.4-0``,  ``2.3.3-0``,  ``2.3.2-0``,  ``2.3.0-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``1.2.20-0``,  ``1.2.19-1``,  ``1.2.19-0``,  ``1.2.18-0``,  ``1.2.16-0``,  ``1.2.15-0``,  ``1.2.14-0``,  ``1.2.12-0``,  ``1.2.11-0``,  ``1.2.10-1``,  ``1.2.10-0``,  ``1.2.9-0``,  ``1.2.6-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.1-0``,  ``1.1.8-0``,  ``1.1.7-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.27-0``,  ``1.0.26-0``,  ``1.0.25-0``,  ``1.0.24-0``,  ``1.0.23-0``,  ``1.0.22-0``,  ``1.0.20-1``,  ``1.0.20-0``,  ``1.0.19-0``

      
      .. raw:: html

         </details>
      

   
   :depends click: 
   :depends csvtk: 
   :depends jinja2: 
   :depends nextflow: 
   :depends numpy: 
   :depends pandas: 
   :depends psutil: 
   :depends pytest: 
   :depends python: ``>=3.11``
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

      mamba install bohra

   and update with::

      mamba update bohra

  To create a new environment, run::

      mamba create --name myenvname bohra

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bohra:<tag>

   (see `bohra/tags`_ for valid values for ``<tag>``)


.. |downloads_bohra| image:: https://img.shields.io/conda/dn/bioconda/bohra.svg?style=flat
   :target: https://anaconda.org/bioconda/bohra
   :alt:   (downloads)
.. |docker_bohra| image:: https://quay.io/repository/biocontainers/bohra/status
   :target: https://quay.io/repository/biocontainers/bohra
.. _`bohra/tags`: https://quay.io/repository/biocontainers/bohra?tab=tags


.. raw:: html

    <script>
        var package = "bohra";
        var versions = ["3.0.6","2.3.10","2.3.9","2.3.8","2.3.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bohra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bohra/README.html