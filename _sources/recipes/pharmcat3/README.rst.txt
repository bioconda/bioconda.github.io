:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pharmcat3'
.. highlight: bash

pharmcat3
=========

.. conda:recipe:: pharmcat3
   :replaces_section_title:
   :noindex:

   Pharmacogenomics Clinical Annotation Tool \(PharmCAT\) CLI\, pipeline\, and preprocessor.

   :homepage: https://github.com/PharmGKB/PharmCAT
   :documentation: https://pharmcat.clinpgx.org/
   
   :license: MOZILLA / MPL-2.0
   :recipe: /`pharmcat3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pharmcat3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pharmcat3/meta.yaml>`_

   


.. conda:package:: pharmcat3

   |downloads_pharmcat3| |docker_pharmcat3|

   :versions:
      
      

      ``3.1.1-0``

      

   
   :depends bcftools: ``>=1.18``
   :depends colorama: 
   :depends htslib: ``>=1.18``
   :depends openjdk: ``>=17``
   :depends packaging: 
   :depends pandas: 
   :depends python: ``>=3.12,<3.13.0a0``
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

      mamba install pharmcat3

   and update with::

      mamba update pharmcat3

  To create a new environment, run::

      mamba create --name myenvname pharmcat3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pharmcat3:<tag>

   (see `pharmcat3/tags`_ for valid values for ``<tag>``)


.. |downloads_pharmcat3| image:: https://img.shields.io/conda/dn/bioconda/pharmcat3.svg?style=flat
   :target: https://anaconda.org/bioconda/pharmcat3
   :alt:   (downloads)
.. |docker_pharmcat3| image:: https://quay.io/repository/biocontainers/pharmcat3/status
   :target: https://quay.io/repository/biocontainers/pharmcat3
.. _`pharmcat3/tags`: https://quay.io/repository/biocontainers/pharmcat3?tab=tags


.. raw:: html

    <script>
        var package = "pharmcat3";
        var versions = ["3.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pharmcat3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pharmcat3/README.html