:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-aroma.core'
.. highlight: bash

r-aroma.core
============

.. conda:recipe:: r-aroma.core
   :replaces_section_title:
   :noindex:

   Core methods and classes used by higher\-level \'aroma.\*\' packages part of the Aroma Project\, e.g. \'aroma.affymetrix\' and \'aroma.cn\'.

   :homepage: https://www.aroma-project.org/
   :developer docs: https://github.com/HenrikBengtsson/aroma.core
   :license: LGPL / LGPL-2.1-or-later
   :recipe: /`r-aroma.core <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-aroma.core>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-aroma.core/meta.yaml>`_

   


.. conda:package:: r-aroma.core

   |downloads_r-aroma.core| |docker_r-aroma.core|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.3.1-1</code>,  <code>3.3.1-0</code>,  <code>3.3.0-1</code>,  <code>3.3.0-0</code>,  <code>3.2.2-2</code>,  <code>3.2.2-1</code>,  <code>3.2.2-0</code>,  <code>3.2.1-2</code>,  <code>3.2.1-1</code>,  </span></summary>
      

      ``3.3.1-1``,  ``3.3.1-0``,  ``3.3.0-1``,  ``3.3.0-0``,  ``3.2.2-2``,  ``3.2.2-1``,  ``3.2.2-0``,  ``3.2.1-2``,  ``3.2.1-1``,  ``3.2.1-0``,  ``3.2.0-1``,  ``3.2.0-0``,  ``3.1.3-2``,  ``3.1.3-1``,  ``3.1.3-0``,  ``3.1.1-0``,  ``3.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-biocmanager: 
   :depends r-future: 
   :depends r-listenv: 
   :depends r-matrixstats: ``>=0.57.0``
   :depends r-pscbs: ``>=0.65.0``
   :depends r-r.cache: ``>=0.14.0``
   :depends r-r.devices: ``>=2.16.1``
   :depends r-r.filesets: ``>=2.14.0``
   :depends r-r.methodss3: ``>=1.8.1``
   :depends r-r.oo: ``>=1.24.0``
   :depends r-r.rsp: ``>=0.44.0``
   :depends r-r.utils: ``>=2.10.1``
   :depends r-rcolorbrewer: ``>=1.1_2``
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

      mamba install r-aroma.core

   and update with::

      mamba update r-aroma.core

  To create a new environment, run::

      mamba create --name myenvname r-aroma.core

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-aroma.core:<tag>

   (see `r-aroma.core/tags`_ for valid values for ``<tag>``)


.. |downloads_r-aroma.core| image:: https://img.shields.io/conda/dn/bioconda/r-aroma.core.svg?style=flat
   :target: https://anaconda.org/bioconda/r-aroma.core
   :alt:   (downloads)
.. |docker_r-aroma.core| image:: https://quay.io/repository/biocontainers/r-aroma.core/status
   :target: https://quay.io/repository/biocontainers/r-aroma.core
.. _`r-aroma.core/tags`: https://quay.io/repository/biocontainers/r-aroma.core?tab=tags


.. raw:: html

    <script>
        var package = "r-aroma.core";
        var versions = ["3.3.1","3.3.1","3.3.0","3.3.0","3.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-aroma.core/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-aroma.core/README.html