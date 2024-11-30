:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lukasa'
.. highlight: bash

lukasa
======

.. conda:recipe:: lukasa
   :replaces_section_title:
   :noindex:

   Fast and accurate mapping of proteins against eukaryotic genomes

   :homepage: https://github.com/pvanheus/lukasa
   :license: GPL / GPL-3.0
   :recipe: /`lukasa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lukasa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lukasa/meta.yaml>`_

   Lukasa combines MetaEUK and spaln to rapidly identify matches between proteins and genomic contigs and
   accurately map the proteins to the identified regions. The output is GFF3\, suitable for use in 
   eukaryotic genome annotation.


.. conda:package:: lukasa

   |downloads_lukasa| |docker_lukasa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.15.0-0</code>,  <code>0.14.2-0</code>,  <code>0.14.1-0</code>,  <code>0.14.0-0</code>,  <code>0.13.2-0</code>,  <code>0.13.1-0</code>,  <code>0.13.0-0</code>,  <code>0.12.0-0</code>,  <code>0.11.0-0</code>,  </span></summary>
      

      ``0.15.0-0``,  ``0.14.2-0``,  ``0.14.1-0``,  ``0.14.0-0``,  ``0.13.2-0``,  ``0.13.1-0``,  ``0.13.0-0``,  ``0.12.0-0``,  ``0.11.0-0``,  ``0.10.0-0``,  ``0.0.8-1``,  ``0.0.8-0``,  ``0.0.7-1``,  ``0.0.7-0``,  ``0.0.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends cwltool: 
   :depends metaeuk: 
   :depends nodejs: 
   :depends python: 
   :depends samtools: 
   :depends spaln: 
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

      mamba install lukasa

   and update with::

      mamba update lukasa

  To create a new environment, run::

      mamba create --name myenvname lukasa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lukasa:<tag>

   (see `lukasa/tags`_ for valid values for ``<tag>``)


.. |downloads_lukasa| image:: https://img.shields.io/conda/dn/bioconda/lukasa.svg?style=flat
   :target: https://anaconda.org/bioconda/lukasa
   :alt:   (downloads)
.. |docker_lukasa| image:: https://quay.io/repository/biocontainers/lukasa/status
   :target: https://quay.io/repository/biocontainers/lukasa
.. _`lukasa/tags`: https://quay.io/repository/biocontainers/lukasa?tab=tags


.. raw:: html

    <script>
        var package = "lukasa";
        var versions = ["0.15.0","0.14.2","0.14.1","0.14.0","0.13.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lukasa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lukasa/README.html