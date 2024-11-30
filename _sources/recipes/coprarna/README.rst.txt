:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coprarna'
.. highlight: bash

coprarna
========

.. conda:recipe:: coprarna
   :replaces_section_title:
   :noindex:

   Target prediction for prokaryotic trans\-acting small RNAs

   :homepage: https://github.com/PatrickRWright/CopraRNA
   :license: MIT
   :recipe: /`coprarna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coprarna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coprarna/meta.yaml>`_

   


.. conda:package:: coprarna

   |downloads_coprarna| |docker_coprarna|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.4-0</code>,  <code>2.1.3-9</code>,  <code>2.1.3-8</code>,  <code>2.1.3-7</code>,  <code>2.1.3-6</code>,  <code>2.1.3-5</code>,  <code>2.1.3-4</code>,  <code>2.1.3-3</code>,  <code>2.1.3-2</code>,  </span></summary>
      

      ``2.1.4-0``,  ``2.1.3-9``,  ``2.1.3-8``,  ``2.1.3-7``,  ``2.1.3-6``,  ``2.1.3-5``,  ``2.1.3-4``,  ``2.1.3-3``,  ``2.1.3-2``,  ``2.1.3-1``,  ``2.1.3-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends blast-legacy: 
   :depends bzip2: 
   :depends clustalo: 
   :depends coreutils: 
   :depends domclust: 
   :depends embassy-phylip: 
   :depends emboss: 
   :depends gawk: 
   :depends grep: 
   :depends intarna: ``>2.2,<3``
   :depends mafft: 
   :depends perl: ``<6``
   :depends perl-bio-eutilities: 
   :depends perl-bioperl: 
   :depends perl-getopt-long: 
   :depends perl-list-moreutils: 
   :depends perl-parallel-forkmanager: 
   :depends phantomjs: 
   :depends python: 
   :depends r-base: ``<4``
   :depends r-pheatmap: 
   :depends r-robustrankaggreg: 
   :depends r-seqinr: 
   :depends sed: 
   :depends suds-jurko: 
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

      mamba install coprarna

   and update with::

      mamba update coprarna

  To create a new environment, run::

      mamba create --name myenvname coprarna

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/coprarna:<tag>

   (see `coprarna/tags`_ for valid values for ``<tag>``)


.. |downloads_coprarna| image:: https://img.shields.io/conda/dn/bioconda/coprarna.svg?style=flat
   :target: https://anaconda.org/bioconda/coprarna
   :alt:   (downloads)
.. |docker_coprarna| image:: https://quay.io/repository/biocontainers/coprarna/status
   :target: https://quay.io/repository/biocontainers/coprarna
.. _`coprarna/tags`: https://quay.io/repository/biocontainers/coprarna?tab=tags


.. raw:: html

    <script>
        var package = "coprarna";
        var versions = ["2.1.4","2.1.3","2.1.3","2.1.3","2.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coprarna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coprarna/README.html