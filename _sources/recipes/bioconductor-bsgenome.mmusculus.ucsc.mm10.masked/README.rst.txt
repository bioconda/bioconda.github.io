:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.mmusculus.ucsc.mm10.masked'
.. highlight: bash

bioconductor-bsgenome.mmusculus.ucsc.mm10.masked
================================================

.. conda:recipe:: bioconductor-bsgenome.mmusculus.ucsc.mm10.masked
   :replaces_section_title:
   :noindex:

   Full masked genome sequences for Mus musculus \(UCSC genome mm10\, based on GRCm38.p6\)

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/BSgenome.Mmusculus.UCSC.mm10.masked.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.mmusculus.ucsc.mm10.masked <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.mmusculus.ucsc.mm10.masked>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.mmusculus.ucsc.mm10.masked/meta.yaml>`_

   Full genome sequences for Mus musculus \(Mouse\) as provided by UCSC \(genome mm10\, based on GRCm38.p6\) and stored in Biostrings objects. The sequences are the same as in BSgenome.Mmusculus.UCSC.mm10\, except that each of them has the 2 following masks on top\: \(1\) the mask of assembly gaps \(AGAPS mask\)\, and \(2\) the mask of intra\-contig ambiguities \(AMB mask\).


.. conda:package:: bioconductor-bsgenome.mmusculus.ucsc.mm10.masked

   |downloads_bioconductor-bsgenome.mmusculus.ucsc.mm10.masked| |docker_bioconductor-bsgenome.mmusculus.ucsc.mm10.masked|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.3-4</code>,  <code>1.4.3-3</code>,  <code>1.4.3-2</code>,  <code>1.4.3-1</code>,  <code>1.4.3-0</code>,  <code>1.3.99-7</code>,  <code>1.3.99-6</code>,  <code>1.3.99-5</code>,  <code>1.3.99-4</code>,  </span></summary>
      

      ``1.4.3-4``,  ``1.4.3-3``,  ``1.4.3-2``,  ``1.4.3-1``,  ``1.4.3-0``,  ``1.3.99-7``,  ``1.3.99-6``,  ``1.3.99-5``,  ``1.3.99-4``,  ``1.3.99-3``,  ``1.3.99-2``,  ``1.3.99-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bsgenome: ``>=1.70.0,<1.71.0``
   :depends bioconductor-bsgenome.mmusculus.ucsc.mm10: ``>=1.4.0,<1.5.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-bsgenome.mmusculus.ucsc.mm10.masked

   and update with::

      mamba update bioconductor-bsgenome.mmusculus.ucsc.mm10.masked

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bsgenome.mmusculus.ucsc.mm10.masked

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.mmusculus.ucsc.mm10.masked:<tag>

   (see `bioconductor-bsgenome.mmusculus.ucsc.mm10.masked/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.mmusculus.ucsc.mm10.masked| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.mmusculus.ucsc.mm10.masked.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.mmusculus.ucsc.mm10.masked
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.mmusculus.ucsc.mm10.masked| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.mmusculus.ucsc.mm10.masked/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.mmusculus.ucsc.mm10.masked
.. _`bioconductor-bsgenome.mmusculus.ucsc.mm10.masked/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.mmusculus.ucsc.mm10.masked?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome.mmusculus.ucsc.mm10.masked";
        var versions = ["1.4.3","1.4.3","1.4.3","1.4.3","1.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.mmusculus.ucsc.mm10.masked/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.mmusculus.ucsc.mm10.masked/README.html