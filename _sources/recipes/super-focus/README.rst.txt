:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'super-focus'
.. highlight: bash

super-focus
===========

.. conda:recipe:: super-focus
   :replaces_section_title:
   :noindex:

   SUPER\-FOCUS\: A tool for agile functional analysis of shotgun metagenomic data

   :homepage: https://edwards.sdsu.edu/SUPERFOCUS
   :developer docs: https://github.com/metageni/SUPER-FOCUS
   :license: GPL / GPL-3.0
   :recipe: /`super-focus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/super-focus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/super-focus/meta.yaml>`_

   


.. conda:package:: super-focus

   |downloads_super-focus| |docker_super-focus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6-1</code>,  <code>1.6-0</code>,  <code>1.5-0</code>,  <code>1.4.1-0</code>,  <code>1.4-0</code>,  <code>1.0-0</code>,  <code>0.35-0</code>,  <code>0.34-1</code>,  <code>0.34-0</code>,  </span></summary>
      

      ``1.6-1``,  ``1.6-0``,  ``1.5-0``,  ``1.4.1-0``,  ``1.4-0``,  ``1.0-0``,  ``0.35-0``,  ``0.34-1``,  ``0.34-0``,  ``0.33-0``,  ``0.32-1``,  ``0.32-0``,  ``0.31-0``,  ``0.30-0``,  ``0.29-0``

      
      .. raw:: html

         </details>
      

   
   :depends blast: 
   :depends diamond: 
   :depends kmer-jellyfish: 
   :depends mmseqs2: 
   :depends numpy: ``>=1.12.1``
   :depends python: ``>=3``
   :depends rapsearch: 
   :depends scipy: 
   :depends setuptools: 
   :depends setuptools_scm: 
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

      mamba install super-focus

   and update with::

      mamba update super-focus

  To create a new environment, run::

      mamba create --name myenvname super-focus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/super-focus:<tag>

   (see `super-focus/tags`_ for valid values for ``<tag>``)


.. |downloads_super-focus| image:: https://img.shields.io/conda/dn/bioconda/super-focus.svg?style=flat
   :target: https://anaconda.org/bioconda/super-focus
   :alt:   (downloads)
.. |docker_super-focus| image:: https://quay.io/repository/biocontainers/super-focus/status
   :target: https://quay.io/repository/biocontainers/super-focus
.. _`super-focus/tags`: https://quay.io/repository/biocontainers/super-focus?tab=tags


.. raw:: html

    <script>
        var package = "super-focus";
        var versions = ["1.6","1.6","1.5","1.4.1","1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/super-focus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/super-focus/README.html