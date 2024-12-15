:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'abricate'
.. highlight: bash

abricate
========

.. conda:recipe:: abricate
   :replaces_section_title:
   :noindex:

   Mass screening of contigs for antibiotic resistance genes

   :homepage: https://github.com/tseemann/abricate
   :license: GPL-2.0-only
   :recipe: /`abricate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abricate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abricate/meta.yaml>`_
   :links: biotools: :biotools:`ABRicate`, usegalaxy-eu: :usegalaxy-eu:`abricate`

   


.. conda:package:: abricate

   |downloads_abricate| |docker_abricate|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.1-3</code>,  <code>1.0.1-2</code>,  <code>1.0.1-1</code>,  <code>1.0.1-0</code>,  <code>1.0.0-0</code>,  <code>0.9.9-0</code>,  <code>0.9.8-0</code>,  <code>0.9.7-0</code>,  <code>0.9.3-0</code>,  </span></summary>
      

      ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.9.9-0``,  ``0.9.8-0``,  ``0.9.7-0``,  ``0.9.3-0``,  ``0.8.13-0``,  ``0.8.10-0``,  ``0.8.7-0``,  ``0.8-1``,  ``0.8-0``,  ``0.7-2``,  ``0.7-1``,  ``0.7-0``,  ``0.5-2``,  ``0.5-1``,  ``0.5-0``,  ``0.4-2``,  ``0.4-1``,  ``0.4-0``,  ``0.3-0``,  ``0.2-1``,  ``0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends any2fasta: 
   :depends blast: ``>=2.7``
   :depends perl-bioperl: ``>=1.7``
   :depends perl-json: 
   :depends perl-list-moreutils: 
   :depends perl-lwp-protocol-https: 
   :depends perl-lwp-simple: 
   :depends perl-path-tiny: 
   :depends unzip: 
   :depends zlib: 
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

      mamba install abricate

   and update with::

      mamba update abricate

  To create a new environment, run::

      mamba create --name myenvname abricate

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/abricate:<tag>

   (see `abricate/tags`_ for valid values for ``<tag>``)


.. |downloads_abricate| image:: https://img.shields.io/conda/dn/bioconda/abricate.svg?style=flat
   :target: https://anaconda.org/bioconda/abricate
   :alt:   (downloads)
.. |docker_abricate| image:: https://quay.io/repository/biocontainers/abricate/status
   :target: https://quay.io/repository/biocontainers/abricate
.. _`abricate/tags`: https://quay.io/repository/biocontainers/abricate?tab=tags


.. raw:: html

    <script>
        var package = "abricate";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/abricate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/abricate/README.html