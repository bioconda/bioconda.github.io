:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.mfuro.ucsc.musfur1'
.. highlight: bash

bioconductor-bsgenome.mfuro.ucsc.musfur1
========================================

.. conda:recipe:: bioconductor-bsgenome.mfuro.ucsc.musfur1
   :replaces_section_title:
   :noindex:

   Full genome sequences for Mustela putorius furo \(UCSC version musFur1\)

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/BSgenome.Mfuro.UCSC.musFur1.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.mfuro.ucsc.musfur1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.mfuro.ucsc.musfur1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.mfuro.ucsc.musfur1/meta.yaml>`_

   Full genome sequences for Mustela putorius furo \(Ferret\) as provided by UCSC \(musFur1\, Apr. 2011\) and stored in Biostrings objects.


.. conda:package:: bioconductor-bsgenome.mfuro.ucsc.musfur1

   |downloads_bioconductor-bsgenome.mfuro.ucsc.musfur1| |docker_bioconductor-bsgenome.mfuro.ucsc.musfur1|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.1-11</code>,  <code>1.4.1-10</code>,  <code>1.4.1-9</code>,  <code>1.4.1-8</code>,  <code>1.4.1-7</code>,  <code>1.4.1-6</code>,  <code>1.4.1-5</code>,  <code>1.4.1-4</code>,  <code>1.4.1-3</code>,  </span></summary>
      

      ``1.4.1-11``,  ``1.4.1-10``,  ``1.4.1-9``,  ``1.4.1-8``,  ``1.4.1-7``,  ``1.4.1-6``,  ``1.4.1-5``,  ``1.4.1-4``,  ``1.4.1-3``,  ``1.4.1-2``,  ``1.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-bsgenome.mfuro.ucsc.musfur1

   and update with::

      mamba update bioconductor-bsgenome.mfuro.ucsc.musfur1

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bsgenome.mfuro.ucsc.musfur1

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.mfuro.ucsc.musfur1:<tag>

   (see `bioconductor-bsgenome.mfuro.ucsc.musfur1/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.mfuro.ucsc.musfur1| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.mfuro.ucsc.musfur1.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.mfuro.ucsc.musfur1
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.mfuro.ucsc.musfur1| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.mfuro.ucsc.musfur1/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.mfuro.ucsc.musfur1
.. _`bioconductor-bsgenome.mfuro.ucsc.musfur1/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.mfuro.ucsc.musfur1?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome.mfuro.ucsc.musfur1";
        var versions = ["1.4.1","1.4.1","1.4.1","1.4.1","1.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.mfuro.ucsc.musfur1/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.mfuro.ucsc.musfur1/README.html