:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnalien'
.. highlight: bash

rnalien
=======

.. conda:recipe:: rnalien
   :replaces_section_title:
   :noindex:

   A tool for unsupervised construction of RNA family models

   :homepage: http://rna.tbi.univie.ac.at/rnalien/tool
   :license: GPL-3
   :recipe: /`rnalien <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnalien>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnalien/meta.yaml>`_
   :links: biotools: :biotools:`RNAlien`, doi: :doi:`10.1093/nar/gkw558`

   


.. conda:package:: rnalien

   |downloads_rnalien| |docker_rnalien|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.8.0-2</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.7.1-0</code>,  <code>1.7.0-0</code>,  <code>1.6.0-0</code>,  <code>1.3.8-5</code>,  <code>1.3.7-5</code>,  <code>1.3.7-4</code>,  </span></summary>
      

      ``1.8.0-2``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.0-0``,  ``1.3.8-5``,  ``1.3.7-5``,  ``1.3.7-4``,  ``1.3.7-3``,  ``1.3.7-2``,  ``1.3.7-1``,  ``1.3.7-0``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.2.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends blast: ``2.9.0``
   :depends ca-certificates: 
   :depends entrez-direct: 
   :depends gmp: 
   :depends infernal: ``1.1.2``
   :depends locarna: ``2.0.0RC8``
   :depends openssl: ``>=1.1.0,<=1.1.1``
   :depends perl: 
   :depends rnacode: ``0.3``
   :depends rnaz: ``2.1.1``
   :depends viennarna: ``2.4.13``
   :depends zlib: 
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

      mamba install rnalien

   and update with::

      mamba update rnalien

  To create a new environment, run::

      mamba create --name myenvname rnalien

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rnalien:<tag>

   (see `rnalien/tags`_ for valid values for ``<tag>``)


.. |downloads_rnalien| image:: https://img.shields.io/conda/dn/bioconda/rnalien.svg?style=flat
   :target: https://anaconda.org/bioconda/rnalien
   :alt:   (downloads)
.. |docker_rnalien| image:: https://quay.io/repository/biocontainers/rnalien/status
   :target: https://quay.io/repository/biocontainers/rnalien
.. _`rnalien/tags`: https://quay.io/repository/biocontainers/rnalien?tab=tags


.. raw:: html

    <script>
        var package = "rnalien";
        var versions = ["1.8.0","1.8.0","1.8.0","1.7.1","1.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnalien/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnalien/README.html