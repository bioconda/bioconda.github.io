:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'annotsv'
.. highlight: bash

annotsv
=======

.. conda:recipe:: annotsv
   :replaces_section_title:
   :noindex:

   Annotation and Ranking of Structural Variation.

   :homepage: https://github.com/lgmgeo/AnnotSV
   :documentation: https://github.com/lgmgeo/AnnotSV/blob/master/README.AnnotSV_3.5.2.pdf
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`annotsv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/annotsv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/annotsv/meta.yaml>`_

   


.. conda:package:: annotsv

   |downloads_annotsv| |docker_annotsv|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.5.2-0</code>,  <code>3.5.1-0</code>,  <code>3.5-0</code>,  <code>3.4.6-0</code>,  <code>3.4.4-0</code>,  <code>3.4.3-0</code>,  <code>3.4.2-0</code>,  <code>3.4.1-1</code>,  <code>3.4.1-0</code>,  </span></summary>
      

      ``3.5.2-0``,  ``3.5.1-0``,  ``3.5-0``,  ``3.4.6-0``,  ``3.4.4-0``,  ``3.4.3-0``,  ``3.4.2-0``,  ``3.4.1-1``,  ``3.4.1-0``,  ``3.4-1``,  ``3.4-0``,  ``3.3.9-0``,  ``3.3.8-0``,  ``3.3.7-0``,  ``3.3.6-0``,  ``3.3.5-0``,  ``3.3.4-1``,  ``3.3.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends appdirs: 
   :depends bash: 
   :depends bcftools: ``>=1.10``
   :depends bedtools: ``>=2.25``
   :depends coreutils: 
   :depends curl: 
   :depends git: 
   :depends make: 
   :depends natsort: ``>=7.1.1``
   :depends openjdk: ``>=8``
   :depends pandas: ``>=1.5.2``
   :depends polars: ``>=0.16.5``
   :depends pyfaidx: ``>=0.7.1``
   :depends python: ``>=3.13,<3.14.0a0``
   :depends tk: ``>=8.5``
   :depends tqdm: ``>=4.64.1``
   :depends unzip: 
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

      mamba install annotsv

   and update with::

      mamba update annotsv

  To create a new environment, run::

      mamba create --name myenvname annotsv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/annotsv:<tag>

   (see `annotsv/tags`_ for valid values for ``<tag>``)


.. |downloads_annotsv| image:: https://img.shields.io/conda/dn/bioconda/annotsv.svg?style=flat
   :target: https://anaconda.org/bioconda/annotsv
   :alt:   (downloads)
.. |docker_annotsv| image:: https://quay.io/repository/biocontainers/annotsv/status
   :target: https://quay.io/repository/biocontainers/annotsv
.. _`annotsv/tags`: https://quay.io/repository/biocontainers/annotsv?tab=tags


.. raw:: html

    <script>
        var package = "annotsv";
        var versions = ["3.5.2","3.5.1","3.5","3.4.6","3.4.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/annotsv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/annotsv/README.html