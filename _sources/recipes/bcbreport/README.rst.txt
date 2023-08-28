:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bcbreport'
.. highlight: bash

bcbreport
=========

.. conda:recipe:: bcbreport
   :replaces_section_title:
   :noindex:

   Rmd templates for bcbio\-nextgen analysis

   :homepage: https://github.com/lpantano/bcbio.coverage
   :license: MIT License
   :recipe: /`bcbreport <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbreport>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbreport/meta.yaml>`_

   


.. conda:package:: bcbreport

   |downloads_bcbreport| |docker_bcbreport|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.99.29-2</code>,  <code>0.99.29-1</code>,  <code>0.99.29-0</code>,  <code>0.99.28-0</code>,  <code>0.99.27-0</code>,  <code>0.99.26-0</code>,  <code>0.99.25-0</code>,  <code>0.99.24-0</code>,  <code>0.99.23-1</code>,  </span></summary>
      

      ``0.99.29-2``,  ``0.99.29-1``,  ``0.99.29-0``,  ``0.99.28-0``,  ``0.99.27-0``,  ``0.99.26-0``,  ``0.99.25-0``,  ``0.99.24-0``,  ``0.99.23-1``,  ``0.99.22-1``,  ``0.99.21-1``,  ``0.99.20-1``,  ``0.99.20-0``

      
      .. raw:: html

         </details>
      

   
   :depends python: 
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

      mamba install bcbreport

   and update with::

      mamba update bcbreport

  To create a new environment, run::

      mamba create --name myenvname bcbreport

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bcbreport:<tag>

   (see `bcbreport/tags`_ for valid values for ``<tag>``)


.. |downloads_bcbreport| image:: https://img.shields.io/conda/dn/bioconda/bcbreport.svg?style=flat
   :target: https://anaconda.org/bioconda/bcbreport
   :alt:   (downloads)
.. |docker_bcbreport| image:: https://quay.io/repository/biocontainers/bcbreport/status
   :target: https://quay.io/repository/biocontainers/bcbreport
.. _`bcbreport/tags`: https://quay.io/repository/biocontainers/bcbreport?tab=tags


.. raw:: html

    <script>
        var package = "bcbreport";
        var versions = ["0.99.29","0.99.29","0.99.29","0.99.28","0.99.27"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcbreport/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcbreport/README.html