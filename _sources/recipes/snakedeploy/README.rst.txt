:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakedeploy'
.. highlight: bash

snakedeploy
===========

.. conda:recipe:: snakedeploy
   :replaces_section_title:
   :noindex:

   Helper for deploying published Snakemake pipelines.

   :homepage: https://github.com/snakemake/snakedeploy
   :license: MPL-2.0
   :recipe: /`snakedeploy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakedeploy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakedeploy/meta.yaml>`_

   


.. conda:package:: snakedeploy

   |downloads_snakedeploy| |docker_snakedeploy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.10.4-0</code>,  <code>0.10.3-0</code>,  <code>0.10.2-0</code>,  <code>0.10.1-0</code>,  <code>0.10.0-0</code>,  <code>0.9.1-0</code>,  <code>0.8.6-0</code>,  <code>0.8.5-0</code>,  <code>0.8.4-0</code>,  </span></summary>
      

      ``0.10.4-0``,  ``0.10.3-0``,  ``0.10.2-0``,  ``0.10.1-0``,  ``0.10.0-0``,  ``0.9.1-0``,  ``0.8.6-0``,  ``0.8.5-0``,  ``0.8.4-0``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.1-0``,  ``0.1.3-0``,  ``0.1.1-1``

      
      .. raw:: html

         </details>
      

   
   :depends jinja2: 
   :depends packaging: 
   :depends pandas: 
   :depends pygithub: 
   :depends python: ``>=3.8``
   :depends pyyaml: 
   :depends requests: 
   :depends reretry: 
   :depends setuptools: 
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

      mamba install snakedeploy

   and update with::

      mamba update snakedeploy

  To create a new environment, run::

      mamba create --name myenvname snakedeploy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakedeploy:<tag>

   (see `snakedeploy/tags`_ for valid values for ``<tag>``)


.. |downloads_snakedeploy| image:: https://img.shields.io/conda/dn/bioconda/snakedeploy.svg?style=flat
   :target: https://anaconda.org/bioconda/snakedeploy
   :alt:   (downloads)
.. |docker_snakedeploy| image:: https://quay.io/repository/biocontainers/snakedeploy/status
   :target: https://quay.io/repository/biocontainers/snakedeploy
.. _`snakedeploy/tags`: https://quay.io/repository/biocontainers/snakedeploy?tab=tags


.. raw:: html

    <script>
        var package = "snakedeploy";
        var versions = ["0.10.4","0.10.3","0.10.2","0.10.1","0.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakedeploy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakedeploy/README.html