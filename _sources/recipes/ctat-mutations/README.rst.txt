:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ctat-mutations'
.. highlight: bash

ctat-mutations
==============

.. conda:recipe:: ctat-mutations
   :replaces_section_title:
   :noindex:

    Mutation detection in RNA\-Seq using GATK\-v4.0 in RNA\-Seq variant calling\, several sources of variant annotation\, and filtering based on CRAVAT.

   :homepage: https://github.com/NCIP/ctat-mutations
   :license: BSD-3-Clause
   :recipe: /`ctat-mutations <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ctat-mutations>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ctat-mutations/meta.yaml>`_

   


.. conda:package:: ctat-mutations

   |downloads_ctat-mutations| |docker_ctat-mutations|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.0-0</code>,  <code>2.0.1-5</code>,  <code>2.0.1-4</code>,  <code>2.0.1-3</code>,  <code>2.0.1-2</code>,  <code>2.0.1-1</code>,  <code>2.0.1-0</code>,  <code>2.0.0-4</code>,  <code>2.0.0-3</code>,  </span></summary>
      

      ``2.1.0-0``,  ``2.0.1-5``,  ``2.0.1-4``,  ``2.0.1-3``,  ``2.0.1-2``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0-4``,  ``2.0.0-3``,  ``2.0.0-0``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcftools: 
   :depends gatk4: 
   :depends openjdk: ``>=8``
   :depends picard: ``2.18.14.*``
   :depends pysam: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends requests: ``2.18.4.*``
   :depends samtools: 
   :depends star: 
   :depends tabix: 
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

      mamba install ctat-mutations

   and update with::

      mamba update ctat-mutations

  To create a new environment, run::

      mamba create --name myenvname ctat-mutations

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ctat-mutations:<tag>

   (see `ctat-mutations/tags`_ for valid values for ``<tag>``)


.. |downloads_ctat-mutations| image:: https://img.shields.io/conda/dn/bioconda/ctat-mutations.svg?style=flat
   :target: https://anaconda.org/bioconda/ctat-mutations
   :alt:   (downloads)
.. |docker_ctat-mutations| image:: https://quay.io/repository/biocontainers/ctat-mutations/status
   :target: https://quay.io/repository/biocontainers/ctat-mutations
.. _`ctat-mutations/tags`: https://quay.io/repository/biocontainers/ctat-mutations?tab=tags


.. raw:: html

    <script>
        var package = "ctat-mutations";
        var versions = ["2.1.0","2.0.1","2.0.1","2.0.1","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ctat-mutations/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ctat-mutations/README.html