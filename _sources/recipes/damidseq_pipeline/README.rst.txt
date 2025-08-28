:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'damidseq_pipeline'
.. highlight: bash

damidseq_pipeline
=================

.. conda:recipe:: damidseq_pipeline
   :replaces_section_title:
   :noindex:

   An automated pipeline for processing DamID sequencing datasets.

   :homepage: https://github.com/owenjm/damidseq_pipeline
   :documentation: https://owenjm.github.io/damidseq_pipeline
   
   :license: GPL / GPL-2.0-or-later
   :recipe: /`damidseq_pipeline <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/damidseq_pipeline>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/damidseq_pipeline/meta.yaml>`_

   


.. conda:package:: damidseq_pipeline

   |downloads_damidseq_pipeline| |docker_damidseq_pipeline|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.2-0</code>,  <code>1.6.1-0</code>,  <code>1.6-0</code>,  <code>1.5.3-0</code>,  <code>1.4-5</code>,  <code>1.4-4</code>,  <code>1.4-3</code>,  <code>1.4-2</code>,  <code>1.4-1</code>,  </span></summary>
      

      ``1.6.2-0``,  ``1.6.1-0``,  ``1.6-0``,  ``1.5.3-0``,  ``1.4-5``,  ``1.4-4``,  ``1.4-3``,  ``1.4-2``,  ``1.4-1``,  ``1.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends bowtie2: ``>=2.3.0``
   :depends igvtools: 
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends r-base: 
   :depends samtools: 
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

      mamba install damidseq_pipeline

   and update with::

      mamba update damidseq_pipeline

  To create a new environment, run::

      mamba create --name myenvname damidseq_pipeline

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/damidseq_pipeline:<tag>

   (see `damidseq_pipeline/tags`_ for valid values for ``<tag>``)


.. |downloads_damidseq_pipeline| image:: https://img.shields.io/conda/dn/bioconda/damidseq_pipeline.svg?style=flat
   :target: https://anaconda.org/bioconda/damidseq_pipeline
   :alt:   (downloads)
.. |docker_damidseq_pipeline| image:: https://quay.io/repository/biocontainers/damidseq_pipeline/status
   :target: https://quay.io/repository/biocontainers/damidseq_pipeline
.. _`damidseq_pipeline/tags`: https://quay.io/repository/biocontainers/damidseq_pipeline?tab=tags


.. raw:: html

    <script>
        var package = "damidseq_pipeline";
        var versions = ["1.6.2","1.6.1","1.6","1.5.3","1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/damidseq_pipeline/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/damidseq_pipeline/README.html