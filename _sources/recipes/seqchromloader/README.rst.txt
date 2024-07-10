:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqchromloader'
.. highlight: bash

seqchromloader
==============

.. conda:recipe:: seqchromloader
   :replaces_section_title:
   :noindex:

   Sequence and chromatin dataloader for deep learning

   :homepage: https://github.com/yztxwd/seqchromloader
   :documentation: https://github.com/seqcode/seqchromloader
   
   :developer docs: https://github.com/seqcode/seqchromloader
   :license: MIT
   :recipe: /`seqchromloader <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqchromloader>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqchromloader/meta.yaml>`_

   


.. conda:package:: seqchromloader

   |downloads_seqchromloader| |docker_seqchromloader|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.7-0</code>,  <code>0.7.6-0</code>,  <code>0.7.5-0</code>,  <code>0.7.4-0</code>,  <code>0.7.3-0</code>,  <code>0.7.1-0</code>,  <code>0.7.0-0</code>,  <code>0.6.8-0</code>,  <code>0.6.5-0</code>,  </span></summary>
      

      ``0.7.7-0``,  ``0.7.6-0``,  ``0.7.5-0``,  ``0.7.4-0``,  ``0.7.3-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.8-0``,  ``0.6.5-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.5.3-0``,  ``0.4.0-0``,  ``0.2.4-0``,  ``0.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends numpy: ``>=1.17``
   :depends pandas: 
   :depends pybedtools: ``>=0.9.0``
   :depends pybigwig: ``>=0.3.0``
   :depends pyfaidx: ``>=0.7.0``
   :depends pysam: ``>=0.19.0``
   :depends python: ``>=3.7,<3.10``
   :depends pytorch: ``>=1.10.0``
   :depends pytorch-lightning: ``>=1.7.0,<1.8.0``
   :depends torchmetrics: ``<=0.11.4``
   :depends webdataset: ``>=0.2.0``
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

      mamba install seqchromloader

   and update with::

      mamba update seqchromloader

  To create a new environment, run::

      mamba create --name myenvname seqchromloader

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seqchromloader:<tag>

   (see `seqchromloader/tags`_ for valid values for ``<tag>``)


.. |downloads_seqchromloader| image:: https://img.shields.io/conda/dn/bioconda/seqchromloader.svg?style=flat
   :target: https://anaconda.org/bioconda/seqchromloader
   :alt:   (downloads)
.. |docker_seqchromloader| image:: https://quay.io/repository/biocontainers/seqchromloader/status
   :target: https://quay.io/repository/biocontainers/seqchromloader
.. _`seqchromloader/tags`: https://quay.io/repository/biocontainers/seqchromloader?tab=tags


.. raw:: html

    <script>
        var package = "seqchromloader";
        var versions = ["0.7.7","0.7.6","0.7.5","0.7.4","0.7.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqchromloader/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqchromloader/README.html