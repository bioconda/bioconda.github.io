:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'apollo'
.. highlight: bash

apollo
======

.. conda:recipe:: apollo
   :replaces_section_title:
   :noindex:

   WebApollo API library

   :homepage: https://github.com/galaxy-genome-annotation/python-apollo
   :license: MIT / MIT
   :recipe: /`apollo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/apollo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/apollo/meta.yaml>`_

   


.. conda:package:: apollo

   |downloads_apollo| |docker_apollo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.2.13-0</code>,  <code>4.2.12-0</code>,  <code>4.2.11-0</code>,  <code>4.2.10-0</code>,  <code>4.2.9-0</code>,  <code>4.2.8-0</code>,  <code>4.2.7-0</code>,  <code>4.2.5-0</code>,  <code>4.2.4-1</code>,  </span></summary>
      

      ``4.2.13-0``,  ``4.2.12-0``,  ``4.2.11-0``,  ``4.2.10-0``,  ``4.2.9-0``,  ``4.2.8-0``,  ``4.2.7-0``,  ``4.2.5-0``,  ``4.2.4-1``,  ``4.2.4-0``,  ``4.2.3-0``,  ``4.2.2-0``,  ``4.2.1-0``,  ``4.2-0``,  ``4.1-0``,  ``4.0.1-0``,  ``3.1-0``,  ``3.0.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcbio-gff: 
   :depends biopython: 
   :depends cachetools: 
   :depends click: ``>=6.7``
   :depends decorator: 
   :depends python: 
   :depends pyyaml: 
   :depends requests: 
   :depends wrapt: 
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

      mamba install apollo

   and update with::

      mamba update apollo

  To create a new environment, run::

      mamba create --name myenvname apollo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/apollo:<tag>

   (see `apollo/tags`_ for valid values for ``<tag>``)


.. |downloads_apollo| image:: https://img.shields.io/conda/dn/bioconda/apollo.svg?style=flat
   :target: https://anaconda.org/bioconda/apollo
   :alt:   (downloads)
.. |docker_apollo| image:: https://quay.io/repository/biocontainers/apollo/status
   :target: https://quay.io/repository/biocontainers/apollo
.. _`apollo/tags`: https://quay.io/repository/biocontainers/apollo?tab=tags


.. raw:: html

    <script>
        var package = "apollo";
        var versions = ["4.2.13","4.2.12","4.2.11","4.2.10","4.2.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/apollo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/apollo/README.html