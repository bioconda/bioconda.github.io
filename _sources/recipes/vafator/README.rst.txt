:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vafator'
.. highlight: bash

vafator
=======

.. conda:recipe:: vafator
   :replaces_section_title:
   :noindex:

   VAFator annotates the variants in a VCF file with technical annotations extracted from one or more BAM alignment files. We implement a set of basic coverage annotations and also more sophisticated published annotations used to assess the quality of every variant call.

   :homepage: https://github.com/tron-bioinformatics/vafator
   :license: MIT / MIT
   :recipe: /`vafator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vafator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vafator/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.6976425`

   


.. conda:package:: vafator

   |downloads_vafator| |docker_vafator|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.0-0</code>,  <code>2.1.0-0</code>,  <code>2.0.3-0</code>,  <code>2.0.2-0</code>,  <code>2.0.1-0</code>,  <code>1.3.2-0</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  <code>1.2.6-0</code>,  </span></summary>
      

      ``2.2.0-0``,  ``2.1.0-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.6-0``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.1.4-0``,  ``1.1.2-0``,  ``1.1.0-0``,  ``0.4.0-0``,  ``0.3.4-0``,  ``0.3.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends cyvcf2: ``>=0.30.14,<0.31``
   :depends logzero: ``>=1.7.0,<1.8``
   :depends pandas: ``>=1.3.3,<1.4``
   :depends pybedtools: ``>=0.9.0,<0.10``
   :depends pysam: ``>=0.19.1,<0.20``
   :depends python: ``>=3.7,<=3.9``
   :depends scipy: ``>=1.8.1,<1.9``
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

      mamba install vafator

   and update with::

      mamba update vafator

  To create a new environment, run::

      mamba create --name myenvname vafator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vafator:<tag>

   (see `vafator/tags`_ for valid values for ``<tag>``)


.. |downloads_vafator| image:: https://img.shields.io/conda/dn/bioconda/vafator.svg?style=flat
   :target: https://anaconda.org/bioconda/vafator
   :alt:   (downloads)
.. |docker_vafator| image:: https://quay.io/repository/biocontainers/vafator/status
   :target: https://quay.io/repository/biocontainers/vafator
.. _`vafator/tags`: https://quay.io/repository/biocontainers/vafator?tab=tags


.. raw:: html

    <script>
        var package = "vafator";
        var versions = ["2.2.0","2.1.0","2.0.3","2.0.2","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vafator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vafator/README.html