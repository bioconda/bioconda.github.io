:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'varifier'
.. highlight: bash

varifier
========

.. conda:recipe:: varifier
   :replaces_section_title:
   :noindex:

   varifier\: variant call verification

   :homepage: https://github.com/iqbal-lab-org/varifier
   :license: MIT / MIT
   :recipe: /`varifier <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varifier>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varifier/meta.yaml>`_

   


.. conda:package:: varifier

   |downloads_varifier| |docker_varifier|

   :versions:
      
      

      ``0.4.0-0``,  ``0.3.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends biopython: 
   :depends cluster_vcf_records: ``>=0.13.2``
   :depends mappy: ``>=2.17``
   :depends minimap2: ``>=2.17``
   :depends mummer4: 
   :depends pandas: 
   :depends pyfastaq: ``>=3.14.0``
   :depends pymummer: 
   :depends pysam: 
   :depends python: ``>=3.6``
   :depends seaborn: 
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

      mamba install varifier

   and update with::

      mamba update varifier

  To create a new environment, run::

      mamba create --name myenvname varifier

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/varifier:<tag>

   (see `varifier/tags`_ for valid values for ``<tag>``)


.. |downloads_varifier| image:: https://img.shields.io/conda/dn/bioconda/varifier.svg?style=flat
   :target: https://anaconda.org/bioconda/varifier
   :alt:   (downloads)
.. |docker_varifier| image:: https://quay.io/repository/biocontainers/varifier/status
   :target: https://quay.io/repository/biocontainers/varifier
.. _`varifier/tags`: https://quay.io/repository/biocontainers/varifier?tab=tags


.. raw:: html

    <script>
        var package = "varifier";
        var versions = ["0.4.0","0.3.1","0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/varifier/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/varifier/README.html