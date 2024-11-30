:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ddrage'
.. highlight: bash

ddrage
======

.. conda:recipe:: ddrage
   :replaces_section_title:
   :noindex:

   Simulator for ddRADseq \(double digest restriction site associated DNA sequencing\) datasets. Generates reads \(FASTQ format\) that can be analyzed and validated using a ground truth file \(YAML\).

   :homepage: https://bitbucket.org/genomeinformatics/rage
   :license: MIT / MIT License
   :recipe: /`ddrage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ddrage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ddrage/meta.yaml>`_

   


.. conda:package:: ddrage

   |downloads_ddrage| |docker_ddrage|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.8.1-0</code>,  <code>1.7.1-0</code>,  <code>1.6.3-1</code>,  <code>1.6.3-0</code>,  <code>1.6.1-0</code>,  <code>1.5.2-0</code>,  <code>1.5.1-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.8.1-0``,  ``1.7.1-0``,  ``1.6.3-1``,  ``1.6.3-0``,  ``1.6.1-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.2-0``,  ``1.1.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends dinopy: 
   :depends matplotlib-base: 
   :depends numba: 
   :depends numpy: 
   :depends python: ``>=3``
   :depends pyyaml: 
   :depends scipy: ``>=1.4.1``
   :depends seaborn: 
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

      mamba install ddrage

   and update with::

      mamba update ddrage

  To create a new environment, run::

      mamba create --name myenvname ddrage

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ddrage:<tag>

   (see `ddrage/tags`_ for valid values for ``<tag>``)


.. |downloads_ddrage| image:: https://img.shields.io/conda/dn/bioconda/ddrage.svg?style=flat
   :target: https://anaconda.org/bioconda/ddrage
   :alt:   (downloads)
.. |docker_ddrage| image:: https://quay.io/repository/biocontainers/ddrage/status
   :target: https://quay.io/repository/biocontainers/ddrage
.. _`ddrage/tags`: https://quay.io/repository/biocontainers/ddrage?tab=tags


.. raw:: html

    <script>
        var package = "ddrage";
        var versions = ["1.8.1","1.7.1","1.6.3","1.6.3","1.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ddrage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ddrage/README.html