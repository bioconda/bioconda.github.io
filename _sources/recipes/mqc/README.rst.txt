:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mqc'
.. highlight: bash

mqc
===

.. conda:recipe:: mqc
   :replaces_section_title:
   :noindex:

   qualtiy control tool to assess the mapping quality of a ribosome profiling experiment

   :homepage: https://github.com/Biobix/mQC
   :license: GNU General Public License v3.0
   :recipe: /`mqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mqc/meta.yaml>`_

   


.. conda:package:: mqc

   |downloads_mqc| |docker_mqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.10-1</code>,  <code>1.10-0</code>,  <code>1.9-0</code>,  <code>1.8-0</code>,  <code>1.7-0</code>,  <code>1.6-0</code>,  <code>1.5-0</code>,  <code>1.4-0</code>,  <code>1.3-0</code>,  </span></summary>
      

      ``1.10-1``,  ``1.10-0``,  ``1.9-0``,  ``1.8-0``,  ``1.7-0``,  ``1.6-0``,  ``1.5-0``,  ``1.4-0``,  ``1.3-0``,  ``1.2-3``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends matplotlib: 
   :depends numpy: 
   :depends pandas: 
   :depends perl: ``5.22.0*``
   :depends perl-app-cpanminus: 
   :depends perl-dbd-sqlite: 
   :depends perl-dbi: 
   :depends perl-parallel-forkmanager: 
   :depends plastid: ``0.4.7 py27_0``
   :depends pysam: ``0.11*``
   :depends python: ``2.7*``
   :depends r-base: ``3.4.1*``
   :depends samtools: 
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

      mamba install mqc

   and update with::

      mamba update mqc

  To create a new environment, run::

      mamba create --name myenvname mqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mqc:<tag>

   (see `mqc/tags`_ for valid values for ``<tag>``)


.. |downloads_mqc| image:: https://img.shields.io/conda/dn/bioconda/mqc.svg?style=flat
   :target: https://anaconda.org/bioconda/mqc
   :alt:   (downloads)
.. |docker_mqc| image:: https://quay.io/repository/biocontainers/mqc/status
   :target: https://quay.io/repository/biocontainers/mqc
.. _`mqc/tags`: https://quay.io/repository/biocontainers/mqc?tab=tags


.. raw:: html

    <script>
        var package = "mqc";
        var versions = ["1.10","1.10","1.9","1.8","1.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mqc/README.html