:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked'
.. highlight: bash

bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked
==================================================

.. conda:recipe:: bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked
   :replaces_section_title:
   :noindex:

   Full masked genome sequences for Macaca mulatta \(UCSC version rheMac2\)

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/BSgenome.Mmulatta.UCSC.rheMac2.masked.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked/meta.yaml>`_

   Full genome sequences for Macaca mulatta \(Rhesus\) as provided by UCSC \(rheMac2\, Jan. 2006\) and stored in Biostrings objects. The sequences are the same as in BSgenome.Mmulatta.UCSC.rheMac2\, except that each of them has the 4 following masks on top\: \(1\) the mask of assembly gaps \(AGAPS mask\)\, \(2\) the mask of intra\-contig ambiguities \(AMB mask\)\, \(3\) the mask of repeats from RepeatMasker \(RM mask\)\, and \(4\) the mask of repeats from Tandem Repeats Finder \(TRF mask\). Only the AGAPS and AMB masks are \"active\" by default.  NOTE\: In most assemblies available at UCSC\, Tandem Repeats Finder repeats were filtered to retain only the repeats with period \<\= 12.  However\, the filtering was omitted for this assembly\, so the TRF masks contain all Tandem Repeats Finder results.


.. conda:package:: bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked

   |downloads_bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked| |docker_bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.99-13</code>,  <code>1.3.99-12</code>,  <code>1.3.99-11</code>,  <code>1.3.99-10</code>,  <code>1.3.99-9</code>,  <code>1.3.99-8</code>,  <code>1.3.99-7</code>,  <code>1.3.99-6</code>,  <code>1.3.99-5</code>,  </span></summary>
      

      ``1.3.99-13``,  ``1.3.99-12``,  ``1.3.99-11``,  ``1.3.99-10``,  ``1.3.99-9``,  ``1.3.99-8``,  ``1.3.99-7``,  ``1.3.99-6``,  ``1.3.99-5``,  ``1.3.99-4``,  ``1.3.99-3``,  ``1.3.99-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bsgenome: ``>=1.70.0,<1.71.0``
   :depends bioconductor-bsgenome.mmulatta.ucsc.rhemac2: ``>=1.4.0,<1.5.0``
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

      mamba install bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked

   and update with::

      mamba update bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked:<tag>

   (see `bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked
.. _`bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked";
        var versions = ["1.3.99","1.3.99","1.3.99","1.3.99","1.3.99"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked/README.html