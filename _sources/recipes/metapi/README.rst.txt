:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metapi'
.. highlight: bash

metapi
======

.. conda:recipe:: metapi
   :replaces_section_title:
   :noindex:

   A general metagenomics data mining system focus on robust microbiome research

   :homepage: https://github.com/ohmeta/metapi
   :license: GPL / GPL-3.0-only
   :recipe: /`metapi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metapi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metapi/meta.yaml>`_
   :links: biotools: :biotools:`metapi`

   


.. conda:package:: metapi

   |downloads_metapi| |docker_metapi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.5.0-0</code>,  <code>2.4.0-0</code>,  <code>2.3.0-0</code>,  <code>2.2.0-0</code>,  <code>2.1.4-0</code>,  <code>2.1.3-0</code>,  <code>2.1.2-0</code>,  <code>2.1.1-0</code>,  <code>1.1.0-0</code>,  </span></summary>
      

      ``2.5.0-0``,  ``2.4.0-0``,  ``2.3.0-0``,  ``2.2.0-0``,  ``2.1.4-0``,  ``2.1.3-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``1.1.0-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.73``
   :depends fd-find: 
   :depends matplotlib-base: 
   :depends natsort: 
   :depends numpy: 
   :depends openpyxl: 
   :depends pandas: 
   :depends pigz: 
   :depends python: ``>=3.7``
   :depends ruamel.yaml: 
   :depends seaborn: 
   :depends seqkit: 
   :depends seqtk: 
   :depends snakemake: ``>=7.0``
   :depends sra-tools: ``>=2.11.0``
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

      mamba install metapi

   and update with::

      mamba update metapi

  To create a new environment, run::

      mamba create --name myenvname metapi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metapi:<tag>

   (see `metapi/tags`_ for valid values for ``<tag>``)


.. |downloads_metapi| image:: https://img.shields.io/conda/dn/bioconda/metapi.svg?style=flat
   :target: https://anaconda.org/bioconda/metapi
   :alt:   (downloads)
.. |docker_metapi| image:: https://quay.io/repository/biocontainers/metapi/status
   :target: https://quay.io/repository/biocontainers/metapi
.. _`metapi/tags`: https://quay.io/repository/biocontainers/metapi?tab=tags


.. raw:: html

    <script>
        var package = "metapi";
        var versions = ["2.5.0","2.4.0","2.3.0","2.2.0","2.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metapi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metapi/README.html