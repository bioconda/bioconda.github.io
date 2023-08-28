:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.ptroglodytes.ucsc.pantro6'
.. highlight: bash

bioconductor-bsgenome.ptroglodytes.ucsc.pantro6
===============================================

.. conda:recipe:: bioconductor-bsgenome.ptroglodytes.ucsc.pantro6
   :replaces_section_title:
   :noindex:

   Full genome sequences for Pan troglodytes \(UCSC version panTro6\)

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/BSgenome.Ptroglodytes.UCSC.panTro6.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.ptroglodytes.ucsc.pantro6 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.ptroglodytes.ucsc.pantro6>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.ptroglodytes.ucsc.pantro6/meta.yaml>`_

   Full genome sequences for Pan troglodytes \(Chimp\) as provided by UCSC \(panTro6\, Jan. 2018\) and stored in Biostrings objects.


.. conda:package:: bioconductor-bsgenome.ptroglodytes.ucsc.pantro6

   |downloads_bioconductor-bsgenome.ptroglodytes.ucsc.pantro6| |docker_bioconductor-bsgenome.ptroglodytes.ucsc.pantro6|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.2-11</code>,  <code>1.4.2-10</code>,  <code>1.4.2-9</code>,  <code>1.4.2-8</code>,  <code>1.4.2-7</code>,  <code>1.4.2-6</code>,  <code>1.4.2-5</code>,  <code>1.4.2-4</code>,  <code>1.4.2-3</code>,  </span></summary>
      

      ``1.4.2-11``,  ``1.4.2-10``,  ``1.4.2-9``,  ``1.4.2-8``,  ``1.4.2-7``,  ``1.4.2-6``,  ``1.4.2-5``,  ``1.4.2-4``,  ``1.4.2-3``,  ``1.4.2-2``,  ``1.4.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-bsgenome.ptroglodytes.ucsc.pantro6

   and update with::

      mamba update bioconductor-bsgenome.ptroglodytes.ucsc.pantro6

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bsgenome.ptroglodytes.ucsc.pantro6

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.ptroglodytes.ucsc.pantro6:<tag>

   (see `bioconductor-bsgenome.ptroglodytes.ucsc.pantro6/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.ptroglodytes.ucsc.pantro6| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.ptroglodytes.ucsc.pantro6.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.ptroglodytes.ucsc.pantro6
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.ptroglodytes.ucsc.pantro6| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.ptroglodytes.ucsc.pantro6/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.ptroglodytes.ucsc.pantro6
.. _`bioconductor-bsgenome.ptroglodytes.ucsc.pantro6/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.ptroglodytes.ucsc.pantro6?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome.ptroglodytes.ucsc.pantro6";
        var versions = ["1.4.2","1.4.2","1.4.2","1.4.2","1.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.ptroglodytes.ucsc.pantro6/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.ptroglodytes.ucsc.pantro6/README.html