:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biotradis'
.. highlight: bash

biotradis
=========

.. conda:recipe:: biotradis
   :replaces_section_title:
   :noindex:

   A set of tools to analyse the output from TraDIS analyses

   :homepage: https://github.com/sanger-pathogens/Bio-Tradis
   :license: GPL3 / GPL-3.0-only
   :recipe: /`biotradis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biotradis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biotradis/meta.yaml>`_

   


.. conda:package:: biotradis

   |downloads_biotradis| |docker_biotradis|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.5-5</code>,  <code>1.4.5-4</code>,  <code>1.4.5-3</code>,  <code>1.4.5-2</code>,  <code>1.4.5-1</code>,  <code>1.4.5-0</code>,  <code>1.4.1-0</code>,  <code>1.4.1.dev-4</code>,  <code>1.4.1.dev-3</code>,  </span></summary>
      

      ``1.4.5-5``,  ``1.4.5-4``,  ``1.4.5-3``,  ``1.4.5-2``,  ``1.4.5-1``,  ``1.4.5-0``,  ``1.4.1-0``,  ``1.4.1.dev-4``,  ``1.4.1.dev-3``,  ``1.4.1.dev-2``,  ``1.4.1.dev-1``,  ``1.4.1.dev-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-edger: 
   :depends bwa: 
   :depends htslib: 
   :depends perl: 
   :depends perl-app-cpanminus: 
   :depends perl-bioperl: ``>=1.7.2``
   :depends perl-exception-class: 
   :depends perl-local-lib: 
   :depends perl-moose: 
   :depends perl-parallel-forkmanager: 
   :depends perl-pathtools: 
   :depends perl-scalar-util-numeric: 
   :depends perl-text-csv: 
   :depends r-base: 
   :depends r-getopt: 
   :depends r-mass: 
   :depends samtools: 
   :depends smalt: 
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

      mamba install biotradis

   and update with::

      mamba update biotradis

  To create a new environment, run::

      mamba create --name myenvname biotradis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biotradis:<tag>

   (see `biotradis/tags`_ for valid values for ``<tag>``)


.. |downloads_biotradis| image:: https://img.shields.io/conda/dn/bioconda/biotradis.svg?style=flat
   :target: https://anaconda.org/bioconda/biotradis
   :alt:   (downloads)
.. |docker_biotradis| image:: https://quay.io/repository/biocontainers/biotradis/status
   :target: https://quay.io/repository/biocontainers/biotradis
.. _`biotradis/tags`: https://quay.io/repository/biocontainers/biotradis?tab=tags


.. raw:: html

    <script>
        var package = "biotradis";
        var versions = ["1.4.5","1.4.5","1.4.5","1.4.5","1.4.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biotradis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biotradis/README.html