:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'taxopy'
.. highlight: bash

taxopy
======

.. conda:recipe:: taxopy
   :replaces_section_title:
   :noindex:

   A Python package for obtaining complete lineages and the lowest common ancestor \(LCA\) from a set of taxonomic identifiers.

   :homepage: https://github.com/apcamargo/taxopy
   :license: GPL / GNU General Public License v3.0
   :recipe: /`taxopy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxopy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxopy/meta.yaml>`_

   


.. conda:package:: taxopy

   |downloads_taxopy| |docker_taxopy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.11.0-0</code>,  <code>0.10.3-0</code>,  <code>0.10.2-0</code>,  <code>0.10.1-0</code>,  <code>0.10.0-0</code>,  <code>0.9.2-0</code>,  <code>0.9.1-0</code>,  <code>0.9.0-0</code>,  <code>0.8.0-0</code>,  </span></summary>
      

      ``0.11.0-0``,  ``0.10.3-0``,  ``0.10.2-0``,  ``0.10.1-0``,  ``0.10.0-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends python: ``>=3.5``
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

      mamba install taxopy

   and update with::

      mamba update taxopy

  To create a new environment, run::

      mamba create --name myenvname taxopy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/taxopy:<tag>

   (see `taxopy/tags`_ for valid values for ``<tag>``)


.. |downloads_taxopy| image:: https://img.shields.io/conda/dn/bioconda/taxopy.svg?style=flat
   :target: https://anaconda.org/bioconda/taxopy
   :alt:   (downloads)
.. |docker_taxopy| image:: https://quay.io/repository/biocontainers/taxopy/status
   :target: https://quay.io/repository/biocontainers/taxopy
.. _`taxopy/tags`: https://quay.io/repository/biocontainers/taxopy?tab=tags


.. raw:: html

    <script>
        var package = "taxopy";
        var versions = ["0.11.0","0.10.3","0.10.2","0.10.1","0.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/taxopy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/taxopy/README.html