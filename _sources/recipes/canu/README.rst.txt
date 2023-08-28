:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'canu'
.. highlight: bash

canu
====

.. conda:recipe:: canu
   :replaces_section_title:
   :noindex:

   Canu is a fork of the Celera Assembler designed for high\-noise single\-molecule sequencing.

   :homepage: http://canu.readthedocs.org/
   :developer docs: https://github.com/marbl/canu
   :license: GPL / GPLv2 and others
   :recipe: /`canu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/canu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/canu/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`canu`

   


.. conda:package:: canu

   |downloads_canu| |docker_canu|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2-0</code>,  <code>2.1.1-2</code>,  <code>2.1.1-1</code>,  <code>2.1.1-0</code>,  <code>2.0-0</code>,  <code>1.9-1</code>,  <code>1.9-0</code>,  <code>1.8-2</code>,  <code>1.8-1</code>,  </span></summary>
      

      ``2.2-0``,  ``2.1.1-2``,  ``2.1.1-1``,  ``2.1.1-0``,  ``2.0-0``,  ``1.9-1``,  ``1.9-0``,  ``1.8-2``,  ``1.8-1``,  ``1.8-0``,  ``1.7.1-0``,  ``1.7-0``,  ``1.6-1``,  ``1.5-1``,  ``1.5-0``,  ``1.4-2``,  ``1.4-1``,  ``1.4-0``,  ``1.3-0``,  ``1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends gnuplot: ``>=5.2``
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends minimap2: 
   :depends openjdk: ``>=8``
   :depends perl: 
   :depends perl-filesys-df: 
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

      mamba install canu

   and update with::

      mamba update canu

  To create a new environment, run::

      mamba create --name myenvname canu

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/canu:<tag>

   (see `canu/tags`_ for valid values for ``<tag>``)


.. |downloads_canu| image:: https://img.shields.io/conda/dn/bioconda/canu.svg?style=flat
   :target: https://anaconda.org/bioconda/canu
   :alt:   (downloads)
.. |docker_canu| image:: https://quay.io/repository/biocontainers/canu/status
   :target: https://quay.io/repository/biocontainers/canu
.. _`canu/tags`: https://quay.io/repository/biocontainers/canu?tab=tags


.. raw:: html

    <script>
        var package = "canu";
        var versions = ["2.2","2.1.1","2.1.1","2.1.1","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/canu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/canu/README.html