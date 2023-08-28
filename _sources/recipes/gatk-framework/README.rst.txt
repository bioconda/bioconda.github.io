:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gatk-framework'
.. highlight: bash

gatk-framework
==============

.. conda:recipe:: gatk-framework
   :replaces_section_title:
   :noindex:

   The core MIT\-licensed Genome Analysis Toolkit \(GATK\) framework\, free for all uses

   :homepage: https://github.com/chapmanb/gatk
   :license: MIT
   :recipe: /`gatk-framework <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gatk-framework>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gatk-framework/meta.yaml>`_

   


.. conda:package:: gatk-framework

   |downloads_gatk-framework| |docker_gatk-framework|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.6.24-6</code>,  <code>3.6.24-5</code>,  <code>3.6.24-4</code>,  <code>3.6.24-3</code>,  <code>3.6.24-2</code>,  <code>3.6.24-1</code>,  <code>3.6.24-0</code>,  <code>3.5.21-0</code>,  <code>3.4.46-3</code>,  </span></summary>
      

      ``3.6.24-6``,  ``3.6.24-5``,  ``3.6.24-4``,  ``3.6.24-3``,  ``3.6.24-2``,  ``3.6.24-1``,  ``3.6.24-0``,  ``3.5.21-0``,  ``3.4.46-3``,  ``3.4.46-2``,  ``3.4.46-1``,  ``3.4.46-0``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: ``>=8,<9``
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

      mamba install gatk-framework

   and update with::

      mamba update gatk-framework

  To create a new environment, run::

      mamba create --name myenvname gatk-framework

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gatk-framework:<tag>

   (see `gatk-framework/tags`_ for valid values for ``<tag>``)


.. |downloads_gatk-framework| image:: https://img.shields.io/conda/dn/bioconda/gatk-framework.svg?style=flat
   :target: https://anaconda.org/bioconda/gatk-framework
   :alt:   (downloads)
.. |docker_gatk-framework| image:: https://quay.io/repository/biocontainers/gatk-framework/status
   :target: https://quay.io/repository/biocontainers/gatk-framework
.. _`gatk-framework/tags`: https://quay.io/repository/biocontainers/gatk-framework?tab=tags


.. raw:: html

    <script>
        var package = "gatk-framework";
        var versions = ["3.6.24","3.6.24","3.6.24","3.6.24","3.6.24"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gatk-framework/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gatk-framework/README.html