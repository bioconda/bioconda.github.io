:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'socru'
.. highlight: bash

socru
=====

.. conda:recipe:: socru
   :replaces_section_title:
   :noindex:

   Order and orientation of complete bacterial genomes

   :homepage: https://github.com/quadram-institute-bioscience/socru
   :license: GPLv3
   :recipe: /`socru <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/socru>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/socru/meta.yaml>`_

   


.. conda:package:: socru

   |downloads_socru| |docker_socru|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.4-1</code>,  <code>2.2.4-0</code>,  <code>2.2.3-0</code>,  <code>2.2.2-0</code>,  <code>2.2.1-0</code>,  <code>2.1.7-1</code>,  <code>2.1.7-0</code>,  <code>2.1.6-0</code>,  <code>2.1.4-0</code>,  </span></summary>
      

      ``2.2.4-1``,  ``2.2.4-0``,  ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.1.7-1``,  ``2.1.7-0``,  ``2.1.6-0``,  ``2.1.4-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.0-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.0.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends barrnap: 
   :depends biopython: ``>=1.68,<1.78``
   :depends blast: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends python: ``>=3,<3.9``
   :depends pyyaml: 
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

      mamba install socru

   and update with::

      mamba update socru

  To create a new environment, run::

      mamba create --name myenvname socru

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/socru:<tag>

   (see `socru/tags`_ for valid values for ``<tag>``)


.. |downloads_socru| image:: https://img.shields.io/conda/dn/bioconda/socru.svg?style=flat
   :target: https://anaconda.org/bioconda/socru
   :alt:   (downloads)
.. |docker_socru| image:: https://quay.io/repository/biocontainers/socru/status
   :target: https://quay.io/repository/biocontainers/socru
.. _`socru/tags`: https://quay.io/repository/biocontainers/socru?tab=tags


.. raw:: html

    <script>
        var package = "socru";
        var versions = ["2.2.4","2.2.4","2.2.3","2.2.2","2.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/socru/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/socru/README.html