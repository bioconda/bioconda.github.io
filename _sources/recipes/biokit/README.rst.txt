:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biokit'
.. highlight: bash

biokit
======

.. conda:recipe:: biokit
   :replaces_section_title:
   :noindex:

   Set of visualisation and analysis tools for biological data sets

   :homepage: http://pypi.python.org/pypi/biokit
   :license: BSD
   :recipe: /`biokit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biokit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biokit/meta.yaml>`_

   


.. conda:package:: biokit

   |downloads_biokit| |docker_biokit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.0-0</code>,  <code>0.4.6-1</code>,  <code>0.4.6-0</code>,  <code>0.4.4-1</code>,  <code>0.4.4-0</code>,  <code>0.4.2-1</code>,  <code>0.4.2-0</code>,  <code>0.4.1-4</code>,  <code>0.4.1-2</code>,  </span></summary>
      

      ``0.5.0-0``,  ``0.4.6-1``,  ``0.4.6-0``,  ``0.4.4-1``,  ``0.4.4-0``,  ``0.4.2-1``,  ``0.4.2-0``,  ``0.4.1-4``,  ``0.4.1-2``,  ``0.4.1-0``,  ``0.2.1-0``,  ``0.1.4-0``,  ``0.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends bioservices: ``>=1.4.16``
   :depends colorlog: 
   :depends colormap: 
   :depends easydev: ``>=0.9.34``
   :depends matplotlib-base: 
   :depends mesalib: 
   :depends numpydoc: 
   :depends pandas: 
   :depends python: 
   :depends pyyaml: 
   :depends scipy: 
   :depends xmltodict: 
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

      mamba install biokit

   and update with::

      mamba update biokit

  To create a new environment, run::

      mamba create --name myenvname biokit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biokit:<tag>

   (see `biokit/tags`_ for valid values for ``<tag>``)


.. |downloads_biokit| image:: https://img.shields.io/conda/dn/bioconda/biokit.svg?style=flat
   :target: https://anaconda.org/bioconda/biokit
   :alt:   (downloads)
.. |docker_biokit| image:: https://quay.io/repository/biocontainers/biokit/status
   :target: https://quay.io/repository/biocontainers/biokit
.. _`biokit/tags`: https://quay.io/repository/biocontainers/biokit?tab=tags


.. raw:: html

    <script>
        var package = "biokit";
        var versions = ["0.5.0","0.4.6","0.4.6","0.4.4","0.4.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biokit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biokit/README.html