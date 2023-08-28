:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dfast_qc'
.. highlight: bash

dfast_qc
========

.. conda:recipe:: dfast_qc
   :replaces_section_title:
   :noindex:

   DFAST\_QC\: Taxonomy and completeness check for prokaryotic genomes

   :homepage: https://dfast.nig.ac.jp
   :developer docs: https://github.com/nigyta/dfast_qc
   :license: GPLv3
   :recipe: /`dfast_qc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dfast_qc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dfast_qc/meta.yaml>`_

   


.. conda:package:: dfast_qc

   |downloads_dfast_qc| |docker_dfast_qc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.7-0</code>,  <code>0.5.6-0</code>,  <code>0.5.5-0</code>,  <code>0.5.1-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-0</code>,  <code>0.2.9-0</code>,  <code>0.2.8-0</code>,  <code>0.2.7-0</code>,  </span></summary>
      

      ``0.5.7-0``,  ``0.5.6-0``,  ``0.5.5-0``,  ``0.5.1-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.2.9-0``,  ``0.2.8-0``,  ``0.2.7-0``,  ``0.2.6-1``,  ``0.2.6-0``,  ``0.2.5-1``,  ``0.2.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends blast: 
   :depends checkm-genome: ``1.2.2``
   :depends ete3: 
   :depends fastani: ``1.33``
   :depends hmmer: 
   :depends more-itertools: 
   :depends peewee: 
   :depends prodigal: 
   :depends python: ``>=3.8``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install dfast_qc

   and update with::

      mamba update dfast_qc

  To create a new environment, run::

      mamba create --name myenvname dfast_qc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dfast_qc:<tag>

   (see `dfast_qc/tags`_ for valid values for ``<tag>``)


.. |downloads_dfast_qc| image:: https://img.shields.io/conda/dn/bioconda/dfast_qc.svg?style=flat
   :target: https://anaconda.org/bioconda/dfast_qc
   :alt:   (downloads)
.. |docker_dfast_qc| image:: https://quay.io/repository/biocontainers/dfast_qc/status
   :target: https://quay.io/repository/biocontainers/dfast_qc
.. _`dfast_qc/tags`: https://quay.io/repository/biocontainers/dfast_qc?tab=tags


.. raw:: html

    <script>
        var package = "dfast_qc";
        var versions = ["0.5.7","0.5.6","0.5.5","0.5.1","0.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dfast_qc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dfast_qc/README.html