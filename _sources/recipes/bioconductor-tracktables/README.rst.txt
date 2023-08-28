:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tracktables'
.. highlight: bash

bioconductor-tracktables
========================

.. conda:recipe:: bioconductor-tracktables
   :replaces_section_title:
   :noindex:

   Build IGV tracks and HTML reports

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/tracktables.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-tracktables <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tracktables>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tracktables/meta.yaml>`_
   :links: biotools: :biotools:`tracktables`, doi: :doi:`10.1038/nmeth.3252`

   Methods to create complex IGV genome browser sessions and dynamic IGV reports in HTML pages.


.. conda:package:: bioconductor-tracktables

   |downloads_bioconductor-tracktables| |docker_bioconductor-tracktables|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-xvector: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rcolorbrewer: 
   :depends r-stringr: 
   :depends r-tractor.base: 
   :depends r-xml: 
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

      mamba install bioconductor-tracktables

   and update with::

      mamba update bioconductor-tracktables

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tracktables

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tracktables:<tag>

   (see `bioconductor-tracktables/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tracktables| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tracktables.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tracktables
   :alt:   (downloads)
.. |docker_bioconductor-tracktables| image:: https://quay.io/repository/biocontainers/bioconductor-tracktables/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tracktables
.. _`bioconductor-tracktables/tags`: https://quay.io/repository/biocontainers/bioconductor-tracktables?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tracktables";
        var versions = ["1.34.0","1.32.0","1.28.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tracktables/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tracktables/README.html