:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-aroma.affymetrix'
.. highlight: bash

r-aroma.affymetrix
==================

.. conda:recipe:: r-aroma.affymetrix
   :replaces_section_title:
   :noindex:

   A cross\-platform R framework that facilitates processing of any number of Affymetrix microarray samples regardless of computer system.  The only parameter that limits the number of chips that can be processed is the amount of available disk space.  The Aroma Framework has successfully been used in studies to process tens of thousands of arrays.  This package has actively been used since 2006.

   :homepage: http://www.aroma-project.org/, https://github.com/HenrikBengtsson/aroma.affymetrix
   :license: LGPL / LGPL-2.1-or-later
   :recipe: /`r-aroma.affymetrix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-aroma.affymetrix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-aroma.affymetrix/meta.yaml>`_

   


.. conda:package:: r-aroma.affymetrix

   |downloads_r-aroma.affymetrix| |docker_r-aroma.affymetrix|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.1-3</code>,  <code>3.2.1-2</code>,  <code>3.2.1-0</code>,  <code>3.2.0-4</code>,  <code>3.2.0-3</code>,  <code>3.2.0-2</code>,  <code>3.2.0-1</code>,  <code>3.2.0-0</code>,  <code>3.1.1-2</code>,  </span></summary>
      

      ``3.2.1-3``,  ``3.2.1-2``,  ``3.2.1-0``,  ``3.2.0-4``,  ``3.2.0-3``,  ``3.2.0-2``,  ``3.2.0-1``,  ``3.2.0-0``,  ``3.1.1-2``,  ``3.1.1-1``,  ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-aroma.apd: ``>=0.6.0``
   :depends r-aroma.core: ``>=3.2.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-future: 
   :depends r-listenv: 
   :depends r-mass: 
   :depends r-matrixstats: ``>=0.55.0``
   :depends r-r.cache: ``>=0.14.0``
   :depends r-r.devices: ``>=2.16.1``
   :depends r-r.filesets: ``>=2.13.0``
   :depends r-r.methodss3: ``>=1.7.1``
   :depends r-r.oo: ``>=1.23.0``
   :depends r-r.utils: ``>=2.9.0``
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

      mamba install r-aroma.affymetrix

   and update with::

      mamba update r-aroma.affymetrix

  To create a new environment, run::

      mamba create --name myenvname r-aroma.affymetrix

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-aroma.affymetrix:<tag>

   (see `r-aroma.affymetrix/tags`_ for valid values for ``<tag>``)


.. |downloads_r-aroma.affymetrix| image:: https://img.shields.io/conda/dn/bioconda/r-aroma.affymetrix.svg?style=flat
   :target: https://anaconda.org/bioconda/r-aroma.affymetrix
   :alt:   (downloads)
.. |docker_r-aroma.affymetrix| image:: https://quay.io/repository/biocontainers/r-aroma.affymetrix/status
   :target: https://quay.io/repository/biocontainers/r-aroma.affymetrix
.. _`r-aroma.affymetrix/tags`: https://quay.io/repository/biocontainers/r-aroma.affymetrix?tab=tags


.. raw:: html

    <script>
        var package = "r-aroma.affymetrix";
        var versions = ["3.2.1","3.2.1","3.2.1","3.2.0","3.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-aroma.affymetrix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-aroma.affymetrix/README.html