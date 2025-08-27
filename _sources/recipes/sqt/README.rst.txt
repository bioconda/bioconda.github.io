:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sqt'
.. highlight: bash

sqt
===

.. conda:recipe:: sqt
   :replaces_section_title:
   :noindex:

   Command\-line tools for the analysis of high\-throughput sequencing data

   :homepage: https://bitbucket.org/marcelm/sqt
   :license: MIT
   :recipe: /`sqt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sqt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sqt/meta.yaml>`_

   


.. conda:package:: sqt

   |downloads_sqt| |docker_sqt|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.0-5</code>,  <code>0.8.0-4</code>,  <code>0.8.0-3</code>,  <code>0.8.0-2</code>,  <code>0.8.0-0</code>,  <code>0.7.0-2</code>,  <code>0.7.0-1</code>,  <code>0.7.0-0</code>,  <code>0.6.3-0</code>,  </span></summary>
      

      ``0.8.0-5``,  ``0.8.0-4``,  ``0.8.0-3``,  ``0.8.0-2``,  ``0.8.0-0``,  ``0.7.0-2``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.3-0``,  ``0.6.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends cutadapt: 
   :depends matplotlib: 
   :depends pysam: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends seaborn: 
   :depends xopen: 
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

      mamba install sqt

   and update with::

      mamba update sqt

  To create a new environment, run::

      mamba create --name myenvname sqt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sqt:<tag>

   (see `sqt/tags`_ for valid values for ``<tag>``)


.. |downloads_sqt| image:: https://img.shields.io/conda/dn/bioconda/sqt.svg?style=flat
   :target: https://anaconda.org/bioconda/sqt
   :alt:   (downloads)
.. |docker_sqt| image:: https://quay.io/repository/biocontainers/sqt/status
   :target: https://quay.io/repository/biocontainers/sqt
.. _`sqt/tags`: https://quay.io/repository/biocontainers/sqt?tab=tags


.. raw:: html

    <script>
        var package = "sqt";
        var versions = ["0.8.0","0.8.0","0.8.0","0.8.0","0.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sqt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sqt/README.html