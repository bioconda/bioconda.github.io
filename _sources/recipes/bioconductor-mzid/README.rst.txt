:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mzid'
.. highlight: bash

bioconductor-mzid
=================

.. conda:recipe:: bioconductor-mzid
   :replaces_section_title:
   :noindex:

   An mzIdentML parser for R

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/mzID.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-mzid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mzid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mzid/meta.yaml>`_
   :links: biotools: :biotools:`mzid`, doi: :doi:`10.1038/nmeth.3252`

   A parser for mzIdentML files implemented using the XML package. The parser tries to be general and able to handle all types of mzIdentML files with the drawback of having less \'pretty\' output than a vendor specific parser. Please contact the maintainer with any problems and supply an mzIdentML file so the problems can be fixed quickly.


.. conda:package:: bioconductor-mzid

   |downloads_bioconductor-mzid| |docker_bioconductor-mzid|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.1-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-protgenerics: ``>=1.34.0,<1.35.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-iterators: 
   :depends r-plyr: 
   :depends r-xml: 
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

      mamba install bioconductor-mzid

   and update with::

      mamba update bioconductor-mzid

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mzid

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mzid:<tag>

   (see `bioconductor-mzid/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mzid| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mzid.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mzid
   :alt:   (downloads)
.. |docker_bioconductor-mzid| image:: https://quay.io/repository/biocontainers/bioconductor-mzid/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mzid
.. _`bioconductor-mzid/tags`: https://quay.io/repository/biocontainers/bioconductor-mzid?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mzid";
        var versions = ["1.40.0","1.38.0","1.36.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mzid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mzid/README.html