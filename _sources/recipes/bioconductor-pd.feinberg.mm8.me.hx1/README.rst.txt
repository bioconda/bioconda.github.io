:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pd.feinberg.mm8.me.hx1'
.. highlight: bash

bioconductor-pd.feinberg.mm8.me.hx1
===================================

.. conda:recipe:: bioconductor-pd.feinberg.mm8.me.hx1
   :replaces_section_title:
   :noindex:

   Platform Design Info for NimbleGen feinberg\_mm8\_me\_hx1

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/pd.feinberg.mm8.me.hx1.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pd.feinberg.mm8.me.hx1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.feinberg.mm8.me.hx1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.feinberg.mm8.me.hx1/meta.yaml>`_

   Platform Design Info for NimbleGen feinberg\_mm8\_me\_hx1


.. conda:package:: bioconductor-pd.feinberg.mm8.me.hx1

   |downloads_bioconductor-pd.feinberg.mm8.me.hx1| |docker_bioconductor-pd.feinberg.mm8.me.hx1|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.99.3-11</code>,  <code>0.99.3-10</code>,  <code>0.99.3-9</code>,  <code>0.99.3-8</code>,  <code>0.99.3-7</code>,  <code>0.99.3-6</code>,  <code>0.99.3-5</code>,  <code>0.99.3-4</code>,  <code>0.99.3-3</code>,  </span></summary>
      

      ``0.99.3-11``,  ``0.99.3-10``,  ``0.99.3-9``,  ``0.99.3-8``,  ``0.99.3-7``,  ``0.99.3-6``,  ``0.99.3-5``,  ``0.99.3-4``,  ``0.99.3-3``,  ``0.99.3-2``,  ``0.99.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-oligo: ``>=1.64.0,<1.65.0``
   :depends bioconductor-oligoclasses: ``>=1.62.0,<1.63.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dbi: 
   :depends r-rsqlite: ``>=0.7-1``
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

      mamba install bioconductor-pd.feinberg.mm8.me.hx1

   and update with::

      mamba update bioconductor-pd.feinberg.mm8.me.hx1

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pd.feinberg.mm8.me.hx1

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pd.feinberg.mm8.me.hx1:<tag>

   (see `bioconductor-pd.feinberg.mm8.me.hx1/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pd.feinberg.mm8.me.hx1| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pd.feinberg.mm8.me.hx1.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pd.feinberg.mm8.me.hx1
   :alt:   (downloads)
.. |docker_bioconductor-pd.feinberg.mm8.me.hx1| image:: https://quay.io/repository/biocontainers/bioconductor-pd.feinberg.mm8.me.hx1/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pd.feinberg.mm8.me.hx1
.. _`bioconductor-pd.feinberg.mm8.me.hx1/tags`: https://quay.io/repository/biocontainers/bioconductor-pd.feinberg.mm8.me.hx1?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pd.feinberg.mm8.me.hx1";
        var versions = ["0.99.3","0.99.3","0.99.3","0.99.3","0.99.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pd.feinberg.mm8.me.hx1/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pd.feinberg.mm8.me.hx1/README.html