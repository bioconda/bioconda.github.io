:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-phyext2'
.. highlight: bash

r-phyext2
=========

.. conda:recipe:: r-phyext2
   :replaces_section_title:
   :noindex:

   Based on \(but not identical to\) the no\-longer\-maintained package \'phyext\'\, provides enhancements to \'phylobase\' classes\, specifically for use by package \'SigTree\'\; provides classes and methods which help users manipulate branch\-annotated trees \(as in \'SigTree\'\)\; also provides support for a few other extra features.

   :homepage: https://CRAN.R-project.org/package=phyext2
   :license: GPL3 / GPL-3
   :recipe: /`r-phyext2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-phyext2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-phyext2/meta.yaml>`_

   


.. conda:package:: r-phyext2

   |downloads_r-phyext2| |docker_r-phyext2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.4-9</code>,  <code>0.0.4-8</code>,  <code>0.0.4-7</code>,  <code>0.0.4-6</code>,  <code>0.0.4-5</code>,  <code>0.0.4-4</code>,  <code>0.0.4-3</code>,  <code>0.0.4-2</code>,  <code>0.0.4-1</code>,  </span></summary>
      

      ``0.0.4-9``,  ``0.0.4-8``,  ``0.0.4-7``,  ``0.0.4-6``,  ``0.0.4-5``,  ``0.0.4-4``,  ``0.0.4-3``,  ``0.0.4-2``,  ``0.0.4-1``,  ``0.0.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-ape: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-phylobase: 
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

      mamba install r-phyext2

   and update with::

      mamba update r-phyext2

  To create a new environment, run::

      mamba create --name myenvname r-phyext2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-phyext2:<tag>

   (see `r-phyext2/tags`_ for valid values for ``<tag>``)


.. |downloads_r-phyext2| image:: https://img.shields.io/conda/dn/bioconda/r-phyext2.svg?style=flat
   :target: https://anaconda.org/bioconda/r-phyext2
   :alt:   (downloads)
.. |docker_r-phyext2| image:: https://quay.io/repository/biocontainers/r-phyext2/status
   :target: https://quay.io/repository/biocontainers/r-phyext2
.. _`r-phyext2/tags`: https://quay.io/repository/biocontainers/r-phyext2?tab=tags


.. raw:: html

    <script>
        var package = "r-phyext2";
        var versions = ["0.0.4","0.0.4","0.0.4","0.0.4","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-phyext2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-phyext2/README.html