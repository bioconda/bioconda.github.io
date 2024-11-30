:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ntroot'
.. highlight: bash

ntroot
======

.. conda:recipe:: ntroot
   :replaces_section_title:
   :noindex:

   Ancestry inference from genomic data

   :homepage: https://github.com/bcgsc/ntroot
   :license: GPL-3.0
   :recipe: /`ntroot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntroot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntroot/meta.yaml>`_

   


.. conda:package:: ntroot

   |downloads_ntroot| |docker_ntroot|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.5-0</code>,  <code>1.1.4-0</code>,  <code>1.1.3-0</code>,  <code>1.1.2-1</code>,  <code>1.1.2-0</code>,  <code>1.1.1-0</code>,  <code>1.1.0-0</code>,  <code>1.0.1-2</code>,  <code>1.0.1-1</code>,  </span></summary>
      

      ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bedtools: 
   :depends ntedit: ``>=2.0.2``
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends python: ``>=3.9``
   :depends samtools: 
   :depends snakemake: 
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

      mamba install ntroot

   and update with::

      mamba update ntroot

  To create a new environment, run::

      mamba create --name myenvname ntroot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ntroot:<tag>

   (see `ntroot/tags`_ for valid values for ``<tag>``)


.. |downloads_ntroot| image:: https://img.shields.io/conda/dn/bioconda/ntroot.svg?style=flat
   :target: https://anaconda.org/bioconda/ntroot
   :alt:   (downloads)
.. |docker_ntroot| image:: https://quay.io/repository/biocontainers/ntroot/status
   :target: https://quay.io/repository/biocontainers/ntroot
.. _`ntroot/tags`: https://quay.io/repository/biocontainers/ntroot?tab=tags


.. raw:: html

    <script>
        var package = "ntroot";
        var versions = ["1.1.5","1.1.4","1.1.3","1.1.2","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ntroot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ntroot/README.html