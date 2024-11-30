:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioinfokit'
.. highlight: bash

bioinfokit
==========

.. conda:recipe:: bioinfokit
   :replaces_section_title:
   :noindex:

   The bioinfokit toolkit aimed to provide various easy\-to\-use functionalities to analyze\, visualize\, and interpret the biological data generated from genome\-scale omics experiments.

   :homepage: https://reneshbedre.github.io/blog/howtoinstall.html
   :license: MIT
   :recipe: /`bioinfokit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioinfokit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioinfokit/meta.yaml>`_

   


.. conda:package:: bioinfokit

   |downloads_bioinfokit| |docker_bioinfokit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.3-0</code>,  <code>2.1.2-0</code>,  <code>2.1.1-0</code>,  <code>2.1.0-0</code>,  <code>2.0.9-0</code>,  <code>2.0.8-0</code>,  <code>2.0.6-0</code>,  <code>2.0.5-0</code>,  <code>2.0.4-0</code>,  </span></summary>
      

      ``2.1.3-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.9-0``,  ``2.0.8-0``,  ``2.0.6-0``,  ``2.0.5-0``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``1.0.8-1``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.9.9-0``,  ``0.9.8-0``,  ``0.9.7-0``,  ``0.9.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends adjusttext: 
   :depends matplotlib-base: 
   :depends matplotlib-venn: 
   :depends pandas: 
   :depends python: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
   :depends statsmodels: 
   :depends tabulate: 
   :depends textwrap3: 
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

      mamba install bioinfokit

   and update with::

      mamba update bioinfokit

  To create a new environment, run::

      mamba create --name myenvname bioinfokit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioinfokit:<tag>

   (see `bioinfokit/tags`_ for valid values for ``<tag>``)


.. |downloads_bioinfokit| image:: https://img.shields.io/conda/dn/bioconda/bioinfokit.svg?style=flat
   :target: https://anaconda.org/bioconda/bioinfokit
   :alt:   (downloads)
.. |docker_bioinfokit| image:: https://quay.io/repository/biocontainers/bioinfokit/status
   :target: https://quay.io/repository/biocontainers/bioinfokit
.. _`bioinfokit/tags`: https://quay.io/repository/biocontainers/bioinfokit?tab=tags


.. raw:: html

    <script>
        var package = "bioinfokit";
        var versions = ["2.1.3","2.1.2","2.1.1","2.1.0","2.0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioinfokit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioinfokit/README.html