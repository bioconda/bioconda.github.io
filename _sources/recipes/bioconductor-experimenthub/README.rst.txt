:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-experimenthub'
.. highlight: bash

bioconductor-experimenthub
==========================

.. conda:recipe:: bioconductor-experimenthub
   :replaces_section_title:
   :noindex:

   Client to access ExperimentHub resources

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ExperimentHub.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-experimenthub <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-experimenthub>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-experimenthub/meta.yaml>`_

   This package provides a client for the Bioconductor ExperimentHub web resource. ExperimentHub provides a central location where curated data from experiments\, publications or training courses can be accessed. Each resource has associated metadata\, tags and date of modification. The client creates and manages a local cache of files retrieved enabling quick and reproducible access.


.. conda:package:: bioconductor-experimenthub

   |downloads_bioconductor-experimenthub| |docker_bioconductor-experimenthub|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.10.0-0</code>,  <code>2.8.0-0</code>,  <code>2.6.0-0</code>,  <code>2.2.0-0</code>,  <code>2.0.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends bioconductor-biocfilecache: ``>=2.10.0,<2.11.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biocmanager: 
   :depends r-rappdirs: 
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

      mamba install bioconductor-experimenthub

   and update with::

      mamba update bioconductor-experimenthub

  To create a new environment, run::

      mamba create --name myenvname bioconductor-experimenthub

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-experimenthub:<tag>

   (see `bioconductor-experimenthub/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-experimenthub| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-experimenthub.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-experimenthub
   :alt:   (downloads)
.. |docker_bioconductor-experimenthub| image:: https://quay.io/repository/biocontainers/bioconductor-experimenthub/status
   :target: https://quay.io/repository/biocontainers/bioconductor-experimenthub
.. _`bioconductor-experimenthub/tags`: https://quay.io/repository/biocontainers/bioconductor-experimenthub?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-experimenthub";
        var versions = ["2.10.0","2.8.0","2.6.0","2.2.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-experimenthub/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-experimenthub/README.html