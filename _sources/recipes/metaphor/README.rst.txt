:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metaphor'
.. highlight: bash

metaphor
========

.. conda:recipe:: metaphor
   :replaces_section_title:
   :noindex:

   Metaphor \- Metagenomic Pipeline for Short Reads

   :homepage: https://github.com/vinisalazar/metaphor
   :documentation: https://metaphor-workflow.readthedocs.io/
   
   :license: MIT / MIT
   :recipe: /`metaphor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaphor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaphor/meta.yaml>`_

   
   \# Metaphor \- Metagenomic Pipeline for sHOrt Reads


   Metaphor is a Snakemake\-based\, general\-purpose workflow for assembly and binning of metagenomes. To learn how to use it\, please refer to the \[docs page\]\(https\:\/\/metaphor\-workflow.readthedocs.io\/\).



.. conda:package:: metaphor

   |downloads_metaphor| |docker_metaphor|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.7.7-1</code>,  <code>1.7.7-0</code>,  <code>1.7.6-0</code>,  <code>1.7.5-0</code>,  <code>1.7.4-0</code>,  <code>1.7.3-0</code>,  <code>1.7.2-0</code>,  <code>1.7.1-0</code>,  <code>1.6.2-0</code>,  </span></summary>
      

      ``1.7.7-1``,  ``1.7.7-0``,  ``1.7.6-0``,  ``1.7.5-0``,  ``1.7.4-0``,  ``1.7.3-0``,  ``1.7.2-0``,  ``1.7.1-0``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends jinja2: 
   :depends networkx: 
   :depends pandas: 
   :depends python: ``>=3.9``
   :depends pyyaml: 
   :depends requests: 
   :depends snakemake: ``>=7.5``
   :depends snakemake-wrapper-utils: 
   :depends tqdm: 
   :depends zstandard: 
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

      mamba install metaphor

   and update with::

      mamba update metaphor

  To create a new environment, run::

      mamba create --name myenvname metaphor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metaphor:<tag>

   (see `metaphor/tags`_ for valid values for ``<tag>``)


.. |downloads_metaphor| image:: https://img.shields.io/conda/dn/bioconda/metaphor.svg?style=flat
   :target: https://anaconda.org/bioconda/metaphor
   :alt:   (downloads)
.. |docker_metaphor| image:: https://quay.io/repository/biocontainers/metaphor/status
   :target: https://quay.io/repository/biocontainers/metaphor
.. _`metaphor/tags`: https://quay.io/repository/biocontainers/metaphor?tab=tags


.. raw:: html

    <script>
        var package = "metaphor";
        var versions = ["1.7.7","1.7.7","1.7.6","1.7.5","1.7.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaphor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaphor/README.html