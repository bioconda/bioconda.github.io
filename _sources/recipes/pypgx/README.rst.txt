:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pypgx'
.. highlight: bash

pypgx
=====

.. conda:recipe:: pypgx
   :replaces_section_title:
   :noindex:

   A Python package for pharmacogenomics research

   :homepage: https://github.com/sbslee/pypgx
   :documentation: https://pypgx.readthedocs.io/en/latest/
   
   :license: MIT / MIT
   :recipe: /`pypgx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypgx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypgx/meta.yaml>`_

   


.. conda:package:: pypgx

   |downloads_pypgx| |docker_pypgx|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.24.0-0</code>,  <code>0.23.0-0</code>,  <code>0.22.0-0</code>,  <code>0.21.0-0</code>,  <code>0.20.0-0</code>,  <code>0.19.0-0</code>,  <code>0.18.0-0</code>,  <code>0.17.0-0</code>,  <code>0.16.0-0</code>,  </span></summary>
      

      ``0.24.0-0``,  ``0.23.0-0``,  ``0.22.0-0``,  ``0.21.0-0``,  ``0.20.0-0``,  ``0.19.0-0``,  ``0.18.0-0``,  ``0.17.0-0``,  ``0.16.0-0``,  ``0.15.0-0``,  ``0.14.0-0``,  ``0.13.0-0``,  ``0.12.0-0``,  ``0.11.0-0``,  ``0.10.1-0``,  ``0.10.0-0``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends fuc: 
   :depends openjdk: 
   :depends pysam: ``>=0.15``
   :depends python: 
   :depends scikit-learn: 
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

      mamba install pypgx

   and update with::

      mamba update pypgx

  To create a new environment, run::

      mamba create --name myenvname pypgx

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pypgx:<tag>

   (see `pypgx/tags`_ for valid values for ``<tag>``)


.. |downloads_pypgx| image:: https://img.shields.io/conda/dn/bioconda/pypgx.svg?style=flat
   :target: https://anaconda.org/bioconda/pypgx
   :alt:   (downloads)
.. |docker_pypgx| image:: https://quay.io/repository/biocontainers/pypgx/status
   :target: https://quay.io/repository/biocontainers/pypgx
.. _`pypgx/tags`: https://quay.io/repository/biocontainers/pypgx?tab=tags


.. raw:: html

    <script>
        var package = "pypgx";
        var versions = ["0.24.0","0.23.0","0.22.0","0.21.0","0.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pypgx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pypgx/README.html