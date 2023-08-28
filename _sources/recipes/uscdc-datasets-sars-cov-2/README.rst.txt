:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'uscdc-datasets-sars-cov-2'
.. highlight: bash

uscdc-datasets-sars-cov-2
=========================

.. conda:recipe:: uscdc-datasets-sars-cov-2
   :replaces_section_title:
   :noindex:

   Benchmark datasets for WGS analysis of SARS\-CoV\-2

   :homepage: https://github.com/CDCgov/datasets-sars-cov-2
   :license: Apache-2.0
   :recipe: /`uscdc-datasets-sars-cov-2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/uscdc-datasets-sars-cov-2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/uscdc-datasets-sars-cov-2/meta.yaml>`_

   


.. conda:package:: uscdc-datasets-sars-cov-2

   |downloads_uscdc-datasets-sars-cov-2| |docker_uscdc-datasets-sars-cov-2|

   :versions:
      
      

      ``0.7.2-0``,  ``0.7.1-0``,  ``0.7-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.5.3-0``,  ``0.4-0``,  ``0.3-0``

      

   
   :depends coreutils: 
   :depends entrez-direct: 
   :depends make: 
   :depends perl: 
   :depends sra-tools: 
   :depends wget: 
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

      mamba install uscdc-datasets-sars-cov-2

   and update with::

      mamba update uscdc-datasets-sars-cov-2

  To create a new environment, run::

      mamba create --name myenvname uscdc-datasets-sars-cov-2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/uscdc-datasets-sars-cov-2:<tag>

   (see `uscdc-datasets-sars-cov-2/tags`_ for valid values for ``<tag>``)


.. |downloads_uscdc-datasets-sars-cov-2| image:: https://img.shields.io/conda/dn/bioconda/uscdc-datasets-sars-cov-2.svg?style=flat
   :target: https://anaconda.org/bioconda/uscdc-datasets-sars-cov-2
   :alt:   (downloads)
.. |docker_uscdc-datasets-sars-cov-2| image:: https://quay.io/repository/biocontainers/uscdc-datasets-sars-cov-2/status
   :target: https://quay.io/repository/biocontainers/uscdc-datasets-sars-cov-2
.. _`uscdc-datasets-sars-cov-2/tags`: https://quay.io/repository/biocontainers/uscdc-datasets-sars-cov-2?tab=tags


.. raw:: html

    <script>
        var package = "uscdc-datasets-sars-cov-2";
        var versions = ["0.7.2","0.7.1","0.7","0.6.3","0.6.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/uscdc-datasets-sars-cov-2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/uscdc-datasets-sars-cov-2/README.html