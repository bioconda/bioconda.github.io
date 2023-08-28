:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-bcbiobase'
.. highlight: bash

r-bcbiobase
===========

.. conda:recipe:: r-bcbiobase
   :replaces_section_title:
   :noindex:

   Base functions and generics for bcbio R packages.

   :homepage: https://r.acidgenomics.com/packages/bcbiobase/
   :developer docs: https://github.com/hbc/bcbioBase
   :license: GPL / GPL-3.0
   :recipe: /`r-bcbiobase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bcbiobase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bcbiobase/meta.yaml>`_

   


.. conda:package:: r-bcbiobase

   |downloads_r-bcbiobase| |docker_r-bcbiobase|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.2-0</code>,  <code>0.8.1-2</code>,  <code>0.8.1-1</code>,  <code>0.8.1-0</code>,  <code>0.7.0-0</code>,  <code>0.6.22-0</code>,  <code>0.6.21-1</code>,  <code>0.6.21-0</code>,  <code>0.6.16-1</code>,  </span></summary>
      

      ``0.8.2-0``,  ``0.8.1-2``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.7.0-0``,  ``0.6.22-0``,  ``0.6.21-1``,  ``0.6.21-0``,  ``0.6.16-1``,  ``0.6.16-0``,  ``0.6.14-0``,  ``0.6.13-1``,  ``0.6.13-0``,  ``0.6.12-0``,  ``0.6.11-0``,  ``0.6.10-0``,  ``0.4.1-3``,  ``0.4.1-2``,  ``0.4.1-1``,  ``0.4.1-0``,  ``0.2.15-1``,  ``0.2.15-0``,  ``0.2.12-0``,  ``0.2.10-0``,  ``0.2.9-0``,  ``0.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-s4vectors: ``>=0.36.0``
   :depends r-acidbase: ``>=0.6.8``
   :depends r-acidcli: ``>=0.2.5``
   :depends r-acidexperiment: ``>=0.4.4``
   :depends r-acidplyr: ``>=0.3.2``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-goalie: ``>=0.6.6``
   :depends r-pipette: ``>=0.10.1``
   :depends r-stringr: ``>=1.4.1``
   :depends r-syntactic: ``>=0.6.3``
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

      mamba install r-bcbiobase

   and update with::

      mamba update r-bcbiobase

  To create a new environment, run::

      mamba create --name myenvname r-bcbiobase

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-bcbiobase:<tag>

   (see `r-bcbiobase/tags`_ for valid values for ``<tag>``)


.. |downloads_r-bcbiobase| image:: https://img.shields.io/conda/dn/bioconda/r-bcbiobase.svg?style=flat
   :target: https://anaconda.org/bioconda/r-bcbiobase
   :alt:   (downloads)
.. |docker_r-bcbiobase| image:: https://quay.io/repository/biocontainers/r-bcbiobase/status
   :target: https://quay.io/repository/biocontainers/r-bcbiobase
.. _`r-bcbiobase/tags`: https://quay.io/repository/biocontainers/r-bcbiobase?tab=tags


.. raw:: html

    <script>
        var package = "r-bcbiobase";
        var versions = ["0.8.2","0.8.1","0.8.1","0.8.1","0.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-bcbiobase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-bcbiobase/README.html