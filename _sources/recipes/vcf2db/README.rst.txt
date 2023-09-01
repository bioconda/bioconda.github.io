:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcf2db'
.. highlight: bash

vcf2db
======

.. conda:recipe:: vcf2db
   :replaces_section_title:
   :noindex:

   Create a gemini\-compatible database from a VCF

   :homepage: https://github.com/quinlan-lab/vcf2db
   :license: MIT
   :recipe: /`vcf2db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2db/meta.yaml>`_

   


.. conda:package:: vcf2db

   |downloads_vcf2db| |docker_vcf2db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2020.02.24-1</code>,  <code>2020.02.24-0</code>,  <code>2018.10.26-1</code>,  <code>2018.10.26-0</code>,  <code>2018.05.23-2</code>,  <code>2018.05.23-0</code>,  <code>2018.01.23-0</code>,  <code>2017.12.11-0</code>,  <code>2017.11.15-0</code>,  </span></summary>
      

      ``2020.02.24-1``,  ``2020.02.24-0``,  ``2018.10.26-1``,  ``2018.10.26-0``,  ``2018.05.23-2``,  ``2018.05.23-0``,  ``2018.01.23-0``,  ``2017.12.11-0``,  ``2017.11.15-0``,  ``2017.10.11-0``,  ``2017.09.14-0``,  ``2017.04.12-0``,  ``2017.03.01-0``,  ``2017.02.25-0``,  ``2017.02.24-1``,  ``2017.02.24-0``,  ``2017.01.10-0``,  ``2016.12.09-1``,  ``2016.12.09-0``,  ``2016.11.08-0``,  ``2016.04.29-0``

      
      .. raw:: html

         </details>
      

   
   :depends cyvcf2: 
   :depends geneimpacts: ``>0.2.0``
   :depends nomkl: 
   :depends numpy: 
   :depends peddy: ``>=0.2.9``
   :depends python: 
   :depends python-snappy: 
   :depends snappy: 
   :depends sqlalchemy: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install vcf2db

   and update with::

      mamba update vcf2db

  To create a new environment, run::

      mamba create --name myenvname vcf2db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vcf2db:<tag>

   (see `vcf2db/tags`_ for valid values for ``<tag>``)


.. |downloads_vcf2db| image:: https://img.shields.io/conda/dn/bioconda/vcf2db.svg?style=flat
   :target: https://anaconda.org/bioconda/vcf2db
   :alt:   (downloads)
.. |docker_vcf2db| image:: https://quay.io/repository/biocontainers/vcf2db/status
   :target: https://quay.io/repository/biocontainers/vcf2db
.. _`vcf2db/tags`: https://quay.io/repository/biocontainers/vcf2db?tab=tags


.. raw:: html

    <script>
        var package = "vcf2db";
        var versions = ["2020.02.24","2020.02.24","2018.10.26","2018.10.26","2018.05.23"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcf2db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcf2db/README.html