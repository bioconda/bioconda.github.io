:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gatk'
.. highlight: bash

gatk
====

.. conda:recipe:: gatk
   :replaces_section_title:
   :noindex:

   The full Genome Analysis Toolkit \(GATK\) framework\, v3

   :homepage: https://www.broadinstitute.org/gatk/
   :license: BSD
   :recipe: /`gatk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gatk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gatk/meta.yaml>`_
   :links: biotools: :biotools:`gatk`

   


.. conda:package:: gatk

   |downloads_gatk| |docker_gatk|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.8-11</code>,  <code>3.8-10</code>,  <code>3.8-9</code>,  <code>3.8-8</code>,  <code>3.8-7</code>,  <code>3.8-5</code>,  <code>3.8-4</code>,  <code>3.8-3</code>,  <code>3.8-2</code>,  </span></summary>
      

      ``3.8-11``,  ``3.8-10``,  ``3.8-9``,  ``3.8-8``,  ``3.8-7``,  ``3.8-5``,  ``3.8-4``,  ``3.8-3``,  ``3.8-2``,  ``3.8-1``,  ``3.8-0``,  ``3.7-1``,  ``3.7-0``,  ``3.6-11``,  ``3.6-10``,  ``3.6-9``,  ``3.6-8``,  ``3.6-7``,  ``3.6-6``,  ``3.6-5``,  ``3.6-4``,  ``3.6-3``,  ``3.6-2``,  ``3.6-1``,  ``3.5-11``,  ``3.5-10``,  ``3.5-6``,  ``3.5-5``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: ``>=8,<9``
   :depends python: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-gsalib: 
   :depends r-reshape: 
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

      mamba install gatk

   and update with::

      mamba update gatk

  To create a new environment, run::

      mamba create --name myenvname gatk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gatk:<tag>

   (see `gatk/tags`_ for valid values for ``<tag>``)


.. |downloads_gatk| image:: https://img.shields.io/conda/dn/bioconda/gatk.svg?style=flat
   :target: https://anaconda.org/bioconda/gatk
   :alt:   (downloads)
.. |docker_gatk| image:: https://quay.io/repository/biocontainers/gatk/status
   :target: https://quay.io/repository/biocontainers/gatk
.. _`gatk/tags`: https://quay.io/repository/biocontainers/gatk?tab=tags


.. raw:: html

    <script>
        var package = "gatk";
        var versions = ["3.8","3.8","3.8","3.8","3.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gatk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gatk/README.html