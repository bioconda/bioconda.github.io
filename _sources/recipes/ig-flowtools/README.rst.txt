:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ig-flowtools'
.. highlight: bash

ig-flowtools
============

.. conda:recipe:: ig-flowtools
   :replaces_section_title:
   :noindex:

   set of tools for flow cytometry analysis

   :homepage: https://github.com/ImmPortDB/ig-flowtools
   :license: BSD / BSD License
   :recipe: /`ig-flowtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ig-flowtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ig-flowtools/meta.yaml>`_

   


.. conda:package:: ig-flowtools

   |downloads_ig-flowtools| |docker_ig-flowtools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.2-5</code>,  <code>2.0.2-4</code>,  <code>2.0.2-3</code>,  <code>2.0.2-2</code>,  <code>2.0.2-1</code>,  <code>2.0.2-0</code>,  <code>2.0.1-0</code>,  <code>2.0.0-0</code>,  <code>1.4.1-1</code>,  </span></summary>
      

      ``2.0.2-5``,  ``2.0.2-4``,  ``2.0.2-3``,  ``2.0.2-2``,  ``2.0.2-1``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.4.1-1``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-flowai: 
   :depends bioconductor-flowcl: 
   :depends bioconductor-flowcore: 
   :depends bioconductor-flowdensity: 
   :depends bioconductor-flowsom: 
   :depends bioconductor-flowviz: 
   :depends bioconductor-ggcyto: 
   :depends clustergrammer: 
   :depends flock: 
   :depends jinja2: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends r-base: 
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

      mamba install ig-flowtools

   and update with::

      mamba update ig-flowtools

  To create a new environment, run::

      mamba create --name myenvname ig-flowtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ig-flowtools:<tag>

   (see `ig-flowtools/tags`_ for valid values for ``<tag>``)


.. |downloads_ig-flowtools| image:: https://img.shields.io/conda/dn/bioconda/ig-flowtools.svg?style=flat
   :target: https://anaconda.org/bioconda/ig-flowtools
   :alt:   (downloads)
.. |docker_ig-flowtools| image:: https://quay.io/repository/biocontainers/ig-flowtools/status
   :target: https://quay.io/repository/biocontainers/ig-flowtools
.. _`ig-flowtools/tags`: https://quay.io/repository/biocontainers/ig-flowtools?tab=tags


.. raw:: html

    <script>
        var package = "ig-flowtools";
        var versions = ["2.0.2","2.0.2","2.0.2","2.0.2","2.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ig-flowtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ig-flowtools/README.html