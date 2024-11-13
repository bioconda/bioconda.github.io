:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobb_amber'
.. highlight: bash

biobb_amber
===========

.. conda:recipe:: biobb_amber
   :replaces_section_title:
   :noindex:

   Biobb\_amber is a BioBB category for AMBER MD package.

   :homepage: https://github.com/bioexcel/biobb_amber
   :license: APACHE / Apache Software License
   :recipe: /`biobb_amber <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_amber>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_amber/meta.yaml>`_

   Biobb\_amber is a BioBB category for AMBER MD package. Biobb \(BioExcel building blocks\) packages are Python building blocks that create new layer of compatibility and interoperability over popular bioinformatics tools. The latest documentation of this package can be found in our readthedocs site\: http\:\/\/biobb\_amber.readthedocs.io\/en\/latest\/\)\]\(http\:\/\/biobb\_amber.readthedocs.io\/en\/latest\/


.. conda:package:: biobb_amber

   |downloads_biobb_amber| |docker_biobb_amber|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.0.3-0</code>,  <code>5.0.2-0</code>,  <code>5.0.0-0</code>,  <code>4.2.0-0</code>,  <code>4.1.0-0</code>,  <code>4.0.1-0</code>,  <code>4.0.0-0</code>,  <code>3.9.0-0</code>,  <code>3.8.0-1</code>,  </span></summary>
      

      ``5.0.3-0``,  ``5.0.2-0``,  ``5.0.0-0``,  ``4.2.0-0``,  ``4.1.0-0``,  ``4.0.1-0``,  ``4.0.0-0``,  ``3.9.0-0``,  ``3.8.0-1``,  ``3.8.0-0``,  ``3.7.1-1``,  ``3.7.1-0``,  ``3.6.2-0``,  ``3.6.1-0``,  ``3.6.0-1``,  ``3.6.0-0``,  ``3.5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends ambertools: ``22.5.0``
   :depends biobb_common: ``5.0.0``
   :depends python: ``>=3.9,<3.11``
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

      mamba install biobb_amber

   and update with::

      mamba update biobb_amber

  To create a new environment, run::

      mamba create --name myenvname biobb_amber

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biobb_amber:<tag>

   (see `biobb_amber/tags`_ for valid values for ``<tag>``)


.. |downloads_biobb_amber| image:: https://img.shields.io/conda/dn/bioconda/biobb_amber.svg?style=flat
   :target: https://anaconda.org/bioconda/biobb_amber
   :alt:   (downloads)
.. |docker_biobb_amber| image:: https://quay.io/repository/biocontainers/biobb_amber/status
   :target: https://quay.io/repository/biocontainers/biobb_amber
.. _`biobb_amber/tags`: https://quay.io/repository/biocontainers/biobb_amber?tab=tags


.. raw:: html

    <script>
        var package = "biobb_amber";
        var versions = ["5.0.3","5.0.2","5.0.0","4.2.0","4.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobb_amber/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobb_amber/README.html