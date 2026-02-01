:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'edentity'
.. highlight: bash

edentity
========

.. conda:recipe:: edentity
   :replaces_section_title:
   :noindex:

   eDentity metabarcoding pipeline

   :homepage: https://pypi.org/project/edentity/
   :license: APACHE / Apache-2.0
   :recipe: /`edentity <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/edentity>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/edentity/meta.yaml>`_

   


.. conda:package:: edentity

   |downloads_edentity| |docker_edentity|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.4-0</code>,  <code>1.5.3-0</code>,  <code>1.5.2-0</code>,  <code>1.5.1-0</code>,  <code>1.5.0-0</code>,  <code>1.4.9-0</code>,  <code>1.4.8-0</code>,  <code>1.4.7-0</code>,  <code>1.4.6-0</code>,  </span></summary>
      

      ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.9-0``,  ``1.4.8-0``,  ``1.4.7-0``,  ``1.4.6-0``,  ``1.4.5-0``,  ``1.4.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``1.84.*``
   :depends cutadapt: ``4.9.*``
   :depends fastp: ``0.24.0.*``
   :depends multiqc: ``1.27.1.*``
   :depends pip: 
   :depends python: 
   :depends snakemake: 
   :depends vsearch: ``2.28.1.*``
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

      mamba install edentity

   and update with::

      mamba update edentity

  To create a new environment, run::

      mamba create --name myenvname edentity

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/edentity:<tag>

   (see `edentity/tags`_ for valid values for ``<tag>``)


.. |downloads_edentity| image:: https://img.shields.io/conda/dn/bioconda/edentity.svg?style=flat
   :target: https://anaconda.org/bioconda/edentity
   :alt:   (downloads)
.. |docker_edentity| image:: https://quay.io/repository/biocontainers/edentity/status
   :target: https://quay.io/repository/biocontainers/edentity
.. _`edentity/tags`: https://quay.io/repository/biocontainers/edentity?tab=tags


.. raw:: html

    <script>
        var package = "edentity";
        var versions = ["1.5.4","1.5.3","1.5.2","1.5.1","1.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/edentity/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/edentity/README.html