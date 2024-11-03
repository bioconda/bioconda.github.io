:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'taxonkit'
.. highlight: bash

taxonkit
========

.. conda:recipe:: taxonkit
   :replaces_section_title:
   :noindex:

   A Cross\-platform and Efficient NCBI Taxonomy Toolkit

   :homepage: https://github.com/shenwei356/taxonkit
   :license: MIT / MIT
   :recipe: /`taxonkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxonkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxonkit/meta.yaml>`_

   


.. conda:package:: taxonkit

   |downloads_taxonkit| |docker_taxonkit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.18.0-0</code>,  <code>0.17.0-1</code>,  <code>0.17.0-0</code>,  <code>0.16.0-1</code>,  <code>0.16.0-0</code>,  <code>0.15.1-0</code>,  <code>0.15.0-0</code>,  <code>0.14.2-0</code>,  <code>0.14.1-0</code>,  </span></summary>
      

      ``0.18.0-0``,  ``0.17.0-1``,  ``0.17.0-0``,  ``0.16.0-1``,  ``0.16.0-0``,  ``0.15.1-0``,  ``0.15.0-0``,  ``0.14.2-0``,  ``0.14.1-0``,  ``0.14.0-0``,  ``0.13.0-0``,  ``0.12.0-0``,  ``0.11.1-0``,  ``0.11.0-0``,  ``0.10.1-0``,  ``0.10.0-0``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.2-1``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.3.0-1``,  ``0.2.5-1``,  ``0.2.4-1``,  ``0.2.4-0``,  ``0.2.0-0``,  ``0.1.8-0``,  ``0.1.7-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install taxonkit

   and update with::

      mamba update taxonkit

  To create a new environment, run::

      mamba create --name myenvname taxonkit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/taxonkit:<tag>

   (see `taxonkit/tags`_ for valid values for ``<tag>``)


.. |downloads_taxonkit| image:: https://img.shields.io/conda/dn/bioconda/taxonkit.svg?style=flat
   :target: https://anaconda.org/bioconda/taxonkit
   :alt:   (downloads)
.. |docker_taxonkit| image:: https://quay.io/repository/biocontainers/taxonkit/status
   :target: https://quay.io/repository/biocontainers/taxonkit
.. _`taxonkit/tags`: https://quay.io/repository/biocontainers/taxonkit?tab=tags


.. raw:: html

    <script>
        var package = "taxonkit";
        var versions = ["0.18.0","0.17.0","0.17.0","0.16.0","0.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/taxonkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/taxonkit/README.html