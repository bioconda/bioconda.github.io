:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobb_md'
.. highlight: bash

biobb_md
========

.. conda:recipe:: biobb_md
   :replaces_section_title:
   :noindex:

   Deprecated Package\: biobb\_md is no longer maintained and has been superseded by the biobb\_gromacs package. Biobb\_md is the Biobb module collection to perform molecular dynamics simulations.

   :homepage: https://github.com/bioexcel/biobb_md
   :documentation: http://biobb_md.readthedocs.io/en/latest/
   
   :license: APACHE / Apache Software License
   :recipe: /`biobb_md <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_md>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_md/meta.yaml>`_

   Deprecated Package\: biobb\_md is no longer maintained and has been superseded by the biobb\_gromacs package. Biobb\_md is the Biobb module collection to perform molecular dynamics simulations. Biobb \(BioExcel building blocks\) packages are Python building blocks that create new layers of compatibility and interoperability over popular bioinformatics tools.


.. conda:package:: biobb_md

   |downloads_biobb_md| |docker_biobb_md|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.7.2-0</code>,  <code>3.7.1-0</code>,  <code>3.7.0-0</code>,  <code>3.6.0-0</code>,  <code>3.5.1-0</code>,  <code>3.5.0-0</code>,  <code>3.0.1-0</code>,  <code>3.0.0-0</code>,  <code>2.0.0-0</code>,  </span></summary>
      

      ``3.7.2-0``,  ``3.7.1-0``,  ``3.7.0-0``,  ``3.6.0-0``,  ``3.5.1-0``,  ``3.5.0-0``,  ``3.0.1-0``,  ``3.0.0-0``,  ``2.0.0-0``,  ``1.1.7-0``,  ``1.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.2-0``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends biobb_common: ``3.7.0``
   :depends gromacs: ``2019.1``
   :depends python: ``3.7.*``
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

      mamba install biobb_md

   and update with::

      mamba update biobb_md

  To create a new environment, run::

      mamba create --name myenvname biobb_md

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biobb_md:<tag>

   (see `biobb_md/tags`_ for valid values for ``<tag>``)


.. |downloads_biobb_md| image:: https://img.shields.io/conda/dn/bioconda/biobb_md.svg?style=flat
   :target: https://anaconda.org/bioconda/biobb_md
   :alt:   (downloads)
.. |docker_biobb_md| image:: https://quay.io/repository/biocontainers/biobb_md/status
   :target: https://quay.io/repository/biocontainers/biobb_md
.. _`biobb_md/tags`: https://quay.io/repository/biocontainers/biobb_md?tab=tags


.. raw:: html

    <script>
        var package = "biobb_md";
        var versions = ["3.7.2","3.7.1","3.7.0","3.6.0","3.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobb_md/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobb_md/README.html