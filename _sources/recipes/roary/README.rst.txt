:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'roary'
.. highlight: bash

roary
=====

.. conda:recipe:: roary
   :replaces_section_title:
   :noindex:

   Rapid large\-scale prokaryote pan genome analysis

   :homepage: https://github.com/sanger-pathogens/Roary
   :license: GPL-3.0
   :recipe: /`roary <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/roary>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/roary/meta.yaml>`_
   :links: biotools: :biotools:`roary`, usegalaxy-eu: :usegalaxy-eu:`roary`

   


.. conda:package:: roary

   |downloads_roary| |docker_roary|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.13.0-1</code>,  <code>3.13.0-0</code>,  <code>3.12.0-2</code>,  <code>3.12.0-1</code>,  <code>3.12.0-0</code>,  <code>3.10.2-0</code>,  <code>3.9.1-0</code>,  <code>3.8.2-0</code>,  <code>3.8.0-1</code>,  </span></summary>
      

      ``3.13.0-1``,  ``3.13.0-0``,  ``3.12.0-2``,  ``3.12.0-1``,  ``3.12.0-0``,  ``3.10.2-0``,  ``3.9.1-0``,  ``3.8.2-0``,  ``3.8.0-1``,  ``3.7.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bedtools: 
   :depends blast: 
   :depends cd-hit: 
   :depends fasttree: 
   :depends mafft: 
   :depends mcl: 
   :depends parallel: ``>=20180522``
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-array-utils: 
   :depends perl-bioperl: ``>=1.7.2``
   :depends perl-digest-md5-file: 
   :depends perl-exception-class: 
   :depends perl-file-find-rule: 
   :depends perl-file-grep: 
   :depends perl-file-path: 
   :depends perl-file-slurper: 
   :depends perl-file-temp: 
   :depends perl-file-which: 
   :depends perl-getopt-long: 
   :depends perl-graph: 
   :depends perl-graph-readwrite: 
   :depends perl-log-log4perl: 
   :depends perl-moose: 
   :depends perl-perlio-utf8_strict: 
   :depends perl-text-csv: 
   :depends prank: 
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

      mamba install roary

   and update with::

      mamba update roary

  To create a new environment, run::

      mamba create --name myenvname roary

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/roary:<tag>

   (see `roary/tags`_ for valid values for ``<tag>``)


.. |downloads_roary| image:: https://img.shields.io/conda/dn/bioconda/roary.svg?style=flat
   :target: https://anaconda.org/bioconda/roary
   :alt:   (downloads)
.. |docker_roary| image:: https://quay.io/repository/biocontainers/roary/status
   :target: https://quay.io/repository/biocontainers/roary
.. _`roary/tags`: https://quay.io/repository/biocontainers/roary?tab=tags


.. raw:: html

    <script>
        var package = "roary";
        var versions = ["3.13.0","3.13.0","3.12.0","3.12.0","3.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/roary/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/roary/README.html