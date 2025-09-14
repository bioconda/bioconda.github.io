:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'meteor'
.. highlight: bash

meteor
======

.. conda:recipe:: meteor
   :replaces_section_title:
   :noindex:

   Meteor is a plateform for quantitative metagenomics profiling of complex ecosystems.

   :homepage: https://github.com/metagenopolis/meteor
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`meteor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meteor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meteor/meta.yaml>`_

   Meteor relies on genes catalogue to perform specie level taxonomic assignments\, functional and strain diffusion analysis.



.. conda:package:: meteor

   |downloads_meteor| |docker_meteor|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.20-0</code>,  <code>2.0.19-0</code>,  <code>2.0.18-0</code>,  <code>2.0.17-0</code>,  <code>2.0.16-0</code>,  <code>2.0.14-2</code>,  <code>2.0.14-1</code>,  <code>2.0.14-0</code>,  <code>2.0.13-0</code>,  </span></summary>
      

      ``2.0.20-0``,  ``2.0.19-0``,  ``2.0.18-0``,  ``2.0.17-0``,  ``2.0.16-0``,  ``2.0.14-2``,  ``2.0.14-1``,  ``2.0.14-0``,  ``2.0.13-0``,  ``2.0.11-0``,  ``2.0.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends biom-format: 
   :depends bowtie2: ``>=2.3.5``
   :depends cogent3: 
   :depends ete3: 
   :depends freebayes: ``>=1.3.6``
   :depends packaging: 
   :depends pandas: 
   :depends py-bgzip: 
   :depends pyarrow: 
   :depends pysam: 
   :depends python: ``>=3.10,<3.13``
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

      mamba install meteor

   and update with::

      mamba update meteor

  To create a new environment, run::

      mamba create --name myenvname meteor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/meteor:<tag>

   (see `meteor/tags`_ for valid values for ``<tag>``)


.. |downloads_meteor| image:: https://img.shields.io/conda/dn/bioconda/meteor.svg?style=flat
   :target: https://anaconda.org/bioconda/meteor
   :alt:   (downloads)
.. |docker_meteor| image:: https://quay.io/repository/biocontainers/meteor/status
   :target: https://quay.io/repository/biocontainers/meteor
.. _`meteor/tags`: https://quay.io/repository/biocontainers/meteor?tab=tags


.. raw:: html

    <script>
        var package = "meteor";
        var versions = ["2.0.20","2.0.19","2.0.18","2.0.17","2.0.16"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/meteor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/meteor/README.html