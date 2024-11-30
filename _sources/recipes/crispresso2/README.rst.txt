:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crispresso2'
.. highlight: bash

crispresso2
===========

.. conda:recipe:: crispresso2
   :replaces_section_title:
   :noindex:

   A software pipeline designed to enable rapid and intuitive interpretation of genome editing experiments

   :homepage: https://github.com/pinellolab/CRISPResso2
   :license: Partners
   :recipe: /`crispresso2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crispresso2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crispresso2/meta.yaml>`_

   


.. conda:package:: crispresso2

   |downloads_crispresso2| |docker_crispresso2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3.1-3</code>,  <code>2.3.1-2</code>,  <code>2.3.1-1</code>,  <code>2.3.1-0</code>,  <code>2.3.0-1</code>,  <code>2.3.0-0</code>,  <code>2.2.14-0</code>,  <code>2.2.13-0</code>,  <code>2.2.12-1</code>,  </span></summary>
      

      ``2.3.1-3``,  ``2.3.1-2``,  ``2.3.1-1``,  ``2.3.1-0``,  ``2.3.0-1``,  ``2.3.0-0``,  ``2.2.14-0``,  ``2.2.13-0``,  ``2.2.12-1``,  ``2.2.12-0``,  ``2.2.11-0``,  ``2.2.10-2``,  ``2.2.10-1``,  ``2.2.10-0``,  ``2.2.9-1``,  ``2.2.9-0``,  ``2.2.8-0``,  ``2.2.7-1``,  ``2.2.7-0``,  ``2.2.6-1``,  ``2.2.6-0``,  ``2.2.5-0``,  ``2.2.4-0``,  ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.0-0``,  ``2.1.3-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-1``,  ``2.1.0-0``,  ``2.0.45-1``,  ``2.0.45-0``,  ``2.0.44-0``,  ``2.0.43-0``,  ``2.0.42-0``,  ``2.0.40-0``,  ``2.0.39-0``,  ``2.0.38-0``,  ``2.0.32-0``,  ``2.0.31-0``,  ``2.0.30-0``,  ``2.0.29-0``,  ``2.0.28-0``,  ``2.0.27-3``,  ``2.0.23-1``,  ``2.0.23-0``

      
      .. raw:: html

         </details>
      

   
   :depends bowtie2: 
   :depends fastp: 
   :depends jinja2: 
   :depends libgcc-ng: ``>=12``
   :depends matplotlib-base: ``<=3.8.4``
   :depends numpy: ``<=1.26.4``
   :depends numpy: ``>=1.22.4,<2.0a0``
   :depends pandas: 
   :depends plotly: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends samtools: 
   :depends scipy: 
   :depends seaborn-base: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install crispresso2

   and update with::

      mamba update crispresso2

  To create a new environment, run::

      mamba create --name myenvname crispresso2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/crispresso2:<tag>

   (see `crispresso2/tags`_ for valid values for ``<tag>``)


.. |downloads_crispresso2| image:: https://img.shields.io/conda/dn/bioconda/crispresso2.svg?style=flat
   :target: https://anaconda.org/bioconda/crispresso2
   :alt:   (downloads)
.. |docker_crispresso2| image:: https://quay.io/repository/biocontainers/crispresso2/status
   :target: https://quay.io/repository/biocontainers/crispresso2
.. _`crispresso2/tags`: https://quay.io/repository/biocontainers/crispresso2?tab=tags


.. raw:: html

    <script>
        var package = "crispresso2";
        var versions = ["2.3.1","2.3.1","2.3.1","2.3.1","2.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crispresso2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crispresso2/README.html